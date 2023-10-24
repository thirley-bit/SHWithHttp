import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import { connect } from "react-redux";
import "./Info.scss";

function Info(props) {
  const { dispatch, studentId, studentDetail } = props;
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    //请求学生详情信息
    dispatch({
      type: "users/getStudentById",
      payload: studentId,
    }).then((res) => {
      if (res.status == 200) {
        let data = res.data;
        //添加爱好与特长页面
        let hobby = {
          key: "hobby",
          title: "爱好与特长",
          type: "text",
          url: "/pages/class/DisplayPublic/DisplayPublic",
        };
        const newShowData = studentDetail.concat(hobby).map((item) => {
          let value = data[item.key];
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
    });
  }, []);
  //点击进入爱好与特长页面
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
  studentId: state.users.studentId,
  studentDetail: state.users.studentDetail,
}))(Info);
