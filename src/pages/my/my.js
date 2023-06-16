
import { useEffect } from "react";
import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { AtAvatar, AtCard, AtDivider, AtIcon } from "taro-ui";

import "./my.scss";

function My(props) {
  const { dispatch, user, identity, settingList } = props;
  console.log(props);
  useEffect(() => {
    dispatch({
      type: "users/getIdentity",
    });
    dispatch({
      type: "users/getUser",
    });
  }, []);
  const handleInfo = () => {
    Taro.navigateTo({url:'/pages/my/ChildMsg/ChildMsg'})
  };
  const handleUpload = () => {
    console.log("upload");
  };
  const handleChange = () => {
    console.log("change");
    Taro.navigateTo({url:'/pages/component/JoinedClass/JoinedClass'})
  };
  const handleNav = () => {
    console.log("nav");
  };
  return (
    <View className='main'>
      <View className='at-row at-row__align--center my-head'>
        <View className='at-col at-col-3 avatar'>
          <View onClick={handleUpload}>
            <AtAvatar circle image={identity.avatar}></AtAvatar>
          </View>
          <View className='icon' onClick={handleChange}>
            <AtIcon value='arrow-right' className='icon-top'></AtIcon>
            <AtIcon value='arrow-left' className='icon-bottom'></AtIcon>
          </View>
        </View>
        <View className='at-col at-col-6'>
          <Text className='name'>{identity.nick_name}</Text>
          <Text style='font-size:28rpx;'>{identity.student_name}</Text>
        </View>
        <View className='at-col at-col-3'>
          <View onClick={handleInfo}>
            孩子信息
            <AtIcon value='chevron-right' size='18'></AtIcon>
          </View>
        </View>
      </View>

      <View className='my-content'>
        {settingList.map((item, index) => {
          return (
            <View key={index} style='backgroundColor:#fff'>
              <View className='at-row at-row__align--end my-content'>
                <View className='at-col at-col-2 avatar'>
                  <AtAvatar
                    circle
                    size='small'
                    image={item.avatar}
                  ></AtAvatar>
                </View>
                <View className='at-col at-col-9'>
                  <Text className='name'>{item.name}</Text>
                </View>
                <View className='at-col at-col-3 right' onClick={handleNav}>
                  <AtIcon value='chevron-right'></AtIcon>
                </View>
                <View className='divider'>
                <AtDivider height={1} />
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
}))(My);
