import Taro from "@tarojs/taro";
import { useState } from "react";
import { View, Navigator, CoverImage, Text } from "@tarojs/components";
import p2 from "../../../static/main.jpg";
import "./moreModules.scss";

//更多应用页面
function Notice(props) {
  const safetyList = [
    {
      id: 0,
      title: "安全确认",
      img: p2,
      pageUrl: "/pages/class/Sign/Sign",
    },
    {
      id: 1,
      title: "通知",
      img: p2,
      pageUrl: "/pages/class/Notice/Notice",
    },
    {
      id: 2,
      title: "私信",
      img: p2,
      pageUrl: "/pages/addressList/message/message",
    },
  ];
  const constructionList = [
    {
      id: 0,
      title: "作业",
      img: p2,
      pageUrl: "/pages/class/HomeWork/HomeWork",
    },
    {
      id: 1,
      title: "成绩",
      img: p2,
      pageUrl: "/pages/class/Score/Score",
    },
    {
      id: 2,
      title: "资料下载",
      img: p2,
      pageUrl: "/pages/class/DataDownLoad/DataDownLoad",
    },
    {
      id: 3,
      title: "参赛通道",
      img: p2,
      pageUrl: "/pages/class/ExamChannel/ExamChannel",
    },
    {
      id: 4,
      title: "优惠政策",
      img: p2,
      pageUrl: "/pages/class/Policy/Policy",
    },
  ];
  const shareList = [
    {
        id: 0,
        title: "相册",
        img: p2,
        pageUrl: "/pages/class/Photos/Photos",
      },
      {
        id: 1,
        title: "校园食谱",
        img: p2,
        pageUrl: "/pages/class/CookBook/CookBook",
      },
      {
        id: 2,
        title: "展示墙",
        img: p2,
        pageUrl: "/pages/class/DisplayPublic/DisplayPublic",
      },
  ]

  return (
    <View className='index'>
      <View className='safety'>
        <Text>家校安全</Text>
        <View>
          {safetyList.map((item, index) => {
            return (
              <View className='formItem' key={index}>
                <Navigator url={`${item.pageUrl}`}>
                  <View className='img'>
                    <CoverImage src={item.img} />
                  </View>
                  <View className='text'>{item.title}</View>
                </Navigator>
              </View>
            );
          })}
        </View>
      </View>
      <View className='construction'>
        <Text>家校共建</Text>
        <View>
          {constructionList.map((item, index) => {
            return (
              <View className='formItem' key={index}>
                <Navigator url={`${item.pageUrl}`}>
                  <View className='img'>
                    <CoverImage src={item.img} />
                  </View>
                  <View className='text'>{item.title}</View>
                </Navigator>
              </View>
            );
          })}
        </View>
      </View>
      <View className='share'>
        <Text>家校共享</Text>
        <View>
          {shareList.map((item, index) => {
            return (
              <View className='formItem' key={index}>
                <Navigator url={`${item.pageUrl}`}>
                  <View className='img'>
                    <CoverImage src={item.img} />
                  </View>
                  <View className='title'>{item.title}</View>
                </Navigator>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
export default Notice;
