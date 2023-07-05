import { useEffect, useState } from "react";
import { View, Text, Input, Picker } from "@tarojs/components";
import { AtIcon, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import Table from "@app/component/Table/Table";
import NavTab from '@app/component/NavTab/NavTab';
import { connect } from 'react-redux';
import "./publishScore.scss";

function PublishScore(props) {
  const { dispatch, scoreTitle, scoreDetailArr } = props
  const [date, setDate] = useState("");
  // const columns = [
  //   {
  //     title: "学生学号",
  //     dataIndex: "number",
  //     type: "number",
  //     required: true,
  //     editable: false,
  //   },
  //   {
  //     title: "学生姓名",
  //     dataIndex: "name",
  //     type: "text",
  //     required: true,
  //     editable: false,
  //   },
  //   {
  //     title: "语文成绩",
  //     dataIndex: "Chinese",
  //     type: "number",
  //   },
  //   {
  //     title: "数学成绩",
  //     dataIndex: "Math",
  //     type: "number",
  //   },
  //   {
  //     title: "英语成绩",
  //     dataIndex: "English",
  //     type: "number",
  //   },
  //   {
  //     title: "物理成绩",
  //     dataIndex: "Physics",
  //     type: "number",
  //   },
  //   {
  //     title: "化学成绩",
  //     dataIndex: "Chemistry",
  //     type: "number",
  //   },
  //   {
  //     title: "生物成绩",
  //     dataIndex: "Biology",
  //     type: "number",
  //   },
  // ]
  useEffect(() => {
    dispatch({
      type:'Score/getScoreDetailArr'
    })
    // dispatch({
    //   type:'Score/changeScoreTitle',
    //   payload:columns
    // })
  });

  const handleAdd = () => {
    Taro.navigateTo({
      url: `/pages/class/Score/ScoreTitle/ScoreTitle`,
    });
  };
  const handleDateChange = (e) => {
    setDate(e.detail.value);
  };
  const handleSave = () => {
    console.log("save");
  };
  const handleSend = () => {
    console.log("send");
  };
  return (
    <View className='main'>
      <NavTab needBackIcon mainTitle='上传成绩' />
      <View className='head'>
        <View className='list' onClick={handleAdd}>
          <AtIcon value='settings' />
          <Text className='text'>设置成绩列</Text>
        </View>
        <View className='title'>
          <Input type='text' placeholder='设置成绩标题' maxlength={20} />
          <Picker mode='date' onChange={handleDateChange}>
            {date == "" ? <Text className='time'>设置考试时间</Text> : date}
          </Picker>
        </View>
      </View>
      <View className='content'>
        <Table columns={scoreTitle} dataSource={scoreDetailArr}></Table>
      </View>
      <View className='bottom'>
        <AtButton
          type='primary'
          size='small'
          className='button-save'
          onClick={handleSave}
        >
          保存
        </AtButton>
        <AtButton
          type='primary'
          size='small'
          className='button-send'
          onClick={handleSend}
        >
          发送
        </AtButton>
      </View>
    </View>
  );
}
export default connect(state => ({
  scoreTitle: state.Score.scoreTitle,
  scoreDetailArr:state.Score.scoreDetailArr
}))(PublishScore);
