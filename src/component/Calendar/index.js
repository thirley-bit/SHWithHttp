import React, { useState, useEffect, useRef } from "react";
import { AtIcon } from 'taro-ui';
import { View, Text, Icon, Swiper, SwiperItem } from "@tarojs/components";
import Days from '@app/component/Calendar/Days';
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

const basic = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};
console.log(basic,'basic')

export default function Calendar() {
  // 日期展示
  const [current, setCurrent] = useState(0);
  const [showDate, setShowDate] = useState([]);
  // 选择的日期
  const [select, setSelect] = useState({});
  const date = useRef({ year: 2023, month: 8, day: 7 });

  useEffect(() => {
    setSelect({ ...basic });
    Day(basic.year, basic.month, basic.day);
  }, []);
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
    setSelect({ year: year, month: month, day: day });
    Day(year, month, day);
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
    setSelect({ year: year, month: month, day: day });
    Day(year, month, day);
  };

  // 日期选择
  const handleChangeDate = (val) => {
    // 使用 useRef 存贮点击的日期，可以同步更新
    date.current = { year: select.year, month: select.month, day: val };
    setSelect({ year: select.year, month: select.month, day: val });
    Day(select.year, select.month, val);
  };

  // 用来计算生成日历面板
  const Day = (year, month, day) => {
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
    let dom = [];

    //显示星期
    if (week !== 0) {
      for (let i = 0; i < week; i++) {
        dom.push("");
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
      dom.push({ day: j, check: check });
    }
    setShowDate(dom);
  };

  return (
    <View className='calendar-content'>
      <View className='calendar-bar'>
        <View className='bar-left'> {select.year}年</View>
        <View className='bar-right'>
          <AtIcon value='chevron-left' onClick={handlePrev} color='#1aa5ff' />
          <Text className='showtext'>{select.month}月</Text>
          <AtIcon value='chevron-right' onClick={handleNext} color='#1aa5ff' />
        </View>
      </View>
      <Swiper
        circular
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
          ></Days>
        </SwiperItem>

        <SwiperItem className='swiper-item'>
          <Days
            weekDay={weekDay}
            showDate={showDate}
            onClick={handleChangeDate}
          ></Days>
        </SwiperItem>
        <SwiperItem className='swiper-item'>
          <Days
            weekDay={weekDay}
            showDate={showDate}
            onClick={handleChangeDate}
          ></Days>
        </SwiperItem>
      </Swiper>
    </View>
  );
}
