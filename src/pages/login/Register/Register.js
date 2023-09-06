import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Taro, { useRouter } from "@tarojs/taro";
import {
  View,
  Text,
  Image,
  Picker,
  RadioGroup,
  Label,
  Radio,
} from "@tarojs/components";
import { AtForm, AtList, AtListItem, AtInput, AtMessage } from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import user from "@static/user-icon.png";
import lock from "@static/lock-icon.png";
import classIcon from "@static/class-icon.png";
import studentName from "@static/student-icon.png";
import relative from "@static/relative-icon.png";

import "./Register.scss";

function Register(props) {
  console.log(props, "props");
  const { dispatch, classList } = props;
  const selector = Array.from(classList,({className}) => className)
  const [loginUserType, setLoginUserType] = useState(0);
  const [classTeacher, setClassTeacher] = useState(0);
  const [selectorChecked, setSelectorChecked] = useState("");

  useEffect(() => {
    dispatch({
      type: "users/getClassAll",
    });
  }, []);
  const checkList = [
    {
      value: "0",
      text: "家长",
      checked: true,
    },
    {
      value: "1",
      text: "老师",
      checked: false,
    },
  ];
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

  const handleNav = () => {
    Taro.navigateTo({ url: "/pages/login/login" });
  };
  const formList = [
    {
      key: "telephone",
      className: "",
      titleIcon: user,
      placeholder: "请输入手机号(必填)",
      type: "phone",
      value: '',
    },
    {
      key: "verifyCode",
      className: "IsNull",
      titleIcon: "",
      placeholder: "请输入验证码(必填)",
      type: "number",
      value: '',
      text: "获取验证码",
    },
    {
      key: "password",
      className: "IsNull",
      titleIcon: lock,
      placeholder: "请输入密码(必填)",
      type: "password",
      value: '',
    },
    // {
    //   key: "classId",
    //   className: "IsNull",
    //   titleIcon: classIcon,
    //   placeholder: "请选择班级",
    //   type: "text",
    //   value: numberVal,
    // },
    {
      key: "studentNo",
      className: "IsNull",
      titleIcon: studentName,
      placeholder: "请输入学生学号(家长端必填)",
      type: "text",
      value: '',
    },
    {
      key: "relative",
      className: "IsNull",
      titleIcon: relative,
      placeholder: "请输入关系",
      type: "text",
      value: '',
    },
  ];
  const handleChange = (e, record) => {
    record.value = e;
  };
  //选择班级
  const handleClassChange = (e) => {
    setSelectorChecked(classList[(e.detail.value)])
  }
  //选择身份：0：家长，1：老师
  const handleCheckChange = (e) => {
    setLoginUserType(parseInt(e.detail.value));
  };
  //选择是否是班主任身份：0：家长，1：老师
  const handleClassTeacherChange = (e) => {
    setClassTeacher(parseInt(e.detail.value));
  };

  //请求验证码
  const handleVerifyCode = () => {
    //获取输入的手机号
    const telephone = formList.find((item) => item.key == "telephone").value;
    dispatch({
      type: "users/getVerifyCode",
      payload: {
        telephone: telephone,
        type: 0,//类型：0：注册，1：忘记密码
      },
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: "获取验证码成功",
          type: "success",
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });;
  };
  //登录
  const handleLogin = () => {
    //从表单中获取字段
    const formObj = formList.reduce((p, n) => {
      const { key } = n;
      return Object.assign(p, { [key]: n.value });
    }, {});
    //加入班级和身份字段
    const sendList = Object.assign(formObj, { userType: loginUserType, ifClassTeacher:classTeacher, classId: selectorChecked.id });
    //如果是家长，则所有必填，如果是老师，手机号，密码，验证码和身份必填
    const teacherList = formList.map((item) => {
      let telephone = item.telephone;
      let password = item.password;
      let userType = item.userType;
      let verifyCode = item.verifyCode;
      return {
        telephone,
        password,
        userType,
        verifyCode,
      };
    });
    //判断是老师还是家长，校验必填是否为空
    const nullObj = (loginUserType == 0 ? formList : teacherList).find(
      (item) => item.value == ""
    );
    if (nullObj) {
      //必填为空，弹窗提示
      Taro.showToast({
        title: `${nullObj.placeholder}`,
        icon: "error",
      });
    } else {
      //获取注册接口
      dispatch({
        type: "users/getRegister",
        payload: sendList,
      }).then((res) => {
        if (res.status == 200) {
          Taro.atMessage({
            message: "注册成功",
            type: "success",
          });
          Taro.switchTab({ url: "/pages/login/login" });
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
    <View className='index'>
      <View className='container'>
        <View className='reset'>注册</View>
        <View className='login-input'>
        <RadioGroup onChange={handleCheckChange}>
          {checkList.map((item, index) => {
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
        <Picker mode='selector' range={selector} onChange={handleClassChange}>
            <AtInput
              placeholder='请选择班级(家长端必填)'
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
          <AtForm>
            {formList.map((item, index) => {
              return (
                <View key={index}>
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
                      <View
                        style={{ borderLeft: "1rpx solid #999" }}
                        onClick={() => handleVerifyCode()}
                      >
                        {item.text}
                      </View>
                    )}
                  </AtInput>
                </View>
              );
            })}
          </AtForm>
        </View>
        
        <View>班主任</View>
        <RadioGroup onChange={handleClassTeacherChange}>
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
        <View className='forget' onClick={handleNav}>
          返回登录
        </View>
        <View className='login-button'>
          <GradientButton
            type='primary'
            className='send-button'
            onClick={() => handleLogin()}
          >
           注册
          </GradientButton>
        </View>
      </View>
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  classList: state.users.classList,
}))(Register);
