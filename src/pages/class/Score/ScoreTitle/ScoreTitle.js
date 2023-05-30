

import { useEffect, useState } from "react";
import { useRouter } from "@tarojs/taro";
import { View, Text,  } from "@tarojs/components";
import { AtCheckbox, AtForm, AtInput } from "taro-ui";
import { connect } from 'react-redux';

//成绩列页面
function ScoreTitle(props) {
  const { dispatch, scoreTitle, selectTitle } =props
  console.log(selectTitle)
  const [checkboxOption, setCheckboxOption] = useState([])
  // const [checkedList,setCheckedList] = useState([])
  useEffect(() => {
    let newOption = scoreTitle.map(item => {
      let value = item.title
      let label = item.title
      return{
        value,
        label
      }
    })
    setCheckboxOption(newOption)
    dispatch({
      type:'Score/changeSelectTitle',
      payload:newOption.map(item => item.value)
    })
    // setCheckedList(newOption.map(item => item.value))
  },[])
  const handleChange = (e) => {
    // setCheckedList(e)
    dispatch({
      type:'Score/changeSelectTitle',
      payload:e
    })
  }
  console.log(selectTitle)
  
  return (
    <View className='main'>
      <View><Text>请选择成绩项</Text></View>
        <AtCheckbox 
          options={checkboxOption}
          selectedList={selectTitle}
          onChange={handleChange}
        />
    </View>
  );
}
export default connect(state => ({
  scoreTitle:state.Score.scoreTitle,
  selectTitle:state.Score.selectTitle
})) (ScoreTitle);
