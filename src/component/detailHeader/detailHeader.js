import { useEffect, useState } from 'react';
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtDivider, AtIcon } from "taro-ui";
import api from '@/api/api';
import "./detailHeader.scss";

function DetailHeader(props) {
  const { type, user, work_id} = props
  const [detailHeaderData,setDetailHeaderData] = useState({})
  // const data = JSON.parse(decodeURIComponent(router.params.data));


  useEffect(() => {
    detailData()

  }, [])

  const detailData = () => {
    console.log(work_id)
    let url = "subject/detail"
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
            user == "0" && type == "布置作业" ? "text" : "text100"
          }
        >
          <Text>{detailHeaderData.detail_content}</Text>
        </View>
        {user == "0" ? (
          <View className='content'>
            {type == "布置作业" && (
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
