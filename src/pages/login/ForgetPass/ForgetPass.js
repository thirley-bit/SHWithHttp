import { connect } from "react-redux";
import {
  View,
} from "@tarojs/components";
import {  AtMessage } from "taro-ui";
import LoginInput from "@app/component/LoginInput/LoginInput";

import user from "@static/user-icon.png";
import lock from "@static/lock-icon.png";
import "./ForgetPass.scss";

function ForgetPass(props) {
  const formList = [
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
      text: "请输入验证码",
    },
    {
      key: "password",
      titleIcon: lock,
      placeholder: "请输入密码",
      type: "number",
      value: "",
    },
    {
      key: "password",
      titleIcon: lock,
      placeholder: "请再次输入密码",
      type: "number",
      value: "",
    },
  ];
  return (
    <View className='index'>
      <View className='container'>
        <View className='reset'>忘记密码</View>
        <View className='login-input'>
          <LoginInput
            loginType={2}
            formList={formList}
          />
        </View>
      </View>
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({}))(ForgetPass);
