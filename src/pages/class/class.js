import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Navigator } from "@tarojs/components";
import { AtTabBar, AtCard, AtList, AtListItem } from "taro-ui";
import api from "@/api/api";
// import { Button } from 'antd-mobile'
import ArticleList from "@app/component/articleList/articleList";
import Tabs from "@app/component/tabs/tabs";
import pic1 from "../../static/banner1.jpg";
import pic2 from "../../static/banner2.jpg";
import pic3 from "../../static/banner3.jpg";
import "./class.scss";

function Index() {
  const [tabsCur, setTabsCur] = useState(0);
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    // console.log(api)
    userData();
    articleData();
    // bannerData()
  }, []);
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
  };
  const articleData = () => {
    // Taro.request({
    //   url:"http://localhost:9999/api/article/allList",
    // }).then((res) =>{
    //   console.log(res)
    //   setArticleList(res.data.data)
    // })
    let url = "article/allList";
    let data = api[url].data.slice(0, 6);
    setArticleList(data);
  };

  const [tabs, setTabs] = useState([
    {
      id: 0,
      title: "作业",
      code: "homeWork",
      user: "",
      url: "/pages/class/homeWork/homeWork",
    },
    {
      id: 1,
      title: "通知",
      code: "notice",
      user: "",
      url: "/pages/class/notice/notice",
    },
    {
      id: 2,
      title: "安全确认",
      code: "sign",
      user: "",
      // url: '/pages/sign/sign'
      url: "/pages/class/signInfo/signInfo",
    },
    {
      id: 3,
      title: "私信",
      code: "message",
      user: "",
      url: "/pages/class/message/message",
    },
    {
      id: 4,
      title: "更多",
      code: "moreModules",
      user: "",
      url: "/pages/class/moreModules/moreModules",
    },
  ]);
  const [bannerList, setBannerList] = useState([
    {
      id: 1,
      title: "banner1",
      url: pic1,
    },
    {
      id: 2,
      title: "banner2",
      url: pic2,
    },
    {
      id: 3,
      title: "banner3",
      url: pic3,
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
      <Tabs tabList={tabs} onClick={tabClick} current={tabsCur}></Tabs>
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
