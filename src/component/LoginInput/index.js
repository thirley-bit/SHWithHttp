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
import { AtCountdown, AtForm, AtInput } from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import classIcon from "@static/class-icon.png";
import "./index.scss";

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
      checked: false,
    },
    {
      value: "1",
      text: "是",
      checked: true,
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
  const handleNav = () => {
    Taro.navigateTo({ url: "/pages/login/login" });
  };
  //登录
  const handleLogin = () => {
    //获取数组中的值组成对象传给后台
    const formObj = formList.reduce((p, n) => {
      const { key } = n;
      return Object.assign(p, { [key]: n.value });
    }, {});
    //合并输入内容和身份
    let userType = { userType: loginUserType };
    console.log(userType, "usertype");
    const sendList = Object.assign(formObj, {
      userType: loginUserType,
      ifClassTeacher: classTeacher,
      classId: selectorChecked.id,
    });
    //如果是家长，则所有必填，如果是老师，手机号，密码，验证码和身份必填});
    // const sendList = Object.assign(formObj)
    // console.log(sendList, "sendList");
    //判断输入是否为空
    const nullObj = formList.find((item) => item.value == "");
    if (nullObj) {
      Taro.showToast({
        title: `${nullObj.placeholder}`,
        icon: "error",
      });
    } else {
      let url = "";
      switch (loginType) {
        case 0:
          url = "/getLogin";
          break;
        case 1:
          url = "/getRegister";
          break;
        case 2:
          url = "/getForgetPass";
          break;
        default:
          break;
      }
      dispatch({
        type: `users${url}`,
        payload: sendList,
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
  return (
    <View className='login-input'>
      <AtForm name='registerForm'>
        {loginUserType == 0 ? (
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
        ) : (
          ""
        )}
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
      {/* 选择是否是班主任 */}
      {loginUserType == 1 ? (
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
                    // className='radio-list__radio'
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
      ) : (
        ""
      )}
      {/* 注册和忘记密码时显示，登录时该文本在父页面 */}
      {loginType == 0 ? (
        ""
      ) : (
        <View className='forget' onClick={() => handleNav()}>
          返回登录
        </View>
      )}
      {/* 确定按钮 */}
      <GradientButton type='primary' className='login' onClick={handleLogin}>
        {loginType == 0 ? "登录" : "确定"}
      </GradientButton>
    </View>
  );
}

export default connect((state) => {})(LoginInput);
