import { View, Button, Picker } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {
  AtForm,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtInput,
  AtMessage,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import Divider from "@app/component/Divider/Divider";
import SearchBar from "@app/component/SearchBar/SearchBar";
import "./AddClass.scss";

function AddClass(props) {
  const { dispatch, classList } = props;
  const [showClassData, setShowClassData] = useState([]); //班级列表
  const [isOpened, setIsOpened] = useState(false); //加入班级弹窗
  const [classId, setClassId] = useState(""); //选择的班级号
  const [searchValue, setSearchValue] = useState(""); //搜索朋友页面的人员
  const [selectorChecked, setSelectorChecked] = useState(""); //选择的亲属关系
  const selector = ["爸爸", "妈妈", "爷爷", "奶奶", "外公", "外婆"];
  const handleClassChange = (e) => {
    // 选中的序列号
    let index = e.detail.value;
    setSelectorChecked(selector[index]);
  };
  const title = [
    {
      title: "学生学号:",
      type: "text",
      name: "studentNo",
      placeholder: "请输入学号",
    },
    {
      title: "学生姓名:",
      type: "text",
      name: "studentName",
      placeholder: "请输入姓名",
    },
  ];

  useEffect(() => {
    dispatch({
      type: "users/getClassAll",
    });
  }, []);
  useEffect(() => {
    if (classList) {
      setShowClassData(classList);
    }
  }, [classList]);

  //输入搜索内容
  const handleChangeValue = (val) => {
    setSearchValue(val);
    if (val) {
      let data = classList.filter((item) => item.className == searchValue);
      setShowClassData(data);
    } else {
      setShowClassData(classList);
    }
  };

  //清空搜索内容
  const handleClear = () => {
    setSearchValue("");
    setShowClassData(classList);
  };
  // 加入班级弹窗按钮
  const handleEnter = (e) => {
    setIsOpened(true);
    setClassId(e.id);
  };
  // 输入框
  const handleChange = (value, record) => {
    record.value = value;
  };
  const onSubmit = (evt) => {
    //亲属关系的值由索引赋为具体值
    evt[0].detail.value.relative = selectorChecked;
    let userObj = Object.assign({ classId: classId }, evt[0].detail.value);
    // 校验所有输入不为空
    if (
      userObj.relative == "" ||
      userObj.studentNo == "" ||
      userObj.studentName == ""
    ) {
      Taro.showToast({
        title: "输入不能为空",
        icon: "error",
      });
    } else {
      dispatch({
        type: "Class/getJoinClass",
        payload: userObj,
      }).then((res) => {
        if (res.status == 200) {
          //关闭弹窗
          setIsOpened(false);
          //消息提示
          Taro.atMessage({
            message: "添加成功，待审核...",
            type: "success",
          });
        } else {
          Taro.atMessage({
            message: res.message,
            type: "error",
          });
        }
      });
    }
  };
  const handleClose = () => {
    setIsOpened(false);
    // 清空所选亲属关系
    setSelectorChecked("");
  };

  return (
    <View className='index'>
      <NavTab back title='加入新班级' />
      <View className='new-class'>
        {/* 搜索框 */}
        <SearchBar
          value={searchValue}
          onChange={handleChangeValue}
          onClear={handleClear}
        />
        {/* 班级列表 */}
        {showClassData.length > 0 ? (
          <View className='team'>
            {showClassData.map((item) => {
              return (
                <View key={item.id}>
                  <View className='class'>
                    <View className='left'>
                      <View className='content'>
                        <View className='name'>{item.className}</View>
                        <View className='grade'>
                          <View>
                            {item.grade}级{item.classNum}班
                          </View>
                        </View>
                      </View>
                    </View>
                    {/* 加入班级弹窗按钮 */}
                    <View className='button'>
                      <GradientButton
                        size='small'
                        type='primary'
                        onClick={() => handleEnter(item)}
                      >
                        加入
                      </GradientButton>
                    </View>
                  </View>
                  <Divider className='divider' />
                </View>
              );
            })}
          </View>
        ) : (
          <View style={{ margin: "50% 40%" }}>暂无数据</View>
        )}
      </View>
      {/* 加入班级弹窗 */}
      <AtModal
        className='edit-modal'
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
        <AtForm name='modal-name' onSubmit={onSubmit}>
          <AtModalContent>
            <Picker
              name='relative'
              mode='selector'
              range={selector}
              onChange={handleClassChange}
            >
              <AtInput
                placeholder='请选择关系'
                disabled
                title='亲属关系'
                value={selectorChecked}
              />
            </Picker>
            {title.map((item, index) => {
              return (
                <AtInput
                  key={index}
                  name={item.name}
                  title={item.title}
                  type={item.type}
                  value={item.value}
                  disabled={item.disabled}
                  placeholder={item.placeholder}
                  onChange={(e) => handleChange(e, item)}
                />
              );
            })}
          </AtModalContent>
          <AtModalAction>
            <Button onClick={() => handleClose()}>取消</Button>
            <Button formType='submit'>确认</Button>
          </AtModalAction>
        </AtForm>
      </AtModal>
      {/* 消息提示组件 */}
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  classList: state.users.classList,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(AddClass);
