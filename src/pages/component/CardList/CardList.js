import { View, Image } from "@tarojs/components";
import Taro from '@tarojs/taro';
import { useEffect } from "react";
import { AtCard, AtIcon } from "taro-ui";
import { connect } from "react-redux";
import "./CardList.scss";

//校园食谱页面
function CardList(props) {
  console.log(props);
  const { dispatch, photosArr } = props;

  useEffect(() => {
    dispatch({
      type: "Photos/getPhotosList",
    });
  }, []);
  const handleClick = (e) => {
    console.log(e)
    if(e == 1) {
      Taro.navigateTo({url:'/pages/class/Photos/NewPhotos/NewPhotos'})
    }
  };
  return (
    <View className='main'>
      <View className='card'>
        <AtCard className='card-item' onClick={() => handleClick(1)}>
          <View className='at-row at-row--wrap'>
            <View className='at-col at-col-3 at-col--wrap'>
              <View
                className='card-img'
                style='position:relative;background-color: #ececec'
              >
                <View className='img1'>
                  <AtIcon
                    className='img1'
                    value='add'
                    size='50'
                    color='#999'
                  ></AtIcon>
                </View>
              </View>
            </View>
            <View className='at-col at-col-9'>
              <View style='position:absolute;top:50%;transform: translateY(-50%)'>
                新建相册
              </View>
            </View>
          </View>
        </AtCard>
      </View>
      {photosArr.map((item, index) => {
        return (
          <View key={index} className='card'>
            <AtCard
              key={index}
              className='card-item'
              onClick={() => handleClick(item)}
            >
              <View className='at-row at-row--wrap'>
                <View className='at-col at-col-3 at-col--wrap'>
                  <View className='card-img'>
                    <Image className='img' src={item.photo_url} />
                  </View>
                </View>
                <View className='at-col at-col-9'>
                  <View className='card-name'>{item.photo_name}</View>
                  <View className='card-content'>{item.detail}</View>
                  <View className='card-num'>{item.photo_num}</View>
                </View>
              </View>
            </AtCard>
          </View>
        );
      })}
    </View>
  );
}
export default connect((state) => ({
  photosArr: state.Photos.photosArr,
}))(CardList);
