// import { useState, createContext } from 'react'
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import morality from "@static/morality.png";
import citizens from "@static/citizens-quality.png";
import sport from "@static/sport.png";
import self from "@static/self-learn.png";
import social from "@static/social.png";
import artistic from "@static/artistic.png";
import punish from "@static/punish.png";
import checkIn from "@static/checkIn.png";
import "./Quality.scss";

function Quality() {
  let leftList = [
    {
      id: 0,
      name: "德育",
      img: morality,
      url: "/pages/GrowthFile/Info/Info",
    },
    
    {
      id: 2,
      name: "运动与健康",
      img: sport,
      url: "/pages/GrowthFile/Quality/Quality",
    },
    {
      id: 4,
      name: "社会交流能力",
      img: social,
      url: "/pages/GrowthFile/History/History",
    },
  ];
  let rightList = [
    {
      id: 1,
      name: "公民素养",
      img: citizens,
      url: "/pages/GrowthFile/History/History",
    },
    {
      id: 3,
      name: "自主学习能力",
      img: self,
      url: "/pages/GrowthFile/Info/Info",
    },
    
    {
      id: 5,
      name: "艺术修养",
      img: artistic,
      url: "/pages/GrowthFile/Quality/Quality",
    },
  ]
  const handleNav = (item) => {
    console.log(item);
    Taro.navigateTo({
      url: item.url,
    });
  };
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='个人成长史' />
      <View className='history'>
        <View className='left'>
        {leftList.map((item, index) => {
          return (
            <View
              key={index}
              className='growth'
              onClick={() => handleNav(item)}
            >
              <View className='growth-name'>{item.name}</View>
              <Image src={item.img} style='width:100%;height:100%;' />
            </View>
          );
        })}
        </View>
        <View className='right'>
        {rightList.map((item, index) => {
          return (
            <View
              key={index}
              className='growth'
              onClick={() => handleNav(item)}
            >
              <View className='growth-name'>{item.name}</View>
              <Image src={item.img} style='width:100%;height:100%;' />
            </View>
          );
        })}
        </View>
      </View>
    </View>
  );
}
export default Quality;
