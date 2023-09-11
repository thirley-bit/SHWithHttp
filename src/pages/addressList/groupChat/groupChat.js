import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";

import { connect } from "react-redux";
import {
  AtTabsPane,
  AtSearchBar,
  AtCheckbox,
  AtAvatar,
  AtModal,
  AtModalContent,
  AtModalAction,
  AtIcon,
  AtMessage,
} from "taro-ui";
import { View, Button, ScrollView, Input } from "@tarojs/components";
import GradientButton from "@app/component/GradientButton";
import NavTab from "@app/component/NavTab/NavTab";
import MyTabs from "@app/component/MyTabs/MyTabs";
import PersonList from "@app/component/PersonList/PersonList";
import Modal from "@app/component/Modal";
import normal from "@static/normal.png";
import api from "@/api/api";
import "./groupChat.scss";

function GroupChat(props) {
  const { dispatch, pageSize } = props;
  const scrollTop = 0;
  const Threshold = 20;
  const [current, setCurrent] = useState(0);
  const [searchValue, setSearchValue] = useState(""); //搜索朋友页面的人员
  const [searchGroupValue, setSearGroupValue] = useState(""); //搜索群组页面的标签
  const [checkOption, setCheckOption] = useState([
    { label: "全选", value: "全选", checked: false },
  ]); //全选选项
  const [showData, setShowData] = useState([]); //用于展示朋友页面的数据列表
  const [groupList, setGroupList] = useState([]);
  const [groupChecked, setGroupChecked] = useState([]); //用于展示群组页面的数据列表
  const [checkedList, setCheckedList] = useState([]); //朋友页面选中内容
  const [checkedAll, setCheckedAll] = useState([]); //朋友页面全选
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedEdit, setIsOpenedEdit] = useState(false);
  const [newGroupName, setNewGroupName] = useState(""); //朋友页面添加标签名
  const [groupEdit, setGroupEdit] = useState(false); //群组页面修改true:修改状态，false:未修改状态
  const [groupId, setGroupId] = useState(""); //修改的群聊id
  const [groupName, setGroupName] = useState(""); //修改的群聊名称
  const tabList = [
    {
      title: "新建群聊",
    },
    {
      title: "群聊",
    },
  ];
  const scrollHeight = {
    height: "63vh",
  };
  useEffect(() => {
    studentsData();
    groupData;
    clearAllCheckedData();
  }, []);
  //学生列表数据
  const studentsData = (val) => {
    console.log(111)
    dispatch({
      type: "users/getStudentList",
      payload: {
        page: 1,
        pageSize: pageSize,
        searchKey: val,
      },
    }).then((res) => {
      if (res.status == 200) {
        let newData = res.data.map((item) => {
          let value = item.id;
          let label = (
            <View className='label-avatar'>
              <AtAvatar
                size='small'
                circle
                className='avatar-img'
                image={item.avatar ? item.avatar : normal}
              />
              <View className='label-text'>{item.studentName}</View>
            </View>
          );
          return {
            value,
            label,
          };
        });
        //用于数据列表展示
        setShowData(newData);
      }
    });
  };
  //群聊列表数据
  const groupData = (val) => {
    dispatch({
      type: "AddressList/getGroupList",
      payload: {
        page: 1,
        pageSize: pageSize,
        searchKey: val,
      },
    }).then((res) => {
      setGroupList(res.data);
    });
  };

  const clearAllCheckedData = () => {
    setCheckedList([]);
    setCheckedAll([]);
    setCheckOption([{ label: "全选", value: "全选", checked: false }]);
  };

  const handleNav = (e) => {
    Taro.navigateTo({
      url: "/pages/addressList/message/MessageDetail/MessageDetail",
    });
  };
  //切换tab页，current为0时为朋友页面，current为1时为群组页面,切换时数据全部清空
  const handleChange = (e) => {
    setCurrent(e);
    if (e == 0) {
      studentsData();
    } else {
      groupData();
      setGroupEdit(false)
    }
    //清空全选内容
    clearAllCheckedData();
    setSearchValue("");
    setSearGroupValue("")
  };

  //输入搜索内容
  const handleSearch = (value) => {
    //current为0时(新建群聊）， 显示为朋友页面
    if (current === 0) {
      //显示搜索内容
      setSearchValue(value);
      //显示搜索数据,e为搜索的关键字
      studentsData(value);
      //清空搜索内容
      clearAllCheckedData();
    } else {
      //current为1时， 显示为群组页面
      setSearGroupValue(value);
      if (groupEdit) {
        //如果是群聊修改状态，则显示搜索学生列表
        studentsData(value)
      }
      //显示搜索群聊列表
      groupData(value);
      //清空搜索内容
    }
  };

  //清空搜索内容
  const handleClear = () => {
    //显示原始数据
    studentsData();
    groupData();
    //清空搜索框内容
    setSearchValue("");
    setSearGroupValue("");
  };

  //选中的人员或标签，current为0时选中人员，current为1时选中标签
  const handleSelect = (value) => {
    //当current为0时，显示为朋友页面
    if (current === 0) {
      setCheckedList(value);
    } else {
      //编辑群组时显示的人员列表数据
      if (groupEdit) {
        setCheckedList(value);
      }
    }
  };

  //全选
  const handleSelectAll = (value) => {
    //当current为0时，显示为朋友页面
    if (current === 0) {
      if (value.length > 0) {
        //全选
        let newCheckedAll = showData.map((item) => item.value);
        setCheckedList(newCheckedAll);
        setCheckedAll(value);
      } else {
        //全不选
        setCheckedList([]);
        setCheckedAll([]);
      }
    } else {
      //编辑群组人员
      if (groupEdit) {
        if (value.length > 0) {
          //全选
          let newCheckedAll = showData.map((item) => item.value);
          setCheckedList(newCheckedAll);
          setCheckedAll(value);
        } else {
          //全不选
          setCheckedList(groupChecked);
          setCheckedAll([]);
        }
      }
    }
  };

  //关闭一级弹窗
  const handleClose = () => {
    setIsOpened(false);
  };
  const handleCancel = () => {
    setIsOpened(false);
  };
  const handleConfirm = () => {
    setIsOpened(false);
    setIsOpenedEdit(true);
  };
  //二级弹窗输入新建群聊名称
  const handleInput = (e) => {
    setNewGroupName(e.detail.value);
  };
  //关闭二级弹窗
  const handleCloseEdit = () => {
    setIsOpenedEdit(false);
  };

  //输入标签的modal框,新建群聊接口
  const handleConfirmEdit = () => {
    dispatch({
      type:'AddressList/getInsertGroup',
      payload:{
        groupName:newGroupName,
        studentIdList:checkedList
      }
    }).then(res => {
      if(res.status == 200){
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        setCheckedList([])
        setIsOpenedEdit(false);
      }else{
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    })
    //labelName传递给后端完成标签名字的修改
  };

  //编辑群聊
  const handleEdit = (val) => {
    console.log(val,'val')
    //搜索群聊内容清空
    setSearGroupValue("");
    //修改的群聊id
    setGroupId(val.id)
    //显示群聊名称
    setGroupName(val.groupName);
    //群聊是否为修改状态
    setGroupEdit(true);
    //获取群聊中存在的学生
    let haveChecked = val.studentList.map((item) => item.id);
    setGroupChecked(haveChecked)
    setCheckedList(haveChecked);
    //如果群聊中的学生存在，全部学生列表显示已选且不可操作
    let newShowData = showData.map((d) => ({
      ...d,
      disabled: haveChecked.includes(d.value),
    }));
    setShowData(newShowData);
  };

  //编辑群聊名称
  const handleNameInput = (e) => {
    setGroupName(e.detail.value);
  };
  
  //点击提交按钮
  const handleSend = () => {
    if (current == 0) {
      setIsOpened(true);
    } else {
      console.log(groupName,'name')
      console.log(checkedList,'list')
      dispatch({
        type:'AddressList/getUpdateGroup',
        payload:{
          id:groupId,
          groupName:groupName,
          studentIdList:checkedList
        }
      }).then(res => {
        if(res.status == 200){
          Taro.atMessage({
            message: res.message,
            type: "success",
          });
          groupData()
          setGroupEdit(false);
        }else{
          Taro.atMessage({
            message: res.message,
            type: "error",
          });
        }
      })
    }
  };
  

  return (
    <View className='index'>
      <NavTab back title='群聊' />
      <View className='group-content'></View>
      <MyTabs current={current} tabList={tabList} onClick={handleChange}>
        {/* 新建群聊 */}
        <AtTabsPane current={current} index={0}>
          <View className='group-list'>
            {/* 新建群聊——人员搜索 */}
            <View className='search'>
              <AtSearchBar
                value={searchValue}
                onChange={handleSearch}
                onClear={handleClear}
              />
            </View>

            <View className='person'>
              <ScrollView
                className='scroll-view'
                scrollY
                scrollWithAnimation
                style={scrollHeight}
                scrollTop={scrollTop}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
              >
                {/* 新建群聊——全选按钮 */}
                <AtCheckbox
                  options={checkOption}
                  selectedList={checkedAll}
                  onChange={handleSelectAll}
                />
                {/* 新建群聊——人员列表 */}
                <AtCheckbox
                  options={showData}
                  selectedList={checkedList}
                  onChange={handleSelect}
                />
              </ScrollView>
            </View>
            <View>
              {/* modal框，是否保存为群聊 */}
              <Modal
                isOpened={isOpened}
                cancelText='忽略'
                confirmText='存为标签'
                onClose={handleClose}
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                content='存为标签，方便下次直接使用'
              />
              <AtModal
                className='edit-modal'
                isOpened={isOpenedEdit}
                closeOnClickOverlay={false}
              >
                <AtModalContent className='modal-edit'>
                  标签名字：
                  <Input
                    className='modal-input'
                    maxlength={14}
                    onInput={handleInput}
                  />
                </AtModalContent>
                <AtModalAction>
                  <Button onClick={() => handleCloseEdit()}>取消</Button>
                  <Button onClick={() => handleConfirmEdit()}>确认</Button>
                </AtModalAction>
              </AtModal>
            </View>
          </View>
        </AtTabsPane>
        {/* 群聊 */}
        <AtTabsPane current={current} index={1}>
          <View className='group-list'>
            {/* 群聊——搜索 */}
            {groupEdit && (
              //点击修改按钮时显示标签输入框
              <View className='label-edit'>
                <Input
                  className='label-input'
                  type='text'
                  value={groupName}
                  onInput={handleNameInput}
                />
              </View>
            )}
            <View className='search'>
              <AtSearchBar
                value={searchGroupValue}
                onChange={handleSearch}
                onClear={handleClear}
              />
            </View>
            <View className='person'>
              <ScrollView
                className='scroll-view'
                scrollY
                scrollWithAnimation
                style={scrollHeight}
                scrollTop={scrollTop}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
              >
                {groupEdit ? (
                  <View>
                    {/* 新建群聊——全选按钮 */}
                    <AtCheckbox
                      options={checkOption}
                      selectedList={checkedAll}
                      onChange={handleSelectAll}
                    />
                    {/* 新建群聊——人员列表 */}
                    <AtCheckbox
                      options={showData}
                      selectedList={checkedList}
                      onChange={handleSelect}
                    />
                  </View>
                ) : (
                  <PersonList
                    enter='group'
                    showData={groupList}
                    onClick={handleEdit}
                  />
                )}
              </ScrollView>
            </View>
          </View>
        </AtTabsPane>
      </MyTabs>
      <GradientButton
        disabled={
          checkedList.length > 0  ? false : true
        }
        type='primary'
        className='send-button'
        onClick={() => handleSend()}
      >
        提交
      </GradientButton>
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  pageSize: state.users.pageSize,
  studentsList: state.HomeWork.studentsList,
  groupList: state.AddressList.groupList,
}))(GroupChat);
