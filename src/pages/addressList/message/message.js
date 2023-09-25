import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Navigator,
  Image,
  Editor,
} from "@tarojs/components";
import { AtSearchBar, AtListItem, AtButton, AtIcon } from "taro-ui";
import PersonList from '@app/component/personList/personList';
import NavTab from '@app/component/NavTab/NavTab';
import "./message.scss";

//私信页面
function Message(props){
  const { dispatch, userId, pageSize, chatList } = props
  useEffect(() => {
    chatListData()
  },[])
  const chatListData = () => {
    dispatch({
      type:'AddressList/getChatList',
      payload:{
        page:1,
        pageSize:pageSize,
        fromId:userId,
        searchKey:''
      }
    })
  }
  const handleDel = (type,id) => {
    console.log(type,id,'type,id')
    dispatch({
      type:'AddressList/getDeleteChatList',
      payload:id
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        chatListData()
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  }


  return (
    <View className='index'>
      <NavTab back title='私信' />
      <View className='search'>
        <AtSearchBar />
      </View>
      <View>
          <PersonList enter='message' showData={chatList} onDel={handleDel} />
      </View>

      {/* <View className='components-page'>
        <View className='operate-box' onClick={() => addImage()}>
          <Image className='img' src={img} />
          <Text className='img-name'>点击插入图片</Text>
        </View>
        <View className='editor-box'>
          <Editor
            id='editor'
            className='editor'
            placeholder='please input...'
            onReady={() => editorReady()}
            onInput={(e) => handleInput(e)}
          ></Editor>
        </View>
      </View>
      <View className='choose-user'>
        <Navigator url='/pages/class/notice/message/chooseUser/chooseUser'>
        <View>
          <AtList>
              <AtListItem title='请选择指定用户' note='-标签：一年级一班' arrow='right' />
            </AtList>
        </View>
        </Navigator>
        <View className='bottom'>
          <Navigator url='/pages/class/notice/message/history/history'>
          <Text className='text'>历史记录</Text>
          </Navigator>
          <AtButton
            type='primary'
            className='send-button'
            onClick={() => handleSend()}
          >
          发送
        </AtButton>
        </View>
      </View> */}
    </View>
  );
}
export default connect((state) =>({
  userId: state.users.userId,
  pageSize: state.users.pageSize,
  messageList: state.AddressList.messageList,
  chatList: state.AddressList.chatList
}))(Message);
