import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtDivider, AtForm, AtInput } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import { connect } from "react-redux";
import "./Info.scss";

function Info(props) {
  const { dispatch, user, studentInfo } = props;
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    dispatch({
      type: "users/getIdentity",
    });
    dispatch({
      type: "users/getUser",
    });
    dispatch({
      type: "users/getStudentInfo",
    });
  }, []);
  useEffect(() => {
    if (studentInfo) {
      const titleList = [
        {
          key: "student_name",
          title: "姓名",
          type: "text",
        },
        {
          key: "sex",
          title: "性别",
          type: "text",
        },
        {
          key: "birthday",
          title: "出生年月",
          type: "number",
        },
        {
          key: "birthplace",
          title: "出生地",
          type: "text",
        },
        {
          key: "address",
          title: "家庭住址",
          type: "text",
        },
        {
          key: "school",
          title: "所在学校",
          type: "text",
        },
        {
          key: "class",
          title: "所在班级",
          type: "text",
        },
        {
          key: "hobby",
          title: "爱好与特长",
          type: "text",
          url: "/pages/class/DisplayPublic/DisplayPublic",
        },
      ];
      const newShowData = titleList.map((item) => {
        let value = studentInfo[item.key];
        if (value == undefined) {
          value = ">";
        }
        return {
          ...item,
          value,
        };
      });
      setShowData(newShowData);
    }
  }, [studentInfo]);
  console.log(showData);
  const handleChange = (item) => {
    if (item.url) {
      Taro.navigateTo({ url: item.url });
    }
  };
  return (
    <View className='index'>
      <NavTab back title='孩子信息' />
      <View className='main'>
        <AtForm>
          {showData.map((item, index) => {
            return (
              <AtInput
                key={index}
                name={item.title}
                title={item.title}
                type={item.type}
                value={item.value}
                required={item.required}
                editable={false}
                onClick={() => handleChange(item)}
              />
            );
          })}
        </AtForm>
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  studentInfo: state.users.studentInfo,
}))(Info);
