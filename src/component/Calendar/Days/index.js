import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default function Days(props) {
  console.log(props,'props')
  const { weekDay, showDate, onClick } = props;
  const handleChangeDate = (e) => {
    onClick(e);
  };
  const markIndex = 0
  return (
    <View className='calendar-data-content'>
      {weekDay.map((item) => {
        return (
          <Text className='everyday' key={item.value}>
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
              {markIndex !== -1 && (
                <View
                  className='everyday-mark'
                >
                  <View className='mark-left'></View>
                  <View className='mark-right'></View>
                </View>
                
              )}
            </View>
          );
        })}
    </View>
  );
}
