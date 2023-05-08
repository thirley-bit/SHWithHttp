import { View, Image, Navigator } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState, useEffect } from "react";
import { AtTabs, AtTabsPane, AtCard } from "taro-ui";
// import ArticleList from '@app/component/articleList/articleList'
import api from "@/api/api";
import "./moreArticle.scss";

function MoreArticle() {
  const [articleList, setArticleList] = useState([]);
  const [tabList, setTabList] = useState([]);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    articleData();
  }, []);

  const articleData = () => {
    // Taro.request({
    //   url:"http://localhost:9999/api/article/allList",
    // }).then((res) =>{

    console.log(api);
    let url = "article/allList";
    let data = api[url].data;
    let newData = data;
    // let newData = res.data.data
    if (!(newData instanceof Array) || newData.length == 0) {
      return {};
    }
    let map = {};
    for (let i = 0; i < newData.length; i++) {
      if (newData[i] instanceof Array || newData.length < 2) {
        continue;
      }
      let type = newData[i].type;
      if (type != undefined) {
        if (map[type] == undefined) {
          map[type] = [];
        }
        map[type].push(newData[i]);
      }
    }
    let newArr = Object.values(map).map((item) => {
      let title = item[0].title;
      return {
        title,
      };
    });
    newArr.unshift({ title: "全部" });
    console.log(newData);
    setArticleList(newData);
    setTabList(newArr);
    // })
  };
  const handleChange = (e) => {
    setCurrent(e);
  };
  console.log(tabList);
  return (
    // <View>
    <AtTabs current={current} tabList={tabList} onClick={handleChange}>
      {tabList.map((item, index) => {
        return (
          <AtTabsPane key={index} current={current} index={index}>
            <View className='content'>
              {articleList &&
                (item.title == "全部"
                  ? articleList
                  : articleList.filter((jtem) => jtem.title == item.title)
                ).map((i) => {
                  return (
                    <View key={i.id} className='card'>
                      <Navigator url='/pages/component/article/article'>
                        <AtCard
                          className='card-item'
                          title={i.title}
                          key={index}
                        >
                          <View className='at-row at-row--wrap'>
                            <View className='at-col at-col-8 at-col--wrap'>
                              <View className='card-content'>{i.content}</View>
                              <View className='card-time'>{i.time}</View>
                            </View>
                            <View className='at-col at-col-3'>
                              <View className='card-img'>
                                <Image className='img' src={i.img} />
                              </View>
                            </View>
                          </View>
                        </AtCard>
                      </Navigator>
                    </View>
                  );
                })}
            </View>
          </AtTabsPane>
        );
      })}
    </AtTabs>
    // </View>
  );
}
export default MoreArticle;
