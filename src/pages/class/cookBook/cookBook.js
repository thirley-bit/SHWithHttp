// import { View } from "@tarojs/components";
// import { useEffect, useState } from "react";
// import { AtTabs, AtTabsPane, AtTabBar } from "taro-ui";
// import { connect } from "react-redux";
// import NavTab from '@app/component/NavTab/NavTab';
// import "./CookBook.scss";
// //校园食谱页面
// function CookBook(props) {
//   const { dispatch, cookArr } = props;
//   const [tabCurrent, setTabCurrent] = useState(0);
//   const [tabBarCurrent, setTabBarCurrent] = useState(0);

//   useEffect(() => {
//     dispatch({
//       type: "CookBook/getCookList",
//     });
//   }, []);
//   const tabList = [
//     { title: "星期一" },
//     { title: "星期二" },
//     { title: "星期三" },
//     { title: "星期四" },
//     { title: "星期五" },
//     { title: "星期六" },
//     { title: "星期天" },
//   ];
//   const handleTabClick = (e) => {
//     setTabCurrent(e);
//   };
//   const handleTabBarClick = (e) => {
//     setTabBarCurrent(e);
//   };
//   return (
//     <View className='index'>
//       <NavTab back title='校园食谱' />
//       <View className='tab'>
//         <AtTabs
//           current={tabCurrent}
//           height='100vh'
//           tabDirection='vertical'
//           tabList={tabList}
//           onClick={handleTabClick}
//         >
//           {cookArr.map((item, index) => {
//             return (
//               <AtTabsPane
//                 key={index}
//                 tabDirection='vertical'
//                 current={tabCurrent}
//                 index={index}
//               >
//                 <View className='tab-pane'>
//                   <View className='recipe'>
//                     <View style='font-size:36rpx'>素菜</View>
//                     <View className='food-list'>
//                       {item.recipe.vegetable.map((it, i) => {
//                         const title = it.title;
//                         let className = "title";
//                         if (title.length > 7) {
//                           className += " title75";
//                         } else if (title.length > 4) {
//                           className += " title50";
//                         }
//                         return (
//                           <View key={i} className={className}>
//                             {it.title}
//                           </View>
//                         );
//                       })}
//                     </View>
//                   </View>
//                   <View className='recipe'>
//                     <View style='font-size:36rpx'>荤菜</View>
//                     <View className='food-list'>
//                       {item.recipe.meat.map((it, i) => {
//                         const title = it.title;
//                         let className = "title";
//                         if (title.length > 7) {
//                           className += " title75";
//                         } else if (title.length > 4) {
//                           className += " title50";
//                         }
//                         return (
//                           <View key={i} className={className}>
//                             {it.title}
//                           </View>
//                         );
//                       })}
//                     </View>
//                   </View>
//                 </View>
//               </AtTabsPane>
//             );
//           })}
//         </AtTabs>
//       </View>
//       <View className='tab-bar'>
//         <AtTabBar
//           tabList={[
//             { title: "上周" },
//             { title: "本周（5.29-6.2）" },
//             { title: "下周" },
//           ]}
//           backgroundColor='#e0e0e0'
//           onClick={handleTabBarClick}
//           current={tabBarCurrent}
//         />
//       </View>
//     </View>
//   );
// }
// export default connect((state) => ({
//   cookArr: state.CookBook.cookArr,
// }))(CookBook);

import { View, Button } from "@tarojs/components";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AtTabs, AtTabsPane } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';
import "./CookBook.scss";

function CookBook(props) {
  const { dispatch, cookArr } = props;
  console.log(cookArr, "cookArr");
  const [current, setCurrent] = useState(0);
  const [pre, setPre] = useState(false);
  const [next, setNext] = useState(false);
  const [week, setWeek] = useState(true);
  const [action, setAction] = useState(false);

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
  const vegetableList = [
    {
      id: 0,
      week: "星期一",
      list: [
        {
          id: 0,
          kind: "素菜",
          children: [
            {
              id: "0",
              name: "西红柿炒鸡蛋",
            },
            {
              id: "1",
              name: "酸辣土豆丝",
            },
            {
              id: "2",
              name: "红烧茄子",
            },
            {
              id: "3",
              name: "炒包菜",
            },
          ],
        },
        {
          id: 2,
          kind: "荤菜",
          children: [
            {
              id: "0",
              name: "红烧肉",
            },
            {
              id: "1",
              name: "宫保鸡丁",
            },
            {
              id: "2",
              name: "黄瓜木耳炒肉",
            },
            {
              id: "3",
              name: "烧白",
            },
            {
              id: "4",
              name: "烂肉豇豆",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      week: "星期二",
      list: [
        {
          id: 0,
          kind: "素菜",
          children: [
            {
              id: "0",
              name: "红烧豆腐",
            },
            {
              id: "1",
              name: "炒生菜",
            },
            {
              id: "2",
              name: "炒藕片",
            },
            {
              id: "3",
              name: "炒包菜",
            },
            {
              id: "4",
              name: "星期二",
            },
          ],
        },
        {
          id: 2,
          kind: "荤菜",
          children: [
            {
              id: "0",
              name: "红烧肉",
            },
            {
              id: "1",
              name: "宫保鸡丁",
            },
            {
              id: "2",
              name: "黄瓜木耳炒肉",
            },
            {
              id: "3",
              name: "烧白",
            },
            {
              id: "4",
              name: "烂肉豇豆",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      week: "星期三",
      list: [
        {
          id: 0,
          kind: "素菜",
          children: [
            {
              id: "0",
              name: "西红柿炒鸡蛋",
            },
            {
              id: "1",
              name: "酸辣土豆丝",
            },
            {
              id: "2",
              name: "红烧茄子",
            },
            {
              id: "3",
              name: "炒包菜",
            },
          ],
        },
        {
          id: 2,
          kind: "荤菜",
          children: [
            {
              id: "0",
              name: "红烧肉",
            },
            {
              id: "1",
              name: "宫保鸡丁",
            },
            {
              id: "2",
              name: "黄瓜木耳炒肉",
            },
            {
              id: "3",
              name: "烧白",
            },
            {
              id: "4",
              name: "烂肉豇豆",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      week: "星期四",
      list: [
        {
          id: 0,
          kind: "素菜",
          children: [
            {
              id: "0",
              name: "西红柿炒鸡蛋",
            },
            {
              id: "1",
              name: "酸辣土豆丝",
            },
            {
              id: "2",
              name: "红烧茄子",
            },
            {
              id: "3",
              name: "炒包菜",
            },
          ],
        },
        {
          id: 2,
          kind: "荤菜",
          children: [
            {
              id: "0",
              name: "红烧肉",
            },
            {
              id: "1",
              name: "宫保鸡丁",
            },
            {
              id: "2",
              name: "黄瓜木耳炒肉",
            },
            {
              id: "3",
              name: "烧白",
            },
            {
              id: "4",
              name: "烂肉豇豆",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      week: "星期五",
      list: [
        {
          id: 0,
          kind: "素菜",
          children: [
            {
              id: "0",
              name: "西红柿炒鸡蛋",
            },
            {
              id: "1",
              name: "酸辣土豆丝",
            },
            {
              id: "2",
              name: "红烧茄子",
            },
            {
              id: "3",
              name: "炒包菜",
            },
          ],
        },
        {
          id: 2,
          kind: "荤菜",
          children: [
            {
              id: "0",
              name: "红烧肉",
            },
            {
              id: "1",
              name: "宫保鸡丁",
            },
            {
              id: "2",
              name: "黄瓜木耳炒肉",
            },
            {
              id: "3",
              name: "烧白",
            },
            {
              id: "4",
              name: "烂肉豇豆",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      week: "星期六",
      list: [
        {
          id: 0,
          kind: "素菜",
          children: [
            {
              id: "0",
              name: "西红柿炒鸡蛋",
            },
            {
              id: "1",
              name: "酸辣土豆丝",
            },
            {
              id: "2",
              name: "红烧茄子",
            },
            {
              id: "3",
              name: "炒包菜",
            },
          ],
        },
        {
          id: 2,
          kind: "荤菜",
          children: [
            {
              id: "0",
              name: "红烧肉",
            },
            {
              id: "1",
              name: "宫保鸡丁",
            },
            {
              id: "2",
              name: "黄瓜木耳炒肉",
            },
            {
              id: "3",
              name: "烧白",
            },
            {
              id: "4",
              name: "烂肉豇豆",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      week: "星期天",
      list: [
        {
          id: 0,
          kind: "素菜",
          children: [
            {
              id: "0",
              name: "西红柿炒鸡蛋",
            },
            {
              id: "1",
              name: "酸辣土豆丝",
            },
            {
              id: "2",
              name: "红烧茄子",
            },
            {
              id: "3",
              name: "炒包菜",
            },
          ],
        },
        {
          id: 2,
          kind: "荤菜",
          children: [
            {
              id: "0",
              name: "红烧肉",
            },
            {
              id: "1",
              name: "宫保鸡丁",
            },
            {
              id: "2",
              name: "黄瓜木耳炒肉",
            },
            {
              id: "3",
              name: "烧白",
            },
            {
              id: "4",
              name: "烂肉豇豆",
            },
          ],
        },
      ],
    },
  ];
      // 本周
    const  getCurrentWeek = () => {
        //获取当前时间
        const currentDate = new Date()
        //返回date是一周中的某一天
        const week1 = currentDate.getDay()
        //一天的毫秒数
        const millisecond = 1000 * 60 * 60 * 24
        //减去的天数
        const minusDay = week1 != 0 ? week1 - 1 : 6
        //本周 周一
        const firstday = (new Date(currentDate.getTime() - minusDay * millisecond))
        const monday = formatDate(firstday)
        //本周 周日
        const lastday = new Date(firstday.getTime() + 6 * millisecond)
        const sunday = formatDate(lastday)
        const result = monday + '-' + sunday
        return [result]
    }
var formatDate = function(date){
    var month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);//月
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();//日;
    return month + '.' +day
};
    // 点击上一周
    const  handleGetPrevWeek = () => {
      const Time = new Date()
      let weekNum = Time.getDay() 
      weekNum = weekNum == 0 ? 7 : weekNum
      let lastDate = new Date(Time.getTime() - weekNum * 24 * 60 * 60 * 1000)
      let fitstDate = new Date(
        Time.getTime() - (weekNum + 6) * 24 * 60 * 60 * 1000
      )
      let startDate = `${fitstDate.getFullYear()}-${
        fitstDate.getMonth() + 1 < 10
          ? '0' + (fitstDate.getMonth() + 1)
          : fitstDate.getMonth() + 1
      }-${
        fitstDate.getDate() < 10
          ? '0' + fitstDate.getDate()
          : fitstDate.getDate()
      }`
      let endDate = `${lastDate.getFullYear()}-${
        lastDate.getMonth() + 1 < 10
          ? '0' + (lastDate.getMonth() + 1)
          : lastDate.getMonth() + 1
      }-${
        lastDate.getDate() < 10 ? '0' + lastDate.getDate() : lastDate.getDate()
      }`
      return [startDate, endDate]
    }


  return (
    <View className='index'>
      <View className='wrap'>
        <NavTab back title='校园食谱' />
        <AtTabs
          current={current}
          scroll
          height='900rpx'
          tabDirection='vertical'
          tabList={tabList}
          onClick={(v) => {
            setCurrent(v);
          }}
        >
          {vegetableList.map((item, index) => {
            const { id, list = [] } = item;
            return (
              <AtTabsPane
                tabDirection='vertical'
                current={current}
                index={id}
                key={index}
              >
                <View className='login'>请登录学校管理系统上传食谱</View>
              </AtTabsPane>
            );
          })}
          <AtTabsPane tabDirection='vertical' current={current} index={0}>
            <View className='login'>请登录学校管理系统上传食谱</View>
          </AtTabsPane>
        </AtTabs>
        {/* <AtTabs
        current={current}
        scroll
        height='900rpx'
        tabDirection='vertical'
        tabList={tabList}
        onClick={(v) => {
          setCurrent(v);
        }}
      >
        {vegetableList.map((item,index) => {
          const { id, list = [] } = item;
          return (
            <AtTabsPane tabDirection='vertical' current={current} index={id} key={index}>
              {list.map((it) => {
                const { id, kind, children = [] } = it;
                return (
                  <View className='content' key={id}>
                    <View className='vegetable'>{kind}</View>

                    <View className='kind'>
                      {children?.map((v) => {
                        return (
                          <View className='kind-box' key={v.id}>
                            {v.name}
                          </View>
                        );
                      })}
                    </View>
                  </View>
                );
              })}
            </AtTabsPane>
          );
        })}

        <AtTabsPane tabDirection='vertical' current={current} index={0}>
          {vegetableList.map((item) => {
            const { id, kind, children = [] } = item;
            return (
              <View className='content' key={id}>
                <View className='vegetable'>{kind}</View>

                <View className='kind'>
                  {children?.map((v) => {
                    return (
                      <View className='kind-box' key={v.id}>
                        {v.name}
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </AtTabsPane>
      </AtTabs> */}

        <View className='footer'>
          <Button
            className={pre ? "btn" : ""}
            onClick={() => {
              setPre(true);
              setWeek(false);
              setNext(false);
              setAction(true);
            }}
          >
            上一周
          </Button>
          {!action ? (
            <Button className={week ? "btn" : ""} style={{ fontSize: "23rpx" }}>
              <View style={{ height: "30rpx" }}>本周</View>
              <View>{ getCurrentWeek()}</View>
            </Button>
          ) : (
            <Button
              className={week ? "btn" : ""}
              style={{ fontSize: "23rpx" }}
              onClick={() => {
                setWeek(true);
                setPre(false);
                setNext(false);
              }}
            >
              <View style={{ height: "30rpx" }}>本周</View>
              <View>{getCurrentWeek()}</View>
            </Button>
          )}

          <Button
            className={next ? "btn" : ""}
            onClick={() => {
              setNext(true);
              setPre(false);
              setWeek(false);
              setAction(true);
            }}
          >
            下一周
          </Button>
        </View>
      </View>
    </View>
  );
}
export default connect((state) => ({
  cookArr: state.CookBook.cookArr,
}))(CookBook);
