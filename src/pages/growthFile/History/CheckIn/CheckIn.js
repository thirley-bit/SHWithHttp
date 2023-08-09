import { useState } from "react";
import { View, Text } from "@tarojs/components";
import { AtTabsPane } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import MyTabs from "@app/component/MyTabs/MyTabs";
import Calendar from "@app/component/Calendar";
import "./CheckIn.scss";

function CheckIn() {
  const [current, setCurrent] = useState(0);
  const tabList = [
    {
      title: "我的",
    },
    {
      title: "周统计",
    },
    {
      title: "月统计",
    },
  ];
  const tipList = [
    {
      id: 0,
      name: "全天考勤正常",
    },
    {
      id: 1,
      name: "当天存在异常：迟到、早退、缺卡",
    },
    {
      id: 2,
      name: "当天提交过：请假、补卡申请",
    },
  ];

  const handleChange = (e) => {
    setCurrent(e);
  };
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='考勤状况' />
      <MyTabs current={current} tabList={tabList} onClick={handleChange}>
        <AtTabsPane current={current} index={0}>
          <View className='container'>
            <View className='tips'>
              {tipList.map((item, index) => {
                console.log(index, "index");
                return (
                  <View className='tip' key={index}>
                    <View
                      className='graph'
                      style={`background:${
                        index == 0
                          ? "#0B7cEE"
                          : index == 1
                          ? "#Fa9F04"
                          : "#6D6E8D"
                      }`}
                    ></View>
                    <Text>{item.name}</Text>
                  </View>
                );
              })}
            </View>
            <View className='calendar'>
              <Calendar />
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          222
        </AtTabsPane>
      </MyTabs>
    </View>
  );
}
export default CheckIn;
