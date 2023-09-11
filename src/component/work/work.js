import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text,   } from "@tarojs/components";
import { AtAvatar, AtBadge, AtButton, AtCard, AtFab, AtIcon } from "taro-ui";
import GradientButton from '@app/component/GradientButton';
import normal from "@static/normal.png"
import { connect } from 'react-redux';
import "./Work.scss";

function Work(props) {
  console.log(props,"props----")
  const { dispatch, enter, user,  showData, } = props;
  const handleCompleted = (e) => {
    console.log(e,"----e----");
  };
  const handleNav = (e) => {
    let id = ''
    if(enter == 'homework'){
      id = e.work_id
      dispatch({
        type:'HomeWork/getSubjectDetail',
        payload:e.work_id
      })
    }else if(enter == 'notice'){
      id = e.notice_id
      dispatch({
        type:'Notice/getNoticeDetail',
        payload: e.notice_id
      })
    }else{
      id = e.score_id
      dispatch({
        type:'Score/getScoreDetail',
        payload:e.score_id
      })
    }
    //如果是未发布的成绩，进入创建成绩页面，其他进入详情页面
    if(e.publish == 0){
      Taro.navigateTo({url:`/pages/class/Score/PublishScore/PublishScore`})
    }else{
      Taro.navigateTo({ url:`/pages/component/detail/detail?enter=${enter}&id=${id}`})
    }
  }
  const handleClick = () => {
    Taro.navigateTo({ url: "/pages/component/publish/publish" });
  };
  const handlePublish = (e) => {
    console.log(e);
  };
  return (
    <View className='main'>
      <View className='content'>
        <View className='work'>
          {showData &&
            showData.map((item, index) => {
              // 判断数据列表中是否有work_id,如果没有就表示从通知页面进入，则传notice_id
              // let newId =
              //   item.work_id == undefined ? item.notice_id : item.work_id;
              //   setId(newId)
              return (
                <View key={index} className='work-list' >
                    <AtCard
                      className='work-card'
                      note={
                        enter == "score" && //是否是成绩页面
                          <View>
                            <View className='test-time'>
                              {"考试时间:" + "\xa0" + item.test_time}
                            </View>
                            <View>
                              {"发布人:" + "\xa0\xa0\xa0\xa0" + item.author}
                            </View>
                          </View>
                      }
                      extra='>'
                      title={item.title}
                      // thumb={item.avatar ? item.avatar : normal}
                      thumb={normal}
                      onClick={() => handleNav(item)}
                    >
                      {item.detailContent}
                    </AtCard>
                  {enter == "score" && user == "1" && item.publish == 0 && (
                    <View
                      className='button-publish'
                      onClick={() => handlePublish(item.score_id)}
                    >
                      <AtIcon value='lightning-bolt' color='#1f98f0' />
                      <Text>发布成绩</Text>
                    </View>
                  )}
                  {/* 是否有新消息 */}
                  {item.hasNew == 1 && <View className='new-msg'></View>}
                  <View className='tip'>
                    {/* 完成按钮仅存在于（家长端）作业页面 */}
                    {enter == "homework" &&
                      user == "0" &&
                      (item.hasCompleted == 1 ? (
                        <GradientButton type='secondary'>已完成</GradientButton>
                      ) : (
                        <GradientButton type='primary'>未完成</GradientButton>
                      ))}
                    {enter == "score" &&
                      user == "1" &&
                      (item.publish == 0 ? (
                        <View className='publish'>未发布</View>
                      ) : (
                        <View className='publish' style={{ color: "#1BA5FF" }}>已发布</View>
                      ))}
                  </View>
                </View>
              );
            })}
        </View>
      </View>
      {/* 发布按钮存在于教师端 */}
      {user == "1" && (
        <View className='add'>
          <AtFab onClick={handleClick}>
            <View>
              <AtIcon
                className='add-icon'
                value='add'
                size='25'
                color='#fff'
              ></AtIcon>
              <Text className='add-text'>
                {enter == "homework"
                  ? "布置作业"
                  : enter == "notice"
                  ? "发布通知"
                  : "发布成绩"}
              </Text>
            </View>
          </AtFab>
        </View>
      )}
    </View>
  );
}

export default connect(state =>({
  user:state.users.user,
  subjectDetail: state.HomeWork.subjectDetail,
  scoreDetail: state.Score.scoreDetail,
  noticeDetail: state.Notice.noticeDetail
}))(Work)