import { useState, useEffect } from "react";
import { View, Text, Picker, Navigator } from "@tarojs/components";
import Taro from "@tarojs/taro"
import { AtButton, AtCard, AtFab, AtIcon } from "taro-ui";
import "./work.scss";

function Work(props) {
  const { type, user, selector, showData } = props;
  const [time, setTime] = useState("");
  const [selectorChecked, setSelectorChecked] = useState(""); //选中的科目下标

  const onTimeChange = (e) => {
    setTime(e.detail.value);
  };
  const onSubChange = (e) => {
    setSelectorChecked(e.detail.value);
  };
  // Taro.navigateTo({url:'/pages/class/homeWork/workDetail/workDetail?id=1'})

  const handleCompleted = () => {};
  return (
    <View className='main'>
      <View className='content'>
        <View className='date'>
          <Picker mode='date' onChange={onTimeChange}>
            {time == "" ? "请选择日期" : time}
          </Picker>
        </View>
        <View className='selector'>
          <Picker mode='selector' range={selector} onChange={onSubChange}>
            {selectorChecked == "" ? "请选择科目" : selector[selectorChecked]}
          </Picker>
        </View>
        <View className='work'>
          {showData &&
            showData.map((item, index) => {
              console.log(item)
              let data = JSON.stringify(item)
              return (
                <View key={index} className='work-list'>
                  <Navigator url={`/pages/class/homeWork/workDetail/workDetail?data=${encodeURIComponent(data)}`}>
                  <AtCard
                    className='work-card'
                    note={item.author + "\xa0\xa0\xa0" + item.time}
                    extra='>'
                    title={item.title}
                  >
                    {item.content}
                  </AtCard>
                  <View className='tip'>
                    {item.hasNew == 0 && <Text className='tip-text'>新</Text>}

                    {/* 完成按钮仅存在于家长端作业页面 */}
                    {type == "布置作业" &&
                      user == "parent" &&
                      (item.hasCompleted == 0 ? (
                        <AtButton type='secondary' size='small'>
                          已完成
                        </AtButton>
                      ) : (
                        <AtButton
                          type='primary'
                          size='small'
                          onClick={() => handleCompleted(item)}
                        >
                          未完成
                        </AtButton>
                      ))}
                      {/* 完成按钮仅存在于家长端作业页面 */}
                  </View>
                  </Navigator>
                </View>
              );
            })}
        </View>
      </View>
      {/* 发布按钮存在于教师端 */}
      {user == 'teacher' && (
        <View className='add'>
          <AtFab>
            <View>
              <AtIcon
                className='add-icon'
                value='add'
                size='25'
                color='#fff'
              ></AtIcon>
              <Text className='add-text'>{type}</Text>
            </View>
          </AtFab>
        </View>
      )}
    </View>
  );
}
export default Work;
