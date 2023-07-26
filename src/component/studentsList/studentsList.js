import { useState, useEffect } from "react";
import {
  View,
  Form,
  ScrollView,
  Label,
  Radio,
} from "@tarojs/components";
import { connect } from 'react-redux';
import { AtAvatar } from "taro-ui";
import GradientButton from "@app/component/GradientButton";
import normal from "@static/normal.png";
import "./StudentsList.scss";

function StudentsList(props) {
  // console.log(props, "studentsList");
  const { enter, showData, selectList, } = props;
  const [isAllChecked, setIsAllChecked] = useState(false);
  const scrollTop = 0;
  const Threshold = 20;

  const handleAllChecked = () => {
    if(isAllChecked == true){
      setIsAllChecked(false)
      console.log(111)
    }else{
      setIsAllChecked(true)
    }
  };
  const formSubmit = (index) => {
    console.log(index);
  };
  const handleSign = () => {
    console.log("click");
  };

  const scrollHeight = {
    height: "550px",
  };
  const onScroll = () => {};
  const handleChecked = (value) => {
    let newSelectList = selectList.filter(item => item.student_id != value.student_id)
    console.log(value,'item？？？');
    console.log(newSelectList,'List>>>')
  };

  return (
    // 详情头部组件
    <View className='teacher'>
      {enter == "sign" && (
        <View className='all-check' onClick={handleAllChecked}>
          <Radio value='选中' checked={isAllChecked}>选中</Radio>
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
        <View className='form-width'>
          {showData.map((item, index) => {
            const name = item.student_name;
            let className = "sign-text";
            if (name.length > 5) {
              className += " text2";
            }
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
                        image={item.avatar ? item.avatar : normal}
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
                        item.checked == true && isAllChecked == true && <Label className='sign-label'>
                        <Radio value={item.name} checked={item.checked} onClick={() => handleChecked(item)}></Radio>
                      </Label>
                      }
                      <AtAvatar
                        circle
                        className='sign-img'
                        image={item.avatar ? item.avatar : normal}
                      ></AtAvatar>
                      <View className={className}>{name}</View>
                      {item.checked == true ? (
                        <GradientButton
                          className='sign-button'
                          type='primary'
                          onClick={() =>
                            handleSign(item, item.student_id, index)
                          }
                        >
                          确认
                        </GradientButton>
                      ) : (
                        <GradientButton
                          className='sign-button'
                          type='secondary'
                        >
                          未出发
                        </GradientButton>
                      )}
                    </View>
                  </View>
                )}
              </Form>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default connect((state ) => ({
  selectList:state.Sign.selectList
}))(StudentsList);
