import { View } from "@tarojs/components";
import { AtImagePicker, AtList, AtListItem, AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import NavTab from '@app/component/NavTab/NavTab';
import { useState } from "react";
import "./PublishPhotos.scss";

//校园食谱页面
function PublishPhotos() {
  const [state, setState] = useState({});
  const handleChoose = () => {
    Taro.navigateTo({ url: "/pages/class/Photos/ChoosePhotosAlbum/ChoosePhotosAlbum" });
  };
  const handleChange = (files) => {
    console.log(files);
    setState({ files });
  };
  const handleSend = () => {
    console.log(state)
  }
  return (
    <View className='main'>
      <NavTab needBackIcon mainTitle='上传照片' />
      <AtList>
        <AtListItem
          title='上传到'
          extraText='请选择相册'
          arrow='right'
          onClick={handleChoose}
        />
      </AtList>
      <View className='img-picker'>
        <AtImagePicker files={state.files} onChange={handleChange} />
      </View>
      <AtButton
        type='primary'
        className='send-button'
        onClick={() => handleSend()}
      >
        发送
      </AtButton>
    </View>
  );
}
export default PublishPhotos;
