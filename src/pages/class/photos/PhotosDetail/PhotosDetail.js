import { useEffect } from "react";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtGrid } from "taro-ui";
import { connect } from "react-redux";

import "./PhotosDetail.scss";

//校园食谱页面
function PhotosDetail(props) {
  const { dispatch, user, photoCover, photoDetail } = props;
  useEffect(() => {
    dispatch({
      type: "Photos/getPhotoDetail",
    });
  });

  return (
    <View className='main'>
      <View className='top'>
        <View className='image'>
          <Image mode='aspectFill' className='img' src={photoCover.url} />
        </View>
        <View className='text'>
          <Text>{photoCover.name}</Text>
        </View>
      </View>
      <View className='list'>
        {photoDetail &&
          photoDetail.map((item, index) => {
            return (
              <View key={index} className='detail'>
                <View className='time'>
                <AtAvatar
                  className='time-avatar'
                  circle
                  size='small'
                  image={item.uploader_avatar}
                ></AtAvatar>
                <Text className='time-text'>{item.upload_time}</Text>
              </View>
              <View className='photo'>
                <AtGrid
                  data={item.photo_list}
                />
              </View>
              </View>
            );
          })}
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  photoCover: state.Photos.photoCover,
  photoDetail: state.Photos.photoDetail,
}))(PhotosDetail);
