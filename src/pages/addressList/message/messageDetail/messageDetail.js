import { useEffect, useRef, useState } from "react";
import Taro, {
  useDidHide,
  useDidShow,
  usePullDownRefresh,
  useRouter,
} from "@tarojs/taro";
import { connect } from "react-redux";
// import { AtAvatar, AtButton, AtInput, AtTextarea } from "taro-ui";
import { AtIcon } from "taro-ui";
// import { Prompt } from "react-router";
import { View, Image, Textarea, ScrollView, Video } from "@tarojs/components";
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
  console.log(props, "props");
  const { dispatch, messageList, user, bindStudent, userId } = props;
  const [socketMsgQueue, setSocketMsgQueue] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [scrollHeight, setScrollHeight] = useState({
    height: `calc(100% - 25px)`,
  });
  const [scrollToMsg, setScrollToMsg] = useState([]);
  console.log(scrollToMsg, "scrollToMsg");
  const [showEmoji, setEmoji] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const content = useRef()
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
  //roomId
  // const roomId = router.params.roomId;
  //接收者id
  // const toId = router.params.toId;
  //该条数据id，用于退出窗口
  const id = router.params.id; //87ffde29085946969d21fc03087f1051
  //消息类型，0：单聊；1：群聊
  // const msgType = router.params.msgType;
  // //聊天室名称
  const name = router.params.name;
  // contentType: 0
  // fromId: "3ee83b8573b54f5c99288618039b7c84"
  const msgType = "0";
  const roomId = "62c03293404643efa19b7e81d1ab5927";
  // // sendMessage: "123"
  const toId = "1";

  const handleHideEmoji = () => {
    console.log("handlehide");
    setScrollHeight({ height: `calc(100% - 25px)`})
    setEmoji(false);
  };
  //右滑或手机自带返回键返回页面
  useDidHide(() => {
    console.log("hide");
    quitChat();
  });
  // 左上角退出按钮
  const handleBack = () => {
    quitChat();
  };
  // 退出页面调用接口
  const quitChat = () => {
    console.log("退出");
    dispatch({
      type: "AddressList/getUpdateChatList",
      payload: {
        id: id,
        inWindow: 0,
      },
    });
  };

  const handleToUpper = () => {
    console.log("触顶");

    setPageNo(pageNo + 1);
    getMessageData();
  };
  const getMessageData = () => {
    dispatch({
      type: "AddressList/getMessageList",
      payload: {
        page: pageNo,
        pageSize: 10,
        roomId: roomId,
      },
    }).then((res) => {
      if (res.status == 200) {
        let newData = res.data;
        setScrollToMsg(newData);
        let newMsg = newData.concat(messageList);
        console.log(newMsg, "newMsg");
        dispatch({
          type: "AddressList/changeMessageList",
          payload: newMsg,
        });
        Taro.nextTick(() => {
            Taro.createSelectorQuery().select('#scrollview').boundingClientRect(rect => {
            console.log(rect,'res')
            Taro.pageScrollTo({ scrollTop: rect.top,duration:0})
          }).exec()
        })
      }
    });
  };
  // console.log(content,'content')

  useEffect(() => {
    // 消息列表数据
    getMessageData();
    // 发送消息本地拼接
    if (socketMsgQueue.length > 0) {
      dispatch({
        type: "AddressList/changeMessageList",
        payload: messageList.concat(socketMsgQueue),
      });
    }
    dispatch({
      type: "Class/getWebsocket",
      payload: "3ee83b8573b54f5c99288618039b7c84",
    }).then((task) => {
      task.onOpen(function () {});
    });
    Taro.onSocketOpen(function () {
      console.log("onSocketOpen连接已打开");
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
      setScrollHeight({ height: `calc(100% - ${height}px - 25px )` });
    });
    // 退出应用
    quitChat();
    return () => {
      Taro.offKeyboardHeightChange();
      quitChat();
    };
  }, [socketMsgQueue]);
  const sendSocketMessage = (msg, contentType, imgRes) => {
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
    switch (action.type) {
      //选择表情包
      case "emoji":
        setEmoji(true);
        setScrollHeight({ height: `calc(100% - 350rpx)` });
        break;
      //选择图片和视频
      case "image":
        Taro.chooseMedia({
          count: 9,
          mediaType: ["image", "video"],
          sourceType: ["album", "camera"],
          maxDuration: 30,
          camera: "back",
          success: (res) => {
            let filePathList = res.tempFiles.map((file) =>
              dispatch({
                type: "AddressList/getUploadFile",
                payload: file.tempFilePath,
              }).then((resp) => {
                return resp.data;
              })
            );
            Promise.all(filePathList).then((resp) => {
              resp.forEach((item) => {
                item.forEach((jtem) => {
                  let msg = {
                    roomId: roomId,
                    // fromId: user == 0 ? bindStudent.id : userId,
                    fromId: "3ee83b8573b54f5c99288618039b7c84",
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
        break;
      //文件（doc文档、excel、ppt、pdf、mp4等)
      case "file":
        Taro.chooseMessageFile({
          count: 1,
          type: action.type,
          success: function (res) {
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
                  let msg = {
                    roomId: roomId,
                    // fromId: user == 0 ? bindStudent.id : userId,
                    fromId: "3ee83b8573b54f5c99288618039b7c84",
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
        break;

      case "phone":
        Taro.makePhoneCall({
          //写死，需接口返回
          phoneNumber: "123",
        });
        break;
      default:
        break;
    }
  };
  const handleChoose = (item) => {
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
  };

  //聊天内容类型渲染（文字、图片、视频、文件）
  const _typeMessage = (msgInfo) => {
    let fileType = msgInfo.sendMessage.substr(-3);
    //大小写死，需接口返回
    let size = 23.32;
    let msg = "";
    switch (fileType) {
      case "png":
      case "jpg":
      case "gif":
      case "psd":
      case "jpeg":
      case "bmp":
      case "tiff":
      case "ai":
      case "cdr":
      case "eps":
        msg = "img";
        break;
      case "doc":
        msg = w;
        break;
      case "xls":
        msg = x;
        break;
      case "ppt":
        msg = ppt;
        break;
      case "pdf":
        msg = pdf;
        break;
      case "zip":
      case "rar":
      case "iso":
      case "cab":
      case "7z":
        msg = zip;
        break;
      default:
        break;
    }
    return (
      <View>
        {/* 显示文字和表情 */}
        {msgInfo.contentType == 0 && (
          <View className='text-con-text'>{msgInfo?.sendMessage}</View>
        )}
        {/* 显示图片 */}
        {msgInfo.contentType == 1 && msg == "img" && (
          <View
            className='text-con-img'
            onClick={() => handlePreviewImage(msgInfo)}
          >
            <Image
              style={{ width: "300rpx" }}
              src={msgInfo?.sendMessage}
              mode='widthFix'
            />
          </View>
        )}
        {/* 显示视频 */}
        {msgInfo.contentType == 1 && fileType == "mp4" && (
          <Video
            id='video'
            className='text-con-video'
            // src={msgInfo?.sendMessage}
            src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
            poster=''
            initialTime={0}
            controls
            showFullscreenBtn
            direction={-90}
            autoplay={false}
            loop={false}
            muted={false}
          />
        )}
        {/* 显示文件 */}
        {msgInfo.contentType == 2 && (
          <View
            className='text-con-file'
            onClick={() => handlePreviewFile(msgInfo)}
          >
            <Image className='suffix' src={msg} />
            <View className='name'>新建文件.{fileType}</View>
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
          fileName: "新建文件",
        });
      },
    });
  };
  const getFileType = (url) => {
    if (url.lastIndexOf(".") > -1) {
      return url.slice(url.lastIndexOf(".") + 1).toLowerCase();
    } else {
      return "";
    }
  };

  //聊天内容左右渲染（左侧为对方发送内容、右侧为自己发送内容）
  const _renderMessage = (msgInfo, index) => {
    if (msgInfo?.fromId == (user == 0 ? bindStudent.id : userId)) {
      return (
        <View
          id={`scrollId${index + 1}`}
          className='chat-content-right'
          key={index}
        >
          <Image className='img' src={msgInfo.avatar || normal} alt='' />
          <View className='info'>
            <View className='name' style='text-align:right'>
              {msgInfo?.fromName}
            </View>
            <View className='text-con'>{_typeMessage(msgInfo)}</View>
          </View>
        </View>
      );
    } else {
      //左侧聊天框
      return (
        <View
          id={`scrollId${index + 1}`}
          className='chat-content-left'
          key={index}
        >
          <Image className='img' src={msgInfo.avatar || normal} alt='' />
          <View className='info'>
            <View className='name'>{msgInfo?.fromName}</View>
            <View
              className='text-con'
              style={{ backgroundColor: "#ebebeb", color: "#4c4c4c" }}
            >
              {_typeMessage(msgInfo)}</View>
          </View>
        </View>
      );
    }
  };
  console.log(_renderMessage,'renderMessage');

  //页面渲染
  return (
    <View className='index' onClick={() => handleHideEmoji()}>
      <View onClick={handleBack}>
        <NavTab back handleBack={handleBack} title={name} />
      </View>
      {/* 聊天内容显示滚动框 */}
      <View className='msg__wrapper' style={scrollHeight}>
        <ScrollView
          // ref={content}
          id='scrollview'
          className='ScrollView scroll__view'
          scrollY
          scrollWithAnimation
          scrollIntoView={`scrollId${(scrollToMsg.length)}`}
          onScrollToUpper={handleToUpper}
        >
          {/* 聊天内容 */}
          <View id='chatlistview'   className='chat'>
            <View className='chat-content' style={{ position: "relative" }}>
              {messageList?.map(_renderMessage)}
            </View>
          </View>
        </ScrollView>
        {/* 底部操作框（输入框、发送按钮、表情包、图片、视频、文件发送） */}
        <View class='chat-bottom'>
          <View class='send-msg'>
            <View class='chat-text-area'>
              <Textarea
                className='text-area'
                value={inputVal}
                maxlength={-1}
                autoHeight
                showConfirmBar={false}
                adjustPosition={false}
                onInput={handleInput}
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
              onClick={(e) => {
                if (action.type === "emoji") {
                  e.stopPropagation();
                }
                addImage(action);
              }}
            >
              <Image
                className='action-img'
                style={{ borderRadius: "10rpx", padding: "0" }}
                src={action.url}
              />
            </View>
          );
        })}
        {/* 表情包显示区 */}
        {showEmoji && (
          <View className='emoji'>
            <ScrollView
              className='scroll-emoji'
              scrollY
              scrollWithAnimation
            >
              {emojiList.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      display: "inline-block",
                      width: "80rpx",
                      height: "100rpx",
                    }}
                    onClick={() => handleChoose(item)}
                  >
                    {item}
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
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
