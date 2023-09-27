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
  const { dispatch, user, userId, pageSize, chatList, bindStudent } = props
  useEffect(() => {
    chatListData()
  },[])
  //私信页面的聊天列表
  const chatListData = () => {
    // setInterval(() => {
      dispatch({
        type:'AddressList/getChatList',
        payload:{
          page:1,
          pageSize:pageSize,
          //是老师时为当前登录人id， 是家长时为当前切换的审核数据id
          fromId: user == 0 ? bindStudent.id : userId,
          searchKey:''
        }
      })
    // },2000)
    
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
  user: state.users.user,
  userId: state.users.userId,
  pageSize: state.users.pageSize,
  messageList: state.AddressList.messageList,
  chatList: state.AddressList.chatList,
  bindStudent: state.users.bindStudent
}))(Message);
