import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { AtTabs, AtTabsPane, AtTabBar } from "taro-ui";
import "./CookBook.scss";
import { connect } from "react-redux";

//校园食谱页面
function CookBook(props) {
  console.log(props);
  const { dispatch, cookArr } = props;
  const [tabCurrent, setTabCurrent] = useState(0);
  const [tabBarCurrent, setTabBarCurrent] = useState(0);

  useEffect(() => {
    dispatch({
      type: "CookBook/getCookList",
    });
  }, []);
  const tabList = [
    { title: "星期一" },
    { title: "星期二" },
    { title: "星期三" },
    { title: "星期四" },
    { title: "星期五" },
    { title: "星期六" },
    { title: "星期天" },
  ];
  const handleTabClick = (e) => {
    setTabCurrent(e);
  };
  const handleTabBarClick = (e) => {
    setTabBarCurrent(e);
  };
  return (
    <View className='main'>
      <View className='tab'>
        <AtTabs
          current={tabCurrent}
          height='100vh'
          tabDirection='vertical'
          tabList={tabList}
          onClick={handleTabClick}
        >
          {cookArr.map((item, index) => {
            console.log(item);
            return (
              <AtTabsPane
                key={index}
                tabDirection='vertical'
                current={tabCurrent}
                index={index}
              >
                <View className='tab-pane'>
                  <View className='recipe'>
                    <View style='font-size:36rpx'>素菜</View>
                    <View className='food-list'>
                      {item.recipe.vegetable.map((it, i) => {
                        console.log(it);
                        const title = it.title;
                        let className = "title";
                        if (title.length > 7) {
                          className += " title75";
                        } else if (title.length > 4) {
                          className += " title50";
                        }
                        return (
                          <View key={i} className={className}>
                            {it.title}
                          </View>
                        );
                      })}
                    </View>
                  </View>
                  <View className='recipe'>
                    <View style='font-size:36rpx'>荤菜</View>
                    <View className='food-list'>
                      {item.recipe.meat.map((it, i) => {
                        console.log(it);
                        const title = it.title;
                        let className = "title";
                        if (title.length > 7) {
                          className += " title75";
                        } else if (title.length > 4) {
                          className += " title50";
                        }
                        return (
                          <View key={i} className={className}>
                            {it.title}
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </View>
              </AtTabsPane>
            );
          })}
        </AtTabs>
      </View>
      <View className='tab-bar'>
        <AtTabBar
          tabList={[
            { title: "上周" },
            { title: "本周（5.29-6.2）" },
            { title: "下周" },
          ]}
          backgroundColor='#e0e0e0'
          onClick={handleTabBarClick}
          current={tabBarCurrent}
        />
      </View>
    </View>
  );
}
export default connect((state) => ({
  cookArr: state.CookBook.cookArr,
}))(CookBook);
