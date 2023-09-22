import { useState, useEffect } from "react";
import Taro from "@tarojs/taro"
import {
  View,
  Form,
  ScrollView,
  Label,
  Radio,
} from "@tarojs/components";
import { connect } from 'react-redux';
import { AtAvatar, AtMessage, AtRadio } from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import normal from "@static/normal.png";
import "./StudentsList.scss";

function StudentsList(props) {
  const { dispatch,userId, enter, showData, selectList, specialTime} = props;
  const [isAllChecked, setIsAllChecked] = useState(false);
  const scrollTop = 0;
  const Threshold = 20;
  const signRecordList = () => {
    dispatch({
      type:'Sign/getSignRecordList',
      payload: {
        userId: userId,
        studentId:""
      },
    })
  }

  const handleAllChecked = () => {
    if(isAllChecked == true){
      setIsAllChecked(false)
    }else{
      setIsAllChecked(true)
    }
  };
  const handleAllSend = () => {
    if(selectList.length > 0){
      dispatch({
        type: "Sign/getUpdateSignRecord",
        payload: {
          idList:selectList.map(item => item.id),
          earlyStatus:1,
          lateStatus:1
        },
      }).then(res => {
        if (res.status == 200) {
          signRecordList()
          //消息提示
          Taro.atMessage({
            message: res.message,
            type: "success",
          });
        } else {
          Taro.atMessage({
            message: res.message,
            type: "error",
          });
        }
      })
    }else{
      Taro.atMessage({
        message: "已全部确认",
        type: "waring",
      });
    }
  }
  const formSubmit = (index) => {
    console.log(index);
  };
  const handleSign = (val) => {
    
    dispatch({
      type: "Sign/getUpdateSignRecord",
      payload: {
        id:val.id,
        earlyStatus:1,
        lateStatus:1
      },
    }).then(res => {
      if (res.status == 200) {
        signRecordList()
        //消息提示
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    })
  };

  const scrollHeight = {
    height: "550px",
  };
  const onScroll = () => {};
  const handleChecked = (value) => {

    let newSelectList = selectList.filter(item => item.studentId != value.studentId)
    dispatch({
      type: "Sign/changeSelectData",
      payload: newSelectList,
    })
  };

  return (
    // 详情头部组件
    <View className='teacher'>
      {enter == "sign" && (
        <View className='all-check' >
          <Radio value='选中' checked={isAllChecked} onClick={handleAllChecked}></Radio>
          <View style={{display:'inline-block'}} onClick={isAllChecked ?  () => handleAllSend() : ''}>{isAllChecked ? '确定' : '全选'}</View>
        </View>
      )}
      <ScrollView
        className='scroll'
        scrollY
        scrollWithAnimation
        style={scrollHeight}
        scrollTop={scrollTop}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScroll={() => onScroll()}
      >
        {
          showData ? 
         <View className='form-width'>
          {showData.map((item, index) => {
            console.log(item,'item')
            const name = item?.studentName;
            let className = "sign-text";
            if (name?.length > 5) {
              className += " text2";
            }
            let status = specialTime < 12 ? item.earlyStatus : item.lateStatus
            return (
              <Form
                className='form'
                key={index}
                onSubmit={() => formSubmit(item.id)}
              >
                {enter == "homework" ? (
                  // 学生是否完成作业
                  <View>
                    <View className='sign-content' style='marginBottom:32rpx'>
                    {
                        item.hasCompleted == true  && <Label className='sign-label'>
                        <Radio value={item.name} checked={item.hasCompleted} ></Radio>
                      </Label>
                      }
                      <AtAvatar
                        circle
                        className='sign-img'
                        image={item.avatar || normal}
                      ></AtAvatar>
                      <View className={className}>{name}</View>
                    </View>
                  </View>
                ) : (
                  // 学生是否签到
                  <View>
                    <View
                      className='sign-content'
                      style={enter == "homework" ? "marginBottom:32rpx" : ""}
                    >
                      {
                        status == 0 && isAllChecked && <Label className='sign-label'>
                        <Radio value={item.name} checked={selectList.find(it => it.studentId == item.studentId)} onClick={() => handleChecked(item)}></Radio>
                      </Label>
                      }
                      <AtAvatar
                        circle
                        className='sign-img'
                        image={item.avatar || normal}
                      ></AtAvatar>
                      <View className={className}>{name}</View>
                      {status == 0 ? (
                        <GradientButton
                          className='sign-button'
                          type='primary'
                          onClick={() =>
                            handleSign(item)
                          }
                        >
                          确认
                        </GradientButton>
                      ) : (
                        <GradientButton
                          className='sign-button'
                          type='secondary'
                        >
                          已确认
                        </GradientButton>
                      )}
                    </View>
                  </View>
                )}
              </Form>
            );
          })}
        </View>

         : '暂无数据'
        } 
      </ScrollView>
      <AtMessage />
    </View>
  );
}

export default connect((state ) => ({
  userId: state.users.userId,
  selectList:state.Sign.selectList,
  specialTime: state.Sign.specialTime
}))(StudentsList);
