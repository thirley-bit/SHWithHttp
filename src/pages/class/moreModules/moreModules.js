import Taro from "@tarojs/taro";
import { useState } from "react";
import { View, Navigator, CoverImage, Text } from "@tarojs/components";
import p2 from "../../../static/main.jpg";
import "./moreModules.scss";

//更多应用页面
function Notice() {
  const safetyList = [
    {
      id: 0,
      title: "安全确认",
      img: p2,
      pageUrl: "/pages/class/sign/sign",
    },
    {
      id: 1,
      title: "通知",
      img: p2,
      pageUrl: "/pages/class/notice/notice",
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
      pageUrl: "/pages/class/homeWork/homeWork",
    },
    {
      id: 1,
      title: "成绩",
      img: p2,
      pageUrl: "/pages/class/Score/Score",
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
        pageUrl: "/pages/class/cookBook/cookBook",
      },
      {
        id: 2,
        title: "获奖",
        img: p2,
        pageUrl: "/pages/addressList/message/chooseUser/chooseUser",
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
