import { useState } from 'react'
import { View,} from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import Tabs from '@app/component/tabs/tabs'

function SignInfo(){
  // const [userTeacher, setUserTeacher] = useState('teacher')
  // const [userParent, setUserParent] = useState('parent')
  const [tabs, setTabs] = useState([
    {
      id:0,
      title:'家长签到',
      user: 'parent',
      url: '/pages/cobreed/sign/sign'
    },
    {
      id:1,
      title:'教师签到',
      user: 'teacher',
      url:'/pages/cobreed/sign/sign'
    },
  ])
  const [tabsCur, setTabsCur] = useState(0)
  const tabClick = (e) => {
    setTabsCur(e)
  }

  
 
  return (
    <View className='tabBar'>
      {/* <AtTabBar
        tabList={tabs}
        onClick={tabClick}
        current={tabsCur}
      /> */}
      <Tabs
        style='marginTop:10rpx'
        tabList={tabs}
        onClick={tabClick}
        current={tabsCur}
      >
      </Tabs>
      </View>
  )
}
export default SignInfo
