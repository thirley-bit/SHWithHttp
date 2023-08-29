// import { useState, createContext } from 'react'
import { View, Form, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';
import InputItem from "./InputItem";
// import list from "@static/list.png";
// import comment from "@static/comment.png";
// import study from "@static/study.png";
// import rewards from "@static/rewards.png";
// import punish from "@static/punish.png";
// import checkIn from "@static/checkIn.png";
import "./ChangePassword.scss";

function ChangePassword() {
  const onSubmit = (value) => {
    console.log(value);
  };
  return (
    <View className='index'>
      <NavTab back title='修改密码' />
      <View className='pass'>
        <Form onSubmit={onSubmit}>
          <InputItem
            value='check-circle'
            color='#0ac42f'
            label='填写密码'
            name='writePass'
          />
          <View className='pre'>请输入之前正确使用的密码</View>
          <InputItem
            value='check-circle'
            color='#0ac42f'
            label='新密码'
            name='newPass'
          />
          <InputItem
            value='close-circle'
            color='red'
            label='再次输入'
            name='nextPass'
          />
          <GradientButton type='primary' className='send-button'>确定修改</GradientButton>
          {/* <View className='submit'>
            <Button className='ok-btn' form-type='submit'>
              确认修改
            </Button>
          </View> */}
        </Form>
      </View>
    </View>
  );
}
export default ChangePassword;
