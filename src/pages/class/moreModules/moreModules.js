import Taro from "@tarojs/taro";
import { useState } from "react";
import { View, Navigator, Image, Text } from "@tarojs/components";
import NavTab from '@app/component/NavTab/NavTab';
import ModulesDisplay from '@app/component/ModulesDisplay/ModulesDisplay';

import homework from "@static/homework.png";
import notice from "@static/notice.png";
import message from "@static/message.png";
import sign from "@static/sign.png";
import score from "@static/score.png"
import download from "@static/download.png"
import examchannel from "@static/examchannel.png"
import policy from "@static/policy.png"
import photo from "@static/photo.png"
import cookbook from "@static/cookbook.png"
import display from "@static/display.png"
import "./MoreModules.scss";

//更多应用页面
function Notice() {
  const safetyList = [
    {
      id: 0,
      title: "安全确认",
      img: sign,
      pageUrl: "/pages/class/Sign/Sign",
    },
    {
      id: 1,
      title: "通知",
      img: notice,
      pageUrl: "/pages/class/Notice/Notice",
    },
    {
      id: 2,
      title: "私信",
      img: message,
      pageUrl: "/pages/addressList/message/message",
    },
  ];
  const constructionList = [
    {
      id: 0,
      title: "作业",
      img: homework,
      pageUrl: "/pages/class/HomeWork/HomeWork",
    },
    {
      id: 1,
      title: "成绩",
      img: score,
      pageUrl: "/pages/class/Score/Score",
    },
    {
      id: 2,
      title: "资料下载",
      img: download,
      pageUrl: "/pages/class/DataDownLoad/DataDownLoad",
    },
    {
      id: 3,
      title: "参赛通道",
      img: examchannel,
      pageUrl: "/pages/class/ExamChannel/ExamChannel",
    },
    {
      id: 4,
      title: "优惠政策",
      img: policy,
      pageUrl: "/pages/class/Policy/Policy",
    },
  ];
  const shareList = [
    {
        id: 0,
        title: "相册",
        img: photo,
        pageUrl: "/pages/class/Photos/Photos",
      },
      {
        id: 1,
        title: "校园食谱",
        img: cookbook,
        pageUrl: "/pages/class/CookBook/CookBook",
      },
      {
        id: 2,
        title: "展示墙",
        img: display,
        pageUrl: "/pages/class/DisplayPublic/DisplayPublic",
      },
  ]

  return (
    <View className='index'>
    <NavTab back title='更多' />
    <ModulesDisplay title='家校安全' list={safetyList}  />
    <ModulesDisplay title='家校共建' list={constructionList}  />
    <ModulesDisplay title='家校共享' list={shareList}  />
      {/* <View className='head'>
        <Text className='text'>家校安全</Text>
        <View>
          {safetyList.map((item, index) => {
            return (
              <View className='formItem' key={index}>
                <Navigator url={`${item.pageUrl}`}>
                  <View className='img'>
                    <Image className='image' src={item.img} />
                  </View>
                  <View className='title'>{item.title}</View>
                </Navigator>
              </View>
            );
          })}
        </View>
      </View> */}
      {/* <View className='head'>
        <Text className='text'>家校共建</Text>
        <View>
          {constructionList.map((item, index) => {
            return (
              <View className='formItem' key={index}>
                <Navigator url={`${item.pageUrl}`}>
                  <View className='img'>
                    <Image className='image' src={item.img} />
                  </View>
                  <View className='title'>{item.title}</View>
                </Navigator>
              </View>
            );
          })}
        </View>
      </View>
      <View className='head'>
        <Text className='text'>家校共享</Text>
        <View>
          {shareList.map((item, index) => {
            return (
              <View className='formItem' key={index}>
                <Navigator url={`${item.pageUrl}`}>
                  <View className='img'>
                    <Image className='image' src={item.img} />
                  </View>
                  <View className='title'>{item.title}</View>
                </Navigator>
              </View>
            );
          })}
        </View>
      </View> */}
    </View>
  );
}
export default Notice;
