import Taro from '@tarojs/taro'
import { View, Image, Text } from "@tarojs/components";
import { AtGrid, AtIcon } from "taro-ui";
import NavTab from '@app/component/NavTab/NavTab';
import { connect } from "react-redux";

import "./PhotosDetail.scss";

//校园食谱页面
function PhotosDetail(props) {
  const { dispatch, user, photoCover, photoDetail, albumImageList } = props;

  console.log(albumImageList,'album ')
  const handleClick = (item) => {
    Taro.previewImage({
      current:item.image,
      urls:[item.image]
    })
  }
  return (
    <View className='main'>
      <NavTab back title={albumImageList.albumName} />
      <View className='top'>
        <View className='image'>
          <Image mode='aspectFill' className='img' src={albumImageList.coverImage} />
        </View>
        <View className='title'>
          <View className='name'>{albumImageList.albumName}</View>
          <View className='num'><AtIcon value='image' size={16}></AtIcon><Text style={{marginLeft:'8rpx'}}>{11}个影像</Text></View>
        </View>
      </View>
      <View className='list'>
        {albumImageList.imageVoList &&
          albumImageList.imageVoList.map((item, index) => {
            let data = item.imageList.map(it => {return {image:it}})
            return (
              <View key={index} className='detail'>
                <View className='time'>
                {item.createTime}
              </View>
              <View className='photo'>
                <AtGrid
                  data={data}
                  onClick={handleClick}
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
  albumImageList: state.Photos.albumImageList
}))(PhotosDetail);
