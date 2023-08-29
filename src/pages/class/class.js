import { useState, useEffect } from "react";
import Taro, { getCurrentPages } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Navigator } from "@tarojs/components";
import { AtList, AtListItem, AtTabBar, AtNavBar, AtTag, AtButton } from "taro-ui";
import { connect } from "react-redux";
import ArticleList from "@app/component/articleList/articleList";
// import Tabs from "@app/component/tabs/tabs";
import MyTabs from '@app/component/MyTabs/MyTabs';
import NavTab from '@app/component/NavTab/NavTab';

import homework from "@static/homework.png";
import notice from "@static/notice.png";
import message from "@static/message.png";
import sign from "@static/sign.png";
import more from "@static/more.png";
import down from "@static/down.png";
import "./class.scss";
import "../../app.scss";

function Index(props) {
  const { dispatch, identity, articleArr, bannerList, news, AAA } = props;
  // const [tabsCur, setTabsCur] = useState(0);

  const [current, setCurrent] = useState(0);
  const tabList = [
    {
      title: "作业",
      image: homework,
      url: "/pages/class/HomeWork/HomeWork",
    },
    {
      title: "通知",
      image: notice,
      url: "/pages/class/Notice/Notice",
    },
    {
      title: "安全确认",
      // iconType:'user',
      image: sign,
      url: "/pages/class/Sign/Sign",
    },
    {
      title: "私信",
      // iconType:'user',
      image: message,
      url: "/pages/addressList/message/message",
    },
    {
      title: "更多",
      // iconType:'user',
      image: more,
      url: "/pages/class/MoreModules/MoreModules",
    },
  ];
  useEffect(() => {
    dispatch({
      type: "users/getUser",
    });
    dispatch({
      type: "Class/getArticleList",
    });
  }, []);

  // const tabClick = (e) => {
  //   setTabsCur(e);
  // };
  const handleNav = () => {
    Taro.navigateTo({url:'/pages/my/WaitTodo/WaitTodo'})
  }
  const handleTabClick = (e) => {
    setCurrent(e);
    Taro.navigateTo({
      url: tabList[e].url,
    });
  };
  const handleMore = () => {
    console.log("more");
  };

  const handleClick = (value) => {
    console.log(value);
  };

  const handleClick1 = () => {
    dispatch({
      type: "Class/getNews",
    });
    console.log(news,'news')
    dispatch({
      type: "Class/getAAA",
    });
    console.log(news,'news')
    // Taro.request({
    //   url:'https://jsonplaceholder.typicode.com/users',
    //   header:{
    //     'content-type':'application/json'
    //   },
    //   success:function(res){
    //     console.log(res.data,'res')
    //   }
    // })
  }
  return (
    <View className='index'>
      	<NavTab
        home
        title='诚道吉'
        // renderCenter={
        //     <View
        //       className='trace-rowAlignCenter'
        //     >
        //       自定义导航栏标题
        //     </View>
        //   }
      	/>

      {/* <NavTab  needBackIcon={false} mainTitle='诚道吉' /> */}
      <AtButton onClick={handleClick1}>点击request</AtButton>
      <View className='new' onClick={handleNav}>
        <AtTag circle className='new-tag'>
          我的待办
            <View className='new-num'>10</View> 
            {"\xa0\xa0\xa0\xa0"}
        </AtTag>
      </View>
      <View className='banner'>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
          style='overflow:hidden;border-radius:32rpx;translateY(0)'
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
      <AtTabBar tabList={tabList} onClick={handleTabClick} current={current} />
      <View className='more'>
        <AtList className='more-list'>
          <Navigator url='/pages/class/MoreArticle/MoreArticle'>
            <AtListItem
              title='推荐'
              extraText='更多'
              arrow='right'
              onClick={handleMore}
            />
          </Navigator>
        </AtList>
        <Image className='img-down' src={down} />
        <View>
          <ArticleList
            className='more-article'
            articleList={articleArr}
            onClick={handleClick}
          ></ArticleList>
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  title: state.users.title,
  identity: state.users.identity,
  articleArr: state.Class.articleArr,
  bannerList: state.Class.bannerList,
  tabList: state.Class.tabList,
  news: state.Class.news,
  AAA: state.Class.AAA,
}))(Index);
