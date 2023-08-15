// import { useState, createContext } from 'react'
import { View, Form, Input, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';
// import list from "@static/list.png";
// import comment from "@static/comment.png";
// import study from "@static/study.png";
// import rewards from "@static/rewards.png";
// import punish from "@static/punish.png";
// import checkIn from "@static/checkIn.png";
import "./AddUser.scss";
import { AtInput } from 'taro-ui';

function AddUser() {
    const onSubmit=(value)=>{
        console.log(value);
    }
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='添加账号' />
      <View className='container'>
      <View className='login-input'>
          <AtInput
            placeholder='请输入手机号'
            type='phone'
          />
          <AtInput
            placeholder='请输入密码'
            type='password'
          />
         <View className='forget'>注册账号</View>
        </View>
        <View className='login-button'>
          <GradientButton
            type='primary'
            className='login'
            // onClick={handleLogin}
          >
            登录
          </GradientButton>
         
        </View>
        </View>
    </View>
  );
}
export default AddUser;
