import { useEffect, useState } from "react";
import { View, Input, Button, Image, Text } from "@tarojs/components";
import {
  AtSearchBar,
  AtInput,
  AtButton,
  AtModal,
  AtModalContent,
  AtModalAction,
  AtFloatLayout,
} from "taro-ui";
import CardList from "@app/component/CardList/CardList";
import NavTab from '@app/component/NavTab/NavTab';
import { connect } from "react-redux";
// import PersonList from '@app/component/PersonList/PersonList'

import "./DataDownLoad.scss";

function DataDownLoad(props) {
  console.log(props,'datedownloadpeops')
  const { dispatch, sourceArr } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [floatIsOpened, setFloatIsOpened] = useState(false);
  useEffect(() => {
    dispatch({
      type: "DataDownLoad/getSourceList",
    });
  }, []);

  const handleBuild = () => {
    console.log(111);
    setIsOpened(true);
  };
  const handleSend = () => {
    setFloatIsOpened(true);
  };
  const handleInput = () => {
    console.log(222);
  };
  const handleClose = () => {
    setIsOpened(false);
  };
  const handleCancel = () => {
    setIsOpened(false);
  };

  const handleConfirm = () => {
    setIsOpened(false);
  };
  const handleInputVideo = () => {
    console.log("video");
  };
  const handleInputImg = () => {
    console.log("img");
  };

  return (
    <View className='index'>
      <NavTab back title='资料下载' />
      <View className='search'>
        <AtSearchBar />
      </View>
      <View>
        <CardList enter='source' showData={sourceArr} />
      </View>
      <View className='button'>
        <AtButton
          type='secondary'
          size='small'
          className='new-button'
          onClick={() => handleBuild()}
        >
          新建文件夹
        </AtButton>
        <AtButton
          type='primary'
          size='small'
          className='send-button'
          onClick={() => handleSend()}
        >
          上传文件
        </AtButton>
      </View>
      {/* modal框 */}
      <AtModal isOpened={isOpened} closeOnClickOverlay={false}>
        <AtModalContent className='modal-edit'>
          新建文件夹
          <Input className='modal-input' maxlength={14} onInput={handleInput} />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => handleClose()}>取消</Button>
          <Button onClick={() => handleConfirm()}>确认</Button>
        </AtModalAction>
      </AtModal>
      <AtFloatLayout isOpened={floatIsOpened} title=' ' onClose={handleClose}>
        <View className='at-row upload'>
          <View
            className='at-col'
            onClick={handleInputImg}
          >
            <Image
              className='img'
              src='http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
            />
            <Text className='text'>添加视频</Text>
          </View>
          <View
            className='at-col'
            onClick={handleInputVideo}
          >
            <Image
              className='img'
              src='http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
            />
            <Text className='text'>添加视频</Text>
          </View>
          <View
            className='at-col'
            onClick={handleInputVideo}
          >
            <Image
              className='img'
              src='http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
            />
            <Text className='text'>添加视频</Text>
          </View>
        </View>
      </AtFloatLayout>
    </View>
  );
}
export default connect((state) => ({
  sourceArr: state.DataDownLoad.sourceArr,
}))(DataDownLoad);
