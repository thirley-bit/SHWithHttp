import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { AtAvatar, AtButton, AtInput, AtTextarea } from "taro-ui";
import {
  View,
  Input,
  Image,
  Textarea,
  ScrollView,
  Button,
} from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import normal from "@static/normal.png";
import "./MessageDetail.scss";

//校园食谱页面
function MessageDetail() {
  const showLeft = "own";
  // const scrollTop = 20;
  const [keyboardHeight, setKeyboardHeight] = useState(0)
  const [bottomHeight, setBottomHeight] = useState(0)
  const [scrollTop, setScrollTop] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const [inputVal, setInputVal] = useState("");
  const [showData, setShowData] = useState([
    {
      speaker: "other",
      expertName: "刘老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      expertImageUrl:
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      speaker: "teacher1",
      expertName: "李老师2",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // expertImageUrl:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
      speaker: "other",
      expertName: "刘老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      expertImageUrl:
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userImageUrl:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userImageUrl:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userImageUrl:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      userImageUrl:
        "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
    {
      speaker: "own",
      userName: "张三爸爸",
      content:
        "eeeeeeeword   my name is thirkey对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // userImageUrl:
      // "https://tse1-mm.cn.bing.net/th/id/OIP-C.6bIS7AFNOpR19axzN94_AAHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7",
    },
    {
      speaker: "other",
      expertName: "刘老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      expertImageUrl:
        "https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
      speaker: "other",
      expertName: "李老师",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // expertImageUrl:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
      speaker: "teacher1",
      expertName: "李老师1",
      content: "eeeeeee对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
      // expertImageUrl:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
  ]);
  const sys = Taro.getSystemInfoSync();
  // const style = {height: sys.windowHeight-sys.statusBarHeight}
  const style = { height: `${sys.windowHeight}px ` };
  console.log(sys, "sys>>>");
  console.log(style, "height>>>");

  useEffect(() => {
    scrollMsgBottom();
    // rpxTopx()
  }, []);

  const scrollMsgBottom = () => {
    //外层加延时函数是为了获取到节点的标准信息
    setTimeout(() => {
      let query = Taro.createSelectorQuery();
      //获取节点信息
      query.select("#scrollview").boundingClientRect();
      query.select("#chatlistview").boundingClientRect();
      query.exec((res) => {
        if (res[1].height > res[0].height) {
          let newScrollTop = rpxTopx(res[1].height - res[0].height);
          setScrollTop(newScrollTop);
        }
      });
    }, 15);
  };
  const rpxTopx = (px) => {
    let deviceWidth = Taro.getSystemInfoSync().windowWidth;
    console.log(deviceWidth, "wid");
    let rpx = (750 / deviceWidth) * Number(px);
    return Math.floor(rpx);
  };
  const handleInput = (e) => {
    console.log(e);
    setInputVal(e.detail.value);
  };

  const handleSendMessage = (e) => {
    console.log(e);
    setInputVal("");
  };
  const handleKeyboardHeight = (e) => {
    console.log(e,"e>>>")
  }
  console.log(inputVal,"inputValue>>>")

  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='李老师' style='position:fixed' />
      
      <ScrollView
        id='scrollview'
        className='ScrollView'
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={style}
        // style={height:`${wind}`}
      >
        <View id='chatlistview' className='chatRoom'>
          <View className='chatContent'>
            {showData?.map((item, index) => {
              //右侧聊天框
              if (item?.speaker == "own") {
                return (
                  <View className='chatRight' key={index}>
                    <Image
                      className='img'
                      src={
                        (showLeft == "own"
                          ? item?.userImageUrl
                          : item?.expertImageUrl) ?? normal
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
                  <View className='chatLeft' key={index}>
                    <Image
                      className='img'
                      src={
                        (showLeft == "own"
                          ? item?.expertImageUrl
                          : item?.userImageUrl) ?? normal
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
              showConfirmBar={false}
              auto-height
              onInput={handleInput}
              // adjustPosition={false}
              onKeyboardHeightChange={handleKeyboardHeight}
            ></Textarea>
          </View>
          <Button onClick={handleSendMessage} class='send-btn'>
            发送
          </Button>
        </View>
      </View>
    </View>
  );
}
export default MessageDetail;
