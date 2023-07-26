import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "@tarojs/components";
import dialog from "@static/dialog.png";
import { AtAvatar, AtDivider } from "taro-ui";
import normal from "@static/normal.png"
import "./index.scss";

function FeedBack(props) {
  console.log(props, "freegds");
  const { feedData } = props;

  const handleFeedBack = (value) => {
    console.log(value)
  }
  return (
    // 详情头部组件
    <View className='feed-container'>
      <View>
        {feedData.map((item, index) => {
          return (
            <View key={index} className='feed-content'>
              {/* <AtAvatar circle size='small' image={item.avatar}></AtAvatar>
              <View>{item.student_name + item.relative}</View> */}

              <View className='at-row'>
                <View className='at-col at-col-2'>
                  <View className='feed-avatar'>
                    <AtAvatar
                      className='avatar'
                      size='small'
                      circle
                      image={item.avatar ? item.avatar : normal}
                    />
                  </View>
                </View>
                <View
                  className='at-col at-col-10 at-col--wrap'
                  style='margin-top:1%'
                >
                  <View className='feed-name'>
                      {item.student_name + item.relative}
                    </View>
                    <View className='feed-time'>{item.create_time}</View>
                    <View className='feed-back'>{item.feed_back}</View>
                    <View className='feed-img' onClick={() => handleFeedBack(item)}>
                      
                    <Image style='width:100%;height:100%' src={dialog} />
                    </View>
                    <View className='feed-back-list'>
                      {item.reply.map((it, i) => {
                        return (
                          <View key={i}>
                            <View className='feed-back-from'>
                              <Text className='person'>{it.from}</Text>
                              <Text style='margin:0 10rpx'>回复</Text>
                              <Text className='person'>{it.to}:</Text>
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
}))(FeedBack);
