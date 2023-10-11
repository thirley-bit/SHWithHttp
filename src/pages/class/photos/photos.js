import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { AtButton, AtGrid, AtFab,AtIcon,  } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';
import { connect } from 'react-redux';
import "./Photos.scss";

//相册页面
function Photos(props) {
  const { dispatch, user, albumList, photoDetail } = props
  useEffect(() => {
    dispatch({
      type:'Photos/getAlbumList',
      payload:1
    })
    dispatch({
      type:'Photos/getPhotosList'
    })    
  },[])
  const handleCreate = () => {
    Taro.navigateTo({url:'/pages/class/Photos/NewPhotosAlbum/NewPhotosAlbum'})
  }
  const handleClick = (item) => {
    console.log(item,'item')
    dispatch({
      type:"Photos/getAlbumImageList",
      payload:item.id
    })
    Taro.navigateTo({url:`/pages/class/Photos/PhotosDetail/PhotosDetail`})
  }
  const handlePublishClick = () => {
    Taro.navigateTo({url:'/pages/class/Photos/PublishPhotos/PublishPhotos'})
  }
  return (
    <View className='index'>
      <NavTab back title='相册' />
      <View className='top'>
        <AtButton className='button' type='primary' size='small' onClick={handleCreate}>
          新建相册
        </AtButton>
      </View>
      <View className='photo'>
        <AtGrid
          data={albumList}
          onClick={handleClick}
        />
      </View>
      {user == "1" && (
        <View className='add'>
          <AtFab onClick={handlePublishClick}>
            <View>
              <AtIcon
                className='add-icon'
                value='add'
                size='25'
                color='#fff'
              ></AtIcon>
              <Text className='add-text'>
                上传照片
              </Text>
            </View>
          </AtFab>
        </View>
      )}
    </View>
  );
}
export default connect(state => ({
  user:state.users.user,
  albumList: state.Photos.albumList,
  albumImageList: state.Photos.albumImageList,
  photosArr: state.Photos.photosArr,
  photoDetail:state.Photos.photoDetail
}))(Photos);
