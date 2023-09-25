import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import { AtCard, AtAvatar, AtModal, AtIcon, AtBadge, AtMessage } from "taro-ui";
import Modal from "@app/component/Modal";
import "./PersonList.scss";

//人员列表组件
function PersonList(props) {
  const { dispatch, enter, showData,userId, user, userList, roomId, onEdit, onDel } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [id, setId] = useState('');
  const [type, setType] = useState('') //判断是群聊页面还是其他页面
  const [groupId, setGroupId] = useState(""); //选中需要删除的数据id
  useEffect(() => {
    dispatch({
      type: "users/getUserList",
    });
  }, []);
  const handleNav = (val) => {
    let MsgToId = ''
    if(enter == 'teacher'){
      MsgToId = val.id
    }else{
      MsgToId = val.toId
    }
    let payload = {
      fromId: userId,
      toId: MsgToId,
      msgType:'0'
    }
    if(val.roomId){
      payload = {
        ...payload,
        id:val.roomId
      }
    }
    dispatch({
      type:'AddressList/getBeforeConnect',
      payload:payload
    }).then(res => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        Taro.navigateTo({
          url: `/pages/addressList/message/MessageDetail/MessageDetail?roomId=${val.roomId ? val.roomId : res.data.roomId}&toId=${MsgToId}&id=${res.data.id}`,
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    })
    
  };

  const handleClick = (e) => {
    let newId = e.message_id;
    setId(e.message_id);
  };
  const handleEdit = (record, val) => {
    onEdit(record,val);
  };
  const handleDel = (record, index) => {
    setGroupId(record.id)
    setType(index)
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };
  const handleCancel = () => {
    setIsOpened(false);
  };

  const handleConfirm = () => {
    setIsOpened(false);
    onDel(type,groupId)
  };

  return (
    <View className='person-list'>
      {showData ? (
        <View>
          {showData?.map((item, index) => {
            let title = "";
            let note = "";
            if (enter == "group") {
              title = item.groupName;
              note = item.parentList.filter(i => i.userName != null).map((it) => it.userName).join("、");
            } else if(enter == 'message') {
              title = item.toName;
              note = item.finalMessage
            } else{
              title = item.userName
            }
            return (
              <View key={index} className='card'>
                <AtCard
                  key={index}
                  className='card-item'
                  onClick={() => handleClick(item)}
                >
                  {/* 点击页面跳转至聊天界面 */}
                  <View
                    className='nav'
                    onClick={enter == "message" && (() => handleNav(item))}
                  >
                    {/* 头像部分是否有新消息 */}
                    {enter !== "group" && (
                      //不是群聊，则有头像
                      <View>
                        {item.new == 1 ? (
                          // 如果有新消息，则加徽标
                          <View className='left'>
                            <AtBadge value={10}>
                              <AtAvatar
                                circle
                                className='img'
                                size='small'
                                image={item?.avatar}
                              />
                            </AtBadge>
                          </View>
                        ) : (
                          <View className='left'>
                            <AtAvatar
                              circle
                              className='img'
                              size='small'
                              image={item?.avatar}
                            />
                          </View>
                        )}
                      </View>
                    )}
                    <View className='card-content clearfix'>
                      {/* 老师列表展示的老师名称及其他信息 */}
                      <View className='card-center '>
                        <View className='card-name'>{title}</View>
                        <Text className='card-msg'>{note}</Text>
                      </View>
                    </View>
                  </View>
                  {/* 右侧操作按钮（家人列表/学生列表无操作按钮  */}
                  {enter !== "parent" && (
                    <View>
                      {enter !== "message" && (
                        <View className='card_address'>
                          <View className='icon-message' onClick={() => handleNav(item)}>
                            <AtIcon value='message' size='18' color='#03B615' />
                          </View>
                          <View
                            className='icon-phone'
                            onClick={() =>
                              handleEdit(item, enter == "teacher" ? 1 : 2)
                            }
                          >
                            <AtIcon
                              value={enter == "teacher" ? "phone" : "edit"}
                              size='18'
                              color='#000'
                            />
                          </View>
                        </View>
                      )}
                      <View
                        className={
                          enter == "message"
                            ? "card-button"
                            : "card-button_address"
                        }
                        onClick={() =>
                          // handleDel(item, enter == "group" ? 1 : 2)
                          handleDel(item)
                        }
                      >
                        <AtIcon value='trash' size='18' color='#f00' />
                      </View>
                    </View>
                  )}
                  {/* {item.teacher || item.groupName && ( */}

                  {/* )} */}
                  {/* 仅在私信页面显示聊天时间 */}
                  {enter == "message" && (
                    <View className='card-right'>
                      <View className='card-time'>
                        <View>{item?.finalChatTime?.slice(11, 16)}</View>
                      </View>
                    </View>
                  )}

                  <Modal
                    className='modal'
                    isOpened={isOpened}
                    cancelText='取消'
                    confirmText='确认'
                    onClose={handleClose}
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                    content={
                      enter == "message" ? "是否删除该聊天" : "是否删除该联系人"
                    }
                  />
                </AtCard>
              </View>
            );
          })}
        </View>
      ) : (
        <View style={{margin:'2% 5%',color:'#999',fontSize:'22rpx'}}>暂无数据</View>
      )}
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  userId: state.users.userId,
  roomId: state.AddressList.roomId,
  userList: state.users.userList,
}))(PersonList);
