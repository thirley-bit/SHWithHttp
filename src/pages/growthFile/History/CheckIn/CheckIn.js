import { useState } from "react";
import { View, Text, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import {
  AtCalendar,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
  AtTabsPane,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import MyTabs from "@app/component/MyTabs/MyTabs";
import Calendar from '@app/component/Calendar';
import "./CheckIn.scss";

function CheckIn() {
  const [current, setCurrent] = useState(0);
  const [isOpened, setIsOpened] = useState(false)
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
  // const time = '09:00-17:30'
  const result = [
    {
      time: "09:00上课",
      checked: 0,
    },
    {
      time: "17:30放学",
      checked: 1,
    },
  ];
 
  const list1 = [
    { value: "2023-08-02", code: 0 },
    { value: "2023-08-03", code: 0 },
    { value: "2023-08-13", code: 0 },
    { value: "2023-08-14", code: 1 },
    { value: "2023-08-15", code: 0 },
    { value: "2023-08-16", code: 2 },
    { value: "2023-08-17", code: 0 },
  ];
  const list = list1.map((item) => {
    let color =
      item.code == 0 ? "#0B7CEE" : item.code == 1 ? "#FA9F04" : "#6D6E8D";
    return {
      ...item,
      color,
    };
  });

  const handleChange = (e) => {
    setCurrent(e);
  };
  const handleError = () => {
    setIsOpened(true)
    console.log("erroe");
  };

  const handleRequest = (e) => {
    Taro.navigateTo({url:`/pages/GrowthFile/History/CheckIn/Request/Request?number=${e}`})
  }
  
  const handleCancel = () => {
    setIsOpened(false)
  }
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
              {/* <Calendar
                marks={list}
                extraInfo={[
                  { value: "2023-08-21", text: "生日", color: "red" },
                  { value: "2023-08-22", text: "休假", color: "darkblue" },
                  { value: "2023-08-23", text: "会议", color: "gray" },
                ]}
                mode='normal'
                selectedDateColor='#346fc2'
                onDayClick={(item) => console.log(item)}
                onDayLongPress={(item) => console.log(item)}
              /> */}
            </View>
            <View className='bottom'>
              <Text>
                上学时间：{result[0].time}-{result[1].time}
              </Text>
              {result.map((item, index) => {
                let checked = item.checked == 0 ? "未打卡" : "打卡成功";
                let backgroundColor = item.checked == 0 ? "#FDE0EC" : "#E2F3FF";
                let color = item.checked == 0 ? "#DC2153" : "#1BA5FF";
                return (
                  <View className='time' key={index}>
                    {item.time}
                    <Text
                      className='result'
                      style={`backgroundColor:${backgroundColor};color:${color}`}
                    >
                      {checked}
                    </Text>
                    {item.checked != 1 && (
                      <View className='handle' onClick={handleError}>
                        处理异常
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
            <AtModal isOpened={isOpened}>
              <AtModalHeader>请您选择要提交的异常类型</AtModalHeader>
              <AtModalContent>
                <View className='request' onClick={() => handleRequest(1)}>补卡申请</View>
                <View className='request' onClick={() => handleRequest(2)}>请假申请</View>
              </AtModalContent>
              <AtModalAction>
                <Button className='comfirm' onClick={handleCancel}>取消</Button>
              </AtModalAction>
            </AtModal>
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
