import { View, Image } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import homework from "@static/wait-homework.png"
import sign from "@static/wait-sign.png"
import notice from "@static/wait-notice.png"
import group from "@static/group-msg.png";
import msg from "@static/wait-msg.png";

import "./WaitTodo.scss";

function WaitTodo(props) {
  const todoList = [
    {
      id: "0",
      image: homework,
      name: "作业",
      number: "6",
    },
    {
      id: "1",
      image: sign,
      name: "安全确认",
      number: "166",
    },
    {
      id: "2",
      image: notice,
      name: "通知",
      number: "16",
    },
    {
      id: "3",
      image: group,
      name: "群消息",
      number: "9999",
    },
    {
      id: "4",
      image: msg,
      name: "私信",
      number: "16",
    },
  ];
  return (
    <View>
      <NavTab needBackIcon mainTitle='我的待办' />
      <View className='todo'>
        {todoList.map((item) => {
          const { id, name, image, number } = item;
          const leng = item.number.length;
          return (
            <View className='my-todo' key={id}>
              <View className='my-left'>
                <Image style='width: 46rpx;height: 46rpx;' src={image} />
                <View className='work'>{name}</View>
              </View>
              <View className='my-left'>
                {leng > 2 ? (
                  <View className='my-radius-two'>99+</View>
                ) : (
                  <View className='my-radius'>{number}</View>
                )}
                <View>
                  <AtIcon value='chevron-right' color='#999'></AtIcon>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(WaitTodo);
