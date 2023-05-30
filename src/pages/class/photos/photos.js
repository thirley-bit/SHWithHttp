import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from "@tarojs/components";
import { AtButton, AtGrid, AtFab,AtIcon,  } from "taro-ui";
import { connect } from 'react-redux';
import "./Photos.scss";

//相册页面
function Photos(props) {
  const { dispatch,user, photosArr } = props
  console.log(props)
  useEffect(() => {
    dispatch({
      type:'Photos/getPhotosList'
    })
    dispatch({
      type:'users/getUser'
    })
  },[])
  const handleCreate = () => {
    Taro.navigateTo({url:'/pages/class/Photos/NewPhotos/NewPhotos'})
  }
  const handleClick = (item) => {
    console.log(item)
    Taro.navigateTo({url:'/pages/class/Photos/PhotosDetail/PhotosDetail'})
  }
  const handlePublishClick = () => {
    Taro.navigateTo({url:'/pages/class/Photos/PublishPhotos/PublishPhotos'})
  }
  return (
    <View className='main'>
      <View className='top'>
        <AtButton className='button' type='primary' size='small' onClick={handleCreate}>
          新建相册
        </AtButton>
      </View>
      <View className='photo'>
        <AtGrid
          data={photosArr}
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
  photosArr: state.Photos.photosArr
}))(Photos);
