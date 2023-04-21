import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Button,
  Navigator,
  Image,
  Editor,
} from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import "./message.less";
import img from "../../../../static/img.jpg";

function Message() {
  const [editor, setEditor] = useState("");

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
      <View className='componentsPage'>
        <View className='operateBox' onClick={() => addImage()}>
          {/* 插入图片 */}
          <Image className='img' src={img} />
          <Text className='imgName'>点击插入图片</Text>
        </View>
        <View className='editorBox'>
          <Editor
            id='editor'
            className='editor'
            placeholder='please input...'
            onReady={() => editorReady()}
            onInput={(e) => handleInput(e)}
          ></Editor>
        </View>
      </View>
      <View className='chooseUser'>
        <Navigator url='/pages/cobreed/notice/message/chooseUser/chooseUser'>
        <View>
          <AtList>
              <AtListItem title='请选择指定用户' note='-标签：一年级一班' arrow='right' />
            </AtList>
        </View>
        </Navigator>
        <View className='bottom'>
          <Navigator url='/pages/cobreed/notice/message/history/history'>
          <Text className='text'>历史记录</Text>
          </Navigator>
          <Button
            type='primary'
            className='sendButton'
            onClick={() => handleSend()}
          >
          发送
        </Button>
        </View>
      </View>
    </View>
  );
}
export default Message;
