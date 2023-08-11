import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';

import "./WaitTodo.scss";

function WaitTodo(props) {
 
  return (
    <View className='index'>
    <NavTab needBackIcon mainTitle='孩子信息' />
    111
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(WaitTodo);
