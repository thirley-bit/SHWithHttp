import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, RadioGroup, Label, Radio, Input } from "@tarojs/components";
import { AtButton, AtForm, AtIcon, AtInput, AtMessage } from "taro-ui";
import GradientButton from "@app/component/GradientButton";

import "./Login.scss";
import { connect } from 'react-redux';

function Login(props) {
  console.log(props,'props')
  const { dispatch, users } = props
  const [numberVal, setNumberVal] = useState("");
  const [loginUserType, setLoginUserType] = useState(0);
 
  useEffect(() => {
    dispatch({
      type:'users/getUser'
    })
  })
  const checkList = [
    {
      value: "0",
      text: "家长",
      checked: true,
    },
    {
      value: "1",
      text: "老师",
      checked: false,
    },
  ];
  const formList = [
    {
      key:'telephone',
      titleIcon: 'user',
      placeholder: "请输入手机号",
      type: "phone",
      value: numberVal,
    },
    {
      key:'password',
      titleIcon: "lock",
      placeholder: "请输入密码",
      type: "number",
      value: numberVal,
    },
  ]
  //选择班级
  const handleCheckChange = (e) => {
    setLoginUserType(parseInt(e.detail.value))
  }
  //登录
  const handleLogin = () => {
    const formObj = formList.reduce((p, n) => {
      const { key } = n;
      return Object.assign(p, { [key]: n.value });
    }, {});
    //合并输入内容和身份
    const sendList = Object.assign(formObj,{userType:loginUserType})
    //判断输入是否为空
    const nullObj = formList.find(item => item.value == '')
    if(nullObj){
      Taro.showToast({
        title:`${nullObj.placeholder}`,
        icon:'error'
      })
    } else {
      dispatch({
        type:'users/getLogin',
        payload:sendList
      }).then(res => {
        if(res.status == 200){
          Taro.atMessage({
            'message':'登录成功',
            'type':'success'            
          })
          //将token储存到本地
          Taro.setStorageSync('token',res.data.token)
          //切换到主页
          Taro.switchTab({ url: "/pages/class/class" });
        }else{
          Taro.atMessage({
            'message':res.message,
            'type':'error'
          })
        }
      })
    }
  };
  const handleSign = (e) => {
    if(e == 0){
      Taro.navigateTo({ url: `/pages/login/ForgetPass/ForgetPass` });
    }else{
      Taro.navigateTo({ url: `/pages/login/Register/Register` });
    }
  };
  const handleChange = (e,record) => {
    record.value = e
  }
  return (
    <View className='index'>
      <View className='container'>
        <View className='head'>
          <View className='avatar'></View>
          <View>家校共育</View>
        </View>
        <View className='login-input'>
          <View className='forget' onClick={() => handleSign(0)}>忘记密码？</View>
          <AtForm>
          {formList.map((item, index) => {
              return (<View key={index}>
                <AtInput
                  key={index}
                  title={<AtIcon value={item.titleIcon} size={25} color='#28a1fc'></AtIcon>}
                  placeholder={item.placeholder}
                  type={item.type}
                  value={item.value}
                  required={item.required}
                  onChange={(e) => handleChange(e, item)}
                />
                </View>
              );
            })}
          </AtForm>
          
        </View>
        <RadioGroup 
          onChange={handleCheckChange}
        >
          {checkList.map((item,index) => {
            return<Label key={index}>
              <Radio 
                style={{marginRight:'64rpx'}} 
                value={item.value} 
                checked={item.checked}
              >{item.text}</Radio></Label>
          })}
        </RadioGroup>
        <View className='login-button'>
          <GradientButton
            type='primary'
            className='login'
            onClick={handleLogin}
          >
            登录
          </GradientButton>
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
