import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Days(props) {
  console.log(props, "props");
  const { weekDay, showDate, markList, onClick } = props;
  const handleChangeDate = (e) => {
    onClick(e);
  };

  const renderSiginStatus = (data) => {
    return data.map((i, j, arr) => {
      let _className = 'mark';
      let showOther = true;
      if (j) {
        showOther = i.status !== arr[j-1].status;
      }
      switch (i.status) {
        case 1:
          _className += ' normal';
          break;
        case 2: 
          _className += ' abnormal';
          break;
        case 3:
          _className += ' applications';
          break;
        default:
          break;
      }
      return showOther ? <View key={j} className={_className}></View> : null;
    })
  }

  return (
    <View className='calendar-data-content'>
      {weekDay.map((item) => {
        return (
          <Text className='weekday' key={item.value}>
            {item.label}
          </Text>
        );
      })}
      {showDate &&
        showDate.map((item, index) => {
          return (
            <View
              key={index}
              className='everyday'
              onClick={() => handleChangeDate(item.day)}
            >
              <Text className={`everyday-text ${item.check ? "check" : ""}`}>
                {item.day}
              </Text>
              
              {item.sign && <View className='everyday-mark'>{ renderSiginStatus(item.sign)}</View> }
            </View>
          );
        })}
    </View>
  );
}
