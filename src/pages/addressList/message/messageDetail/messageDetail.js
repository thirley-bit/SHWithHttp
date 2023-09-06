import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { connect } from 'react-redux';
import { AtAvatar, AtButton, AtInput, AtTextarea } from "taro-ui";
import {
  View,
  Image,
  Textarea,
  ScrollView,
  Button,
} from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import normal from "@static/normal.png";
import "./MessageDetail.scss";

function MessageDetail(props){
  console.log(props,'propsdetail')
  const { dispatch, showLeft, messageDetail} = props
  // const showLeft = "own";
  const sys = Taro.getSystemInfoSync();
  // const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState({height:`${sys.screenHeight - sys.statusBarHeight -165 }px`})
  const [bottomHeight, setBottomHeight] = useState({marginBottom:'0px'})
  const [scrollTop, setScrollTop] = useState(0);
  // const [pageNo, setPageNo] = useState(1);
  const [inputVal, setInputVal] = useState("");
  const [showData, setShowData] = useState([
    {
      speaker: "other",
      expertName: "刘老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      expertAvatar:
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      speaker: "teacher1",
      expertName: "李老师2",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // expertAvatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
      speaker: "other",
      expertName: "刘老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      expertAvatar:
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userAvatar:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userAvatar:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userAvatar:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userAvatar:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      content:
        "eeeeeeeword   my name is thirkey对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // userAvatar:
      // "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    },
    {
      speaker: "other",
      expertName: "刘老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      expertAvatar:
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      speaker: "other",
      expertName: "李老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // expertAvatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
      speaker: "teacher1",
      expertName: "李老师1",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // expertAvatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
  ]);

  useEffect(() => {
    dispatch({
      type:'AddressList/getMessageDetail'
    })
    scrollMsgBottom();
    // rpxTopx()
  }, []);


  const scrollMsgBottom = () => {
    //外层加延时函数是为了获取到节点的标准信息11
    setTimeout(() => {
      let query = Taro.createSelectorQuery();
      //获取节点信息
      query.select("#scrollview").boundingClientRect();
      query.select("#chatlistview").boundingClientRect();
      query.exec((res) => {
        console.log(res,'res>>>')
        if (res[1].height > res[0].height) {
          let newScrollTop = res[1].height - res[0].height
          setScrollTop(newScrollTop);
        }
      });
    }, 15);
  };
  // const rpxTopx = (px) => {
  //   let deviceWidth = Taro.getSystemInfoSync().windowWidth
  //   let rpx = ( 750 / deviceWidth ) * Number(px)
  //   console.log(rpx,'rpx>>>')
  //   return Math.floor(rpx)
  // }
  const handleKeyBoardHeight = () => {
    Taro.onKeyboardHeightChange(res => {
      let newKeyboardHeight = res.height - 20
      if(newKeyboardHeight < 0){
        setScrollHeight({height:`${sys.screenHeight - sys.statusBarHeight -165 }px`})
        setBottomHeight({marginBottom:'0px'})
        // setKeyboardHeight(0)
      }else{
        let newStyle = { height: `${sys.screenHeight - sys.statusBarHeight - newKeyboardHeight}px`};
        setScrollHeight(newStyle)
        let newBottomHeight = { marginBottom: `${newKeyboardHeight}px`}
        setBottomHeight(newBottomHeight)
        // setKeyboardHeight(newKeyboardHeight)
      }
    })
  }
  console.log(bottomHeight,'bottonheihght')
  console.log(scrollHeight,'scroheight')
  

  const handleInput = (e) => {
    console.log(e);
    setInputVal(e.detail.value);
  };

  const handleSendMessage = (e) => {
    console.log(e);
    setInputVal("");
  };


  return (
    <View className='index'>
      <NavTab style={{positon:'sticky',top:'0',width:'100%'}} back title='李老师' />
      
      <ScrollView
        id='scrollview'
        className='ScrollView'
        scrollY
        scrollWithAnimation
        scrollIntoView={`scrollId${messageDetail.length}`}
        // scrollTop={scrollTop}

        style={scrollHeight}
      >
        <View id='chatlistview' className='chatRoom'>
          <View className='chatContent'>
            {messageDetail?.map((item, index) => {
              // let userAvatar = JSON.stringify(item.userAvatar) === '{}' ? normal : item.userAvatar
              // let expertAvatar = JSON.stringify(item.expertAvatar) === '{}' ? normal : item.expertAvatar
              // // console.log(userAvatar, expertAvatar ,'avatar')
              //右侧聊天框
              if (item?.speaker == "own") {
                return (
                  <View id={`scrollId${index + 1}`} className='chatRight' key={index}>
                    <Image
                      className='img'
                      src={
                        JSON.stringify(item.userAvatar) === '{}' ? normal : item.userAvatar
                        // normal
                        // (showLeft = 'own' ? JSON.stringify(item.userAvatar) != '{}' ? item.userAvatar : JSON.stringify(item.expertAvatar)  != '{}' ? item.expertAvatar ): normal
                        //   : JSON.stringify(item.expertAvatar)  === '{}'
                        // showLeft == "own" ? userAvatar : expertAvatar
                        // (showLeft == "own"
                        //   ? JSON.stringify(item.userAvatar) === '{}'
                        //   : JSON.stringify(item.expertAvatar)  === '{}')
                        //    ?? normal
                      }
                      alt=''
                    />
                    <View className='info'>
                      <View className='name' style='text-align:right'>
                        {showLeft == "own" ? item?.userName : item?.expertName}
                      </View>
                      <View className='textCon'>
                        <View className='text'>{item?.content}</View>
                      </View>
                    </View>
                  </View>
                );
              } else {
                //左侧聊天框
                return (
                  <View id={`scrollId${index + 1}`} className='chatLeft' key={index}>
                    <Image
                      className='img'
                      src={
                        (showLeft == "own"
                          ? item?.expertAvatar
                          : item?.userAvatar) ?? normal
                      }
                      alt=''
                    />
                    <View className='info'>
                      <View className='name'>
                        {showLeft == "own" ? item?.expertName : item?.userName}
                      </View>
                      <View className='textCon'>
                        <View className='text'>{item?.content}</View>
                      </View>
                    </View>
                  </View>
                );
              }
            })}
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
              adjustPosition
              onInput={handleInput}
              // onKeyboardHeightChange={() => handleKeyBoardHeight()}
            ></Textarea>
          </View>
          <Button onClick={handleSendMessage} class='send-btn' >
            发送
          </Button>
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  showLeft:state.AddressList.showLeft,
  messageDetail: state.AddressList.messageDetail
}))(MessageDetail);
