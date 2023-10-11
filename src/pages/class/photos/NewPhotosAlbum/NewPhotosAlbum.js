import { View, Image, Input } from "@tarojs/components";
import { useState } from "react";
import Taro from '@tarojs/taro'
import { AtDivider, AtButton, AtList, AtListItem, AtTextarea, AtMessage } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';
import GradientButton from '@app/component/GradientButton';
import "./NewPhotosAlbum.scss"
import { connect } from 'react-redux';

//新建相册页面
function NewPhotosAlbum(props) {
  const { dispatch, identity } = props;
  console.log(props,'props')
  const [inputValue, setInputValue] = useState("");
  const [areaValue, setAreaValue] = useState("")
  const [img,setImg] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.detail.value);
  };
  const handleAreaChange = (e) => {
    setAreaValue(e)
  }
  const handleChoose = () => {
    Taro.chooseImage({
      count:1,
      sizeType:['compressed'],
      sourceType:['album','camera'],
      success:(res) => {
        setImg(res.tempFilePaths[0])
      }
    })
  }
  const handleSend = () => {
    dispatch({
      type:'Photos/getInsertAlbum',
      payload:{
        albumName:inputValue,
        describe: areaValue,
        coverImage: img,
        classId: identity.classId
      }
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        //新建成功，跳转至列表页面
        setTimeout(() => {
          Taro.navigateTo({ url: "/pages/class/Photos/Photos" });
        }, 1000);
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
    console.log(inputValue,areaValue,img,'inputvalue')
    console.log('send')
  }
  
  return (
    <View className='main'>
      
      <NavTab back title='新建相册' />
      <View className='top'>
        <Input
          className='input'
          name='value'
          placeholder='请输入相册名称'
          value={inputValue}
          maxlength='20'
          onInput={handleInputChange}
        />
        <AtTextarea
          name='value'
          placeholder='请输入相册描述'
          value={areaValue}
          onChange={handleAreaChange}
        />
        <AtList className='card'>
            <AtListItem title='封面图' extraText='请选择' arrow='right' onClick={handleChoose} />
            <Image className='img' src={img} />
        </AtList>
      </View>
      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleSend()}
      >
        发送
      </GradientButton>
      <AtMessage />
    </View>
  );
}
export default connect((state) =>({
  user: state.users.user,
  userId: state.users.userId,
  identity: state.users.identity
})) (NewPhotosAlbum);
