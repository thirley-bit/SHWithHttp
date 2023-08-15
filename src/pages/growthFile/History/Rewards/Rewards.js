// import { useState, createContext } from 'react'
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
// import list from "@static/list.png";
// import comment from "@static/comment.png";
// import study from "@static/study.png";
// import rewards from "@static/rewards.png";
// import punish from "@static/punish.png";
// import checkIn from "@static/checkIn.png";
import "./Rewards.scss";

function Rewards() {
  
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='个人成长史' />
      rewards
    </View>
  );
}
export default Rewards;
