import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Text, Image, Input, Button } from "@tarojs/components";
import dialog from "@static/dialog.png";
import { AtAvatar, AtDivider, AtModal, AtModalAction, AtModalContent } from "taro-ui";
import normal from "@static/normal.png";
import Modal from "@app/component/Modal";
import "./index.scss";
import { useCommentContext } from '@app/component/context/CommentContext';


function FeedBack(props) {
  console.log(props, useCommentContext, "freegds");
  const { dispatch, pageSize, studentId, userId, workId } = props;
  const [feedData, setFeedData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const { showInput, hideInput }  = useCommentContext();
  

  useEffect(() => {
    dispatch({
      type: "HomeWork/getReplyList",
      payload: {
        page: 1,
        pageSize: pageSize,
        // workId:id,
        workId: "69db8993970c40a79dc6171f0539895f",
        studentId: studentId,
        // userId:userId
        userId: "94d66de363b643b59598efa995722318",
      },
    }).then((res) => {
      setFeedData(res.data);
    });
  }, []);

  const handleFeedBack = (value) => {
    showInput(value)
  };

  return (
    // 详情头部组件
    <View className='feed-container'>
      <View>
        {feedData.map((item, index) => {
          return (
            <View key={index} className='feed-content'>
              <View className='at-row'>
                <View className='at-col at-col-2'>
                  <View className='feed-avatar'>
                    <AtAvatar
                      className='avatar'
                      size='small'
                      circle
                      image={item.avatar == "" ? item.avatar : normal}
                    />
                  </View>
                </View>
                <View
                  className='at-col at-col-10 at-col--wrap'
                  style='margin-top:1%'
                >
                  <View className='feed-name'>{item.author}</View>
                  <View className='feed-time'>{item.createTime}</View>
                  <View className='feed-back'>{item.feedback}</View>
                  <View
                    className='feed-img'
                    onClick={() => handleFeedBack(item)}
                  >
                    <Image style='width:100%;height:100%' src={dialog} />
                  </View>
                  <View className='feed-back-list'>
                    {item.replyVoS.map((it, i) => {
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
      
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
  pageSize: state.users.pageSize,
  userId: state.users.userId,
  studentId: state.users.studentId,
}))(FeedBack);
