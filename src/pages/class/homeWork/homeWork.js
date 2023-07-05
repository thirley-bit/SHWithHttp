import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Picker } from "@tarojs/components";
import Work from "@app/component/Work/Work";
import NavTab from '@app/component/NavTab/NavTab';
import "./HomeWork.scss";

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

  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='作业' />
      <View>
        <View className='content'>
          <View className='date'>
            <Picker mode='date' onChange={onTimeChange}>
              {time == "" ? "日期" : time}
            </Picker>
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
