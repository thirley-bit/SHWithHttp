import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Navigator } from "@tarojs/components";
import { AtList, AtListItem, AtTabBar, AtTag } from "taro-ui";
import { connect } from "react-redux";
import ArticleList from "@app/component/ArticleList/ArticleList";
import NavTab from "@app/component/NavTab/NavTab";

import homework from "@static/homework.png";
import notice from "@static/notice.png";
import message from "@static/message.png";
import sign from "@static/sign.png";
import more from "@static/more.png";
import down from "@static/down.png";
import "./class.scss";
import "../../app.scss";

function Index(props) {
  console.log(props, "props");
  const { dispatch, user, bannerList, pageSize, userId } = props;
  const [article, setArticle] = useState([]); //首页推荐文章
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
      image: sign,
      url: "/pages/class/Sign/Sign",
    },
    {
      title: "私信",
      image: message,
      url: "/pages/addressList/message/message",
    },
    {
      title: "更多",
      image: more,
      url: "/pages/class/MoreModules/MoreModules",
    },
  ];

  useEffect(() => {
    dispatch({
      type: "users/getClassAll",
    });
    //加载当前绑定的学生
    dispatch({
      type: "users/getJoinReviewList",
      payload: {
        page: 1,
        pageSize: pageSize,
        userId: userId,
        status: [0, 1, 2, 3],
      },
    }).then((res) => {
      let bindId = res.data.filter((item) => item.defaultFlag == 1)[0].id;
      let requestId = user == 0 ? bindId : userId;
      dispatch({
        type: "Class/getWebsocket",
        payload: requestId,
      }).then((task) => {
        task.onOpen(function () {});
      });
      Taro.onSocketOpen(function () {
        console.log("onSocketOpen连接已打开");
      });
    });
    //推荐文章
    dispatch({
      type: "Class/getArticleList",
      payload: {
        page: 1,
        pageSize: pageSize,
        type: null,
      },
    }).then((res) => {
      setArticle(res.data);
    });
  }, []);
  const handleNav = () => {
    Taro.navigateTo({ url: "/pages/my/WaitTodo/WaitTodo" });
  };
  const handleTabClick = (e) => {
    Taro.navigateTo({
      url: tabList[e].url,
    });
  };
  const handleMore = () => {
    console.log("more");
  };

  return (
    <View className='index'>
      <NavTab home title='诚道吉' />
      {/* 是否有新消息提示 */}
      <View className='new' onClick={handleNav}>
        <AtTag circle className='new-tag'>
          我的待办
          <View className='new-num'>10</View>
          {"\xa0\xa0\xa0\xa0"}
        </AtTag>
      </View>
      {/* banner */}
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
                  <Image
                    style={{ width: "100%", height: "320rpx" }}
                    src={item.url}
                  />
                </View>
              </SwiperItem>
            );
          })}
        </Swiper>
      </View>
      {/* tabbar */}
      <AtTabBar tabList={tabList} onClick={handleTabClick} current='' />
      {/* 推荐文章 */}
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
        <Image className='more-right' src={down} />
        <View>
          <ArticleList
            className='more-article'
            articleList={article}
          />
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  pageSize: state.users.pageSize,
  userId: state.users.userId,
  studentId: state.users.studentId,
  bindStudent: state.users.bindStudent,
  title: state.users.title,
  identity: state.users.identity,
  articleArr: state.Class.articleArr,
  bannerList: state.Class.bannerList,
  tabList: state.Class.tabList,
}))(Index);
