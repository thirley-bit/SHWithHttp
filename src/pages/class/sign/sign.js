import { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { View, Text, Form, Picker, ScrollView } from "@tarojs/components";
import { AtButton } from "taro-ui";
import api from "@/api/api";

import StudentsList from "@app/component/StudentsList/StudentsList";
import "./sign.scss";
import { connect } from 'react-redux';

function Sign(props) {
  const { user } = props
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const scrollTop = 0;
  const Threshold = 20;

  useEffect(() => {
    studentsData();
  }, []);
  console.log(user);

  const studentsData = () => {
    let url = "students/list";
    let data = api[url].data;
    // Taro.request({
    //   url: "http://localhost:9999/api/user/list",
    //   }).then((res) => {
    // setStudents(res.data.data)
    // })
    // let data = [
    //   {
    //     id: 1,
    //     label: "张三撒旦士大夫士大夫范德萨对方",
    //     value: "张三撒旦士大夫士大夫范德萨对方",
    //     status: 0,
    //     checked: false,
    //     img: "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    //   },
    //   {
    //     id: 2,
    //     label: "李四张",
    //     value: "李四",
    //     status: 0,
    //     checked: true,
    //     img: "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    //   },
    //   {
    //     id: 3,
    //     label: "王五",
    //     value: "王五",
    //     status: 0,
    //     checked: true,
    //     img: "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    //   },
    //   {
    //     id: 4,
    //     label: "刘毅美画面给",
    //     value: "刘毅",
    //     status: 1,
    //     checked: false,
    //     img: "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    //   },
    //   {
    //     id: 5,
    //     label: "小四的地方很精美画面给",
    //     value: "小四",
    //     status: 0,
    //     checked: true,
    //     img: "https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    //   },
    //   {
    //     id: 6,
    //     label: "张九都·打过",
    //     value: "张九",
    //     status: 0,
    //     checked: true,
    //   },
    //   {
    //     id: 7,
    //     label: "李承白",
    //     value: "李承白",
    //     status: 0,
    //     checked: false,
    //   },
    //   {
    //     id: 8,
    //     label: "黄文王",
    //     value: "黄文王",
    //     status: 0,
    //     checked: true,
    //   },
    //   {
    //     id: 9,
    //     label: "方赵宇发发",
    //     value: "方赵宇",
    //     status: 1,
    //     checked: false,
    //   },
    //   {
    //     id: 10,
    //     label: "张茂如美画面给",
    //     value: "张茂如",
    //     status: 0,
    //     checked: true,
    //   },
    // ];
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
      {user == 0 ? (
        <View className='parent'>
          <View className='parent-item'>
            {student.map((item, index) => {
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
            <Text onClick={() => handleChange()}>请确认学生是否到校</Text>
            <View>
              <Text className='text-send'>
                点击学生将发送消息至家长确定学生到校情况
              </Text>
            </View>
          </View>
          <StudentsList enter='sign' current={0} showData={students} />
        </View>
      )}
    </View>
  );
}

export default connect(state => ({
  user:state.users.user
}))(Sign);
