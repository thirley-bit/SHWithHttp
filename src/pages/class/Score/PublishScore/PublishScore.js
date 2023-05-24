import { useEffect, useState } from "react";
import { View, Text, Input, Picker } from "@tarojs/components";
import { AtIcon, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import Table from "@app/component/Table/Table";
import "./publishScore.scss";

function PublishScore() {
  const [date, setDate] = useState("");
  const columns = [
    {
      title: "学生学号",
      dataIndex: "number",
    },
    {
      title: "学生姓名",
      dataIndex: "name",
    },
    {
      title: "语文成绩",
      dataIndex: "Chinese",
    },
    {
      title: "数学成绩",
      dataIndex: "Math",
    },
    {
      title: "英语成绩",
      dataIndex: "English",
    },
    {
        title: "英语成绩",
        dataIndex: "English",
      },

      {
        title: "英语成绩",
        dataIndex: "English",
      },
      {
        title: "英语成绩",
        dataIndex: "English",
      },
      {
        title: "英语成绩",
        dataIndex: "English",
      },

      {
        title: "英语成绩",
        dataIndex: "English",
      },
      {
        title: "英语成绩",
        dataIndex: "English",
      },
  ];
  const dataSource = [
    {
      number: "202323",
      name: "小红",
      Chinese: "88",
      Math: "99",
      English: "89",
    },
    {
      number: "20323",
      name: "张三",
      Chinese: "88",
      Math: "99",
      English: "89",
    },
    {
      number: "20232323",
      name: "李四",
      Chinese: "88",
      Math: "99",
      English: "89",
    },
  ];
  const handleAdd = () => {
    console.log(111);
    Taro.navigateTo({ url: "/pages/class/Score/ScoreTitle/ScoreTitle" });
  };
  const handleDateChange = (e) => {
    setDate(e.detail.value);
  };
  const handleSave = () => {
    console.log('save')
  }
  const handleSend = () => {
    console.log('send')
  }
  return (
    <View className='main'>
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
        <Table columns={columns} dataSource={dataSource}></Table>
      </View>
      <View className='bottom'>
        <AtButton type='primary' size='small' className='button-save' onClick={handleSave}>保存</AtButton>
        <AtButton type='primary' size='small' className='button-send' onClick={handleSend}>发送</AtButton>
      </View>
    </View>
  );
}
export default PublishScore;
