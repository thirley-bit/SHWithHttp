import { useEffect, useState } from 'react'
import {  View, Text, Image, } from '@tarojs/components'
import api from '@/api/api'

//校园食谱页面
function MessageDetail() {
    const [showData,setShowData] = useState([])

    useEffect(() => {
        let url = "message/detail"
        let data = api[url].data
        setShowData(data)
    },[])

    const handleLongPressMenu = () => {
        console.log(111)
    }
    const handlePreviewPicture = (e) => {
        console.log(e)
    }

 
  return (
    <View className='index'>
        {
            showData.map((item,index) => {
                return <View key={index}>
                {item.msgtype == 1 && 
                <View className='msgitem msg__time'><Text className='msg__text'>{item.msg}</Text></View>
                }
                
                私信页面
                
                {/* {item.msgtype == 2 && 
                <View className='msgitem msg__notice'><Text className='msg__text'>{item.msg}</Text></View>
                }
                
                {item.msgtype == 3 && 
                <View className='msgitem'>
                    {!item.isme ? <View className='msg__avator'><Image className='msg__avator-img' src={item.avator} mode='aspectFit' /></View> : null}
                    <View className={`msg__cntbox ${item.isme ? 'msg-me' : 'msg-others'}`}>
                        <Text className='msg-author'>{item.author}</Text>
                        <View className={`msg__cnt ${item.isme ? 'msg__cnt-me' : 'msg__cnt-others'}`} onLongPress={handleLongPressMenu}>
                            <Text className='msg__cnt-text'>{item.msg}</Text>
                        </View>
                    </View>
                    {item.isme ? <View className='msg__avator'><Image className='msg__avator-img' src={item.avator} mode='aspectFit' /></View> : null}
                </View>
                }
                
                {item.msgtype == 4 && 
                <View className='msgitem'>
                    {!item.isme ? <View className='msg__avator'><Image className='msg__avator-img' src={item.avator} mode='aspectFit' /></View> : null}
                    <View className={`msg__cntbox ${item.isme ? 'msg-me' : 'msg-others'}`}>
                        <Text className='msg-author'>{item.author}</Text>
                        <View className={`msg__cnt ${item.isme ? 'msg__cnt-me' : 'msg__cnt-others'} msg__lgface`} onLongPress={handleLongPressMenu}>
                            <Image className='msg__lgface-img' src={item.imgsrc} mode='widthFix' />
                        </View>
                    </View>
                    {item.isme ? <View className='msg__avator'><Image className='msg__avator-img' src={item.avator} mode='aspectFit' /></View> : null}
                </View>
                }
                
                {item.msgtype == 5 && 
                <View className='msgitem'>
                    {!item.isme ? <View className='msg__avator'><Image className='msg__avator-img' src={item.avator} mode='aspectFit' /></View> : null}
                    <View className={`msg__cntbox ${item.isme ? 'msg-me' : 'msg-others'}`}>
                        <Text className='msg-author'>{item.author}</Text>
                        <View className={`msg__cnt ${item.isme ? 'msg__cnt-me' : 'msg__cnt-others'} msg__picture`} onClick={() => handlePreviewPicture(item.imgsrc)} onLongPress={handleLongPressMenu}>
                            <Image className='msg__picture-img' src={item.imgsrc} mode='widthFix' />
                        </View>
                    </View>
                    {item.isme ? <View className='msg__avator'><Image className='msg__avator-img' src={item.avator} mode='aspectFit' /></View> : null}
                </View>
                } */}
                
            </View>
            })
        }
    </View>
  )
}
export default MessageDetail
