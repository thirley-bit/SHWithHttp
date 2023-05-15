import { View, Text } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { AtAvatar, AtButton, AtDivider, AtIcon } from "taro-ui";
import "./detailHeader.scss";

function DetailHeader() {
  const router = useRouter();
  console.log(router);
  const data = JSON.parse(decodeURIComponent(router.params.data));
  const user = router.params.user;
  console.log(data);
  // const user = 'parent'

  // const data = { id:1,
  //   checked:0,
  //   hasNew:0,
  //   hasCompleted:0,
  //   title:'【语文】 2023.04.25 （周二）语文练习',
  //   author:'张老师',
  //   time:'2023-12-12 14:34',
  //   content:'１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段',
  //   avatar:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  // }

  return (
    // 详情头部组件
    <View className='main'>
      <View className='header'>
        <Text className='title'>{data.title}</Text>
        <View className='note'>
          <AtAvatar className='img' size='small' circle image={data.avatar} />
          <Text className='extra'>
            {data.author + "\xa0\xa0\xa0" + data.time}
          </Text>
        </View>
        <AtDivider className='divider' />
        {user == "parent" ? (
          <View className='content'>
            <View className='text'>
              <Text>{data.content}</Text>
            </View>
            {data.hasCompleted == 0 ? (
              <AtButton className='button' size='small'>
                已完成
              </AtButton>
            ) : (
              <AtButton className='button' type='primary' size='small'>
                未完成
              </AtButton>
            )}
          </View>
        ) : (
          <View className='content'>
            <View className='text100'>
              <Text>{data.content}</Text>
            </View>
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
