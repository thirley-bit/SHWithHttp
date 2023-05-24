import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Navigator } from "@tarojs/components";
import { AtTabBar, AtCard, AtList, AtListItem } from "taro-ui";
import api from "@/api/api";
// import { Button } from 'antd-mobile'
import ArticleList from "@app/component/articleList/articleList";
import Tabs from "@app/component/tabs/tabs";
import "./class.scss";

function Index() {
  const [user, setUser] = useState('')
  const [tabsCur, setTabsCur] = useState(0);
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    // console.log(api)
    identityData()
    userData();
    articleData();
    // bannerData()
  }, []);
  // useEffect(()=>{
  //   if(tabsCur){
  //     // setCurrentTab(tabs[tabsCur])
  //   }
  // },[tabsCur])
  const identityData = () => {
    let url = "identity"
    let data = api[url].data
    setUser(data.user_code)
  }

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
  };
  const articleData = () => {
    // Taro.request({
    //   url:"http://localhost:9999/api/article/allList",
    // }).then((res) =>{
    //   console.log(res)
    //   setArticleList(res.data.data)
    // })
    let url = "article/list";
    let data = api[url].data.slice(0, 6);
    setArticleList(data);
  };
  console.log(user)

  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: "作业",
      code: "homeWork",
      url: "/pages/class/homeWork/homeWork",
    },
    {
      id: 1,
      title: "通知",
      code: "notice",
      url: "/pages/class/notice/notice",
    },
    {
      id: 2,
      title: "安全确认",
      code: "sign",
      url: "/pages/class/sign/sign"
      // url:{`/pages/class/sign/sign?user=${user}`}
      // url: "/pages/class/signInfo/signInfo",
    },
    {
      id: 3,
      title: "私信",
      code: "message",
      url: "/pages/addressList/message/message",
    },
    {
      id: 4,
      title: "更多",
      code: "moreModules",
      url: "/pages/class/moreModules/moreModules",
    },
  ]);
  const [bannerList, setBannerList] = useState([
    {
      id: 1,
      title: "banner1",
      url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      // url: pic1,
    },
    {
      id: 2,
      title: "banner2",
      url:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg'
      // url: pic2,
    },
    {
      id: 3,
      title: "banner3",
      url:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg'
      // url: pic3,
    },
  ]);

  // const [currentTab,setCurrentTab] = useState(tabs[0])
  const tabClick = (e) => {
    setTabsCur(e);
  };
  const handleMore = () => {
    console.log("more");
  };

  const handleClick = (value) => {
    console.log(value);
  };

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
          {bannerList.map((item, index) => {
            return (
              <SwiperItem key={index}>
                <View>
                  <Image style='width:100%' src={item.url} />
                </View>
              </SwiperItem>
            );
          })}
        </Swiper>
      </View>
      {/* <View className='tabBar'> */}
      <Tabs user={user} tabList={tabs} onClick={tabClick} current={tabsCur}></Tabs>
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
          <Navigator url='/pages/class/moreArticle/moreArticle'>
            <AtListItem
              title='推荐'
              extraText='更多'
              arrow='right'
              onClick={handleMore}
            />
          </Navigator>
        </AtList>
        <ArticleList
          articleList={articleList}
          onClick={handleClick}
        ></ArticleList>
      </View>
    </View>
  );
}
export default Index;
