import { useState, useEffect } from "react";
import { View, Text, Picker, Textarea } from "@tarojs/components";
import { AtImagePicker } from 'taro-ui';
import { useRouter } from "@tarojs/taro";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';
import "./Request.scss";

function Request() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [folder, setFolder] = useState({})

  const router = useRouter();
  const number = router.params.number;
  useEffect(() => {
    let nowDate = new Date();
    let timestamp = Date.parse(new Date(nowDate));
    let newDate = new Date(timestamp);
    let Y = newDate.getFullYear() + "-";
    let M =
      (newDate.getMonth() + 1 < 10
        ? "0" + (newDate.getMonth() + 1)
        : newDate.getMonth() + 1) + "-";
    let D =
      (newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate()) +
      " ";
    let h =
      (newDate.getHours() < 10
        ? "0" + newDate.getHours()
        : newDate.getHours()) + ":";
    let m =
      newDate.getMinutes() < 10
        ? "0" + newDate.getMinutes()
        : newDate.getMinutes();
    setDate(Y + M + D);
    setTime(h + m);
  }, []);

  const onDateChange = (e) => {
    setDate(e.detail.value);
  };
  const onTimeChange = (e) => {
    setTime(e.detail.value);
  }; 
  const handleChange = (files) => {
    console.log(files);
    setFolder({ files });
  }; 
  const handleSend = () => {
    console.log('send')
  }
  
  return (
    <View className='index'>
      <NavTab back title='考勤状况' />
      <View className='container'>
        <View className='head'>
          <Text>补卡时间</Text>
          <View className='time'>
            <Picker className='picker' mode='date' onChange={onDateChange}>
              {date}
            </Picker>
            <Picker className='picker' mode='time' onChange={onTimeChange}>
              {time}
            </Picker>
          </View>
        </View>
        <View className='center'>
          <Text>补卡理由</Text>
          <View className='area'>
            <Textarea
              className='textarea'
              placeholder='请输入'
              placeholderStyle='font-size:26rpx;color:#999;font-weight:400'
            ></Textarea>
          </View>
          <View className='img-picker'>
            <AtImagePicker files={folder.files} onChange={handleChange} />
        </View>
        </View>
      </View>
      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleSend()}
      >
        提交
      </GradientButton>
    </View>
  );
}
export default Request;
