import { useEffect, useState } from 'react';
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtDivider, AtIcon } from "taro-ui";
import api from '@/api/api';
import "./DetailHeader.scss";

function DetailHeader(props) {
  const { enter, user, id} = props
  const [detailHeaderData,setDetailHeaderData] = useState({})
  // const data = JSON.parse(decodeURIComponent(router.params.data));


  useEffect(() => {
    detailData()
  }, [])

  const detailData = () => {
    console.log(id)
    let url = ''
    if(enter == "homework"){
      url = "subject/detail"
    }else if(enter == "notice"){
      url = "notice/detail"
    }else{
      url = "score/detail"
    }
    let data = api[url].data
    setDetailHeaderData(data)
  }

  const handleCompleted = () => {
    let url = "subject/detail/completed"
    let data = api[url].data
    setDetailHeaderData(data)
  }
  return (
    // 详情头部组件
    <View className='main'>
      <View className='header'>
        <Text className='title'>{detailHeaderData.title}</Text>
        <View className='note'>
          <AtAvatar className='img' size='small' circle image={detailHeaderData.avatar} />
          <Text className='extra'>
            {detailHeaderData.author + "\xa0\xa0\xa0" + detailHeaderData.time}
          </Text>
        </View>
        <AtDivider className='divider' />
        <View
          className={
            user == "0" && enter == "homework" ? "text" : "text100"
          }
        >
          <Text>{detailHeaderData.detail_content}</Text>
        </View>
        {/* 仅存在于家长端的作业部分 */}
        {user == "0" ? (
          <View className='content'>
            {enter == "homework" && (
              <View>
                {detailHeaderData.hasCompleted == 1 ? (
                  <AtButton className='button' size='small'>
                    已完成
                  </AtButton>
                ) : (
                  <AtButton className='button' type='primary' size='small' onClick={handleCompleted}>
                    未完成
                  </AtButton>
                )}
              </View>
            )}
          </View>
        ) : (
          // 存在于教师端的作业和通知部分
          <View className='content'>
            <AtDivider className='divider' />
            <View className='edit'>
              <View className='img'>
                <AtIcon
                  className='icon'
                  value='edit'
                  size='25'
                  color='#999'
                ></AtIcon>
                <Text className='text'>修改</Text>
              </View>
              <View className='video'>
                <AtIcon
                  className='icon'
                  value='trash'
                  size='25'
                  color='#999'
                ></AtIcon>
                <Text className='text'>删除</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

export default DetailHeader;
