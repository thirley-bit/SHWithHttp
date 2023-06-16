import { useEffect, useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./MessageDetail.scss";
import { AtAvatar, AtButton, AtInput, AtTextarea } from "taro-ui";

//校园食谱页面
function MessageDetail() {
  const [showData, setShowData] = useState([
    {
      speaker: "e",
      content: "对方的豆腐干大锅饭发红包发给红包发给豆腐干豆腐干地方",
    },
    {
      speaker: "s",
      content: "法规的规定符合符合法规和法规的规定国防部分布广泛",
    },
  ]);
  const [pageNo, setPageNo] = useState(1);
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    console.log(e);
    setInputVal(e);
  };

  const handleSendMessage = (e) => {
    console.log(e);
    setInputVal("");
    
  };

  //   const getChatList =
  console.log(inputVal);

  const handleLongPressMenu = () => {
    console.log(111);
  };
  const handlePreviewPicture = (e) => {
    console.log(e);
  };
  const showLeft = "e";
  const avater =
    "http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg";

  return (
    // <View className='index'>
    //     {
    //         showData.map((item,index) => {
    //             return <View key={index}>
    //             {item.msgtype == 1 &&
    //             <View className='msgitem msg__time'><Text className='msg__text'>{item.msg}</Text></View>
    //             }

    //             私信页面

    //             {/* {item.msgtype == 2 &&
    //             <View className='msgitem msg__notice'><Text className='msg__text'>{item.msg}</Text></View>
    //             }

    //             {item.msgtype == 3 &&
    //             <View className='msgitem'>
    //                 {!item.isme ? <View className='msg__avator'><Image className='msg__avator-Image' src={item.avator} mode='aspectFit' /></View> : null}
    //                 <View className={`msg__cntbox ${item.isme ? 'msg-me' : 'msg-others'}`}>
    //                     <Text className='msg-author'>{item.author}</Text>
    //                     <View className={`msg__cnt ${item.isme ? 'msg__cnt-me' : 'msg__cnt-others'}`} onLongPress={handleLongPressMenu}>
    //                         <Text className='msg__cnt-text'>{item.msg}</Text>
    //                     </View>
    //                 </View>
    //                 {item.isme ? <View className='msg__avator'><Image className='msg__avator-Image' src={item.avator} mode='aspectFit' /></View> : null}
    //             </View>
    //             }

    //             {item.msgtype == 4 &&
    //             <View className='msgitem'>
    //                 {!item.isme ? <View className='msg__avator'><Image className='msg__avator-Image' src={item.avator} mode='aspectFit' /></View> : null}
    //                 <View className={`msg__cntbox ${item.isme ? 'msg-me' : 'msg-others'}`}>
    //                     <Text className='msg-author'>{item.author}</Text>
    //                     <View className={`msg__cnt ${item.isme ? 'msg__cnt-me' : 'msg__cnt-others'} msg__lgface`} onLongPress={handleLongPressMenu}>
    //                         <Image className='msg__lgface-Image' src={item.Imagesrc} mode='widthFix' />
    //                     </View>
    //                 </View>
    //                 {item.isme ? <View className='msg__avator'><Image className='msg__avator-Image' src={item.avator} mode='aspectFit' /></View> : null}
    //             </View>
    //             }

    //             {item.msgtype == 5 &&
    //             <View className='msgitem'>
    //                 {!item.isme ? <View className='msg__avator'><Image className='msg__avator-Image' src={item.avator} mode='aspectFit' /></View> : null}
    //                 <View className={`msg__cntbox ${item.isme ? 'msg-me' : 'msg-others'}`}>
    //                     <Text className='msg-author'>{item.author}</Text>
    //                     <View className={`msg__cnt ${item.isme ? 'msg__cnt-me' : 'msg__cnt-others'} msg__picture`} onClick={() => handlePreviewPicture(item.Imagesrc)} onLongPress={handleLongPressMenu}>
    //                         <Image className='msg__picture-Image' src={item.Imagesrc} mode='widthFix' />
    //                     </View>
    //                 </View>
    //                 {item.isme ? <View className='msg__avator'><Image className='msg__avator-Image' src={item.avator} mode='aspectFit' /></View> : null}
    //             </View>
    //             } */}

    //         </View>
    //         })
    //     }
    // </View>
    // <View class='chat_commento'>
    //     <View class='chat_top'>
    //         是兄弟就来砍我
    //     </View>
    //     <View class='line'></View>
    //     <View class='chat_middle' id='chat_middle_item'>
    //         <View class='chat_left clearfix'>
    //             <View class='chat_left_item_1 '>
    //                 <AtAvatar size='small' circle image='http://123.57.149.51/upload/upload_Image/20230518/7949e771acece58fcc3523fe30c9b489.jpg'></AtAvatar>
    //             </View>
    //             <View class='chat_left_item_2'>
    //                 <View class='chat_time'>张老师</View>
    //                 <View class='chat_left_content'>
    //                     今天吃点啥？今天吃点啥？今天吃点啥？今天吃点啥？今天吃点啥？今天吃点啥？今天吃点啥？今天吃点啥？今天吃点啥？今天吃点啥？
    //                 </View>
    //             </View>
    //         </View>
    //         <View class='chat_right'>
    //             <View class='chat_right_item_1 '>
    //                 <AtAvatar size='small' circle image='http://123.57.149.51/upload/upload_Image/20230518/7949e771acece58fcc3523fe30c9b489.jpg'></AtAvatar>
    //             </View>
    //             <View class='chat_right_item_2 '>
    //                 <View class='chat_right_time'>18:59</View>
    //                 <View class='chat_right_content'>
    //                     最近八合里周年庆店，咱们去薅羊毛呀
    //                 </View>
    //             </View>
    //         </View>
    //         <View class='chat_left clearfix'>
    //             <View class='chat_left_item_1 '>
    //             <AtAvatar size='small' circle image='http://123.57.149.51/upload/upload_Image/20230518/7949e771acece58fcc3523fe30c9b489.jpg'></AtAvatar>
    //             </View>
    //             <View class='chat_left_item_2'>
    //                 <View class='chat_time'>18:57</View>
    //                 <View class='chat_left_content'>
    //                     行收拾一下走吧，早点去排个号
    //                 </View>
    //             </View>
    //         </View>
    //     </View>
    //     <View class='line'></View>
    //     <View class='chat_foot'>
    //         {/* <AtTextarea class='chat_context' id='chat_context_item' cols='30' rows='10' placeholder='请输入'></AtTextarea> */}
    //         {/* <View class='chat_commit' id='button'>发送</View> */}
    //     </View>
    // </View>
    <View className='chatRoom'>
      <View className='chatContent'>
        {showData?.map((item, index) => {
          if (item?.speaker == "e") {
            return (
              <View className='chatLeft' key={index}>
                <Image
                  className='img'
                  src={
                    (showLeft == "e"
                      ? item?.expertImageUrl
                      : item?.userImageUrl) ?? avater
                  }
                  alt=''
                />
                <View className='info'>
                  <View className='name'>
                    {showLeft == "e" ? item?.expertName : item?.userName}
                  </View>
                  <View className='textCon'>
                    <View className='text'>{item?.content}</View>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <View className='chatRight' key={index}>
                <Image
                  className='img'
                  src={
                    (showLeft == "e"
                      ? item?.userImageUrl
                      : item?.expertImageUrl) ?? avater
                  }
                  alt=''
                />
                <View className='info'>
                  <View className='name'>
                    {showLeft == "e" ? item?.userName : item?.expertName}
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
      <View className='inputArea'>
        <AtInput
          className='input'
          placeholder='请输入内容'
          value={inputVal}
          onChange={handleInput}
        />
        <AtButton
          className='button'
          size='small'
          type='primary'
          onClick={handleSendMessage}
        >
          发送
        </AtButton>
      </View>
    </View>
  );
}
export default MessageDetail;
