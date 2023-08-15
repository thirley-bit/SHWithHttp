// import { useState, createContext } from 'react'
import { View, Image, Text } from "@tarojs/components";
import { AtDivider, AtAvatar } from "taro-ui";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
// import info from "@static/info.png";
// import history from "@static/history.png";
// import quality from "@static/quality.png";
import "./GrowthFile.scss";
import "../../component/FeedBack/index.scss";

function GrowthFile() {
  let settingList = [
    {
      id: 0,
      name: "个人信息",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/85342d8c828a604c29428623671f380c.png',
      url: "/pages/GrowthFile/Info/Info",
    },
    {
      id: 1,
      name: "个人成长史",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/2dab3409e62e4d8504148f43dae2b6ac.png',
      url: "/pages/GrowthFile/History/History",
    },
    {
      id: 2,
      name: "综合素质评价",
      img: 'http:\/\/123.57.149.51\/upload\/upload_img\/20230815\/9cc9a7a188dde3a09e1c9811abc22d84.png',
      url: "/pages/GrowthFile/Quality/Quality",
    },
  ];
  const handleNav = (item) => {
    console.log(item);
    Taro.navigateTo({
      url: item.url,
    });
  };

  return (
    <View className='index'>
      <NavTab needBackIcon={false} mainTitle='诚道吉' />
      <View className='growth-content'>
        {settingList.map((item, index) => {
          return (
            <View
              key={index}
              className='growth'
              onClick={() => handleNav(item)}
            >
              <View className='growth-msg'>
                <View className='growth-name'>{item.name}</View>
              </View>
              <Image src={item.img} style='width:100%;height:100%;' />
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default GrowthFile;
