import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';

import "./CreateClass.scss";

function CreateClass(props) {
 
  return (
    <View className='index'>
    <NavTab back title='孩子信息' />
    <View style={{margin:'50% 40%'}}>暂无内容</View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(CreateClass);
