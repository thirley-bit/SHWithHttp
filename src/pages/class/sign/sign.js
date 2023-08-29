import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { View, Text, Form, Picker, ScrollView } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { connect } from 'react-redux';

import StudentsList from "@app/component/StudentsList/StudentsList";
import GradientButton from "@app/component/GradientButton";
import NavTab from '@app/component/NavTab/NavTab';
import "./Sign.scss";

function Sign(props) {
  const { user, dispatch, student, studentsList } = props
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    dispatch({
      type:'users/getUser'
    })
    dispatch({
      type:'Sign/getStudentsList'
    })
    dispatch({
      type:'Sign/getStudent'
    })
  }, []);
  console.log(user,"user");

 

  const [time, setTime] = useState("17:50");


  const handleChange = () => {
    setIsEdit(!isEdit);
  };
  const handleSign = () => {
    console.log("click");
  };
  const formSubmit = (index) => {
    console.log(index);
  };

  const signHandle = (item, id, index) => {
    //需要改方法
    console.log(index);
    const newStudent = student.map((value) => {
      if (value.id === id) {
        const status = 1;
        return {
          ...value,
          status,
        };
      } else {
        return { ...value };
      }
    });
    // const newStudents = student.splice(index,1,newItem,)
    // setStudent(newStudent);

    const newStudents = students.map((value) => {
      if (value.id === id) {
        const status = 1;
        return {
          ...value,
          status,
        };
      } else {
        return { ...value };
      }
    });
    setStudents(newStudents);
  };

  const onTimeChange = (e) => {
    setTime(e.detail.value);
  };
  return (
    <View className='index'>
    <NavTab back title='安全确认' />
      {user == 0 ? (
        <View className='parent'>
          <View className='parent-item'>
            {student.map((item, index) => {
              console.log(item);
              return (
                <View key={index}>
                  <View className='text'>{item.student_name}</View>
                  <View className='button'>
                  {item.checked == true ? (
                        <GradientButton
                          className='sign-button'
                          type='primary'
                          onClick={() =>
                            handleSign(item, item.student_id, index)
                          }
                        >
                          确认
                        </GradientButton>
                      ) : (
                        <GradientButton
                          className='sign-button'
                          type='secondary'
                        >
                          未出发
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
                放学时间：{time}
              </Picker>
            </View>
            <Text className='text-sign' onClick={() => handleChange()}>请确认学生是否到校</Text>
            <Text className='text-send'>
                点击学生将发送消息至家长确定学生到校情况
            </Text>
          </View>
          <StudentsList enter='sign' current={0} showData={studentsList} />
        </View>
      )}
    </View>
  );
}

export default connect(state => ({
  user: state.users.user,
  studentsList: state.Sign.studentsList,
  student: state.Sign.student
}))(Sign);
