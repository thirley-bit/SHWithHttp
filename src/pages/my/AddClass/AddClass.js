import { View, Button, Input, Image } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';
import normal from "@static/normal.png";
import "./AddClass.scss";

function AddClass(props) {
  const onInput = (v) => {
    console.log(v);
  };

  const list = [
    {
      id: 0,
      class: "一年级三班",
      number: "62人",
      status: "很活跃",
      slogan: "努力学习，天天向上",
      avatar: "",
    },
    {
      id: 1,
      class: "一年级二班",
      number: "52人",
      status: "很活跃",
      slogan: "努力学习，天天向上",
    },
    {
      id: 2,
      class: "一年级一班",
      number: "45人",
      status: "很活跃",
      slogan: "努力学习，天天向上",
    },
    {
      id: 3,
      class: "一年级三班",
      number: "62人",
      status: "很活跃",
      slogan: "努力学习，天天向上",
    },
    {
      id: 4,
      class: "一年级三班",
      number: "62人",
      status: "很活跃",
      slogan: "努力学习，天天向上",
    },
    {
      id: 5,
      class: "一年级三班",
      number: "62人",
      status: "很活跃",
      slogan: "努力学习，天天向上",
    },
  ];

  return (
    <View className='index'>
      <NavTab back title='加入新班级' />
      <View className='new-class'>
        <View className='head'>
          <AtIcon
            value='search'
            color='#9e9e9e'
            className='search'
            size='16'
          ></AtIcon>
          <Input
            type='text'
            placeholder='请输入班级'
            className='input'
            onInput={onInput}
          />
        </View>
        <View className='team'>
          {list.map((item) => {
            return (
              <View className='chat' key={item.id}>
                <View className='left'>
                  <Image
                    style='width: 116rpx;height: 116rpx;'
                    src={item.avatar ? item.avatar : normal}
                  />
                  <View className='content'>
                    <View className='class'>{item.class}</View>
                    <View className='people'>
                      <View>{item.number}</View>
                      <View style={{ marginLeft: "23rpx", color: "#999" }}>
                        {item.status}
                      </View>
                    </View>
                    <View className='study'>{item.slogan}</View>
                  </View>
                </View>
                <View className='button'>
                    <GradientButton size='small' type='primary'>加入</GradientButton>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(AddClass);
