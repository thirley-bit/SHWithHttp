import { useEffect, useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { connect } from "react-redux";
// import { AtAvatar, AtButton, AtInput, AtTextarea } from "taro-ui";
import { View, Image, Textarea, ScrollView, Button } from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import normal from "@static/normal.png";
import "./MessageDetail.scss";
import { AtIcon } from "taro-ui";

function MessageDetail(props) {
  const { dispatch, messageList, user, bindStudent, userId } =
    props;
  const [socketMsgQueue, setSocketMsgQueue] = useState([]);
  // const showLeft = "own";
  // const sys = Taro.getSystemInfoSync();
  // const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState({
    // height: `${sys.screenHeight - sys.statusBarHeight - 165}px`,
    // height: `${sys.safeArea.height - 177}px`,
    height: "100%",
  });
  const [inputVal, setInputVal] = useState("");
  const router = useRouter();
  //roomId
  const roomId = router.params.roomId;
  //接收者id
  const toId = router.params.toId;
  //该条数据id，用于退出窗口
  const id = router.params.id;
  //消息类型，0：单聊；1：群聊
  const msgType = router.params.msgType;
  // //聊天室名称
  const name = router.params.name;
  useEffect(() => {
    if (socketMsgQueue.length > 0) {
      dispatch({
        type: "AddressList/changeMessageList",
        payload: messageList.concat(socketMsgQueue),
      });
    }
  }, [socketMsgQueue]);
  useEffect(() => {
    dispatch({
      type: "AddressList/getMessageList",
      payload: {
        page: 1,
        pageSize: 10,
        roomId: roomId,
      },
    });

    //监听接收的消息
    Taro.onSocketMessage(function (res) {
      let receiveMsg = JSON.parse(res.data);
      //显示监听的消息
      setSocketMsgQueue([
        {
          sendMessage: receiveMsg.message,
          fromName: receiveMsg.userName,
          avatar: receiveMsg.avatar,
        },
      ]);
      console.log("收到服务器内容www：" + res.data);
    });

    //键盘抬起时的滚动窗口
    Taro.onKeyboardHeightChange((res) => {
      const { height } = res;
      setScrollHeight({ height: `calc(100% - ${height}px + 20px )` });
    });
    return () => Taro.offKeyboardHeightChange();
  }, []);

  const sendSocketMessage = (msg, contentType, imgRes) => {
    let sendMessage = "";
    if (contentType == 0) {
      sendMessage = inputVal;
    } else {
      sendMessage = imgRes[0][0]?.fileMappingPath;
    }

    Taro.sendSocketMessage({ data: JSON.stringify(msg) }).then((res) => {
      dispatch({
        type: "AddressList/changeMessageList",
        payload: messageList.concat([
          {
            sendMessage: sendMessage,
            contentType: contentType,
            fromId: user == 0 ? bindStudent.id : userId,
            avatar:
              "https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
          },
        ]),
      });
    });
    setInputVal("");
  };

  const handleInput = (e) => {
    setInputVal(e.detail.value);
  };

  const handleSendMessage = (e) => {
    let msg = {
      roomId: roomId,
      fromId: user == 0 ? bindStudent.id : userId,
      toId: toId,
      msgType: msgType,
      sendMessage: inputVal,
      contentType: 0,
    };
    sendSocketMessage(msg, 0);
  };
  const addImage = () => {
    Taro.chooseImage({
      count: 9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        var tempFilePaths = res.tempFilePaths;
        let filePathList = tempFilePaths.map((filePath) =>
          dispatch({
            type: "AddressList/getUploadFile",
            payload: filePath,
          }).then((resp) => {
            return resp.data;
          })
        );
        Promise.all(filePathList).then((resp) => {
          resp.forEach((item) => {
            item.forEach((jtem) => {
              let msg = {
                roomId: roomId,
                fromId: user == 0 ? bindStudent.id : userId,
                toId: toId,
                msgType: msgType,
                sendMessage: jtem.id,
                contentType: 1,
              };
              sendSocketMessage(msg, 1, resp);
            });
          });
        });
      },
    });
  };
  const handleBack = () => {
    dispatch({
      type: "AddressList/getUpdateChatList",
      payload: {
        id: id,
        inWindow: 0,
      },
    });
  };
  const _typeMessage = (msgInfo) => {
    if (msgInfo.contentType == 0) {
      return (
        <View className='text' style={{ backgroundColor: "#1BA5FF" }}>
          {msgInfo?.sendMessage}
        </View>
      );
    } else {
      return (
        <Image
          className='text'
          style={{ borderRadius: "10rpx", padding: "0" }}
          src={msgInfo?.sendMessage}
        />
      );
    }
  };

  const _renderMessage = (msgInfo, index) => {
    if (msgInfo?.fromId == (user == 0 ? bindStudent.id : userId)) {
      return (
        <View id={`scrollId${index + 1}`} className='chatRight' key={index}>
          <Image className='img' src={msgInfo.avatar || normal} alt='' />
          <View className='info'>
            <View className='name' style='text-align:right'>
              {msgInfo?.fromName}
            </View>
            <View className='textCon'>{_typeMessage(msgInfo)}</View>
          </View>
        </View>
      );
    } else {
      //左侧聊天框
      return (
        <View id={`scrollId${index + 1}`} className='chatLeft' key={index}>
          <Image className='img' src={msgInfo.avatar || normal} alt='' />
          <View className='info'>
            <View className='name'>{msgInfo?.fromName}</View>
            <View className='textCon'>{_typeMessage(msgInfo)}</View>
          </View>
        </View>
      );
    }
  };

  return (
    <View className='index'>
      <View onClick={handleBack}>
        <NavTab back handleBack={handleBack} title={name} />
      </View>

      <View className='msg__wrapper' style={scrollHeight}>
        <ScrollView
          id='scrollview'
          className='ScrollView scroll__view'
          scrollY
          scrollWithAnimation
          scrollIntoView={`scrollId${messageList.length}`}
          // scrollTop={scrollTop}
          // style={scrollHeight}
        >
          <View id='chatlistview' className='chatRoom'>
            <View className='chatContent'>
              {messageList?.map(_renderMessage)}
            </View>
          </View>
        </ScrollView>
        <View class='chat-bottom'>
          <View class='send-msg'>
            <View class='taro-textarea'>
              <Textarea
                className='text-area'
                value={inputVal}
                maxlength={-1}
                autoHeight
                showConfirmBar={false}
                adjustPosition={false}
                onInput={handleInput}
                // holdKeyboard
                // onKeyboardHeightChange={() => handleKeyBoardHeight()}
              />
            </View>
            <GradientButton
              class='send-btn'
              type='primary'
              onClick={() => handleSendMessage()}
            >
              发送
            </GradientButton>
            <View className='add-image' onClick={() => addImage()}>
              <AtIcon value='add' size='30' color='#999'></AtIcon>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  userId: state.users.userId,
  roomId: state.AddressList.roomId,
  bindStudent: state.users.bindStudent,
  showLeft: state.AddressList.showLeft,
  messageList: state.AddressList.messageList,
  messageDetail: state.AddressList.messageDetail,
}))(MessageDetail);
