import { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { connect } from "react-redux";
import { AtAvatar, AtCard, AtDivider, AtIcon } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import Change from "@static/change.png";
import add from "@static/add.png";
import newPic from "@static/new.png";
import setting from "@static/setting.png";
import right from "@static/right.png";
import normal from "@static/normal.png"

import "./my.scss";

function My(props) {
  const { dispatch, user, identity } = props;
  console.log(props);
  let settingList = [
    {
      id: 0,
      name: "加入新班级",
      avatar: add,
    },
    {
      id: 1,
      name: "我的待办",
      avatar: newPic,
    },
    {
      id: 2,
      name: "设置",
      avatar: setting,
    },
  ];

  useEffect(() => {
    dispatch({
      type: "users/getIdentity",
    });
    dispatch({
      type: "users/getUser",
    });
  }, []);
  const handleInfo = () => {
    Taro.navigateTo({ url: "/pages/my/ChildMsg/ChildMsg" });
  };
  const handleUpload = () => {
    console.log("upload");
  };
  const handleChange = () => {
    console.log("change");
    Taro.navigateTo({ url: "/pages/addressList/Check/Check" });
  };
  const handleNav = () => {
    console.log("nav");
  };
  return (
    <View className='index'>
      <NavTab needBackIcon={false} mainTitle='诚道吉' />
      <View className='at-row at-row__align--center my-head'>
        <View className='at-col at-col-3 '>
          <View onClick={handleUpload} className='avatar'>
            <AtAvatar circle size='large'  image={identity.avatar ? identity.avatar : normal}></AtAvatar>
            {/* <Image className='image' src={identity.avatar} /> */}
          </View>
          <View className='icon' onClick={handleChange}>
              <Image className='head-image' src={Change} />
            </View>
        </View>
        <View className='at-col at-col-6 head'>
          <View className='head-name'>
            <Text className='name'>{identity.nick_name}</Text>
            <Text className='stu-name'>{identity.student_name}</Text>
          </View>
            
        </View>
        <View className='at-col at-col-2'>
          <View onClick={handleInfo} className='head-right'>
            孩子信息
            <AtIcon value='chevron-right' size='15'></AtIcon>
          </View>
        </View>
      </View>

      <View className='my-content'>
        {settingList.map((item, index) => {
          return (
            <View key={index}>
              <View className='at-row at-row__align--end content'>
                <View className='at-col at-col-2 avatar'>
                  {/* <AtAvatar
                    // circle
                    size='small'
                    image={item.avatar}
                  ></AtAvatar> */}
                  <Image className='image' src={item.avatar} />
                </View>
                <View className='at-col at-col-9 '>
                  <Text className='content-name'>{item.name}</Text>
                </View>
                <View className='at-col at-col-3 right' onClick={handleNav}>
                  {/* <AtIcon value='chevron-right' size='15'></AtIcon> */}
                  <Image className='image' src={right} />
                </View>
                <View className='divider'>
                  <AtDivider height={12} lineColor='#E6E6E6' />
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
