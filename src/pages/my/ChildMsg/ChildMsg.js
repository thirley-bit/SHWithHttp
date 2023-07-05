import { View, Text } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { AtForm, AtCard, AtDivider, AtIcon, AtInput, AtButton } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';

import "./ChildMsg.scss";

function ChildMsg(props) {
  const { dispatch, user, identity, settingList } = props;
  const [showData, setShowData] = useState([]);
  console.log(props);
  useEffect(() => {
    dispatch({
      type: "users/getIdentity",
    });
    dispatch({
      type: "users/getUser",
    });
  }, []);
  useEffect(() => {
    if (identity) {
      console.log(identity);
      const titleList = [
        {
          key: "student_name",
          title: "学生姓名",
          type: "text",
          required: true,
        },
        {
          key: "student_id",
          title: "学生学号",
          type: "number",
        },
        {
          key: "relative",
          title: "亲属关系",
          type: "text",
        },
        {
          key: "class_name",
          title: "所属班级",
          type: "text",
        },
        {
          key: "phone",
          title: "电话号码",
          type: "phone",
        },
      ];
      const newShowData = titleList.map((item) => {
        let value = identity[item.key];
        return {
          ...item,
          value,
        };
      });
      setShowData(newShowData);
    }
  }, [identity]);
  console.log(showData);
  const handleChange = () => {
    console.log(111);
  };
  const handleAdd = () => {
    console.log('add')
  }
  const handleSave = () => {
    console.log('save')
  }
  return (
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
              onChange={handleChange}
            />
          );
        })}
      </AtForm>
      <View className='other'>
        <View className='another'>
          <Text>在此班级中是否还有其他小孩？</Text>
          <View className='add-text' onClick={handleAdd}>点此添加</View>
        </View>
      </View>
      <AtButton
        type='primary'
        className='send-button'
        onClick={() => handleSave()}
      >
        保存修改
      </AtButton>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(ChildMsg);
