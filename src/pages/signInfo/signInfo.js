import { useState } from 'react'
import { View,} from '@tarojs/components'
import Tabs from '@app/component/tabs/tabs'

function SignInfo(){
  // const [userTeacher, setUserTeacher] = useState('teacher')
  // const [userParent, setUserParent] = useState('parent')
  const [tabs, setTabs] = useState([
    {
      id:0,
      title:'家长签到',
      user: 'parent',
      url: '/pages/sign/sign'
    },
    {
      id:1,
      title:'教师签到',
      user: 'teacher',
      url:'/pages/sign/sign'
    },
    // {
    //   id:2,
    //   title:'发送消息',
    //   user: '',
    //   url:'/pages/message/message'
    // },
  ])
  const [tabsCur, setTabsCur] = useState(0)

  // const scrollTop = 0
  // const Threshold = 20
  // const onScrollToUpper = () => {
  //   console.log(111)
  // }
  // const onScroll = () => {
  //   console.log(222)
  // }

  const tabClick = (e) => {
    console.log(e)
    // const current = 
    setTabsCur(e)
  }
  console.log(tabsCur)

  
 
  return (
    <View className='index'>
      <Tabs
        tabList={tabs}
        onClick={tabClick}
        current={tabsCur}
      >
      </Tabs>
      </View>
  )
}
export default SignInfo
