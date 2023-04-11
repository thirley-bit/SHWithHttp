import { useState, createContext } from 'react'
import { View, Text, Button, Navigator, Swiper, SwiperItem, ScrollView, OrderItem } from '@tarojs/components'
import Tabs from '@app/component/tabs/tabs'

function SignInfo(){
  const [userTeacher, setUserTeacher] = useState('teacher')
  const [userParent, setUserParent] = useState('parent')
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

  const scrollTop = 0
  const Threshold = 20
  const onScrollToUpper = () => {
    console.log(111)
  }
  const onScroll = () => {
    console.log(222)
  }

  const tabClick = (e) => {
    console.log(e)
    // const current = 
    setTabsCur(e)
  }
  console.log(tabsCur)

  const refreshList = () => {
    console.log(333)
  }
  const rentBuy=()=>{

  }
  const [orders, setOrders] = useState([
    {
      status:1,
      order_id:1,
      shop_name:'www'
    }
  ])
 
  return (
    <View className='index'>
      <Tabs
        tabList={tabs}
        onClick={tabClick}
        current={tabsCur}
        >
      </Tabs>
          {/* <Navigator url={`/pages/sign/sign`}>
            <Button type='primary' size='mini'>签到</Button>
          </Navigator>
          <Navigator 
          url={`/pages/message/message`}
          >
            <Button type='primary' size='mini'>发送消息</Button>
          </Navigator> */}

      </View>
  )
}
export default SignInfo
