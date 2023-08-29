import { useState } from "react";
import { View } from "@tarojs/components";
import { AtImagePicker, AtList, AtListItem, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import NavTab from '@app/component/NavTab/NavTab';
import GradientButton from '@app/component/GradientButton';
import "./PublishPhotos.scss";

//上传照片页面
function PublishPhotos() {
  const [folder, setFolder] = useState({})
  const handleChoose = () => {
    Taro.navigateTo({ url: "/pages/class/Photos/ChoosePhotosAlbum/ChoosePhotosAlbum" });
  };
  const handleChange = (files) => {
    console.log(files);
    setFolder({ files });
  };
  const handleSend = () => {
    console.log(folder)
  }
  return (
    <View className='main'>
      <NavTab back title='上传照片' />
      <AtList>
        <AtListItem
          title='上传到'
          extraText='请选择相册'
          arrow='right'
          onClick={handleChoose}
        />
      </AtList>
      <View className='img-picker'>
        <AtImagePicker files={folder.files} onChange={handleChange} />
      </View>
      {/* <AtButton
        type='primary'
        className='send-button'
        onClick={() => handleSend()}
      >
        发送
      </AtButton> */}
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
export default PublishPhotos;
