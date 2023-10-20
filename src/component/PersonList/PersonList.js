import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import { AtCard, AtAvatar, AtModal, AtIcon, AtBadge, AtMessage } from "taro-ui";
import Modal from "@app/component/Modal";
import normal from "@static/normal.png";
import "./PersonList.scss";

//人员列表组件
function PersonList(props) {
  const { dispatch, enter, showData,userId, user, pageSize, roomId, onEdit, onDel, bindStudent } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [delId, setDelId] = useState(""); //选中需要删除的数据id
  useEffect(() => {
    dispatch({
      type: "users/getUserList",
    });
    
  }, []);
  const handleNav = (val) => {
    //toId(接收方id),通讯录列表，群聊取该条数据的id，私信列表取该数据的toId
    let MsgToId = ''
    //判断是群聊还是单聊，enter为group时是群聊，其他为单聊,私信列表取该条数据的msgType
    let msgType = 0
    let toName = ''
    if(enter == 'message'){
      //私信列表数据存在toId（接收方id)和msgType
      MsgToId = val.toId
      msgType = val.msgType
      toName = val.toName
    }else{
      //通讯录，群聊取该数据的id
      MsgToId = val.id
      toName = val.userName
    }
    if(enter == 'group'){
      msgType = 1
      toName = val.groupName
    }
    let payload = {
      //fromId:教师端取登录人id，家长端取默认绑定学生数据的id，
      fromId: user == 0 ? bindStudent.id : userId,
      toId: MsgToId,
      msgType:msgType
    }
    //如果roomId存在，则传，不存在id不传，后台自动生成roomId,在beforeConnct接口返回的数据获取roomId
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
          //如果点击的当前数据存在roomId,则传该条数据的roomId,否则传接口返回的roomId
          //id为除私信列表数据列表的数据id，用于退出聊天窗口的数据id
          url: `/pages/addressList/message/MessageDetail/MessageDetail?roomId=${val.roomId ? val.roomId : res.data.roomId}&toId=${MsgToId}&id=${res.data.id}&msgType=${msgType}&name=${toName}`,
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    })
  };

  const handleEdit = (record) => {
    onEdit(record);
  };
  const handleDel = (record) => {
    setDelId(record.id)
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
    onDel(delId)
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
              //拼接群组内的成员名称
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
                        {item.new == 1 || item.unreadNum ? (
                          // 如果有新消息，则加徽标
                          <View className='left'>
                            {/* 此处的value需修改 */}
                            <AtBadge value={item.unreadNum}>
                              <AtAvatar
                                circle
                                className='img'
                                size='small'
                                image={item.avatar || normal}
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
                              handleEdit(item)
                            }
                          >
                            <AtIcon
                            //通讯录页面显示拨打电话功能，其他页面显示编辑功能
                              value={enter == "teacher" ? "phone" : "edit"}
                              size='18'
                              color='#000'
                            />
                          </View>
                        </View>
                      )}
                      <View
                        className={
                          // 如果是消息页面，删除按钮换行显示
                          enter == "message"
                            ? "card-button"
                            : "card-button_address"
                        }
                        onClick={() =>
                          handleDel(item)
                        }
                      >
                        <AtIcon value='trash' size='18' color='#f00' />
                      </View>
                    </View>
                  )}
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
  pageSize: state.users.pageSize,
  bindStudent: state.users.bindStudent
}))(PersonList);
