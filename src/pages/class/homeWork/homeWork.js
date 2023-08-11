import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Taro from '@tarojs/taro';
import { View, Picker } from "@tarojs/components";
import Work from "@app/component/Work/Work";
import NavTab from '@app/component/NavTab/NavTab';
import "./HomeWork.scss";
import { AtIcon } from 'taro-ui';

// 作业页面
function HomeWork(props) {
  console.log(props,'props');
  const { dispatch, homeWorkArr, subjectTitle } = props;
  const [time, setTime] = useState("");
  const [selectorChecked, setSelectorChecked] = useState(""); //选中的科目下标

  useEffect(() => {
    dispatch({
      type: "HomeWork/getSubjectList",
    });
    dispatch({
      type: "HomeWork/getTypeTitle",
    });
  }, []);
  const onTimeChange = (e) => {
    setTime(e.detail.value);
    dispatch({
      type: "HomeWork/getTimeSelect",
      payload: e.detail.value,
    });
  };
  const onSubChange = (e) => {
    let No = e.detail.value
    setSelectorChecked(No);
    dispatch({
      type: "HomeWork/getTypeSelect",
      payload: subjectTitle[No].subject_type,
    });
  };
  const systeminfo = Taro.getSystemInfoSync()
  const windowHeight = systeminfo.windowHeight
  const style = {
    height:windowHeight
  }

  return (
    <View className='index' style={style}>
      <NavTab needBackIcon mainTitle='作业' />
      <View>
        <View className='content'>
          <View className='date'>
            <Picker mode='date' fields='month' onChange={onTimeChange}>
              {time == "" ? "日期" : time}
            </Picker>
            <View className='arrow-down'><AtIcon value='chevron-down' size={15} color='#676767'></AtIcon></View>
          </View>
          <View className='selector'>
            <Picker
              mode='selector'
              range={subjectTitle.map((item) => item.subject_title)}
              onChange={onSubChange}
            >
              {selectorChecked == ""
                ? "科目"
                : subjectTitle[selectorChecked].subject_title}
            </Picker>
            <View className='arrow-down'><AtIcon value='chevron-down' size={15} color='#676767'></AtIcon></View>
          </View>
        </View>
      </View>
      <Work enter='homework' showData={homeWorkArr} />
    </View>
  );
}
export default connect((state) => ({
  homeWorkArr: state.HomeWork.homeWorkArr,
  subjectTitle: state.HomeWork.subjectTitle,
}))(HomeWork);
