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
      img: 'http://123.57.149.51/upload/upload_img/20231024/c229044c0802cd406716ad973a3b2e58.png',
      url: "/pages/GrowthFile/Info/Info",
    },
    {
      id: 1,
      name: "综合评价",
      img: 'http://123.57.149.51/upload/upload_img/20231024/293af0a6ab82a77b32e014e2ed09871a.png',
      url: "/pages/GrowthFile/History/History",
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
      <View className='growth'>
        {settingList.map((item, index) => {
          return (
            <View
              key={index}
              className='growth-content'
              onClick={() => handleNav(item)}
            >
              <View className='growth-msg'>
                <View className='growth-name'>{item.name}</View>
              </View>
              <Image src={item.img} style='width:548rpx;height:338rpx;' />
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default GrowthFile;
