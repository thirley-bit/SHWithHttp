import { View } from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import LoginInput from "@app/component/LoginInput/LoginInput";
import user from "@static/user-icon.png";
import lock from "@static/lock-icon.png";
import "./AddUser.scss";

function AddUser() {
  const formList = [
    {
      key: "telephone",
      titleIcon: user,
      placeholder: "请输入手机号",
      type: "phone",
      value: "",
    },
    {
      key: "password",
      titleIcon: lock,
      placeholder: "请输入密码",
      type: "number",
      value: "",
    },
  ];
  return (
    <View className='index'>
      <NavTab back title='添加账号' />
      <View className='container'>
          <LoginInput loginType={3} formList={formList} />
      </View>
    </View>
  );
}
export default AddUser;
