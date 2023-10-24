import { useState } from "react";
import { connect } from "react-redux";
import { View, Form, Button } from "@tarojs/components";
import { AtDivider, AtInput, AtMessage } from "taro-ui";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import InputItem from "./InputItem";
import "./ChangePassword.scss";

function ChangePassword(props) {
  const { dispatch, identity } = props;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [sendOk, setSendOk] = useState(0); //校验两次输入的新密码是否相同：0：未输入，1：输入相同，2：输入不同，出现提示信息

  const handleOldPassInput = (e) => {
    setOldPassword(e.detail.value);
  };
  //新密码第一次输入
  const handleNewPassInput = (e) => {
    let value = e.detail.value;
    if (value.length > 0) {
      setNewPassword(value);
    }
  };
  //新密码第二次输入
  const handlePassAgainInput = (e) => {
    let value = e.detail.value;
    if (value.length > 0 && value == newPassword) {
      setSendOk(1);
    } else {
      setSendOk(2);
    }
  };
  //请求接口
  const handleSend = () => {
    if (sendOk == 1 && oldPassword.length > 0) {
      dispatch({
        type: "users/getUpdatePassword",
        payload: {
          telephone:identity.telephone,
          password: newPassword,
          oldPassword: oldPassword,
        },
      }).then((res) => {
        if (res.status == 200) {
          Taro.atMessage({
            message: res.message,
            type: "success",
          });
        } else {
          Taro.atMessage({
            message: res.message,
            type: "error",
          });
        }
      });
    } else {
      Taro.atMessage({
        message: "输入不能为空",
        type: "error",
      });
    }
  };
  return (
    <View className='index'>
      <NavTab back title='修改密码' />
      <View className='pass'>
        <Form>
          <InputItem
            value={oldPassword}
            color='#0ac42f'
            label='填写密码'
            name='writePass'
            handleInput={handleOldPassInput}
          />
          <View className='pre'>请输入之前正确使用的密码</View>
          <InputItem
            color='#0ac42f'
            label='新密码'
            name='newPass'
            handleInput={handleNewPassInput}
          />
          <AtDivider className='divider' height={2} />
          <InputItem
            color='red'
            label='再次输入'
            name='nextPass'
            handleInput={handlePassAgainInput}
          />
          {sendOk == 2 && (
            <View
              style={{
                color: "#FF2E26",
                fontSize: "24rpx",
                marginLeft: "28rpx",
              }}
            >
              两次输入的密码不一致
            </View>
          )}
          <GradientButton
            type='primary'
            className='send-button'
            onClick={() => handleSend()}
          >
            确定修改
          </GradientButton>
          <AtMessage />
        </Form>
      </View>
    </View>
  );
}
export default connect((state) => ({
  identity: state.users.identity,
}))(ChangePassword);
