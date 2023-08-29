import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from '@tarojs/taro'
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';

import "./Review.scss";

function Review(props) {
    const list = [
        {
          name: "教学设计",
          number: "25",
          url:'/pages/my/AddClass/AddClass'
        },
        {
          name: "教学实施",
          number: "50",
          url:'/pages/my/AddClass/AddClass'
        },
        {
          name: "教学效果",
          number: "95",
          url:'/pages/my/AddClass/AddClass'
        },
      ];
      const handleNav = (value) => {
        Taro.navigateTo({url:value})
      }
      return (
        <View className='report'>
            
            <NavTab back title='年终总结' />
          <View className='head'>
            <View className='score'> 总分： 100 </View>
            <View className='score result'> 得分： 95 </View>
          </View>
          <View className='check'>
           
            {list.map((item,index) => (
              <View className='design' key={index}>
              <View className='teach'>
                <View> {item.name} </View>
               {item.number&& <View className='num'> {item.number} </View>}
              </View>
              <View className='right-icon' onClick={() => handleNav(item.url)}>
                <AtIcon value='chevron-right' color='#999'></AtIcon>
              </View>
            </View>
            ))}
          </View>
        </View>
      );
    };
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(Review);
