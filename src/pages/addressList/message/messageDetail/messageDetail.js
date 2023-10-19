import { useEffect, useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { connect } from "react-redux";
// import { AtAvatar, AtButton, AtInput, AtTextarea } from "taro-ui";
import { AtIcon } from "taro-ui";
import { View, Image, Textarea, ScrollView } from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import normal from "@static/normal.png";
import voice from "@static/voice.png";
import emoji from "@static/emoji.png";
import phone from "@static/phone.png";
import img from "@static/img.png";
import folder from "@static/folder.png";
import pdf from "@static/pdf.png";
import w from "@static/w.png";
import x from "@static/x.png";
import ppt from "@static/ppt.png";
import zip from "@static/zip.png";
import "./MessageDetail.scss";

function MessageDetail(props) {
  const { dispatch, messageList, user, bindStudent, userId } = props;
  const [socketMsgQueue, setSocketMsgQueue] = useState([]);
  // const showLeft = "own";
  // const sys = Taro.getSystemInfoSync();
  // const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState({
    // height: `${sys.screenHeight - sys.statusBarHeight - 165}px`,
    // height: `${sys.safeArea.height - 177}px`,
    height: "100%",
  });
  const [showEmoji, setEmoji] = useState(false)
  Taro.connectSocket({
    // url: `ws://192.168.1.157:5002/websocket/${user == 0 ? bindId : userId}`,
    url: `ws://192.168.1.157:5002/websocket/3ee83b8573b54f5c99288618039b7c84`,
    header: {
      "content-type": "application/json", // 默认值
      token: Taro.getStorageSync("token"),
    },
  }).then((task) => {
    task.onOpen(function () {});
  });
  Taro.onSocketOpen(function (socket) {
    console.log("onSocketOpen连接已打开");
  });
  const recorderManager = Taro.getRecorderManager();
  const [inputVal, setInputVal] = useState("");
  const actionList = [
    {
      type: "emoji",
      url: emoji,
    },
    {
      type: "image",
      url: img,
    },
    {
      type: "file",
      url: folder,
    },
    // {
    //   type: "voice",
    //   url: voice,
    // },
    {
      type: "phone",
      url: phone,
    },
  ];
  const emojis =
    "😀,😁,😂,😃,😄,😅,😆,😉,😊,😋,😎,😍,😘,😗,😙,😚,😇,😐,😑,😶,😏,😣,😥,😮,😯,😪,😫,😴,😌,😛,😜,😝,😒,😓,😔,😕,😲,😷,😖,😞,😟,😤,😢,😭,😦,😧,😨,😬,😰,😱,😳,😵,😡,😠,💘,❤,💓,💔,💕,💖,💗,💙,💚,💛,💜,💝,💞,💟,❣,💪,👈,👉,☝,👆,👇,✌,✋,👌,👍,👎,✊,👊,👋,👏,👐,✍,🍇,🍈,🍉,🍊,🍋,🍌,🍍,🍎,🍏,🍐,🍑,🍒,🍓,🍅,🍆,🌽,🍄,🌰,🍞,🍖,🍗,🍔,🍟,🍕,🍳,🍲,🍱,🍘,🍙,🍚,🍛,🍜,🍝,🍠,🍢,🍣,🍤,🍥,🍡,🍦,🍧,🍨,🍩,🍪,🎂,🍰,🍫,🍬,🍭,🍮,🍯,🍼,☕,🍵,🍶,🍷,🍸,🍹,🍺,🍻,🍴,🌹,🍀,🍎,💰,📱,🌙,🍁,🍂,🍃,🌷,💎,🔪,🔫,🏀,⚽,⚡,👄,👍,🔥,🙈,🙉,🙊,🐵,🐒,🐶,🐕,🐩,🐺,🐱,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🐈,🐯,🐅,🐆,🐴,🐎,🐮,🐂,🐃,🐄,🐷,🐖,🐗,🐽,🐏,🐑,🐐,🐪,🐫,🐘,🐭,🐁,🐀,🐹,🐰,🐇,🐻,🐨,🐼,🐾,🐔,🐓,🐣,🐤,🐥,🐦,🐧,🐸,🐊,🐢,🐍,🐲,🐉,🐳,🐋,🐬,🐟,🐠,🐡,🐙,🐚,🐌,🐛,🐜,🐝,🐞,🦋,😈,👿,👹,👺,💀,☠,👻,👽,👾,💣";
  const emojiList = emojis.split(",");

  const router = useRouter();
  // //roomId
  // const roomId = router.params.roomId;
  // //接收者id
  // const toId = router.params.toId;
  // //该条数据id，用于退出窗口
  // const id = router.params.id; //87ffde29085946969d21fc03087f1051
  // //消息类型，0：单聊；1：群聊
  // const msgType = router.params.msgType;
  // // //聊天室名称
  // const name = router.params.name;
  // contentType: 0
  // fromId: "3ee83b8573b54f5c99288618039b7c84"
  const msgType = "0";
  const roomId = "87ffde29085946969d21fc03087f1051";
  // sendMessage: "123"
  const toId = "1";
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
    console.log(msg,)
    let sendMessage = "";
    if (contentType == 0) {
      sendMessage = msg.sendMessage;
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
            // fromId: user == 0 ? bindStudent.id : userId,
            fromId: "3ee83b8573b54f5c99288618039b7c84",
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
      // fromId: user == 0 ? bindStudent.id : userId,
      fromId: "3ee83b8573b54f5c99288618039b7c84",
      toId: toId,
      msgType: msgType,
      sendMessage: inputVal,
      contentType: 0,
    };
    sendSocketMessage(msg, 0);
  };
  const addImage = (action) => {
    console.log(action, "action");
    switch (action.type) {
      case "emoji":
        setEmoji(true)
        // let msg = {
        //   roomId: roomId,
        //   // fromId: user == 0 ? bindStudent.id : userId,
        //   fromId: "3ee83b8573b54f5c99288618039b7c84",
        //   toId: toId,
        //   msgType: msgType,
        //   sendMessage: "发送表情包",
        //   contentType: 0,
        // };
        // sendSocketMessage(msg, 0);
        break;
      case "file":
      case "image":
        Taro.chooseMessageFile({
          count: 1,
          type: action.type,
          success: function (res) {
            console.log(res, "res");
            var tempFilePaths = res.tempFiles;
            let filePathList = tempFilePaths.map((file) =>
              dispatch({
                type: "AddressList/getUploadFile",
                payload: file.path,
              }).then((resp) => {
                return resp.data;
              })
            );
            Promise.all(filePathList).then((resp) => {
              resp.forEach((item) => {
                item.forEach((jtem) => {
                  let msg1 = {
                    roomId: roomId,
                    // fromId: user == 0 ? bindStudent.id : userId,
                    fromId: "3ee83b8573b54f5c99288618039b7c84",
                    toId: toId,
                    msgType: msgType,
                    sendMessage: jtem.id,
                    contentType: 1,
                  };
                  sendSocketMessage(msg1, 1, resp);
                });
              });
            });
          },
        });
        break;
      case 'phone':
        Taro.makePhoneCall({
          phoneNumber:'123'
        })
        break;
      default:
        break;
    }
  };
  const handleChoose =(item) => {
    console.log(item,'item')
    let msg = {
          roomId: roomId,
          // fromId: user == 0 ? bindStudent.id : userId,
          fromId: "3ee83b8573b54f5c99288618039b7c84",
          toId: toId,
          msgType: msgType,
          sendMessage: item,
          contentType: 0,
        };
        sendSocketMessage(msg, 0);
  }

  // const handleBack = () => {
  //   dispatch({
  //     type: "AddressList/getUpdateChatList",
  //     payload: {
  //       id: id,
  //       inWindow: 0,
  //     },
  //   });
  // };
  const _typeMessage = (msgInfo) => {
    console.log(msgInfo.sendMessage,'msginfo')
    let a = msgInfo.sendMessage.substr(-3)
    let size = 23.32
    let msg = ''
    switch (a) {
      case 'doc':
        msg = w
        break;
      case 'xls':
        msg = x
        break;
      case 'ppt':
        msg = ppt
        break;
      case 'pdf':
        msg = pdf
        break;
      case 'zip':
      case 'rar':
      case 'iso':
      case 'cab':
      case '7z':
        msg = zip
        break;
      default:
        break
    }
    return (
      <View>
        {msgInfo.contentType == 0 && (
          <View className='text' style={{ backgroundColor: "#1BA5FF" }}>
            {msgInfo?.sendMessage}
          </View>
        )}
        {msgInfo.contentType == 1 && (
          <View onClick={() => handlePreviewImage(msgInfo)}>
            <Image
              className='text'
              style={{ borderRadius: "10rpx", padding: "0" }}
              src={msgInfo?.sendMessage}
              mode='widthFix'
            />
          </View>
        )}
        {msgInfo.contentType == 2 && (
          <View className='file' onClick={() => handlePreviewFile(msgInfo)}>
            <Image
              className='suffix'
              style={{ float:'right', width:'96rpx',height:'96rpx', borderRadius: "10rpx", padding: "0" }}
              src={msg}
            />
            <View className='name'>新建文件.{a}</View>
            <View className='size'>{size}kb</View>
            
          </View>
        )}
      </View>
    );
  };
  const handlePreviewImage = (e) => {
    Taro.previewImage({
      current: e.sendMessage,
      urls: [e.sendMessage],
    });
  };
  const handlePreviewFile = (e) => {
    Taro.downloadFile({
      url: e.sendMessage,
      success: function (res) {
        var filePath = res.tempFilePath;
        Taro.openDocument({
          filePath: filePath,
          fileType: getFileType(e.sendMessage),
          fileName:'新建文件',
        });
      },
    });
  }
  const getFileType = (url) =>{
    if (url.lastIndexOf(".") > -1) {
      return url.slice(url.lastIndexOf(".") + 1).toLowerCase();
    } else {
      return "";
    }
  }

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
      {/* <View onClick={handleBack}>
        <NavTab back handleBack={handleBack} title={name} />
      </View> */}

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
          </View>
        </View>
        {actionList.map((action, index) => {
          return (
            <View
              key={index}
              className='action'
              style={{ display: "inline-block" }}
              onClick={() => addImage(action)}
            >
              <Image
                className='action-img'
                style={{ borderRadius: "10rpx", padding: "0" }}
                src={action.url}
              />
            </View>
          );
        })}
        {/* <View>{emojiList.map(emoji)}</View> */}
        { showEmoji && <View >{emojiList.map((item,index) => {
          return <View key={index} style={{display:'inline-block'}} onClick={() => handleChoose(item)}>{item}</View>
        })}</View>}
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
