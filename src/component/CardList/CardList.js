import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { AtCard, AtIcon, AtModal, AtMessage } from "taro-ui";
import { connect } from "react-redux";
import "./CardList.scss";

//校园食谱页面
function CardList(props) {
  const { dispatch, enter, showData } = props;
  const [isOpened, setIsOpened] = useState(false);
  // const [toastOpened, setToastOpened] = useState(false)
  const [id, setId] = useState("");

  const handleClick = (e) => {
    console.log(e);
    if (e == 1) {
      Taro.navigateTo({
        url: "/pages/class/Photos/NewPhotosAlbum/NewPhotosAlbum",
      });
    }
  };
  const handleDownLoad = () => {
    console.log(111)
  }
  const handleDel = (value) => {
    setId(value)
    setIsOpened(true)
  }

  const handleClose = () => {
    setIsOpened(false);
  };
  const handleCancel = () => {
    setIsOpened(false);
  };

  const handleConfirm = () => {
    dispatch({
      type:'Source/getDelete',
      payload:id
    }).then(res => {
      Taro.atMessage({
        'message':res.msg == 'success' ? '删除成功' : res.msg,
        'type':res.msg  == 'success' ? res.msg : 'error',
      })
    })
    setIsOpened(false);
  };
  return (
    <View className='main'>
      {enter == "photos" && (
        <View className='my-card'>
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
      )}
      <View>
        {showData.map((item, index) => {
          return (
            <View key={index} className='my-card'>
              <AtCard
                key={index}
                className='card-item'
                onClick={() => handleClick(item)}
              >
                <View className='at-row at-row--wrap'>
                  <View className='at-col at-col-3 at-col--wrap'>
                    <View className='card-img'>
                      <Image className='img' src={item.url} />
                    </View>
                  </View>
                  <View className='at-col at-col-9'>
                    <View className='card-name'>{item.name}</View>
                    <View className='card-content'>{ enter == 'photos' ? item.detail : item.loader}</View>
                    <View className='card-num'>{item.num}</View>
                    <View className='card-num'>{item.load_time}</View>
                  </View>
                  {enter == "source" && (
                      <View className='card_address'>
                        {
                          item.type !== 'package' &&
                          <View className='icon-message' onClick={handleDownLoad}>
                          <AtIcon value='download' size='18' />
                        </View>
                        }
                        <View className='icon-del' onClick={() => handleDel(item.source_id)}>
                          <AtIcon value='trash' size='18' color='#f00' />
                        </View>
                      </View>
                    )}
                </View>
                <AtModal
                  isOpened={isOpened}
                  cancelText='取消'
                  confirmText='确认'
                  onClose={handleClose}
                  onCancel={handleCancel}
                  onConfirm={handleConfirm}
                  content='请确认是否删除'
                />
                <AtMessage />
              </AtCard>
            </View>
          );
        })}
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
}))(CardList);
