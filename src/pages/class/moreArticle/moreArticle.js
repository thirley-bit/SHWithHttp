import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { AtTabsPane, AtCard } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import MyTabs from "@app/component/MyTabs/MyTabs";
import ArticleList from "@app/component/articleList/articleList";
import "./moreArticle.scss";

//更多推荐文章页面
function MoreArticle(props) {
  const { dispatch, articleArr, pageSize } = props;
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    //初始化获取数据，参赛为null获取全部数据
    articleData(null);
  }, []);
  const tabList = [
    {
      title: "全部",
    },
    {
      title: "教育",
    },
    {
      title: "安全",
    },
    {
      title: "智慧",
    },
  ];

  //文章数据接口
  const articleData = (val) => {
    dispatch({
      type: "Class/getArticleList",
      payload: {
        page: 1,
        pageSize: pageSize,
        type: val,
      },
    });
  };
  //切换tab传递不同的参赛获取不同的文章数据
  const handleChange = (e) => {
    if (e == 0) {
      articleData(null);
    } else {
      articleData(e - 1);
    }
    setCurrent(e);
  };
  return (
    <View className='index'>
      <NavTab back title='更多' />
       {/* 显示tab */}
      <MyTabs current={current} tabList={tabList} onClick={handleChange}>
         {/* 每个tab下面的文章 */}
        {tabList.map((index) => {
          return (
            <AtTabsPane key={index} current={current} index={index}>
              <View className='content'>
                <ArticleList 
                  className='more-article'  articleList={articleArr}
                />
              </View>
            </AtTabsPane>
          );
        })}
      </MyTabs>
    </View>
  );
}
export default connect((state) => ({
  articleArr: state.Class.articleArr,
  pageSize: state.users.pageSize,
}))(MoreArticle);
