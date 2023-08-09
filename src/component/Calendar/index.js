import React, { useState, useEffect, useRef } from "react";
import {
  AtIcon,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
} from "taro-ui";
import Taro from "@tarojs/taro";
import { View, Text, Button, Swiper, SwiperItem } from "@tarojs/components";
import Days from "@app/component/Calendar/Days";
import "./index.scss";

const weekDay = [
  {
    label: "日",
    value: 0,
  },
  {
    label: "一",
    value: 1,
  },
  {
    label: "二",
    value: 2,
  },
  {
    label: "三",
    value: 3,
  },
  {
    label: "四",
    value: 4,
  },
  {
    label: "五",
    value: 5,
  },
  {
    label: "六",
    value: 6,
  },
];

function pad0(data) {
  return data < 10 ? "0" + data : data;
}

const date1 = new Date();
const basic = {
  year: date1.getFullYear(),
  month: date1.getMonth() + 1,
  day: date1.getDate(),
  time: `${date1.getFullYear()}-${pad0(date1.getMonth() + 1)}-${pad0(
    date1.getDate()
  )}`,
};

export default function Calendar() {
  // 日期展示
  const [current, setCurrent] = useState(0);
  const [showDate, setShowDate] = useState([]);
  // 选择的日期
  const [select, setSelect] = useState({});

  const [isOpened, setIsOpened] = useState(false);
  const date = useRef({ ...basic });
  const list = [
    {
      time: "2023-08-01",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，早退，缺卡，3：请假、补卡申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
      ],
    },
    {
      time: "2023-08-02",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result:'打卡成功'
        },
        {
          time: "18:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result:'打卡成功'
        },
      ],
    },
    {
      time: "2023-08-03",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'迟到'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'迟到'
        },
      ],
    },
    {
      time: "2023-08-04",
      sign: [
        {
          time: "09:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'打卡成功'
        },
      ],
    },
    {
      time: "2023-08-05",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
      ],
    },
    {
      time: "2023-08-06",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
      ],
    },
    {
      time: "2023-08-07",
      sign: [
        {
          time: "09:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
      ],
    },
    {
      time: "2023-08-08",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result:'打卡成功'
        },
      ],
    },
    {
      time: "2023-08-09",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'迟到'
        },
      ],
    },
    {
      time: "2023-08-10",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'缺卡'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
      ],
    },
    {
      time: "2023-08-11",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'早退'
        },
      ],
    },
    {
      time: "2023-08-12",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
      ],
    },
    {
      time: "2023-08-13",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
      ],
    },
    {
      time: "2023-08-14",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result:'准时'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'迟到'
        },
      ],
    },
    {
      time: "2023-08-15",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result:'准时'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
      ],
    },
    {
      time: "2023-08-16",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result:'准时'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
      ],
    },
    {
      time: "2023-08-17",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'迟到'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
      ],
    },
    {
      time: "2023-08-18",
      sign: [
        {
          time: "09:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'迟到'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
      ],
    },
    {
      time: "2023-08-19",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
      ],
    },
    {
      time: "2023-08-20",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
      ],
    },
    {
      time: "2023-08-21",
      sign: [
        {
          time: "09:30",
          status: 1, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'缺卡'
        },
      ],
    },
    {
      time: "2023-08-22",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'缺卡'
        },
      ],
    },
    {
      time: "2023-08-23",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'缺卡'
        },
      ],
    },
    {
      time: "2023-08-24",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 2, //1:准时，2：迟到，3：请假申请
          result:'早退'
        },
      ],
    },
    {
      time: "2023-08-25",
      sign: [
        {
          time: "09:30",
          status: 0, //1:准时，2：迟到，3：请假申请
          result:'未打卡'
        },
        {
          time: "18:30",
          status: 3, //1:准时，2：迟到，3：请假申请
          result:'请假申请'
        },
      ],
    },
  ];
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
  const handleError = () => {
    setIsOpened(true);
    console.log("error");
  };
  const handleRequest = (e) => {
    Taro.navigateTo({
      url: `/pages/GrowthFile/History/CheckIn/Request/Request?number=${e}`,
    });
  };
  const handleCancel = () => {
    setIsOpened(false);
  };

  useEffect(() => {
    Day(basic.year, basic.month, basic.day, { ...basic });
  }, []);

  // 用来计算生成日历面板
  const Day = (year, month, day, basicTime) => {
    let total;
    //判断月分是大月还是小月
    //就可以得出这个月除了2月外是30天还是31天
    if (month !== 2) {
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        total = 30;
      } else {
        total = 31;
      }
    } else {
      //判断是否是闰年
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        total = 29;
      } else {
        total = 28;
      }
    }
    let firstday = new Date(year, month - 1, 1);
    let week = firstday.getDay();
    let monthPanel = [];

    //显示星期
    if (week !== 0) {
      for (let i = 0; i < week; i++) {
        monthPanel.push("");
      }
    }
    //显示每一天的号数
    for (let j = 1; j <= total; j++) {
      //选中的日期使用 check
      let check = false;
      // 这里没有使用 select 的日期做比较，是因为 useState 更新是异步的，切换上月或者下月的时候，月份就会匹配不上，就会出现选中一个日期，切换一下月份再回来选择的日期就会丢失，所以使用 useRef 存贮(同步更新)
      if (
        year == date.current.year &&
        month == date.current.month &&
        j == date.current.day
      ) {
        check = true;
      }
      monthPanel.push({
        time: `${year}-${pad0(month)}-${pad0(j)}`,
        day: j,
        check: check,
      });
    }

    const listObj = list.reduce((p, n) => {
      const { time } = n;
      return Object.assign(p, { [time]: n });
    }, {});
    let _current = basicTime;
    let newMonthPanel = monthPanel.map((item) => {
      const time = item.time;
      const cur = listObj[time];
      const sign = (cur && cur.sign) || "";
      if (_current.time === time) {
        _current = { ..._current, sign };
      }
      return {
        ...item,
        sign,
      };
    });
    setShowDate(newMonthPanel);
    setSelect(_current);
    //显示是否有下标
  };

  // 上月
  const handlePrev = () => {
    let month;
    let year;
    let day = select.day;
    if (Number(select.month) > 1) {
      month = select.month - 1;
      year = select.year;
    }
    if (Number(select.month) === 1) {
      month = 12;
      year = select.year - 1;
    }
    let selectDay = {
      year: year,
      month: month,
      day: day,
      time: `${year}-${pad0(month)}-${pad0(day)}`,
    };
    date.current = { year: year, month: month, day: select.day };
    Day(year, month, day, { ...selectDay });
  };

  // 下月
  const handleNext = () => {
    let month;
    let year;
    let day = select.day;
    if (select.month < 12) {
      month = Number(select.month) + 1;
      year = select.year;
    }
    if (select.month == 12) {
      month = 1;
      year = Number(select.year) + 1;
    }
    let selectDay = {
      year: year,
      month: month,
      day: day,
      time: `${year}-${pad0(month)}-${pad0(day)}`,
    };
    date.current = { year: year, month: month, day: select.day };
    Day(year, month, day, { ...selectDay });
  };

  // 日期选择
  const handleChangeDate = (val) => {
    // 使用 useRef 存贮点击的日期，可以同步更新
    let selectDay = {
      year: select.year,
      month: select.month,
      day: val,
      time: `${select.year}-${pad0(select.month)}-${pad0(val)}`,
    };
    date.current = { year: select.year, month: select.month, day: val };
    Day(selectDay.year, selectDay.month, selectDay.day, { ...selectDay });
  };

  console.log(select, "select");

  return (
    <View className='calendar'>
      <View className='calendar-content'>
        <View className='calendar-bar'>
          <View className='bar-left'> {select.year}年</View>
          <View className='bar-right'>
            <AtIcon value='chevron-left' onClick={handlePrev} color='#1aa5ff' />
            <Text className='showtext'>{select.month}月</Text>
            <AtIcon
              value='chevron-right'
              onClick={handleNext}
              color='#1aa5ff'
            />
          </View>
        </View>
        <Swiper
          circular
          className='swiper'
          current={current}
          onChange={(e) => {
            if (e.detail.source === "touch") {
              const currentIndex = e.detail.current;
              if ((current + 1) % 3 === currentIndex) {
                handleNext();
              } else {
                handlePrev();
              }
              setCurrent(e.detail.current);
            }
          }}
        >
          <SwiperItem className='swiper-item'>
            <Days
              weekDay={weekDay}
              showDate={showDate}
              onClick={handleChangeDate}
              markList={list}
            ></Days>
          </SwiperItem>

          <SwiperItem className='swiper-item'>
            <Days
              weekDay={weekDay}
              showDate={showDate}
              onClick={handleChangeDate}
              markList={list}
            ></Days>
          </SwiperItem>
          <SwiperItem className='swiper-item'>
            <Days
              weekDay={weekDay}
              showDate={showDate}
              onClick={handleChangeDate}
              markList={list}
            ></Days>
          </SwiperItem>
        </Swiper>
      </View>
      <View className='bottom'>
        <Text>
          上学时间：{result[0].time}-{result[1].time}
        </Text>
        {select.sign && select.sign.map((item, index) => {
          let status = ''
          if(item.status == 0 || item.status == 1){
            status = false
          }else{
            status = true
          }
          let color = status ? "#DC2153" : "#1BA5FF";
          let backgroundColor = status ? "#FDE0EC" : "#E2F3FF";
          return (
            <View className='time' key={index}>
              {item.time}
              <Text style='margin:0 10rpx'>
                {index == 0 ? '上学' : '放学'}
              </Text>

              <Text
                className='result'
                style={`backgroundColor:${backgroundColor};color:${color}`}
              >
                {item.result}
              </Text>
              {status && (
                <View className='handle' onClick={handleError}>
                  处理异常
                </View>
              )}
            </View>
          );
        })}
      </View>
      <View>
        <AtModal isOpened={isOpened}>
          <AtModalHeader>请您选择要提交的异常类型</AtModalHeader>
          <AtModalContent>
            <View className='request' onClick={() => handleRequest(1)}>
              补卡申请
            </View>
            <View className='request' onClick={() => handleRequest(2)}>
              请假申请
            </View>
          </AtModalContent>
          <AtModalAction>
            <Button className='comfirm' onClick={handleCancel}>
              取消
            </Button>
          </AtModalAction>
        </AtModal>
      </View>
    </View>
  );
}
