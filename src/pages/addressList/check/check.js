import { View, Text, Form,Input, Button } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  AtAvatar,
  AtButton,
  AtCard,
  AtForm,
  AtIcon,
  AtInput,
  AtTabsPane,
} from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';
import MyTabs from '@app/component/MyTabs/MyTabs';
import GradientButton from '@app/component/GradientButton';
import normal from "@static/normal.png"

import "./Check.scss";

function Check(props) {
  console.log(props,'iooo');
  const {
    dispatch,
    user,
    userId,
    pageSize,
    identity,
    checkedList,
  } = props;
  const [current, setCurrent] = useState(0);
  let tabTitle = user == 0 ? "" : "已审核";
  const tabList = [
    {
      title: "待审核",
    },
    {
      title: "已处理",
    },
    {
      title: tabTitle,
    },
    
  ];
  useEffect(() => {
      dispatch({
        type: "users/getJoinReviewList",
        payload:{
          page:1,
          pageSize:pageSize,
          userId:userId,
          status:[0],
        }
      });
  }, []);
  const handleClick = (e) => {
    setCurrent(e);
    let status = []
    switch (e){
      case 0:
        status = [0]
        break;
      case 1:
        status = [1,2]
        break;
      case 2:
        status = [3]
        break;
      default:
        break;
    }
      dispatch({
        type: "users/getJoinReviewList",
        payload:{
          page:1,
          pageSize:pageSize,
          userId:userId,
          status:status,
        }
      });
  };
  const handleChangeUser = (e) => {
    dispatch({
      type: "users/getChangeUser",
      payload: e,
    });
  };
  const handleCheck = (value,status) => {
    console.log(value,status,'recoed,id')
    dispatch({
      type:'users/getUpdateJoinReview',
      payload:{
        id:value,
        status:status,
        auditRemark:'审核意见'
      }
    })
  }
  return (
    <View className='index'>
      <NavTab
        iconTheme='black'
        back
        title='审核'
      />
      <MyTabs current={current} tabList={tabList} onClick={handleClick}>
      <AtTabsPane current={current} index={0}>
          {checkedList.map((item, index) => {
              return (
                <View key={index} className='join-card'>
                  <AtCard
                    className={
                      identity.student_id == item.student_id
                        ? "item-active"
                        : "item"
                    }
                    onClick={() => handleChangeUser(item.student_id)}
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
                          <View className='card-name'>
                            {item.className}
                          </View>
                          <View className='card-msg'>
                            {item.studentName + "\xa0" + item.relative}
                          </View>
                        </View>
                      </View>
                      <View className='right'>
                        {user == 0 ? (
                          "正在审核中..."
                        ) : (
                          <View className='right-button'>
                            <GradientButton className='refuse' type='primary' onClick={() => handleCheck(item.id,1)}>通过</GradientButton>
                            <GradientButton type='secondary' onClick={() => handleCheck(item.id,2)}>不通过</GradientButton>
                          </View>
                        )}
                      </View>
                    </View>
                    {/* 家长端显示底部撤销按钮 */}
                    {user == 0 && (
                      <View
                        className='bottom'
                        // onClick={() => handleBack(item.student_id)}
                        onClick={() => handleCheck(item.id,3)}
                      >
                        <AtIcon value='reload'></AtIcon>
                        <Text>撤销申请</Text>
                      </View>
                    )}
                  </AtCard>
                </View>
              );
            }
          )}
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          {checkedList.map((item, index) => {
            let title = "";
            let note = "";
            if (user == 0) {
              title = item.className;
              note = item.studentName + "\xa0" + item.relative;
            } else {
              title = item.studentName + item.relative + "申请加入";
              note = "审核人：" + item.auditBy;
            }
            return (
              <View key={index} className='join-card'>
                <AtCard
                  className={
                    user == 0 && identity.student_id == item.student_id
                      ? "item-active"
                      : "item"
                  }
                  onClick={() => handleChangeUser(item.student_id)}
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
                    <View className='right'>{item.auditRemark}</View>
                  </View>
                </AtCard>
              </View>
            );
          })}
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          {checkedList.map((item, index) => {
            let title = "";
            let note = "";
            if (user == 0) {
              title = item.class_name;
              note = item.studentName + "\xa0" + item.relative;
            } else {
              title = item.studentName + item.relative + "申请加入";
              note = "审核人：" + item.auditBy;
            }
            return (
              <View key={index} className='join-card'>
                <AtCard
                  className={
                    user == 0 && identity.student_id == item.student_id
                      ? "item-active"
                      : "item"
                  }
                  onClick={() => handleChangeUser(item.student_id)}
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
                    <View className='right'>{item.auditRemark}</View>
                  </View>
                </AtCard>
              </View>
            );
          })}
        </AtTabsPane>
      </MyTabs>
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
