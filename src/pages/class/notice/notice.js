import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import {
  View,
} from "@tarojs/components";
import Work from '@app/component/Work/Work';
import api from '@/api/api';

import "./notice.scss";


//通知页面
function Notice() {
  const [user, setUser] = useState("");
  const [showWorkData, setShowWorkData] = useState([]); //通知列表

  useEffect(() => {
    userData();
    noticeData()
  },[])

  const userData = () => {
    let url = "identity";
    let data = api[url].data.user_code;
    setUser(data);
  };


  const noticeData = () =>{
    let url = "notice/list";
    let data = api[url].data
    setShowWorkData(data)
  }

  return (
    <View className='main'>
      <Work enter='notice' user={user}  showData={showWorkData} />
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
      </View> */}
      {/* <View className='choose-user'>
        <Navigator url='/pages/class/notice/message/chooseUser/chooseUser'>
        <View>
          <AtList>
              <AtListItem title='请选择指定用户' note='-标签：一年级一班' arrow='right' />
            </AtList>
        </View>
        </Navigator>
        <View className='bottom'>
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
export default Notice;
