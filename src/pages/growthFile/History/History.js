// import { useState, createContext } from 'react'
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import ModulesDisplay from "@app/component/ModulesDisplay/ModulesDisplay";

import rewards from "@static/rewards.png";
import educate from "@static/educate.png";
import sport from "@static/sport.png";
import intellect from "@static/intellect.png";
import art from "@static/art.png";
import scorelist from "@static/scorelist.png";
import hw from "@static/hw.png";
import displayshow from "@static/displayshow.png";
import checkIn from "@static/checkIn.png";
import labour from "@static/labour.png";
import "./History.scss";

function History() {
  const historyList = [
    {
      id: 0,
      title: "奖惩",
      img: rewards,
      pageUrl: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    {
      id: 1,
      title: "德育",
      img: educate,
      pageUrl: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    {
      id: 2,
      title: "体育",
      img: sport,
      pageUrl: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    {
      id: 3,
      title: "智育",
      img: intellect,
      pageUrl: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    {
      id: 4,
      title: "劳育",
      img: labour,
      pageUrl: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    {
      id: 5,
      title: "美育",
      img: art,
      pageUrl: "/pages/GrowthFile/History/Rewards/Rewards",
    },
  ];
  let commentList = [
    {
      id: 0,
      title: "学习成绩",
      img: scorelist,
      pageUrl: "/pages/class/Score/Score",
    },
    {
      id: 1,
      title: "作业列表",
      img: hw,
      pageUrl: "/pages/class/HomeWork/HomeWork",
    },
    {
      id: 2,
      title: "日常表现",
      img: displayshow,
      pageUrl: "/pages/GrowthFile/History/Rewards/Rewards",
    },
    {
      id: 3,
      title: "考勤状况",
      img: checkIn,
      pageUrl: "/pages/GrowthFile/History/CheckIn/CheckIn",
    },
  ];
  // let leftList = [
  //   {
  //     id: 0,
  //     name: "学习成绩+学科评价",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/cb6a44bda7ea15d2d6fb366976d34e7b.png',
  //     url: "/pages/class/Score/Score",
  //   },
  //   // {
  //   //   id: 2,
  //   //   name: "学科评价",
  //   //   img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/3687c9d9155df7a026736191e90902f2.png',
  //   //   url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   // },
  //   {
  //     id: 2,
  //     name: "奖惩+日常表现",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/1a8770573f8295ba4a69285747e5e983.png',
  //     url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   },
  //      {
  //     id: 4,
  //     name: "德育",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/3687c9d9155df7a026736191e90902f2.png',
  //     url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   },
  //   {
  //     id: 6,
  //     name: "体育",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/017bf6f21a3b7b200a2f81f9745f858d.png',
  //     url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   },
  //   {
  //     id: 8,
  //     name: "劳动",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/017bf6f21a3b7b200a2f81f9745f858d.png',
  //     url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   },
  // ];
  // let rightList = [
  //   {
  //     id: 1,
  //     name: "作业列表",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/008f4e29328f84dbfc1abefd69b397a2.png',
  //     url: "/pages/class/HomeWork/HomeWork",
  //   },
  //   // {
  //   //   id: 3,
  //   //   name: "课外学习",
  //   //   img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/e16b206f9b241c06bc89aab449fb166b.png',
  //   //   url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   // },
  //   {
  //     id: 3,
  //     name: "课外学习",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/e16b206f9b241c06bc89aab449fb166b.png',
  //     url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   },

  //   {
  //     id: 5,
  //     name: "智育",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/a074cb90ee4ab6efbb784398ee8f34c5.png',
  //     url: "/pages/GrowthFile/History/Rewards/Rewards",
  //   },
  //   {
  //     id: 7,
  //     name: "美德",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/ff0192f186ac7d6806e1ee31608d4c40.png',
  //     url: "/pages/GrowthFile/History/CheckIn/CheckIn",
  //   },
  //   {
  //     id: 9,
  //     name: "考勤状况",
  //     img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/ff0192f186ac7d6806e1ee31608d4c40.png',
  //     url: "/pages/GrowthFile/History/CheckIn/CheckIn",
  //   },
  // ]

  // const handleNav = (item) => {
  //   console.log(item);
  //   Taro.navigateTo({
  //     url: item.url,
  //   });
  // };
  return (
    <View className='index'>
      <NavTab back title='个人成长史' />
      <ModulesDisplay title='个人成长史' list={historyList} />
      <ModulesDisplay title='个人评价' list={commentList} />
      {/* <View className='history'>
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
      </View> */}
      {/* <GradientButton type='primary' className='send-button'>查看最终报告</GradientButton> */}
    </View>
  );
}
export default History;
