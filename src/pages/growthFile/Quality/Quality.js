// import { useState, createContext } from 'react'
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
// import morality from "@static/morality.png";
// import citizens from "@static/citizens-quality.png";
// import sport from "@static/sport.png";
// import self from "@static/self-learn.png";
// import social from "@static/social.png";
// import artistic from "@static/artistic.png";
// import punish from "@static/punish.png";
// import checkIn from "@static/checkIn.png";
import "./Quality.scss";

function Quality() {
  let leftList = [
    {
      id: 0,
      name: "德育",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/300167903a2977434dbe8a225351741b.png',
      url: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    
    {
      id: 2,
      name: "运动与健康",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/e55fe4fce19293a839d2d7e178353b6f.png',
      url: "/pages/GrowthFile/Quality/Sport/Sport",
    },
    {
      id: 4,
      name: "社会交流能力",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/2ef8e1306504519b3919904b0df01638.png',
      url: "/pages/GrowthFile/History/Rewards/Rewards",
    },
  ];
  let rightList = [
    {
      id: 1,
      name: "公民素养",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/dd24b30a0e8699d3501f53f162cdc301.png',
      url: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    {
      id: 3,
      name: "自主学习能力",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/1afb6e3324164c7b2c3dea554c9000ee.png',
      url: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    
    {
      id: 5,
      name: "艺术修养",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/87b04b190f8a63a6e8607874a51497b7.png',
      url: "/pages/GrowthFile/History/Rewards/Rewards",
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
      <NavTab back title='个人成长史' />
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
