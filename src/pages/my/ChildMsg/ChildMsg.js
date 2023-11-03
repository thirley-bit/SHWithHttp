import { View, Text, Image, Button } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import {
  AtForm,
  AtModal,
  AtModalContent,
  AtModalAction,
  AtInput,
  AtMessage,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import "./ChildMsg.scss";

function ChildMsg(props) {
  const { dispatch, studentId, studentDetail } = props;
  const [showData, setShowData] = useState([]); // 显示当前学生基础信息
  const [isOpened, setIsOpened] = useState(false); //添加其他学生的弹窗
  const [classId, setClassId] = useState("");  //班级id,用于添加其他学生
  const [avatarData, setAvatarData] = useState({}); //上传头像信息
  const title = [
    {
      title: "学生姓名:",
      type: "text",
      name: "studentName",
    },
    {
      title: "学生学号:",
      type: "text",
      name: "studentNo",
    },
    {
      title: "亲属关系:",
      type: "text",
      name: "relative",
    },
  ];

  useEffect(() => {
    dispatch({
      type: "users/getStudentById",
      // payload: studentId,
      payload: 11,
    }).then((res) => {
      if (res.status == 200) {
        // 获取当前学生所在班级
        setClassId(res.data.classId);
        showDataList(res.data);
      }
    });
  }, []);

  // 更改学生信息的字段,符合组件属性
  const showDataList = (val) => {
    const newShowData = studentDetail.map((item) => {
      let value = val[item.key];
      return {
        ...item,
        value,
      };
    });
    setShowData(newShowData);
    setAvatarData({ value: val.avatar });
  };
  // 修改学生信息
  const handleChange = (value, record) => {
    record.value = value;
  };
  // 添加当前班级其他学生
  const handleAdd = () => {
    setIsOpened(true);
  };
  // 请求添加当前班级其他学生接口
  const onSubmit = (evt) => {
    let userObj = Object.assign({ classId: classId }, evt[0].detail.value);
    dispatch({
      type: "Class/getJoinClass",
      payload: userObj,
    }).then((res) => {
      if (res.status == 200) {
        //关闭弹窗
        setIsOpened(false);
        //消息提示
        Taro.atMessage({
          message: "添加成功，待审核...",
          type: "success",
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };
  // 关闭添加其他学生弹窗
  const handleClose = () => {
    setIsOpened(false);
  };
  // 请求修改学生信息接口
  const handleSave = () => {
    let obj = showData.reduce((item, index) => {
      item[index.key] = index.value;
      return item;
    });
    let { address, birthday } = obj;
    let sendObj = Object.assign(
      { id: studentId },
      { avatar: avatarData.id || null },
      { address, birthday }
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
        // 更新当前学生信息
        setTimeout(() => {
          dispatch({
            type: "users/getStudentById",
            payload: studentId,
          }).then((response) => {
            if (response.status == 200) {
              showDataList(response.data);
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
  // 上传头像
  const handleUpload = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        res.tempFilePaths.map((file) =>
          dispatch({
            type: "AddressList/getUploadFile",
            payload: file,
          }).then((resp) => {
            let current = resp.data[0];
            let newAvatarData = {
              id: current.id,
              value: current.fileMappingPath,
            };
            setAvatarData(newAvatarData);
          })
        );
      },
    });
  };
  return (
    <View className='index'>
      <NavTab back title='孩子信息' />
      {/* 孩子个人信息 */}
      <View className='child-info'>
        <AtForm name='key'>
          {/* 基础信息 */}
          {showData.map((item, index) => {
            return (
              <AtInput
                key={index}
                name={item.key}
                title={item.title}
                type={item.type}
                value={item.value}
                placeholder={item.placeholder}
                disabled={item.disabled}
                onChange={(e) => handleChange(e, item)}
              />
            );
          })}
          {/* 头像显示及上传 */}
          <View className='upload' onClick={() => handleUpload()}>
            <AtInput
              key='avatar'
              name='avatar'
              title='头像'
              type='text'
              disabled
            />
            <View className='upload-avatar'>
              <Image className='upload-img' src={avatarData.value} />
            </View>
          </View>
        </AtForm>
      </View>
      {/* 添加其他孩子 */}
      <View className='child-other'>
        <View className='another'>
          <Text>在此班级中是否还有其他小孩？</Text>
          <View className='add-text' onClick={handleAdd}>
            点此添加
          </View>
        </View>
      </View>
      {/* 底部确定按钮 */}
      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleSave()}
      >
        保存修改
      </GradientButton>
      {/* 添加孩子弹窗 */}
      <AtModal
        className='edit-modal'
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
        {/* 孩子信息 */}
        <AtForm name='modalname' onSubmit={onSubmit}>
          <AtModalContent className='modal-edit'>
            {title.map((item, index) => {
              return (
                <AtInput
                  key={index}
                  name={item.name}
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
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  studentId: state.users.studentId,
  studentDetail: state.users.studentDetail
}))(ChildMsg);
