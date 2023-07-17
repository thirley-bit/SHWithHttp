import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtDivider, AtIcon } from "taro-ui";
// import GradientButton from '@app/component/GradientButton';

import GradientButton from "@app/component/GradientButton";
import api from '@/api/api';
import "./DetailHeader.scss";

function DetailHeader(props) {
  const { enter, user, subjectDetail, scoreDetail, noticeDetail} = props
  const [detailHeaderData,setDetailHeaderData] = useState({})

  useEffect(() => {
    if(enter == "homework"){
      setDetailHeaderData(subjectDetail)
    }else if(enter == "notice"){
      setDetailHeaderData(noticeDetail)
    }else{
      setDetailHeaderData(scoreDetail)
    }
  }, [])

  const handleCompleted = () => {
    console.log(12124344)
    // let url = "subject/detail/completed"
    // let data = api[url].data
    // setDetailHeaderData(data)
  }
  return (
    // 详情头部组件
    <View className='index'>
      <View className='header'>
        <Text className='title'>{detailHeaderData.title}</Text>
        <View className='note'>
          <AtAvatar className='img' size='small' circle image={detailHeaderData.avatar} />
          <Text className='extra'>
            {detailHeaderData.author + "\xa0\xa0\xa0" + detailHeaderData.time}
          </Text>
        </View>
        <AtDivider className='divider' />
        <View
          className={
            user == "0" && enter == "homework" ? "text" : "text100"
          }
        >
          <Text>{detailHeaderData.detail_content}</Text>
        </View>
        {/* 仅存在于家长端的作业部分 */}
        {user == "0" ? (
          <View className='content'>
            {enter == "homework" && (
              <View>
                {detailHeaderData.hasCompleted == 1 ? (
                  <GradientButton type='secondary'>已完成</GradientButton>
                ) : (
                  <GradientButton type='primary' onClick={handleCompleted}>未完成</GradientButton>
                )}
              </View>
            )}
          </View>
        ) : (
          // 存在于教师端的作业和通知部分
          <View className='content-edit'>
            <AtDivider className='divider' />
            <View className='edit'>
              <View className='img'>
                <AtIcon
                  className='icon'
                  value='edit'
                  size='25'
                  color='#999'
                ></AtIcon>
                <Text className='text'>修改</Text>
              </View>
              <View className='video'>
                <AtIcon
                  className='icon'
                  value='trash'
                  size='25'
                  color='#F00'
                ></AtIcon>
                <Text className='text'>删除</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default connect(state => ({
  user:state.users.user,
  subjectDetail: state.HomeWork.subjectDetail,
  scoreDetail: state.Score.scoreDetail,
  noticeDetail: state.Notice.noticeDetail
}))(DetailHeader);
