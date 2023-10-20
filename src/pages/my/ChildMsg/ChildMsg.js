import { View, Text, Image, Button } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useState, useRef } from "react";
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
  const { dispatch, studentId, studentDetail } = props;
  const [showData, setShowData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [classId, setClassId] = useState('')
  const [avatarData, setAvatarData] = useState({})
  const title = [
    {
      title: "学生姓名:",
      type: "text",
      name: 'studentName'
    },
    {
      title: "学生学号:",
      type: "text",
      name: 'studentNo'
    },
    {
      title: "亲属关系:",
      type: "text",
      name: 'relative'
    },
  ];

  useEffect(() => {
    dispatch({
      type: "users/getStudentById",
      payload: studentId,
      // payload:'88'
    }).then((res) => {
      if (res.status == 200) {
        setClassId(res.data.classId)
        showDataList(res.data);
      }
    });
  }, []);

  const showDataList = (val) => {
    console.log(val,'val')
    const newShowData = studentDetail.map((item) => {
      let value = val[item.key];
      return {
        ...item,
        value,
      };
    });
    setShowData(newShowData);
    setAvatarData({value:val.avatar})
  };
  const handleChange = (value, record) => {
    record.value = value;
  };
  const handleAdd = () => {
    setIsOpened(true);
  };

  const onSubmit = (evt) => {
    let userObj = Object.assign({classId:classId},evt[0].detail.value)
    dispatch({
      type:'Class/getJoinClass',
      payload:userObj
    }).then((res) => {
      if (res.status == 200) {
        //关闭弹窗
        setIsOpened(false)
        //消息提示
        Taro.atMessage({
          message: '添加成功，待审核...',
          type: "success",
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  }
  const handleClose = () => {
    setIsOpened(false);
  };
  const handleSave = () => {
    console.log(showData,'showdata')
    let obj = showData.reduce((item, index) => {
      item[index.key] = index.value;
      return item;
    });
    let { address, birthday } = obj;
    let sendObj = Object.assign(
      { id: studentId },
      {avatar:avatarData.id || null},
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
  const handleUpload = () =>{
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
                let current = resp.data[0]
                let newAvatarData = {
                  id:current.id,
                  value:current.fileMappingPath
                }
                setAvatarData(newAvatarData)
              })
            );
      },
    });
  }
  const handleSubmit = (e) => {
    // evt.preventDefault();
    console.log(e,'eee')
    console.log(showData,'showdata')
  }
  return (
    <View className='index'>
      <NavTab back title='孩子信息' />
      <View className='main'>
        <AtForm name='key' onSubmit={() => handleSubmit()}>
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
          <View className='upload-avatar' onClick={() => handleUpload()}>
          <AtInput 
            key='avatar'
            name='avatar'
            title='头像'
            type='text'
            value={<View className='note'>{111} <Image className='img' src={avatarData.value} /></View>}
            disabled
            placeholder='请上传头像'
          />
          </View>
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
      <AtForm name='modalname' onSubmit={onSubmit}>
        <AtModalContent className='modal-edit'>
            {title.map((item,index) => {
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
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  pageSize: state.users.pageSize,
  userId: state.users.userId,
  studentId: state.users.studentId,
  studentDetail: state.users.studentDetail,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(ChildMsg);
