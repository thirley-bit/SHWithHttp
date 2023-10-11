import { useState } from "react";
import { View, Button } from "@tarojs/components";
import { AtImagePicker, AtList, AtListItem, AtModal, AtModalAction, AtModalContent } from "taro-ui";
import Taro from "@tarojs/taro";
import NavTab from '@app/component/NavTab/NavTab';
import CardList from '@app/component/CardList/CardList';
import GradientButton from '@app/component/GradientButton';
import "./PublishPhotos.scss";
import { connect } from 'react-redux';

//上传照片页面
function PublishPhotos(props) {
  const { dispatch, albumList } = props
  const [folder, setFolder] = useState({})
  const [isOpened, setIsOpened] = useState(false)

  const handleChoose = () => {
    setIsOpened(true)
    // Taro.navigateTo({ url: "/pages/class/Photos/ChoosePhotosAlbum/ChoosePhotosAlbum" });
  };

  const handleClose = () => {
    setIsOpened(false)
  }
  const handleChooseAlbum = (e) => {
    console.log(e,'e11e1e')
  }
  const handleCancel = () => {
    setIsOpened(false)
  }
  const handleConfirm = () => {
    setIsOpened(false)
  }
  const handleChange = (files) => {
    console.log(files);
    setFolder({files});
  };
  const handleSend = () => {
    console.log(folder)
    let filePathList = folder.files.map((filePath) =>
    // console.log(filePath,'file path')
          dispatch({
            type: "AddressList/getUploadFile",
            payload: filePath.url,
          }).then((resp) => {
            return resp.data;
          })
        );
        console.log(filePathList,'filepathlist')
        Promise.all(filePathList).then((resp) => {
          console.log(resp,'resp')
          resp.forEach((item) => {
            console.log(item,'item')
            item.forEach((jtem) => {
              console.log(jtem.id,'jtem')
            });
          });
        });
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
      <View className='photos'>
      <AtModal isOpened={isOpened} onClose={handleClose}>
          <AtModalContent className='photos-modal'>
              {/* {dataSource.length ? (
                <TreeSelect
                  ref={refTree}
                  dataSource={dataSource}
                  onChange={onChangeHandler}
                />
              ) : (
                <View style={{ margin: "50% 40%" }}>暂无数据</View>
              )} */}
              <CardList enter='photos' showData={albumList} onClick={handleChooseAlbum} />
          </AtModalContent>
          <AtModalAction>
            <Button style={{borderRight:'1rpx solid #dedede'}} onClick={handleCancel}>取消</Button>
            <Button onClick={handleConfirm}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
        
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
export default connect((state) => ({
  albumList: state.Photos.albumList
}))(PublishPhotos);
