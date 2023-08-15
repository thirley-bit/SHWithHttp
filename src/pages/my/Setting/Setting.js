import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";

import "./Setting.scss";

function Setting(props) {
  const list = [
    {
      name: "密码修改",
      url: "/pages/my/Setting/ChangePassword/ChangePassword",
    },
    {
      name: "切换账号",
      url: "/pages/my/Setting/ChangeUser/ChangeUser",
    },
    {
      name: "意见反馈",
      url: "/pages/my/Setting/FeedBack/FeedBack",
    },
  ];
  const handleNav = (value) => {
    Taro.navigateTo({ url: value });
  };
  const handleExit = () => {
    Taro.navigateTo({url:'/pages/login/login'})
  }
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='设置' />
      <View className='head'></View>
      <View className='check'>
        {list.map((item, index) => (
          <View className='design' key={index}>
            <View className='teach'>
              <View> {item.name} </View>
              {item.number && <View className='num'> {item.number} </View>}
            </View>
            <View className='right-icon' onClick={() => handleNav(item.url)}>
              <AtIcon value='chevron-right' color='#999'></AtIcon>
            </View>
          </View>
        ))}
      </View>
      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleExit()}
      >
        退出登录
      </GradientButton>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(Setting);
