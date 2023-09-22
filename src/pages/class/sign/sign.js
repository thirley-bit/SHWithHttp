import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { View, Text, Form, Picker, ScrollView } from "@tarojs/components";
import { AtButton, AtMessage } from "taro-ui";
import { connect } from 'react-redux';

import StudentsList from "@app/component/StudentsList/StudentsList";
import GradientButton from "@app/component/GradientButton";
import NavTab from '@app/component/NavTab/NavTab';
import "./Sign.scss";

function Sign(props) {
  const { user, dispatch, signRecordList,userId, studentId, specialTime, schoolEndTimeInfo } = props
  const [isEdit, setIsEdit] = useState(true);
  const [schoolId,setSchoolId] = useState('')

  useEffect(() => {

    dispatch({
      type:'Sign/getSignRecordList',
      payload: {
        userId: userId,
        studentId:studentId
      },
    })

    dispatch({
      type:'Sign/getSchoolEndTimeInfo',
    }).then(res=>{
      if(res.status == 200){
        setSchoolId(res.data.id)
      }
    })

    dispatch({
      type:'Sign/getStudent'
    })
  }, []);

 
  const handleChange = () => {
    setIsEdit(!isEdit);
  };
  const handleSign = (e) => {
    dispatch({
      type: "Sign/getUpdateSignRecord",
      payload: {
        id:e.id,
        earlyStatus:1,
        lateStatus:1
      },
    }).then(res => {
      if (res.status == 200) {
        dispatch({
          type:'Sign/getSignRecordList',
          payload: {
            userId: userId,
            studentId:studentId
          },
        })
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
    })
  };

  const onTimeChange = (e) => {
    dispatch({
      type:'Sign/getUpdateSchoolEndTime',
      payload: {
        id:schoolId,
        endTime:e.detail.value
      }
    }).then(res => {
      if (res.status == 200) {
        dispatch({
          type:'Sign/getSchoolEndTimeInfo',
        })
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
    })
    // setTime(e.detail.value);
  };
  return (
    <View className='index'>
    <NavTab back title='安全确认' />
      {user == 0 ? (
        <View className='parent'>
          <View className='parent-item'>
            {signRecordList.map((item, index) => {
              console.log(item);
              let status = specialTime < 12 ? item.earlyStatus : item.lateStatus
            
              return (
                <View key={index}>
                  <View className='text'>{item.studentName}</View>
                  <View className='button'>
                  {status == 0 ? (
                        <GradientButton
                          className='sign-button'
                          type='primary'
                          onClick={() =>
                            handleSign(item)
                          }
                        >
                          确认
                        </GradientButton>
                      ) : (
                        <GradientButton
                          className='sign-button'
                          type='secondary'
                        >
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
            <Text className='text-sign' onClick={() => handleChange()}>请确认学生是否到校</Text>
            <Text className='text-send'>
                点击学生将发送消息至家长确定学生到校情况
            </Text>
          </View>
          <StudentsList enter='sign' current={0} showData={signRecordList} />
        </View>
      )}
      <AtMessage />
    </View>
  );
}

export default connect(state => ({
  user: state.users.user,
  userId: state.users.userId,
  studentId: state.users.studentId,
  signRecordList: state.Sign.signRecordList,
  specialTime: state.Sign.specialTime,
  schoolEndTimeInfo: state.Sign.schoolEndTimeInfo
}))(Sign);
