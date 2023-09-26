import { useEffect,  } from "react";
import Taro from "@tarojs/taro";
import { connect } from 'react-redux';
import { View } from "@tarojs/components";
import { AtSearchBar } from "taro-ui";
import PersonList from '@app/component/personList/personList';
import NavTab from '@app/component/NavTab/NavTab';
import "./message.scss";

//私信页面
function Message(props){
  const { dispatch, userId, pageSize, chatList } = props
  useEffect(() => {
    chatListData()
  },[])
  //私信页面的聊天列表
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
  //删除聊天列表记录
  const handleDel = (id) => {
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
    </View>
  );
}
export default connect((state) =>({
  userId: state.users.userId,
  pageSize: state.users.pageSize,
  messageList: state.AddressList.messageList,
  chatList: state.AddressList.chatList
}))(Message);
