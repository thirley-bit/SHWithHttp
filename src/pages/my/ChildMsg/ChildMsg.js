import { View, Text, Input, Button } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {
  AtForm,
  AtModal,
  AtModalContent,
  AtModalAction,
  AtDivider,
  AtIcon,
  AtInput,
  AtButton,
  AtMessage,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";

import "./ChildMsg.scss";

function ChildMsg(props) {
  console.log(props, "porps");
  const { dispatch, studentId, identity, studentDetail, settingList } = props;
  const [showData, setShowData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    dispatch({
      type: "users/getStudentById",
      payload: studentId,
    }).then((res) => {
      if (res.status == 200) {
        showDataList(res.data);
      }
    });
  }, []);

  const showDataList = (val) => {
    const newShowData = studentDetail.map((item) => {
      console.log(item, "item111111");
      let value = val[item.key];
      return {
        ...item,
        value,
      };
    });
    setShowData(newShowData);
  };
  const handleChange = (value, record) => {
    record.value = value;
  };
  const handleAdd = () => {
    setIsOpened(true);
  };
  const onSubmit = (e) => {

    console.log(e.detail.value,'eeeeeeeee111111')
  }
  const handleClose = () => {
    setIsOpened(false);
  };
  const handleSave = () => {
    let obj = showData.reduce((item, index) => {
      item[index.key] = index.value;
      return item;
    });
    let { address, birthday, avatar } = obj;
    let sendObj = Object.assign(
      { id: studentId },
      { address, birthday, avatar }
    );
    dispatch({
      type: "users/getUpdateStudent",
      payload: sendObj,
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        setTimeout(() => {
          dispatch({
            type: "users/getStudentById",
            payload: studentId,
          }).then((response) => {
            if (response.status == 200) {
              showDataList(res.data);
            }
          });
        }, 1000);
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };
  const title = [
    {
      key: "studentName",
      title: "学生姓名:",
      type: "text",
    },
    {
      key: "studentName",
      title: "学生学号:",
      type: "text",
    },
    {
      key: "studentName",
      title: "亲属关系:",
      type: "text",
    },
  ];
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
                disabled={item.disabled}
                onChange={(e) => handleChange(e, item)}
              />
            );
          })}
        </AtForm>
      </View>
      <View className='other'>
        <View className='another'>
          <Text>在此班级中是否还有其他小孩？</Text>
          <View className='add-text' onClick={handleAdd}>
            点此添加
          </View>
        </View>
      </View>
      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleSave()}
      >
        保存修改
      </GradientButton>
      <AtMessage />
      <AtModal
        className='edit-modal'
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
      <AtForm onSubmit={onSubmit}>
        <AtModalContent className='modal-edit'>
            {title.map((item,index) => {
              return (
                <AtInput
                  key={index}
                  name={item.title}
                  title={item.title}
                  type={item.type}
                  value={item.value}
                  disabled={item.disabled}
                  onChange={(e) => handleChange(e, item)}
                />
              );
            })}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => handleClose()}>取消</Button>
          <Button formType='submit'>确认</Button>
        </AtModalAction>
        
        </AtForm>
      </AtModal>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  studentId: state.users.studentId,
  studentDetail: state.users.studentDetail,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(ChildMsg);
