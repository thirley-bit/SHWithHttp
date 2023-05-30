import { useState, useEffect } from "react";
import { View, Text, Picker, Form, ScrollView } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { AtAvatar, AtButton, AtDivider } from "taro-ui";
import "./StudentsList.scss";

function StudentsList(props) {
  const { enter, showData } = props;
  const scrollTop = 0;
  const Threshold = 20;

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

  return (
    // 详情头部组件
    <View className='teacher'>
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
            let className = "form";
            if (name.length > 15) {
              className += " form100";
            } else if (name.length > 9) {
              className += " form75";
            } else if (name.length > 3) {
              className += " form50";
            }

            return (
              <Form
                className={className}
                key={index}
                onSubmit={() => formSubmit(item.id)}
              >
                {enter == 'homework' ? (
                  // 学生是否完成作业
                  <View>
                    {item.hasCompleted == 0 ? (
                      //hasCompleted:0 未完成作业
                      <AtButton
                        className='completed-button'
                        size='small'
                      >
                        {name}
                      </AtButton>
                    ) : (
                      //hasCompleted:1 已完成作业
                      <AtButton
                        className='completed-button_completed'
                        size='small'
                      >
                        {name}
                      </AtButton>
                    )}
                  </View>
                ) : (
                  // 学生是否签到
                  <View>
                    {item.checked == 0 ? (
                      //hasCompleted:0 未签到
                      <AtButton
                        className='sign-button'
                        size='small'
                        onClick={() => handleSign(item, item.student_id, index)}
                      >
                        {name}fff
                      </AtButton>
                    ) : (
                      //hasCompleted:1 已完成作业
                      <AtButton
                        className='sign-button_sign'
                        size='small'
                      >
                        {name}sss
                      </AtButton>
                    )}
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

export default StudentsList;
