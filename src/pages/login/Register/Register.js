import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Taro, { useRouter } from "@tarojs/taro";
import { View, RadioGroup, Label, Radio } from "@tarojs/components";
import { AtMessage } from "taro-ui";
import LoginInput from "@app/component/LoginInput/LoginInput";
import user from "@static/user-icon.png";
import lock from "@static/lock-icon.png";
import student from "@static/student-icon.png";
import relative from "@static/relative-icon.png";
import "./Register.scss";

function Register(props) {
  const { dispatch } = props;
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
      value: "",
    },
    {
      key: "verifyCode",
      titleIcon: "",
      placeholder: "请输入验证码",
      type: "number",
      value: "",
      text: "获取验证码",
    },
    {
      key: "password",
      titleIcon: lock,
      placeholder: "请输入密码",
      type: "password",
      value: "",
    },
  ];
  const parentList = [
    {
      key: "telephone",
      titleIcon: user,
      placeholder: "请输入手机号",
      type: "phone",
      value: "",
    },
    {
      key: "verifyCode",
      titleIcon: "",
      placeholder: "请输入验证码",
      type: "number",
      value: "",
      text: "获取验证码",
    },
    {
      key: "password",
      titleIcon: lock,
      placeholder: "请输入密码",
      type: "password",
      value: "",
    },
    {
      key: "studentNo",
      titleIcon: student,
      placeholder: "请输入学生学号",
      type: "text",
      value: "",
    },
    {
      key: "relative",
      titleIcon: relative,
      placeholder: "请输入关系",
      type: "text",
      value: "",
    },
  ];
  //选择身份：0：家长，1：老师
  const handleCheckChange = (e) => {
    setLoginUserType(parseInt(e.detail.value));
  };

  return (
    <View className='index'>
      <View className='container'>
        <View className='reset'>注册账号</View>
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
          <LoginInput
            loginType={1}
            loginUserType={loginUserType}
            formList={loginUserType == 0 ? parentList : teacherList}
          />
        </View>
        <View className='login-button'></View>
      </View>
      <AtMessage />
    </View>
  );
}
export default connect(() => ({
}))(Register);
