import { useEffect, useState } from "react";
import Taro from '@tarojs/taro';
import { connect } from "react-redux";
import { View, Text, Image } from "@tarojs/components";
import { AtAvatar, AtButton, AtDivider, AtIcon, AtModal } from "taro-ui";
// import GradientButton from '@app/component/GradientButton';

import GradientButton from "@app/component/GradientButton";
import normal from "@static/normal.png"
// import api from "@/api/api";
// import edit from "@static/edit.png";
import "./DetailHeader.scss";
import Divider from '@app/component/Divider/Divider';

function DetailHeader(props) {
  const { dispatch, enter, pageSize, user, studentId, subjectDetail, scoreDetail, noticeDetail } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [detailHeaderData, setDetailHeaderData] = useState({});

  useEffect(() => {
    if (enter == "homework" && subjectDetail) {
      setDetailHeaderData(subjectDetail);
    } else if (enter == "notice") {
      setDetailHeaderData(noticeDetail);
    } else {
      setDetailHeaderData(scoreDetail);
    }
  }, [subjectDetail]);

  const handleCompleted = () => {
    console.log(111)
    dispatch({
      type:"HomeWork/getCompleteWork",
      payload:{
        workId:detailHeaderData.id,
        studentId:studentId
      }
    }).then(res => {
      if(res.status == 200){
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        dispatch({
          type: "HomeWork/getWorkList",
          payload: {
            page: 1,
            pageSize: pageSize,
            subjectType: '',
            searchId: studentId,
            createTime: '',
            status:''
          },
        })
        dispatch({
          type:'HomeWork/getWorkById',
          payload:{
            id:detailHeaderData.id,
            studentId:studentId
          }
        })
      }else{
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    })
  };
  const handleEdit = () => {
    Taro.navigateTo({ url: `/pages/comp/publish/publish?enter=${enter}&type=edit`});
  };
  const handleDel = (e) => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };
  const handleCancel = () => {
    setIsOpened(false);
  };

  const handleConfirm = () => {
    // console.log(id); //删除接口
    setIsOpened(false);
  };
  return (
    // 详情头部组件
    <View className='index'>
      <View className='header'>
        <Text className='title'>{detailHeaderData.title}</Text>
        <View className='note'>
          <AtAvatar
            className='avatar'
            size='small'
            circle
            image={detailHeaderData.avatar || normal}
          />
          <Text className='extra'>
            {detailHeaderData.author + "\xa0\xa0\xa0" + detailHeaderData.createTime}
          </Text>
        </View>
        <AtDivider className='divider' />
        <View
          className={user == 0 && enter == "homework" ? "text" : "text100"}
        >
          <View dangerouslySetInnerHTML={{ __html: detailHeaderData.detailContent }}></View>
        </View>
        {/* 仅存在于家长端的作业部分 */}
        {user == "0" ? (
          <View className='content'>
            {enter == "homework" && (
              <View>
                {detailHeaderData.status == 1 ? (
                  <GradientButton type='secondary'>已完成</GradientButton>
                ) : (
                  <GradientButton type='primary' onClick={handleCompleted}>
                    未完成
                  </GradientButton>
                )}
              </View>
            )}
          </View>
        ) : (
          // 存在于教师端的作业和通知部分
          <View className='content-edit'>
            <Divider className='divider' />
            {/* <AtDivider className='divider' /> */}
            <View className='edit'>
              <View className='img' onClick={() => handleEdit()}>
                {/* <Image className='edit-img' src={edit} /> */}
                <AtIcon
                  className='icon'
                  value='edit'
                  size='22'
                  color='#999'
                ></AtIcon>
              </View>
              <View className='img' onClick={() => handleDel()}>
                <AtIcon
                  className='icon'
                  value='trash'
                  size='22'
                  color='#F00'
                ></AtIcon>
              </View>
            </View>
          </View>
        )}
      </View>
      <AtModal
        isOpened={isOpened}
        cancelText='取消'
        confirmText='确认'
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content={
          enter == "message" ? "是否删除该聊天" : "是否删除该联系人"
        }
      />
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
  pageSize: state.users.pageSize,
  studentId: state.users.studentId,
  subjectDetail: state.HomeWork.subjectDetail,
  scoreDetail: state.Score.scoreDetail,
  noticeDetail: state.Notice.noticeDetail,
}))(DetailHeader);
