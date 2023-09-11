import { useState } from 'react'
import { connect } from 'react-redux';
import { View, Form, Button } from "@tarojs/components";
import { AtDivider, AtInput, AtMessage } from 'taro-ui';
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';
import InputItem from "./InputItem";
import "./ChangePassword.scss";

function ChangePassword(props) {
  const { dispatch, identity } = props
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passAgain, setPassAgain] = useState('')
  const [sendOk, setSendOk] = useState(0) //校验两次输入的新密码是否相同：0：未输入，1：输入相同，2：输入不同，出现提示信息
 
  const handleOldPassInput = (e) => {
    setOldPassword(e.detail.value)
  }
  const handleNewPassInput = (e) => {
    setNewPassword(e.detail.value)
  }
  const handlePassAgainInput = (e) => {
    setPassAgain(e.detail.value)
  }
  const handleBlur = () => {
      if(passAgain == newPassword && passAgain.length > 0){ //判断两次输入是否相同
        setSendOk(1)
      }else{
        setSendOk(2)
      }
  }
  const handleSend = () => {
    if(sendOk == 1 && oldPassword.length > 0){
      dispatch({
        type:'users/getUpdatePassword',
        payload:{
          telephone:identity.telephone,
          password:newPassword,
          oldPassword:oldPassword
      }
      }).then(res => {
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
      })
    }else{
      Taro.atMessage({
        message: '输入不能为空',
        type: "error",
      });
    }
  }
  return (
    <View className='index'>
      <NavTab back title='修改密码' />
      <View className='pass'>
        <Form >
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
            handleBlur={handleBlur}
            handleInput={handleNewPassInput}
          />
          <AtDivider className='divider' height={2} />
          <InputItem
            color='red'
            label='再次输入'
            name='nextPass'
            handleBlur={handleBlur}
            handleInput={handlePassAgainInput}
          />
         {sendOk == 2 ?  <View style={{color:'#FF2E26', fontSize:'24rpx',marginLeft:'28rpx'}}>两次输入的密码不一致</View> : '' } 
          <GradientButton type='primary'  className='send-button' onClick={() => handleSend()}>确定修改</GradientButton>
          <AtMessage />
        </Form>
      </View>
    </View>
  );
}
export default connect((state) => ({
  identity: state.users.identity
}))(ChangePassword);
