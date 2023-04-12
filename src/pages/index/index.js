import { useState,   } from 'react'
import Taro from '@tarojs/taro'
import { View,  Swiper, SwiperItem,  Image } from '@tarojs/components'
import Tabs from '@app/component/tabs/tabs'
import pic1 from "../../static/banner1.jpg"
import pic2 from "../../static/banner2.jpg"
import pic3 from "../../static/banner3.jpg"
import './index.less'


function Index() {
  // useEffect()
  const data = Taro.request({
    url: "http://localhost:9999/api/user/list",
    }).then(function (res){
      console.log(res.data.data)
      // setTabs(res.data.data)
  })
  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: '班级通知',
      url: '/pages/notice/notice'
    },
    {
      id: 1,
      title: '通讯录',
      url: '/pages/addressList/addressList'
    },
    {
      id: 2,
      title: '签到',
      url: '/pages/signInfo/signInfo'
    },
  ])

  const [bannerList, setBannerList] = useState([
    {
      id: 1,
      title: 'banner1',
      url: pic1
    },
    {
      id: 2,
      title: 'banner2',
      url: pic2
    },
    {
      id: 3,
      title: 'banner3',
      url: pic3
    },
  ])


  const [tabsCur, setTabsCur] = useState(0)
  const tabClick = (e) => {
    setTabsCur(e)
  }


  return (
    <View className='index'>
      <View className='banner'>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {
            bannerList.map((item, index) => {
              return <SwiperItem key={index}>
                <View>
                  <Image style='width:100%' src={item.url} />
                </View>
              </SwiperItem>
            })
          }
        </Swiper>
      </View>

      {/* tabs */}
      <Tabs
        tabList={tabs}
        onClick={tabClick}
        current={tabsCur}
      >
      </Tabs>
    </View>
  )
}
export default Index
