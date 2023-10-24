import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import {
  AtAvatar,
  AtBadge,
  AtButton,
  AtCard,
  AtFab,
  AtIcon,
  AtMessage,
} from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import normal from "@static/normal.png";
import "./Work.scss";

function Work(props) {
  const { dispatch, studentId, enter, user, userId, pageSize, workList } =
    props;

  const workListData = () => {
    let payload = {
      page: 1,
      pageSize: pageSize,
    };
    if (user == 0) {
      payload = {
        ...payload,
        searchId: studentId,
      };
    } else {
      payload = {
        ...payload,
        searchId: userId,
      };
    }
    dispatch({
      type: "HomeWork/getWorkList",
      payload: payload,
    });
  };
  const handleCompleted = (e) => {
    dispatch({
      type: "HomeWork/getCompleteWork",
      payload: {
        workId: e,
        studentId: studentId,
      },
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        workListData();
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };
  const handleNav = (e) => {
    if (enter == "homework") {
      //id必传
      let payload = {
        id: e.id,
      };
      let payloadView = {
        workId:e.id
      }
      if (user == 0) {
        //家长端必传studentId，教师端不传
        payload = {
          ...payload,
          studentId: studentId,
        };
        payloadView = {
        ...payloadView,
          studentId: studentId
        }
      }
      dispatch({
        type: "HomeWork/getWorkById",
        payload: payload,
      });
      dispatch({
        type: "HomeWork/getViewHomework",
        payload: payloadView
      }).then((res) => {
        if (res.status == 200) {
          //更新数据
          workListData();
        }
      });
    }
    // else if(enter == 'notice'){
    //   id = e.notice_id
    //   dispatch({
    //     type:'Notice/getNoticeDetail',
    //     payload: e.notice_id
    //   })
    // }else{
    //   id = e.score_id
    //   dispatch({
    //     type:'Score/getScoreDetail',
    //     payload:e.score_id
    //   })
    // }
    //如果是未发布的成绩，进入创建成绩页面，其他进入详情页面
    if (e.publish == 0) {
      Taro.navigateTo({ url: `/pages/class/Score/PublishScore/PublishScore` });
    } else {
      Taro.navigateTo({
        url: `/pages/comp/detail/detail?enter=${enter}`,
      });
    }
  };
  const handleClick = () => {
    Taro.navigateTo({
      url: `/pages/comp/publish/publish?enter=${enter}&type=new`,
    });
  };
  const handlePublish = (e) => {
    console.log(e);
  };
  return (
    <View className='main'>
      <View className='content'>
        <View className='work'>
          {workList &&
            workList.map((item, index) => {
              // 判断数据列表中是否有work_id,如果没有就表示从通知页面进入，则传notice_id
              // let newId =
              //   item.work_id == undefined ? item.notice_id : item.work_id;
              //   setId(newId)
              return (
                <View key={index} className='work-list'>
                  <AtCard
                    className='work-card'
                    note={
                      enter == "score" && ( //是否是成绩页面
                        <View>
                          <View className='test-time'>
                            {"考试时间:" + "\xa0" + item.test_time}
                          </View>
                          <View>
                            {"发布人:" + "\xa0\xa0\xa0\xa0" + item.author}
                          </View>
                        </View>
                      )
                    }
                    extra='>'
                    title={item.title}
                    thumb={item.avatar || normal}
                    // thumb={normal}
                    onClick={() => handleNav(item)}
                  >
                    <View
                      className='content'
                      style={{ height: "72rpx" }}
                      dangerouslySetInnerHTML={{ __html: item.detailContent }}
                    ></View>
                  </AtCard>
                  {enter == "score" && user == 1 && item.publish == 0 && (
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
                      user == 0 &&
                      (item.status == 1 ? (
                        <GradientButton type='secondary'>已完成</GradientButton>
                      ) : (
                        <GradientButton
                          type='primary'
                          onClick={() => handleCompleted(item.id)}
                        >
                          未完成
                        </GradientButton>
                      ))}
                    {enter == "score" &&
                      user == 1 &&
                      (item.publish == 0 ? (
                        <View className='publish'>未发布</View>
                      ) : (
                        <View className='publish' style={{ color: "#1BA5FF" }}>
                          已发布
                        </View>
                      ))}
                  </View>
                </View>
              );
            })}
        </View>
      </View>
      {/* 发布按钮存在于教师端 */}
      {user == 1 && (
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
      <AtMessage />
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
  userId: state.users.userId,
  studentId: state.users.studentId,
  pageSize: state.users.pageSize,
  subjectDetail: state.HomeWork.subjectDetail,
  workList: state.HomeWork.workList,
  scoreDetail: state.Score.scoreDetail,
  noticeDetail: state.Notice.noticeDetail,
}))(Work);
