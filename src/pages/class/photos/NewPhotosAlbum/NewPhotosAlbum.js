import { View, Image, Input } from "@tarojs/components";
import { useState } from "react";
import Taro from '@tarojs/taro'
import { AtDivider, AtButton, AtList, AtListItem, AtTextarea } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';
import GradientButton from '@app/component/GradientButton';
import "./NewPhotosAlbum.scss"

//新建相册页面
function NewPhotosAlbum(props) {
  const { dispatch } = props;
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
    console.log('send')
  }
  
  return (
    <View className='main'>
      
      <NavTab needBackIcon mainTitle='新建相册' />
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
    </View>
  );
}
export default NewPhotosAlbum;
