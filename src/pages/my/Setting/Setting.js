import { View } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { AtIcon, AtMessage } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import "./Setting.scss";

function Setting(props) {
  const { dispatch } = props;
  const list = [
    {
      name: "密码修改",
      url: "/pages/my/Setting/ChangePassword/ChangePassword",
    },
    {
      name: "切换账号",
      url: "/pages/my/Setting/ChangeUser/ChangeUser",
    },
    {
      name: "意见反馈",
      url: "/pages/my/Setting/FeedBack/FeedBack",
    },
  ];
  // 跳转至对应页面
  const handleNav = (value) => {
    Taro.navigateTo({ url: value });
  };
  // 退出登录
  const handleExit = () => {
    dispatch({
      type: "users/getLogout",
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: "退出成功",
          type: "success",
        });
        Taro.navigateTo({ url: "/pages/login/login" });
      }
    });
  };
  return (
    <View className='index'>
      <NavTab back title='设置' />
      {/* 列表 */}
      <View className='check'>
        {list.map((item, index) => (
          <View
            className='design'
            key={index}
            onClick={() => handleNav(item.url)}
          >
            <View className='teach'>
              <View> {item.name} </View>
              {/* 是否有新消息 */}
              {item.number && <View className='num'> {item.number} </View>}
            </View>
            <View className='right-icon'>
              <AtIcon value='chevron-right' color='#999'></AtIcon>
            </View>
          </View>
        ))}
      </View>
      {/* 退出登录 */}
      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleExit()}
      >
        退出登录
      </GradientButton>
      {/* 消息提示组件 */}
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(Setting);
