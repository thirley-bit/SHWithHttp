import { View, Text, Form, Input, Button } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {
  AtAvatar,
  AtButton,
  AtCard,
  AtDivider,
  AtForm,
  AtIcon,
  AtInput,
  AtMessage,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtTabsPane,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import MyTabs from "@app/component/MyTabs/MyTabs";
import GradientButton from "@app/component/GradientButton";
import Divider from "@app/component/Divider/Divider";
import Modal from "@app/component/Modal";
import normal from "@static/normal.png";

import "./Check.scss";

function Check(props) {
  console.log(props, "props");
  const { dispatch, user, userId, pageSize, identity, checkedList } = props;
  const [current, setCurrent] = useState(0);
  const [isOpened, setIsOpened] = useState(false); //审核状态弹窗
  const [refuseOpened, setRefuseOpened] = useState(false);//审核不通过弹窗
  const [refuseMsg, setRefuseMsg] = useState('');
  const [modalContent, setModalContent] = useState("");
  const [choose, setChoose] = useState(""); //切换绑定学生时,当前选择的数据
  const [checkedId, setCheckedId] = useState(""); //审核id
  const [status, setStatus] = useState('');//审核类型：1：通过；2：不通过；3：撤销；4：切换身份
  //教师端显示已审核列表，家长端不显示
  let tabTitle = user == 0 ? "" : "已审核";
  const tabList = [
    {
      title: "待处理",
    },
    {
      title: "已处理",
    },
    {
      title: tabTitle,
    },
  ];
  useEffect(() => {
    reviewData(0);
  }, []);

  //查询各审核状态下的数据，状态:0-待审核 1-审核通过 2-审核驳回 3-撤销
  const reviewData = (e) => {
    let curStatus = [];
    switch (e) {
      case 0:
        curStatus = [0];
        break;
      case 1:
        curStatus = [1,2];
        break;
      case 2:
        curStatus = [1,2];
        break;
      default:
        break;
    }
    dispatch({
      type: "users/getJoinReviewList",
      payload: {
        page: 1,
        pageSize: pageSize,
        userId: userId,
        status: curStatus,
      },
    });
  };

  //切换tabsPane,根据不同的e查询不同状态下的审核数据
  const handleClick = (e) => {
    setCurrent(e);
    reviewData(e);
  };

  //切换默认绑定学生
  const handleChangeUser = (e,i) => {
    setChoose(e);
    setStatus(i)
    if(e.status != 1){
      Taro.atMessage({
        message: '请选择审核通过的数据',
        type: "error",
      });
    }else{
      setIsOpened(true);
      setModalContent(`确定切换成${e.userName}?`);
    }
  };
  //关闭弹窗
  const handleClose = () => {
    setIsOpened(false);
    setRefuseOpened(false)
  };
  //关闭弹窗
  const handleCancel = () => {
    setIsOpened(false);
    setRefuseOpened(false)
  };
  //审核不通过输入框
  const handleInput = (e) => {
    setRefuseMsg(e)
  };
  //点击不同审核操作按钮，1：通过；2：不通过；3：撤销
  const handleCheck = (value, i) => {
    setCheckedId(value);
    setStatus(i)
    switch (i) {
      case 1:
        setIsOpened(true);
        setModalContent("确定通过该条申请");
        setRefuseMsg('审核通过')
        break;
      case 2:
        setRefuseOpened(true)
        break;
      case 3:
        setIsOpened(true)
        setModalContent('确定撤销该条申请')
        setRefuseMsg('撤销申请')
        break;
      default:
        break;
    }
  };
  //调用审核接口，当status为4时为切换绑定学生，当status为1，2，3时为对应的审核操作
  const handleConfirm = () => {
    setIsOpened(false);
    setRefuseOpened(false)
    let actions = {}
    if(status == 4){
      //切换默认绑定学生
      actions.type = 'users/getUpdateDefaultFlag'
      actions.payload = choose.id
    }else{
      //审核操作
      actions.type = "users/getUpdateJoinReview"
      actions.payload = {id:checkedId,status:status,auditRemark:refuseMsg}
    }
    
    dispatch(actions).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        reviewData(current);
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };
  return (
    <View className='check'>
      <NavTab iconTheme='black' back title='审核' />
      <MyTabs current={current} tabList={tabList} onClick={handleClick}>
        <AtTabsPane current={current} index={0}>
          {checkedList.length > 0 ? (
            <View>
              {checkedList.map((item, index) => {
                return (
                  <View key={index} className='join-card'>
                    <AtCard
                      className={item.defaultFlag == 1 ? "item-active" : "item"}
                    >
                      <View className='top'>
                        <View className='left'>
                          <AtAvatar
                            className='img'
                            size='small'
                            circle
                            image={item.avatar ? item.avatar : normal}
                          />
                        </View>
                        <View
                          className='card-content clearfix'
                          // onClick={() => handleChangeUser(item,4)}
                        >
                          <View className='card-center'>
                            <View className='card-name'>{item.className}</View>
                            <View className='card-msg'>{item.userName}</View>
                          </View>
                        </View>
                        <View className='right'>
                          {user == 0 ? (
                            "正在审核中..."
                          ) : (
                            <View className='right-button'>
                              <GradientButton
                                className='refuse'
                                type='primary'
                                onClick={() => handleCheck(item.id, 1)}
                              >
                                通过
                              </GradientButton>
                              <GradientButton
                                type='secondary'
                                onClick={() => handleCheck(item.id, 2)}
                              >
                                不通过
                              </GradientButton>
                            </View>
                          )}
                        </View>
                      </View>
                      {/* 家长端显示底部撤销按钮 */}
                      {user == 0 && (
                        <View
                          className='bottom'
                          onClick={() => handleCheck(item.id, 3)}
                        >
                          <Divider className='divider' />
                          <AtIcon value='reload'></AtIcon>
                          <Text>撤销申请</Text>
                        </View>
                      )}
                    </AtCard>
                  </View>
                );
              })}
            </View>
          ) : (
            <View style={{ margin: "50% 40%" }}>暂无数据</View>
          )}
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          {checkedList.length > 0 ? (
            <View>
              {checkedList.filter(it => user == 0 ? it.type == 0 : it.type == 1).map((item, index) => {
                let title = "";
                let note = "";
                if (user == 0) {
                  title = item.className;
                  note = item.studentName + "\xa0" + item.relative;
                } else {
                  title = item.userName + "申请加入";
                  note = "审核人：" + item.auditBy;
                }
                return (
                  <View key={index} className='join-card'>
                    <AtCard
                      className={
                        user == 0 && item.defaultFlag == 1
                          ? "item-active"
                          : "item"
                      }
                      // 只能切换成审核成功的数据
                      onClick={() => handleChangeUser(item,4)}
                    >
                      <View className='top'>
                        <View className='left'>
                          <AtAvatar
                            className='img'
                            size='small'
                            circle
                            image={item.avatar ? item.avatar : normal}
                          />
                        </View>
                        <View className='card-content clearfix'>
                          <View className='card-center'>
                            <View className='card-name'>{title}</View>
                            <View className='card-msg'>{note}</View>
                          </View>
                        </View>
                        {/* 审核不通过时，右边字体显示红色 */}
                        <View className='right' style={{color: item.status == 2 && '#FF2A15'}}>{item.auditRemark}</View>
                      </View>
                    </AtCard>
                  </View>
                );
              })}
            </View>
          ) : (
            <View style={{ margin: "50% 40%" }}>暂无内容</View>
          )}
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          {checkedList.length > 0 ? (
            <View>
              {checkedList.map((item, index) => {
                console.log(item,'item')
                let title = "";
                let note = "";
                if (user == 0) {
                  title = item.class_name;
                  note = item.studentName + "\xa0" + item.relative;
                } else {
                  title = item.userName + "申请加入";
                  note = "审核人：" + item.auditBy;
                }
                return (
                  <View key={index} className='join-card'>
                    <AtCard
                      className={
                        user == 0 && item.defaultFlag == 1
                          ? "item-active"
                          : "item"
                      }
                      // onClick={() => handleChangeUser(item,4)}
                    >
                      <View className='top'>
                        <View className='left'>
                          <AtAvatar
                            className='img'
                            size='small'
                            circle
                            image={item.avatar ? item.avatar : normal}
                          />
                        </View>
                        <View className='card-content clearfix'>
                          <View className='card-center'>
                            <View className='card-name'>{title}</View>
                            <View className='card-msg'>{note}</View>
                          </View>
                        </View>
                        <View className='right' style={{color: item.status == 2 && '#FF2A15'}}>{item.auditRemark}</View>
                      </View>
                    </AtCard>
                  </View>
                );
              })}
            </View>
          ) : (
            <View style={{ margin: "50% 40%" }}>暂无数据</View>
          )}
        </AtTabsPane>
      </MyTabs>
      <Modal
        isOpened={isOpened}
        cancelText='取消'
        confirmText='确定'
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content={modalContent}
      />
      <AtModal
        className='edit-modal'
        isOpened={refuseOpened}
        closeOnClickOverlay={false}
      >
        <AtModalContent className='modal-edit'>
          请输入不通过原因
          <AtInput type='text' value={refuseMsg} onChange={handleInput} />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => handleClose()}>取消</Button>
          <Button onClick={() => handleConfirm()}>确认</Button>
        </AtModalAction>
      </AtModal>
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  userId: state.users.userId,
  pageSize: state.users.pageSize,
  checkedList: state.users.checkedList,
  identity: state.users.identity,
  parentPassList: state.users.parentPassList,
  parentCheckedList: state.users.parentCheckedList,
  teacherPassList: state.users.teacherPassList,
  teacherCheckedList: state.users.teacherCheckedList,
}))(Check);
