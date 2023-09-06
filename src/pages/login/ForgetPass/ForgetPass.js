import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Taro from "@tarojs/taro";
import { View, Text, RadioGroup, Label, Radio, Input } from "@tarojs/components";
import { AtButton, AtForm, AtIcon, AtInput, AtMessage } from "taro-ui";
import GradientButton from "@app/component/GradientButton";

import "./ForgetPass.scss";

function ForgetPass(props) {
  const { dispatch } = props
  const [numberVal, setNumberVal] = useState("");
  const [loginUserType, setLoginUserType] = useState(0);
 
//   const checkList = [
//     {
//       value: "0",
//       text: "家长",
//       checked: true,
//     },
//     {
//       value: "1",
//       text: "老师",
//       checked: false,
//     },
//   ];
  const formList = [
    {
      key:'telephone',
      titleIcon: 'user',
      placeholder: "请输入手机号",
      type: "phone",
      value: numberVal,
    },
    {
      key:'verifyCode',
      titleIcon: "lock",
      placeholder: "请输入验证码",
      type: "number",
      value: numberVal,
      text: "请输入验证码",
    },
    {
        key:'password',
        titleIcon: "lock",
        placeholder: "请输入密码",
        type: "number",
        value: numberVal,
      },
      {
        key:'password',
        titleIcon: "lock",
        placeholder: "请再次输入密码",
        type: "number",
        value: numberVal,
      },
  ]
  const handleChange = (e,record) => {
    record.value = e
  }
  //请求验证码
  const handleVerifyCode = () => {
    //获取输入的手机号
    const telephone = formList.find((item) => item.key == "telephone").value;
    dispatch({
      type: "users/getVerifyCode",
      payload: {
        telephone: telephone,
        type: 0,
      },
    });
  };
  const handleNav = () => {
    Taro.navigateTo({ url: "/pages/login/login" });
  };
  //登录
  const handleLogin = () => {
    const formObj = formList.reduce((p, n) => {
      const { key } = n;
      return Object.assign(p, { [key]: n.value });
    }, {});
    //判断输入是否为空
    const nullObj = formList.find(item => item.value == '')
    console.log(formObj,'obj')
    if(nullObj){
      Taro.showToast({
        title:`${nullObj.placeholder}`,
        icon:'error'
      })
    } else {
      dispatch({
        type:'users/getForgetPass',
        payload:formObj
      }).then(res => {
        console.log(res,'res>>>>')
        if(res.status == 200){
          Taro.atMessage({
            'message':'登录成功',
            'type':'success'            
          })
          //切换到主页
          Taro.switchTab({ url: "/pages/login/login" });
        }else{
          Taro.atMessage({
            'message':res.message,
            'type':'error'
          })
        }
      })
    }
  };
  
  return (
    <View className='index'>
      <View className='container'>
      <View className='reset'>注册</View>
        <View className='login-input'>
          <AtForm>
            {formList.map((item, index) => {
              return (
                <View key={index}>
                  <AtInput
                    key={index}
                    // className={item.className ? "error" : ""}
                    title={<AtIcon value={item.titleIcon} size={25} color='#28a1fc'></AtIcon>}
                    placeholder={item.placeholder}
                    type={item.type}
                    value={item.value}
                    required={item.required}
                    // onBlur={item.key == 'telephone' ? () => handleBlur(item) : ''}
                    onChange={(e) => handleChange(e, item)}
                  >
                    {item.text && (
                      <View
                        style={{ borderLeft: "1rpx solid #999" }}
                        onClick={() => handleVerifyCode()}
                      >
                        {item.text}
                      </View>
                    )}
                  </AtInput>
                  {/* {item.className == 'IsNull' && (
                    <View className='error-tip'>{item.placeholder}</View>
                  )} */}
                </View>
              );
            })}
          </AtForm>
        </View>
        <View className='forget' onClick={handleNav}>
          返回登录
        </View>
        <View className='login-button'>
          <GradientButton
            type='primary'
            className='login'
            onClick={handleLogin}
          >
            确认
          </GradientButton>
        </View>
      </View>
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({

}))(ForgetPass);
