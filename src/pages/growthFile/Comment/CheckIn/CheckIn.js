import { useState } from "react";
import { View, Text, Picker } from "@tarojs/components";
import { AtDivider, AtIcon, AtTabsPane, AtTimeline } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import MyTabs from "@app/component/MyTabs/MyTabs";
import Calendar from "@app/component/Calendar";
import "./CheckIn.scss";

function CheckIn() {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState("");
  const tabList = [
    {
      title: "我的",
    },
    {
      title: "统计",
    },
  ];
  const onTimeChange = (e) => {
    setTime(e.detail.value);
    // dispatch({
    //   type: "HomeWork/getTimeSelect",
    //   payload: e.detail.value,
    // });
  };
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
  const list = [
    {
      time: "2023-08-01",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
      ],
    },
    {
      time: "2023-08-02",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result: "打卡成功",
        },
        {
          time: "18:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result: "打卡成功",
        },
      ],
    },
    {
      time: "2023-08-03",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "迟到",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "迟到",
        },
      ],
    },
    {
      time: "2023-08-04",
      sign: [
        {
          time: "09:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "打卡成功",
        },
      ],
    },
    {
      time: "2023-08-05",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
      ],
    },
    {
      time: "2023-08-06",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
      ],
    },
    {
      time: "2023-08-07",
      sign: [
        {
          time: "09:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
      ],
    },
    {
      time: "2023-08-08",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result: "打卡成功",
        },
      ],
    },
    {
      time: "2023-08-09",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "迟到",
        },
      ],
    },
    {
      time: "2023-08-10",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "缺卡",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
      ],
    },
    {
      time: "2023-08-11",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "早退",
        },
      ],
    },
    {
      time: "2023-08-12",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
      ],
    },
    {
      time: "2023-08-13",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
      ],
    },
    {
      time: "2023-08-14",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result: "准时",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "迟到",
        },
      ],
    },
    {
      time: "2023-08-15",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result: "准时",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
      ],
    },
    {
      time: "2023-08-16",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result: "准时",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
      ],
    },
    {
      time: "2023-08-17",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "迟到",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
      ],
    },
    {
      time: "2023-08-18",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "迟到",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
      ],
    },
    {
      time: "2023-08-19",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
      ],
    },
    {
      time: "2023-08-20",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
      ],
    },
    {
      time: "2023-08-21",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "缺卡",
        },
      ],
    },
    {
      time: "2023-08-22",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "缺卡",
        },
      ],
    },
    {
      time: "2023-08-23",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "缺卡",
        },
      ],
    },
    {
      time: "2023-08-24",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result: "早退",
        },
      ],
    },
    {
      time: "2023-08-25",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result: "未打卡",
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result: "请假申请",
        },
      ],
    },
  ];

  const tipList1 = [
    {
      id: 0,
      name: "迟到/早退/缺卡",
      time: [
        "2023-08-01(周二) 09:20",
        "2023-08-03(周二) 09:20",
        "2023-08-10(周二) 09:20",
      ],
    },
    {
      id: 1,
      name: "请假/补卡申请",
      time: [
        "2023-08-01(周二) 09:20",
        "2023-08-03(周二) 09:20",
        "2023-08-10(周二) 09:20",
      ],
    },
    {
      id: 2,
      name: "考勤轨迹",
      time: [
        {
          time: "2023-08-01",
          sign: [
            {
              time: "09:30",
              status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
              result: "未打卡",
            },
            {
              time: "18:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "未打卡",
            },
          ],
        },
        {
          time: "2023-08-02",
          sign: [
            {
              time: "09:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "打卡成功",
            },
            {
              time: "18:30",
              status: 2, //1:准时，2：迟到，3：请假申请
              result: "打卡成功",
            },
          ],
        },
        {
          time: "2023-08-01",
          sign: [
            {
              time: "09:30",
              status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
              result: "未打卡",
            },
            {
              time: "18:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "未打卡",
            },
          ],
        },
        {
          time: "2023-08-02",
          sign: [
            {
              time: "09:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "打卡成功",
            },
            {
              time: "18:30",
              status: 2, //1:准时，2：迟到，3：请假申请
              result: "打卡成功",
            },
          ],
        },
        {
          time: "2023-08-01",
          sign: [
            {
              time: "09:30",
              status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
              result: "未打卡",
            },
            {
              time: "18:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "未打卡",
            },
          ],
        },
        {
          time: "2023-08-01",
          sign: [
            {
              time: "09:30",
              status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
              result: "未打卡",
            },
            {
              time: "18:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "未打卡",
            },
          ],
        },
        {
          time: "2023-08-01",
          sign: [
            {
              time: "09:30",
              status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
              result: "未打卡",
            },
            {
              time: "18:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "未打卡",
            },
          ],
        },
        {
          time: "2023-08-01",
          sign: [
            {
              time: "09:30",
              status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
              result: "未打卡",
            },
            {
              time: "18:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "未打卡",
            },
          ],
        },
        {
          time: "2023-08-01",
          sign: [
            {
              time: "09:30",
              status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
              result: "未打卡",
            },
            {
              time: "18:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "未打卡",
            },
          ],
        },
        {
          time: "2023-08-02",
          sign: [
            {
              time: "09:30",
              status: 1, //1:准时，2：迟到，3：请假申请
              result: "打卡成功",
            },
            {
              time: "18:30",
              status: 2, //1:准时，2：迟到，3：请假申请
              result: "打卡成功",
            },
          ],
        },
      ],
    },
  ];

  const handleChange = (e) => {
    setCurrent(e);
  };

  return (
    <View className='index'>
      <NavTab back title='考勤状况' />
      <MyTabs current={current} tabList={tabList} onClick={handleChange}>
        <AtTabsPane current={current} index={0}>
          <View className='container'>
            <View className='tips'>
              {tipList.map((item, index) => {
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
          <View className='container'>
            <View className='date'>
              <Picker mode='date' fields='month' onChange={onTimeChange}>
                {time == "" ? "请选择日期" : time}
              </Picker>
              <View className='arrow-down'>
                <AtIcon value='chevron-down' size={15} color='#fff'></AtIcon>
              </View>
            </View>
            <View className='total'>
              <View className='count'>
                <View className='num'>20</View>
                <Text>正常打卡</Text>
              </View>
              <View className='count'>
                <View className='num'>20</View>
                <Text>出勤天数</Text>
              </View>
              <View className='count'>
                <View className='num'>2</View>
                <Text>缺卡</Text>
              </View>
            </View>
            <View className='tips-list'>
              {tipList1.map((item, index) => {
                let itemss = item.time.map((it, j) => {
                  console.log(it?.time);
                  let title = (
                    <View className='title' style={{ color: "#333" }}>
                      {it.time && it.time.slice(5, 10)}
                    </View>
                  );
                  let content = [
                    <View key={j}>
                      {it.sign &&
                        it.sign.map((i) => {
                          let color =
                            i.status == 0
                              ? "#0B7cEE"
                              : i.status == 1
                              ? "#Fa9F04"
                              : "#6D6E8D";
                          return (
                            <View
                              key={j}
                              className='content'
                              style={{ color: color }}
                            >
                              {i.time + "\xa0\xa0" + i.result}
                            </View>
                          );
                        })}
                    </View>,
                  ];
                  return {
                    title,
                    content,
                  };
                });
                return (
                  <View className='tip' key={index}>
                    <View style='margin:24rpx 0 32rpx 0'>
                      <AtDivider height={1} lineColor='#f5f5f5' />
                    </View>
                    {index != 2 ? (
                      <View className='error'>
                        <View
                          className='graph'
                          style={`background:${
                            index == 0 ? "#Fa9F04" : "#6D6E8D"
                          }`}
                        ></View>
                        <Text>{item.name}</Text>
                        {item.time.map((i, j) => {
                          return (
                            <View key={j} className='time'>
                              {i}
                            </View>
                          );
                        })}
                      </View>
                    ) : (
                      <View className='all'>
                        <View
                          className='graph'
                          style='background:#0B7cEE'
                        ></View>
                        <Text>{item.name}</Text>
                        <View className='track'>
                          <AtTimeline items={itemss}></AtTimeline>
                        </View>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        </AtTabsPane>
      </MyTabs>
    </View>
  );
}
export default CheckIn;
