import { useEffect, useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { connect } from "react-redux";
// import { AtAvatar, AtButton, AtInput, AtTextarea } from "taro-ui";
import { View, Image, Textarea, ScrollView, Button } from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import normal from "@static/normal.png";
import "./MessageDetail.scss";

function MessageDetail(props) {
  console.log(props, "propsdetail");
  const { dispatch, messageList, userId,  messageDetail } = props;
  const [socketOpen, setSocketOpen] = useState(false);
  const [socketMsgQueue, setSocketMsgQueue] = useState([])
  // const showLeft = "own";
  // const sys = Taro.getSystemInfoSync();
  // const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState({
    // height: `${sys.screenHeight - sys.statusBarHeight - 165}px`,
    // height: `${sys.safeArea.height - 177}px`,
    height: "100%",
  });
  const [inputVal, setInputVal] = useState("");
  const router = useRouter()
  const roomId = router.params.roomId
  const toId = router.params.toId
  console.log(roomId, toId,'roomid,toid')

  useEffect(() => {
    dispatch({
      type: "AddressList/getMessageList",
      payload: {
        page: 1,
        pageSize: 10,
        roomId:roomId
      },
    });

    Taro.connectSocket({
      // url:`ws://192.168.1.157:5002/websocket/${userId}/${roomId}`
      url:`ws://192.168.1.157:5002/websocket/${userId}/${roomId}`,
      header: {
        'content-type': 'application/json', // 默认值
        "token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFsTmFtZSI6IiIsInRlbGVwaG9uZSI6IjE1MDgyMTc4OTg0IiwidXNlclR5cGUiOjAsInVzZXJOYW1lIjoiIiwicmFuZG9tRGF0ZSI6MTY5NTM2NjUwODc1MiwidXNlcklkIjoiYTdmOTMzYjgxMGYyNDE5Yjg0MjBjMzA5NWM4ZDg4ZDUifQ.8nWu2NQ875nvi6ViDZXouctTDILvxD4fLdDkQ8LQEGg'
      },
      success: function (res1) {
        console.log(res1.data)
      }
    }).then(task => {
      task.onOpen(function () {
        console.log('onOpen')
        // task.send({ data: '新消息发送' })
      })
    })
    Taro.onSocketOpen(function (socket) {
      console.log(121212)
      setSocketOpen(true)
      // for(let i = 0;i < socketMsgQueue.length; i++){
      //   console.log(222)
        // sendSocketMessage(socketMsgQueue[i])
      // }
      // setSocketMsgQueue([])
      console.log('onSocketOpen连接已打开')
    })
    Taro.onSocketMessage(function (res) {
      console.log('收到服务器内容：' + res.data)
    })
 




    Taro.onKeyboardHeightChange((res) => {
      console.log(res, "keyboard height");
      const { height } = res;
      setScrollHeight({ height: `calc(100% - ${height}px + 20px )` });
    });
    // scrollMsgBottom();
    return () => Taro.offKeyboardHeightChange();
    // rpxTopx()
   
  }, []);
  const sendSocketMessage = (msg) =>{
    if(socketOpen){
      Taro.sendSocketMessage({data:JSON.stringify(msg)}
        ).then(res => {
        console.log(res,'res')
      })
    }else{
      setSocketMsgQueue(socketMsgQueue.push(msg))
    }
  }


  // const scrollMsgBottom = () => {
  //   //外层加延时函数是为了获取到节点的标准信息11
  //   setTimeout(() => {
  //     let query = Taro.createSelectorQuery();
  //     //获取节点信息
  //     query.select("#scrollview").boundingClientRect();
  //     query.select("#chatlistview").boundingClientRect();
  //     query.exec((res) => {
  //       // console.log(res, "res>>>");
  //       if (res[1].height > res[0].height) {
  //         let newScrollTop = res[1].height - res[0].height;
  //         // setScrollTop(newScrollTop);
  //       }
  //     });
  //   }, 15);
  // };
  // const rpxTopx = (px) => {
  //   let deviceWidth = Taro.getSystemInfoSync().windowWidth
  //   let rpx = ( 750 / deviceWidth ) * Number(px)
  //   console.log(rpx,'rpx>>>')
  //   return Math.floor(rpx)
  // }
  // const handleKeyBoardHeight = () => {
  //   console.log(1111);
  //   Taro.onKeyboardHeightChange((res) => {
  //     let newKeyboardHeight = res.height;
  //     if (!newKeyboardHeight) {
  //       setScrollHeight({
  //         height: `100%`,
  //       });
  //       // setBottomHeight({ marginBottom: "0px" });
  //       // setKeyboardHeight(0)
  //     } else {
  //       let newStyle = {
  //         // height: `${
  //         //   sys.safeArea.height - sys.statusBarHeight - newKeyboardHeight
  //         // }px`,
  //         height: `calc(100vh - ${newKeyboardHeight}rpx)`,
  //       };
  //       console.log(newStyle);
  //       setScrollHeight(newStyle);
  //       let newBottomHeight = { marginBottom: `${newKeyboardHeight}px` };
  //       // setBottomHeight(newBottomHeight);
  //       // setKeyboardHeight(newKeyboardHeight)
  //     }
  //   });
  // };
  // console.log(bottomHeight, "bottonheihght");
  // console.log(scrollHeight, "scroheight");

  const handleInput = (e) => {
    // console.log(e);
    setInputVal(e.detail.value);
  };
  console.log(socketOpen,'open')

  const handleSendMessage = (e) => {
    console.log(inputVal,'inpiut')
  //   let msg =  {
  //     "roomId":"e020f5e2a81d4c19a6b81ea4b99153fc",
  //     "toId":"65f65ea3277f4aae8a8d025706e1ab73",
  //     "fromId":"a7f933b810f2419b8420c3095c8d88d5",
  //     "msgType":0,
  //     "sendMessage":"单聊第一条消息"
  // }
  let msg = {
    roomId:roomId,
    toId:toId,
    fromId:userId,
    msgType:0,
    sendMessage:inputVal
  }
  
    sendSocketMessage(msg)

    // console.log(e);
    // setInputVal("");
    // Taro.chooseImage({
    //   count: 1,
    //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
    //   success: function (res) {
    //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    //     var tempFilePaths = res.tempFilePaths
    //   }
    // })
  };

  const _renderMessage = (msgInfo, index) => {
    if (msgInfo?.fromId == userId) {
      return (
        <View
          id={`scrollId${index + 1}`}
          className='chatRight'
          key={index}
        >
          <Image
            className='img'
            src={
              // JSON.stringify(msgInfo.userAvatar) === "{}"
              //   ? normal
              //   : msgInfo.userAvatar
              
              // normal
              // (showLeft = 'own' ? JSON.stringify(msgInfo.userAvatar) != '{}' ? msgInfo.userAvatar : JSON.stringify(msgInfo.expertAvatar)  != '{}' ? msgInfo.expertAvatar ): normal
              //   : JSON.stringify(msgInfo.expertAvatar)  === '{}'
              // showLeft == "own" ? userAvatar : expertAvatar
              // (showLeft == "own"
              //   ? JSON.stringify(msgInfo.userAvatar) === '{}'
              //   : JSON.stringify(msgInfo.expertAvatar)  === '{}')
              //    ?? normal
              msgInfo.avatar || normal
            }
            alt=''
          />
          <View className='info'>
            <View className='name' style='text-align:right'>
              {msgInfo.fromName}
            </View>
            <View className='textCon'>
              <View className='text'>{msgInfo?.sendMessage}</View>
            </View>
          </View>
        </View>
      );
    } else {
      //左侧聊天框
      return (
        <View
          id={`scrollId${index + 1}`}
          className='chatLeft'
          key={index}
        >
          <Image
            className='img'
            src={msgInfo.avatar||normal}
            alt=''
          />
          <View className='info'>
            <View className='name'>
              {msgInfo.toName}
            </View>
            <View className='textCon'>
              <View className='text'>{msgInfo?.sendMessage}</View>
            </View>
          </View>
        </View>
      );
    }
  }

  return (
    <View className='index'>
      <NavTab
        // style={{ positon: "fixed", top: "0", backgroundColor: '#ffffff', width: "100%", }}
        back
        title='李老师'
      />
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
            <Button onClick={handleSendMessage} class='send-btn'>
              发送
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  userId: state.users.userId,
  showLeft: state.AddressList.showLeft,
  messageList: state.AddressList.messageList,
  messageDetail: state.AddressList.messageDetail,
}))(MessageDetail);
