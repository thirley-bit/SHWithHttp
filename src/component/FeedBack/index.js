import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Text, Image } from "@tarojs/components";
import dialog from "@static/dialog.png";
import { AtAvatar, AtDivider } from "taro-ui";
import normal from "@static/normal.png";
import { useCommentContext } from "@app/component/context/CommentContext";
import Modal from "@app/component/Modal";
import "./index.scss";

function FeedBack(props) {
  const { dispatch, pageSize, user, userId, workId, studentId, replyList } = props;
  const { showInput, hideInput } = useCommentContext();
  const { showEditor, hideEditor } = useCommentContext();

  useEffect(() => {
    hideEditor();
    let payload = {
      page:1,
      pageSize: pageSize,
      workId: workId,
    }
    if(user == 0) {
      payload = {
        ...payload,
        studentId: studentId,
        userId: userId,
      }
    }
    dispatch({
      type: "HomeWork/getReplyList",
      payload: payload
    }).then((res) => {
      if (res.status == 200) {
        if (res.data.length == 0) {
          showEditor();
        }
      }
    });
  }, []);

  const handleFeedBack = (value) => {
    console.log(value,'value')
    showInput(value);
  };

  return (
    // 详情头部组件
    <View className='feed-container'>
      <View>
        {replyList.length == 0 ? (
          <View>
            {
              user == 1 && 
              <View style={{ margin: "2% 1%", color: "#999", fontSize: "24rpx" }}>
              暂无数据
            </View>
            }
          </View>
          
        ) : (
          <View>
            {replyList.map((item, index) => {
              return (
                <View key={index} className='feed-content'>
                  <View className='at-row'>
                    <View className='at-col at-col-2'>
                      <View className='feed-avatar'>
                        <AtAvatar
                          className='avatar'
                          size='small'
                          circle
                          image={item.avatar || normal}
                        />
                      </View>
                    </View>
                    <View
                      className='at-col at-col-10 at-col--wrap'
                      style='margin-top:1%'
                    >
                      <View className='feed-name'>{item.author}</View>
                      <View className='feed-time'>{item.createTime}</View>
                      <View className='feed-back'>
                        <View
                          dangerouslySetInnerHTML={{ __html: item.feedback }}
                        ></View>
                      </View>
                      <View
                        className='feed-img'
                        onClick={() => handleFeedBack(item)}
                      >
                        <Image style='width:100%;height:100%' src={dialog} />
                      </View>
                      <View className='feed-back-list'>
                        {item.replyVoS?.map((it, i) => {
                          return (
                            <View key={i}>
                              <View className='feed-back-from'>
                                <Text className='person'>{it.fromName}</Text>
                                <Text style='margin:0 10rpx'>回复</Text>
                                <Text className='person'>{it.toName}:</Text>
                                <Text>{it.content}</Text>
                              </View>
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                  <AtDivider height={22} lineColor='#e6e6e6' />
                </View>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
  pageSize: state.users.pageSize,
  userId: state.users.userId,
  studentId: state.users.studentId,
  replyList: state.HomeWork.replyList,
}))(FeedBack);
