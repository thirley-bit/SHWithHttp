// import { useState, createContext } from 'react'
import { View, Image, Text } from "@tarojs/components";
import { AtDivider, AtAvatar } from "taro-ui";
import Taro from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import info from "@static/info.png";
import history from "@static/history.png";
import quality from "@static/quality.png";
import "./GrowthFile.scss";
import "../../component/FeedBack/index.scss";

function GrowthFile() {
  let settingList = [
    {
      id: 0,
      name: "个人信息",
      img: info,
      url: "/pages/GrowthFile/Info/Info",
    },
    {
      id: 1,
      name: "个人成长史",
      img: history,
      url: "/pages/GrowthFile/History/History",
    },
    {
      id: 2,
      name: "综合素质评价",
      img: quality,
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
