import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Taro, { useRouter } from "@tarojs/taro";
import {
  View,
  Form,
  Image,
  Picker,
  RadioGroup,
  Label,
  Radio,
  Input,
  Button
} from "@tarojs/components";
import { AtForm, AtButton, AtListItem, AtInput, AtMessage } from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import LoginInput from '@app/component/LoginInput';
import user from "@static/user-icon.png";
import lock from "@static/lock-icon.png";
import classIcon from "@static/class-icon.png";
import studentName from "@static/student-icon.png";
import relative from "@static/relative-icon.png";

import "./Register.scss";

function Register(props) {
  console.log(props, "props");
  const { dispatch, classList } = props;
  const [loginUserType, setLoginUserType] = useState(0);

  useEffect(() => {
    dispatch({
      type: "users/getClassAll",
    });
  }, []);
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

  const teacherList = [
    {
      key: "telephone",
      titleIcon: user,
      placeholder: "请输入手机号",
      type: "phone",
      value: '',
    },
    {
      key: "verifyCode",
      titleIcon: "",
      placeholder: "请输入验证码",
      type: "number",
      value: '',
      text: "获取验证码",
    },
    {
      key: "password",
      titleIcon: lock,
      placeholder: "请输入密码",
      type: "password",
      value: '',
    },
  ]
  const parentList = [
    {
      key: "telephone",
      titleIcon: user,
      placeholder: "请输入手机号",
      type: "phone",
      value: '',
    },
    {
      key: "verifyCode",
      titleIcon: "",
      placeholder: "请输入验证码",
      type: "number",
      value: '',
      text: "获取验证码",
    },
    {
      key: "password",
      titleIcon: lock,
      placeholder: "请输入密码",
      type: "password",
      value: '',
    },
    {
      key: "studentNo",
      titleIcon: lock,
      placeholder: "请输入学生学号",
      type: "text",
      value: '',
    },
    {
      key: "relative",
      titleIcon: lock,
      placeholder: "请输入关系",
      type: "text",
      value: '',
    },
  ]
  //选择身份：0：家长，1：老师
  const handleCheckChange = (e) => {
    setLoginUserType(parseInt(e.detail.value));
  };
 

  return (
    <View className='index'>
      <View className='container'>
        <View className='reset'>注册</View>
        <View className='login-input'>
        <RadioGroup onChange={handleCheckChange}>
          {checkList.map((item, index) => {
            return (
              <Label key={index}>
                <Radio
                  style={{ marginRight: "64rpx" }}
                  value={item.value}
                  checked={item.checked}
                >
                  {item.text}
                </Radio>
              </Label>
            );
          })}
        </RadioGroup>
          <LoginInput loginType={1} loginUserType={loginUserType} classList={classList} formList={loginUserType == 0 ? parentList : teacherList} />
          {/* <AtForm name='registerForm' onSubmit={handleSubmit}>
          <Picker name='classNo' mode='selector' range={selector} onChange={handleClassChange}>
             <AtInput
               placeholder='请选择班级(家长端必填)'
               disabled
               title={
                <Image
                  src={classIcon}
                  style={{ width: "48rpx", height: "48rpx" }}
                  color='#25e2ff'
                ></Image>
              }
               value={selectorChecked.className}
             />
          </Picker>
            {formList.map((item, index) => {
              return (
                  <AtInput
                    key={index}
                    name={item.key}
                    title={
                      <Image
                        src={item.titleIcon}
                        style={{ width: "48rpx", height: "48rpx" }}
                        color='#25e2ff'
                      ></Image>
                    }
                    placeholder={item.placeholder}
                    type={item.type}
                    value={item.value}
                    required={item.required}
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
              );
            })}
            <Button className='submit' formType='submit'>注册111</Button>

            <GradientButton
              type='primary'
              className='send-button'
              // onClick={() => handleLogin()}
              formType='submit'
            >
           注册
          </GradientButton>
          </AtForm> */}
        </View>
        <View className='login-button'>
          
        </View>
      </View>
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  classList: state.users.classList,
}))(Register);
