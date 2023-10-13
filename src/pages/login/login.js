import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Taro from "@tarojs/taro";
import { View, Image, RadioGroup, Label, Radio, Input } from "@tarojs/components";
import { AtButton, AtForm, AtIcon, AtInput, AtMessage } from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import LoginInput from '@app/component/LoginInput';
import sh from "@static/sh.png";
import user from "@static/user-icon.png";
import lock from "@static/lock-icon.png";

import "./login.scss";

function Login(props) {
  const { dispatch  } = props
 
  useEffect(() => {
    
    dispatch({
      type:'users/getUser'
    })
    dispatch({
      type:'user/getUserId'
    })
  })
  const formList = [
    {
      key:'telephone',
      titleIcon: user,
      placeholder: "请输入手机号",
      type: "phone",
      value: '',
    },
    {
      key:'password',
      titleIcon: lock,
      placeholder: "请输入密码",
      type: "number",
      value: '',
    },
  ]
  const handleSign = (e) => {
    if(e == 0){
      Taro.navigateTo({ url: `/pages/login/ForgetPass/ForgetPass` });
    }else{
      Taro.navigateTo({ url: `/pages/login/Register/Register` });
    }
  };
  
  return (
    <View className='index'>
      <View className='container'>
        <View className='login-head'>
          <View className='avatar'>
            <Image style={{width:'200rpx',height:'200rpx'}} src={sh} />
          </View>
          <View className='mark'>欢迎来到家校共育</View>
        </View>
        <View className='login-input'>
          <View className='forget' onClick={() => handleSign(0)}>忘记密码？</View>
          <LoginInput loginType={0} loginUserType={3} classList='' formList={formList}  />
        </View>        
        <View className='register-button'>
         <GradientButton
           type='primary'
           className='signin'
           onClick={() => handleSign(1)}
         >
            注册
          </GradientButton>
        </View>
      </View>
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user
}))(Login);
