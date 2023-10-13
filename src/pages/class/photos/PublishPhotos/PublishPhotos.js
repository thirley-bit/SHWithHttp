import { useState } from "react";
import { View, Button } from "@tarojs/components";
import {
  AtImagePicker,
  AtList,
  AtListItem,
  AtMessage,
  AtModal,
  AtModalAction,
  AtModalContent,
} from "taro-ui";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import NavTab from "@app/component/NavTab/NavTab";
import CardList from "@app/component/CardList/CardList";
import GradientButton from "@app/component/GradientButton";
import "./PublishPhotos.scss";

//上传照片页面
function PublishPhotos(props) {
  const { dispatch, albumList } = props;
  const [albumName, setAlbumName] = useState("请选择相册");
  const [folder, setFolder] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const [imageId, setImageId] = useState("");

  const handleChoose = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };
  const handleChooseAlbum = (e) => {
    setImageId(e.id);
    setAlbumName(e.albumName);
    setIsOpened(false)
  };
  const handleCancel = () => {
    setIsOpened(false);
  };
  const handleConfirm = () => {
    setIsOpened(false);
  };
  const handleChange = (files) => {
    setFolder({ files });
  };
  const handleSend = () => {
    if (imageId == "") {
      Taro.atMessage({
        message: "请选择相册",
        type: "error",
      });
    } else if (Object.keys(folder).length == 0) {
      Taro.atMessage({
        message: "请选择上传的图片",
        type: "error",
      });
    } else {
      console.log(444);
      let filePathList = folder.files.map((filePath) =>
        dispatch({
          type: "AddressList/getUploadFile",
          payload: filePath.url,
        }).then((resp) => {
          return resp.data;
        })
      );
      Promise.all(filePathList).then((resp) => {
        const imageList = resp.flat(Infinity).map((item) => item.id);
        dispatch({
          type: "Photos/getInsertAlbumImage",
          payload: {
            id: imageId,
            imageList: imageList,
          },
        }).then((res) => {
          if (res.status == 200) {
            Taro.atMessage({
              message: res.message,
              type: "success",
            });
            // 跳转至对应的相册详情页
            dispatch({
              type: "Photos/getAlbumImageList",
              payload: imageId,
            });
            Taro.navigateTo({
              url: `/pages/class/Photos/PhotosDetail/PhotosDetail`,
            });
          } else {
            Taro.atMessage({
              message: res.message,
              type: "error",
            });
          }
        });
      });
    }
  };
  return (
    <View className='main'>
      <NavTab back title='上传照片' />
      <AtList>
        <AtListItem
          title='上传到'
          extraText={albumName}
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
            <CardList
              enter='photos'
              showData={albumList}
              onClick={handleChooseAlbum}
            />
          </AtModalContent>
          <AtModalAction>
            <Button
              style={{ borderRight: "1rpx solid #dedede" }}
              onClick={handleCancel}
            >
              取消
            </Button>
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
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  albumList: state.Photos.albumList,
}))(PublishPhotos);
