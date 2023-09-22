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
  console.log(props,'props')
  const { dispatch, messageList,pageSize, chatList } = props
  const [editor, setEditor] = useState("");
  useEffect(() => {
    dispatch({
      type:'AddressList/getChatList',
      payload:{
        page:1,
        pageSize:pageSize,
        fromId:'0b086c03b31248b786ca90eac03b9d83',
        searchKey:''
      }
    })
    console.log(111,'111')
    


  },[])

  //输入框内容
  const [msg, setMsg] = useState("");

  //输入框
  const handleInput = (e) => {
    setMsg(e.target.value)
    console.log(e);
    console.log(e.detail.html);
    console.log(e.detail.text);
    console.log(e.detail.delta);
  };

  //发送按钮
  const handleSend = async () => {
    const sendMsg = msg;
    console.log(sendMsg)
  };
  const editorReady = () => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        let newData = res.context;
        setEditor(newData);
      })
      .exec();
  };
  const addImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album"],
      success: (res) => {
        editor.insertImage({
          src: res.tempFilePaths[0],
          width: "60%",
          success: () => {
            console.log("success");
          },
        });
      },
    });
  };

  return (
    <View className='index'>
      <NavTab back title='私信' />
      <View className='search'>
        <AtSearchBar />
      </View>
      <View>
          <PersonList enter='message' showData={chatList} />
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
  pageSize: state.users.pageSize,
  messageList: state.AddressList.messageList,
  chatList: state.AddressList.chatList
}))(Message);
