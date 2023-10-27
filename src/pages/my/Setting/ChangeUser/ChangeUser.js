import { View, Form, InputItem, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { AtIcon } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import normal from "@static/normal.png";
import register from "@static/register.png";
import "./ChangeUser.scss";

function ChangeUser(props) {
  const { identity, bindStudent } = props;
  const handleAdd = () => {
    Taro.navigateTo({ url: "/pages/my/Setting/ChangeUser/AddUser/AddUser" });
  };
  return (
    <View className='index'>
      <NavTab back title='切换账号' />
      <View className='account'>
        {/* 已登录账号列表 */}
        <View className='list'>
          <View className='head'>
            <Image style='width:76rpx;height:76rpx' src={normal} />
            <View className='cont'>
              <View className='title'>
                {bindStudent && bindStudent.userName}
              </View>
              <View className='phone'>{identity && identity.telephone}</View>
            </View>
          </View>
          <View>
            <AtIcon value='check' color='#1AA5FF'></AtIcon>
          </View>
        </View>
        {/* 登录新的账号 */}
        <View className='list' onClick={handleAdd}>
          <View className='head'>
            <Image style='width:76rpx;height:76rpx' src={register} />
            <View className='cont'>
              <View className='title'>添加或者注册账号</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  identity: state.users.identity,
  bindStudent: state.users.bindStudent,
}))(ChangeUser);
