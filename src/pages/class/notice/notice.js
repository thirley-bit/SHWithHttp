import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Navigator,
  Image,
  Editor,
} from "@tarojs/components";
import Work from '@app/component/work/work';
import api from '@/api/api';

import "./notice.scss";

function Notice() {
  const [editor, setEditor] = useState("");
  const [user, setUser] = useState("");
  const [selector, setSelector] = useState([]); //科目选择项
  const [showWorkData, setShowWorkData] = useState([]); //通知列表
  useEffect(() => {
    userData()
    subData()
    noticeData()
  },[])

  const userData = () => {
    let url = "identity";
    let data = api[url].data.user_code;
    setUser(data);
  };
  const subData = () => {
    let url = "subject/list";
    let data = api[url].data;
    setSelector(data);
  };

  const noticeData = () =>{
    let url = "notice/list";
    let data = api[url].data
    setShowWorkData(data)
  }
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
    <View className='main'>
      <Work type='发布通知' user={user} selector={selector} showData={showWorkData} />
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
