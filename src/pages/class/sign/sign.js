import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { View, Text, Form, Picker, ScrollView } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { connect } from 'react-redux';
import api from "@/api/api";

import StudentsList from "@app/component/StudentsList/StudentsList";
import NavTab from '@app/component/NavTab/NavTab';
import "./Sign.scss";

function Sign(props) {
  const { user, dispatch, studentsList } = props
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(true);

  useEffect(() => {
    dispatch({
      type:'users/getUser'
    })
    dispatch({
      type:'Sign/getStudentsList'
    })
    studentsData();
  }, []);
  console.log(user,"user");

  const studentsData = () => {
    let url = "students/list";
    let data = api[url].data;
    // Taro.request({
    //   url: "http://localhost:9999/api/user/list",
    //   }).then((res) => {
    // setStudents(res.data.data)
    // })
    setStudents(data);
  };

  const [student, setStudent] = useState([
    {
      id: 2,
      name: "张三撒旦士大夫士大夫范德萨对方",
      status: 0,
    },
    {
      id: 3,
      name: "李四",
      status: 0,
    },
  ]);
  const [time, setTime] = useState("17:50");

  const handleChange = () => {
    setIsEdit(!isEdit);
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
    setStudent(newStudent);

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
  const scrollHeight = {
    height: "550px",
  };
  const onScroll = () => {};
  return (
    <View className='index'>
    <NavTab needBackIcon mainTitle='安全确认' />
      {user == 0 ? (
        <View className='parent'>
          <View className='parent-item'>
            {studentsList.map((item, index) => {
              console.log(item);
              return (
                <View key={index}>
                  <View className='text'>{item.name}</View>
                  <View className='button'>
                    {item.status === 0 ? (
                      <AtButton
                        className='sign-button_parent'
                        type='primary'
                        size='small'
                        onClick={() => signHandle(item, item.id)}
                      >
                        确认是否到家
                      </AtButton>
                    ) : (
                      <AtButton
                        disabled
                        className='sign-button_parent'
                        type='secondary'
                        size='small'
                      >
                        已确认到家
                      </AtButton>
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
  studentsList: state.Sign.studentsList
}))(Sign);
