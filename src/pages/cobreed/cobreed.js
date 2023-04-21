import { useState, useEffect  } from 'react'
import Taro from '@tarojs/taro'
import { View,  Swiper, SwiperItem,  Image, Navigator } from '@tarojs/components'
import { AtTabBar, AtCard, AtList, AtListItem } from 'taro-ui'
// import { Button } from 'antd-mobile'
import Tabs from '@app/component/tabs/tabs'
import pic1 from "../../static/banner1.jpg"
import pic2 from "../../static/banner2.jpg"
import pic3 from "../../static/banner3.jpg"
import './index.less'


function Index() {
  const [tabsCur, setTabsCur] = useState(0)
  const [articleList, setArticleList] = useState([])
  useEffect(()=>{
    userData()
    articleData()
    // bannerData()
  },[])
  // useEffect(()=>{
  //   if(tabsCur){
  //     // setCurrentTab(tabs[tabsCur])
  //   }
  // },[tabsCur])
  
  const userData = () => {
    // Taro.request({
    //   url: "http://localhost:9999/api/user/identity",
    //   }).then((res) => {
    //     console.log(res.data.data)
    //     let newData = res.data.data
    //     let showArr = tabs.map(item => {
    //       const {code} = item
    //       const user = code === 'sign' ? newData.user : ''
    //       return{
    //         ...item,
    //         code,
    //         user
    //       }
    //     })
    //     setTabs(showArr)
    // })
  }
  const articleData = () => {
    // Taro.request({
    //   url:"http://localhost:9999/api/article/allList",
    // }).then((res) =>{ 
    //   console.log(res)
    //   setArticleList(res.data.data)
    // })
    let data = [
      {
        id:0,
        type:0,
        title:'教育',
        content:'小学生作文不会写怎么办？一个写作技巧教孩子写出满分作文！比HTML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-12-12 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:1,
        type:0,
        title:'教育',
        content:'教育部推荐“小学生必读书目”，1-6年级精选书单（含外文名著）！可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-12-11 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:2,
        type:0,
        title:'教育',
        content:'多措并举 从“心”出发——丹巴教育局全力打好校园疫情防控心理健康保！ML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-11-12 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:3,
        type:0,
        title:'教育',
        content:'教育部推荐“小学生必读书目”，1-6年级精选书单（含外文名著）！可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-10-12 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:4,
        type:0,
        title:'教育',
        content:'农村小学教育水平提升的同时应试化的倾向却不容忽视！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-10-13 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:5,
        type:1,
        title:'安全',
        content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-12-15 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:6,
        type:1,
        title:'安全',
        content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-12-14 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:7,
        type:1,
        title:'安全',
        content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-12-22 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:8,
        type:1,
        title:'安全',
        content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-02-12 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:9,
        type:2,
        title:'智慧',
        content:'智慧智慧智慧智慧，智慧智慧智慧智！多措并举 从“心”出发——丹巴教育局全力打好校园疫情防控心理健康保功能比HTML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-01-12 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      },
      {
        id:10,
        type:2,
        title:'智慧',
        content:'智慧智慧智慧智慧，智慧智慧智慧智！多措并举 从“心”出发——丹巴教育局全力打好校园疫情防控心理健康保功能比HTML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
        time:'2023-01-14 14:56',
        img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      }
    ]
    setArticleList(data)
  }

  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: '班级通知',
      code: 'notice',
      user:'',
      url: '/pages/cobreed/notice/notice'
    },
    {
      id: 1,
      title: '通讯录',
      code: 'addressList',
      user:'',
      url: '/pages/cobreed/addressList/addressList'
    },
    {
      id: 2, 
      title: '签到',
      code: 'sign',
      user: '',
      // url: '/pages/sign/sign'
      url: '/pages/cobreed/signInfo/signInfo'
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


  // const [currentTab,setCurrentTab] = useState(tabs[0])
  const tabClick = (e) => {
    setTabsCur(e)
    
  }
   const handleMore = () => {
    console.log('more')
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
      {/* <View className='tabBar'> */}
      <Tabs
        tabList={tabs}
        onClick={tabClick}
        current={tabsCur}
      >
      </Tabs>
      {/* </View> */}
        {/* <Navigator url={`${currentTab.url}?user=${currentTab.user}`} >
        <View className='tabBar'>
          <AtTabBar  
            tabList={tabs}
            onClick={tabClick}
            current={tabsCur}
          /></View>
        </Navigator> */}
        <View className='more'>
          <AtList>
            <Navigator url='/pages/cobreed/moreArticle/moreArticle'>
              <AtListItem title='推荐' extraText='更多' arrow='right' onClick={handleMore} />
            </Navigator>
          </AtList>
          {
            articleList && articleList.slice(0,6).map((item,index) => {
              return <View
                key={index}
                className='card'
              >
               <AtCard
                 key={index}
                 className='card-item'
               >
              <View className='at-row at-row--wrap'>
                <View className='at-col at-col-8 at-col--wrap'>
                  <View className='card-content'>
                    {item.content}
                  </View>
                  <View className='card-time'>{item.time}</View>
                </View>
                <View className='at-col at-col-3'>
                  <View className='card-img'>
                   <Image className='img' src={item.img} />
                  </View>
                </View>
              </View>
            </AtCard>
            </View>
            })
          }
        </View>
      
      

    </View>
  )
}
export default Index
