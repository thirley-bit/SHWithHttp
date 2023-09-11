import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { AtIcon } from "taro-ui";
import { View, Picker } from "@tarojs/components";
import Work from "@app/component/Work/Work";
import NavTab from "@app/component/NavTab/NavTab";
import "./HomeWork.scss";

// 作业页面
function HomeWork(props) {
  console.log(props, "props");
  const { dispatch, workList, pageSize, homeWorkArr, subjectType } = props;
  const [time, setTime] = useState("");
  const [selectorChecked, setSelectorChecked] = useState(""); //选中的科目下标
  const [page, setPage] = useState(1)
  const [chooseSubjectType, setChooseSubjectType] = useState('')
  const [createTime, setCreateTime] = useState('')
  const style = {
    height: Taro.getSystemInfoSync().windowHeight,
  };
  useEffect(() => {
    dispatch({
      type: "HomeWork/getSubjectList",
    });
    dispatch({
      type: "HomeWork/getListByType",
      payload:1
    });
  },[]);
  //选择的page,时间，科目变化时请求接口
  useEffect(() => {
    dispatch({
      type: "HomeWork/getWorkList",
      payload: {
        page: page,
        pageSize: pageSize,
        subjectType: chooseSubjectType,
        searchId: "11",
        createTime: createTime,
        status:''
      },
    })
  }, [page, createTime,chooseSubjectType])
 
  //选择时间
  const onTimeChange = (e) => {
    //设置选择框中的显示时间
    setTime(e.detail.value);
    //设置选中的时间，传入接口的时间
    setCreateTime(e.detail.value)
  };
  //选择科目
  const onSubChange = (e) => {
    let No = e.detail.value;
    //设置选择框中的显示科目
    setSelectorChecked(No);
    //设置选中的科目，传入接口的科目
    setChooseSubjectType(subjectType[No].value)
  };

  return (
    <View className='index' style={style}>
      <NavTab back title='作业' />

      <View>
        <View className='content'>
          <View className='date'>
            <Picker mode='date' fields='month' onChange={onTimeChange}>
              {time == "" ? "请选择日期" : time}
            </Picker>
            <View className='arrow-down'>
              <AtIcon value='chevron-down' size={15} color='#676767'></AtIcon>
            </View>
          </View>
          <View className='selector'>
            <Picker
              mode='selector'
              range={subjectType.map((item) => item.name)}
              onChange={onSubChange}
            >
              {selectorChecked == ""
                ? "请选择科目"
                : subjectType[selectorChecked].name}
            </Picker>
            <View className='arrow-down'>
              <AtIcon value='chevron-down' size={15} color='#676767'></AtIcon>
            </View>
          </View>
        </View>
      </View>
      <Work enter='homework' showData={workList} />
    </View>
  );
}
export default connect((state) => ({
  workList: state.HomeWork.workList,
  homeWorkArr: state.HomeWork.homeWorkArr,
  subjectType: state.HomeWork.subjectType,
  pageSize: state.users.pageSize,
}))(HomeWork);
