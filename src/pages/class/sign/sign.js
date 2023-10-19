import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Picker } from "@tarojs/components";
import { AtMessage } from "taro-ui";
import { connect } from "react-redux";

import StudentsList from "@app/component/StudentsList/StudentsList";
import GradientButton from "@app/component/GradientButton";
import NavTab from "@app/component/NavTab/NavTab";
import "./Sign.scss";

function Sign(props) {
  const {
    user,
    dispatch,
    signRecordList,
    userId,
    studentId,
    specialTime,
    schoolEndTimeInfo,
  } = props;
  const [isEdit, setIsEdit] = useState(true);
  const [schoolId, setSchoolId] = useState("");

  useEffect(() => {
    signRecordListData();

    dispatch({
      type: "Sign/getSchoolEndTimeInfo",
    }).then((res) => {
      if (res.status == 200) {
        setSchoolId(res.data.id);
      }
    });
  }, []);

  const signRecordListData = () => {
    let payload = {};
    if (user == 0) {
      payload.studentId = studentId;
    } else {
      payload.userId = userId;
    }
    dispatch({
      type: "Sign/getSignRecordList",
      payload: payload,
    });
  };

  const handleChange = () => {
    setIsEdit(!isEdit);
  };
  //点击签到
  const handleSign = (e) => {
    let payload = { id: e.id };
    //早上将earlyStatus状态改为1，下午将lateStatus状态改为1
    if (specialTime < 12) {
      payload.earlyStatus = 1;
    } else {
      payload.lateStatus = 1;
    }
    dispatch({
      type: "Sign/getUpdateSignRecord",
      payload: payload,
    }).then((res) => {
      if (res.status == 200) {
        //接口返回成功更新学生列表状态
        signRecordListData();
        //成功消息提示
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };

  //修改放学时间
  const onTimeChange = (e) => {
    dispatch({
      type: "Sign/getUpdateSchoolEndTime",
      payload: {
        id: schoolId,
        endTime: e.detail.value,
      },
    }).then((res) => {
      if (res.status == 200) {
        dispatch({
          type: "Sign/getSchoolEndTimeInfo",
        });
        //消息提示
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };
  return (
    <View className='index'>
      <NavTab back title='安全确认' />
      {user == 0 ? (
        // 家长端为单个学生
        <View className='parent'>
          <View className='parent-item'>
            <View style={{fontWeight:'500',color:'#333'}}>放学时间：{schoolEndTimeInfo}</View>
            {signRecordList.map((item, index) => {
              let status =
                specialTime < 12 ? item.earlyStatus : item.lateStatus;
              return (
                <View key={index}>
                  <View className='text'>{item.studentName}</View>
                  <View className='button'>
                    {status == 0 ? (
                      <GradientButton
                        className='sign-button'
                        type='primary'
                        onClick={() => handleSign(item)}
                      >
                        确认
                      </GradientButton>
                    ) : (
                      <GradientButton className='sign-button' type='secondary'>
                        已确认
                      </GradientButton>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <View className='teacher'>
          <View className='text'>
            <View className='time'>
              <Picker className='picker' mode='time' onChange={onTimeChange}>
                放学时间：{schoolEndTimeInfo}
              </Picker>
            </View>
            <Text className='text-sign' onClick={() => handleChange()}>
              请确认学生是否到校
            </Text>
            <Text className='text-send'>
              点击学生将发送消息至家长确定学生到校情况
            </Text>
          </View>
          {/* 教师端为学生列表 */}
          <StudentsList enter='sign' current={0} showData={signRecordList} />
        </View>
      )}
      <AtMessage />
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
  userId: state.users.userId,
  studentId: state.users.studentId,
  signRecordList: state.Sign.signRecordList,
  specialTime: state.Sign.specialTime,
  schoolEndTimeInfo: state.Sign.schoolEndTimeInfo,
}))(Sign);
