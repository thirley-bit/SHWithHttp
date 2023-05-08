import { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { AtButton, AtDivider, AtIcon, AtTabs, AtTabsPane } from "taro-ui";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import api from "@/api/api";

import "./workDetail.scss";

function WorkDetail(props) {
  console.log(props);
  const router = useRouter();
  console.log(router);

  const data = JSON.parse(decodeURIComponent(router.params.data));
  console.log(data);
  return (
    <View className='main'>
      {/* 头部详情 */}
      <DetailHeader />
      {/* 家长反馈 */}
      <View className='tab'>
        <View className='tab-title'>
          <Text>家长反馈</Text>
          <AtDivider className='divider' />
        </View>
        {/* 家长反馈内容 */}
        <View className='content'>{data.feedBack}</View>
        <AtDivider className='divider' />
        {/* 插入图片和文字 */}
        <View className='insert'>
          <View className='img'>
            <AtIcon value='image'></AtIcon>
            <Text>添加图片</Text>
          </View>
          <View className='video'>
            <AtIcon value='video'></AtIcon>
            <Text>添加视频</Text>
          </View>
        </View>
      </View>
        <AtButton className='send-button' type='primary'>提交反馈</AtButton>
    </View>
  );
}

export default WorkDetail;
