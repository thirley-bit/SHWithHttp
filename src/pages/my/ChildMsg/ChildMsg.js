import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';
import GradientButton from '@app/component/GradientButton';

import "./ChildMsg.scss";

function ChildMsg(props) {
  const { dispatch, user, identity, settingList } = props;
  const [showData, setShowData] = useState([]);
  console.log(props);
  useEffect(() => {
    dispatch({
      type: "users/getIdentity",
      
    });
    dispatch({
      type: "users/getUser",
    });
  }, []);
  useEffect(() => {
    if (identity) {
      console.log(identity,'iddd');
      const titleList = [
        {
          key: "student_name",
          title: "学生姓名",
          type: "text",
          required: true,
        },
        {
          key: "student_id",
          title: "学生学号",
          type: "number",
        }, 
        {
          key: "class_name",
          title: "所属班级",
          type: "text",
        },
        {
          key: "photo",
          title: "人脸照片",
          type: "text",
        },
        {
          key: "birthday",
          title: "出生年月",
          type: "number",
        },
        {
          key: "address",
          title: "家庭住址",
          type: "text",
        },
      ];
      const newShowData = titleList.map((item) => {
        let value = identity[item.key];
        return {
          ...item,
          value,
        };
      });
      setShowData(newShowData);
    }
  }, [identity]);
  console.log(showData);
  const handleChange = (value,record) => {
    record.value = value
    console.log(showData);
  };
  const handleAdd = () => {
    console.log('add')
  }
  const handleSave = () => {
    console.log(showData)
  }
  const handleSubmit = () => {
    console.log(showData)
  }
  return (
    <View className='index'>
    <NavTab back title='孩子信息' />
    <View className='main'>
      <AtForm onSubmit={() => handleSubmit()}>
        {showData.map((item, index) => {
          return (
            <AtInput
              key={index}
              name={item.title}
              title={item.title}
              type={item.type}
              value={item.value}
              required={item.required}
              onChange={(e) => handleChange(e,item)}
            />
          );
        })}
      </AtForm>
      </View>
      <View className='other'>
        <View className='another'>
          <Text>在此班级中是否还有其他小孩？</Text>
          <View className='add-text' onClick={handleAdd}>点此添加</View>
        </View>
      </View>
      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleSave()}
      >
        保存修改
      </GradientButton>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(ChildMsg);
