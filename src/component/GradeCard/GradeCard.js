import React from 'react';
import { View} from "@tarojs/components";
  

const GradeCard=(prop)=>{
  const {cssName,detail}=prop
  return(
  
    <View className={`card card-${cssName}`} >
      <View className={`result result-${cssName}`}>
        <View className={`run run-${cssName}`}>{detail.run}</View>
        <View className={`score score-${cssName}`}>成绩：{detail.score}</View>
        <View className={`point point-${cssName}`}>得分：{detail.point}</View>
      </View>
      <View className={`pass pass-${cssName}`}>{detail.result}</View>
    </View>
  )
}

export default GradeCard