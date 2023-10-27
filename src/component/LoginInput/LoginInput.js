import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import {
  View,
  Image,
  RadioGroup,
  Radio,
  Label,
  Picker,
} from "@tarojs/components";
import { AtCountdown, AtForm, AtInput, AtMessage } from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import classIcon from "@static/class-icon.png";
import "./LoginInput.scss";

function LoginInput(props) {
  const { dispatch, loginType, loginUserType, classList, formList } = props;
  const [classTeacher, setClassTeacher] = useState(0);
  const [selectorChecked, setSelectorChecked] = useState("");
  const [countdown, setCountdown] = useState(false);
  const selector = Array.from(classList, ({ className }) => className);

  const classTeacherList = [
    {
      value: "0",
      text: "否",
      checked: true,
    },
    {
      value: "1",
      text: "是",
      checked: false,
    },
  ];
  const handleChange = (e, record) => {
    record.value = e;
  };
  //选择班级
  const handleClassChange = (e) => {
    setSelectorChecked(classList[e.detail.value]);
  };

  //请求验证码
  const handleVerifyCode = () => {
    //获取输入的手机号
    const telephone = formList.find((item) => item.key == "telephone").value;
    dispatch({
      type: "users/getVerifyCode",
      payload: {
        telephone: telephone,
        type: 0, //类型：0：注册，1：忘记密码
      },
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: "获取验证码成功",
          type: "success",
        });
        setCountdown(true);
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };
  //验证码倒计时结束
  const handleTimeUp = () => {
    setCountdown(false);
  };
  //选择是否是班主任
  const handleClassTeacherChange = (e) => {
    setClassTeacher(parseInt(e.detail.value));
  };
  //返回登录页面
  const handleNav = (val) => {
    switch (val) {
      case 0:
        Taro.navigateTo({ url: "/pages/login/login" });
        break;
      case 3:
        Taro.navigateTo({ url: "/pages/login/Register/Register" });
        break;
      default:
        break;
    }
  };
  //登录
  const handleLogin = () => {
    //获取数组中的值组成对象传给后台
    const formObj = formList.reduce((p, n) => {
      const { key } = n;
      return Object.assign(p, { [key]: n.value });
    }, {});
    //判断输入是否为空
    const nullObj = formList.find((item) => item.value == "");
    //输入为空，弹窗提示
    if (nullObj) {
      Taro.showToast({
        title: `${nullObj.placeholder}`,
        icon: "error",
      });
      //弹窗不为空
    } else {
      //请求的接口路径
      let url = "";
      //form表单的输入值
      let sendObj = { ...formObj };
      switch (loginType) {
        //登录页面和切换账号页面，请求登录接口
        case 0:
        case 3:
          url = "/getLogin";
          break;
        //注册页面，请求注册接口
        case 1:
          sendObj = Object.assign(
            { ...sendObj, userType: loginUserType },
            loginUserType == 0
              ? //家长身份，班级必填、学生学号必填（输入框form中已存在）
                { classId: selectorChecked.id }
              : //教师身份，是否是班主任必填
                { ifClassTeacher: classTeacher }
          );
          url = "/getRegister";
          break;
        case 2:
          //忘记密码页面，请求忘记密码接口
          url = "/getForgetPass";
          break;
        default:
          break;
      }
      dispatch({
        type: `users${url}`,
        payload: sendObj,
      }).then((res) => {
        if (res.status == 200) {
          Taro.atMessage({
            message: "登录成功",
            type: "success",
          });
          //将token储存到本地
          Taro.setStorageSync("token", res.data.token);
          //跳转页面(loginType为0时为登录页面，跳转至主页，loginType为1时为注册、忘记密码、修改密码等页面，跳转至登录页面)
          if (loginType == 0) {
            Taro.switchTab({ url: "/pages/class/class" });
          } else if (loginType == 3) {
            Taro.navigateTo({ url: "/pages/my/Setting/ChangeUser/ChangeUser" });
          } else {
            Taro.navigateTo({ url: "/pages/login/login" });
          }
        } else {
          Taro.atMessage({
            message: res.message,
            type: "error",
          });
        }
      });
    }
  };
  console.log(loginType,'loginType')
  return (
    <View className='login-input'>
      <AtForm name='registerForm'>
        {/* 家长端必填班级 */}
        {loginUserType == 0 && (
          <Picker
            name='classNo'
            mode='selector'
            range={selector}
            onChange={handleClassChange}
          >
            <AtInput
              placeholder='请选择班级'
              disabled
              title={
                <Image
                  src={classIcon}
                  style={{ width: "48rpx", height: "48rpx" }}
                  color='#25e2ff'
                ></Image>
              }
              value={selectorChecked.className}
            />
          </Picker>
        )}
        {/* form表单输入内容 */}
        {formList.map((item, index) => {
          return (
            <AtInput
              key={index}
              title={
                <Image
                  src={item.titleIcon}
                  style={{ width: "48rpx", height: "48rpx" }}
                  color='#25e2ff'
                ></Image>
              }
              placeholder={item.placeholder}
              type={item.type}
              value={item.value}
              required={item.required}
              onChange={(e) => handleChange(e, item)}
            >
              {item.text && (
                <View style={{ borderLeft: "1rpx solid #999" }}>
                  {countdown ? (
                    <AtCountdown
                      isShowHour={false}
                      format={{ seconds: "" }}
                      minutes={5}
                      onTimeUp={handleTimeUp}
                    />
                  ) : (
                    <View onClick={() => handleVerifyCode()}>{item.text}</View>
                  )}
                </View>
              )}
            </AtInput>
          );
        })}
      </AtForm>
      {/* 教师端必填班主任 */}
      {loginUserType == 1 && (
        <View>
          <View className='class-teacher'>班主任</View>
          <RadioGroup
            style={{ display: "inline-block" }}
            onChange={handleClassTeacherChange}
          >
            {classTeacherList.map((item, index) => {
              return (
                <Label key={index}>
                  <Radio
                    style={{ marginRight: "64rpx" }}
                    value={item.value}
                    checked={item.checked}
                  >
                    {item.text}
                  </Radio>
                </Label>
              );
            })}
          </RadioGroup>
        </View>
      )}
      {/* 注册和忘记密码 */}
      {(loginType == 1 || loginType == 2) && (
        <View className='forget' onClick={() => handleNav(0)}>
          返回登录
        </View>
      )}
      {loginType == 3 && (
        <View className='forget' onClick={() => handleNav(3)}>
          立即注册
        </View>
      )}
      {/* 确定按钮 */}
      <GradientButton type='primary' className='login' onClick={handleLogin}>
        {loginType == 0 ? "登录" : "确定"}
      </GradientButton>
      <AtMessage />
    </View>
  );
}

export default connect((state) => ({
  classList: state.users.classList,
}))(LoginInput);
