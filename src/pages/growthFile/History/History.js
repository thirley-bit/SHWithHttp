// import { useState, createContext } from 'react'
import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import infoScore from "@static/infoScore.png";
import list from "@static/list.png";
import comment from "@static/comment.png";
import study from "@static/study.png";
import show from "@static/show.png";
import rewards from "@static/rewards.png";
import punish from "@static/punish.png";
import checkIn from "@static/checkIn.png";
import "./History.scss";

function History() {
  let leftList = [
    {
      id: 0,
      name: "学习成绩",
      img: infoScore,
      url: "/pages/GrowthFile/Info/Info",
    },
    
    {
      id: 2,
      name: "学科评价",
      img: comment,
      url: "/pages/GrowthFile/Quality/Quality",
    },
    {
      id: 4,
      name: "日常表现",
      img: show,
      url: "/pages/GrowthFile/History/History",
    },
    {
      id: 6,
      name: "惩罚记录",
      img: punish,
      url: "/pages/GrowthFile/History/History",
    },
  ];
  let rightList = [
    {
      id: 1,
      name: "作业列表",
      img: list,
      url: "/pages/GrowthFile/History/History",
    },
    {
      id: 3,
      name: "课外学习",
      img: study,
      url: "/pages/GrowthFile/Info/Info",
    },
    
    {
      id: 5,
      name: "荣誉记录",
      img: rewards,
      url: "/pages/GrowthFile/Quality/Quality",
    },
    
    {
      id: 7,
      name: "考勤状况",
      img: checkIn,
      url: "/pages/GrowthFile/History/CheckIn/CheckIn",
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
export default History;
