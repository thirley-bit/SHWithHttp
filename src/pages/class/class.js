import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Navigator } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import { connect } from 'react-redux'
import ArticleList from "@app/component/articleList/articleList";
import Tabs from "@app/component/tabs/tabs";
import "./class.scss";


function Index(props) {
  const {dispatch, identity, articleArr, bannerList, tabList} = props
  const [tabsCur, setTabsCur] = useState(0);
  useEffect(() => {
    dispatch({
      type:"users/getUser"
    })
    dispatch({
      type:"users/getArticleList"
    })
  }, []);

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
      <Tabs user={identity} tabList={tabList} onClick={tabClick} current={tabsCur}></Tabs>
      <View className='more'>
        <AtList>
          <Navigator url='/pages/class/MoreArticle/MoreArticle'>
            <AtListItem
              title='推荐'
              extraText='更多'
              arrow='right'
              onClick={handleMore}
            />
          </Navigator>
        </AtList>
        <ArticleList
          articleList={articleArr}
          onClick={handleClick}
        ></ArticleList>
      </View>
    </View>
  );
}
export default connect(state => ({
  title:state.users.title,
  identity:state.users.identity,
  articleArr:state.users.articleArr,
  bannerList:state.users.bannerList,
  tabList:state.users.tabList
}))(Index)
