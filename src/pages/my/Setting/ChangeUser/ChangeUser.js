// import { useState, createContext } from 'react'
import { View, Form, InputItem, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtIcon } from 'taro-ui';
import NavTab from "@app/component/NavTab/NavTab";
import normal from "@static/normal.png";
import register from "@static/register.png"
// import comment from "@static/comment.png";
// import study from "@static/study.png";
// import rewards from "@static/rewards.png";
// import punish from "@static/punish.png";
// import checkIn from "@static/checkIn.png";
import "./ChangeUser.scss";

function ChangeUser() {
    const handleAdd = () => {
        Taro.navigateTo({url:'/pages/my/Setting/ChangeUser/AddUser/AddUser'})
    }
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='切换账号' />
      <View className='account'>
     <View className='list'>
      <View className='head'>
        <Image style='width:76rpx;height:76rpx' src={normal} />
        <View className='cont'>
          <View className='title'>张三的爸爸</View>
          <View className='phone'>19382789098</View>
        </View>
      </View>
      <View>
      <AtIcon  value='check'  color='#1AA5FF'></AtIcon>
      </View>
     </View>
     <View className='list' onClick={handleAdd}>
      <View className='head'>
        <Image style='width:76rpx;height:76rpx' src={register} />
        <View className='cont'>
          <View className='title'>添加或者注册账号</View>
        </View>
      </View>
    
     </View>
    </View>
    </View>
  );
}
export default ChangeUser;
