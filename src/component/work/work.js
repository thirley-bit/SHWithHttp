import { useState, useEffect } from "react";
import { View, Text, Picker, Navigator } from "@tarojs/components";
import Taro from "@tarojs/taro";
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

  const handleCompleted = (e) => {
    console.log(e)
  };
  const handleClick = () => {
    Taro.navigateTo({url:'/pages/component/publish/publish'})
  }
  return (
    <View className='main'>
      <View className='content'>
        {type == "布置作业" && (
          <View>
            <View className='date'>
              <Picker mode='date' onChange={onTimeChange}>
                {time == "" ? "请选择日期" : time}
              </Picker>
            </View>
            <View className='selector'>
              <Picker mode='selector' range={selector.map(item => item.subject_title)} onChange={onSubChange}>
                {selectorChecked == ""
                  ? "请选择科目"
                  : selector.filter(item => item.subject_id  == selectorChecked)[0].subject_title}
              </Picker>
            </View>
          </View>
        )}
        <View className='work'>
          {showData &&
            showData.map((item, index) => {
              console.log(item)
              return (
                <View key={index} className='work-list'>
                  <Navigator
                    url={`/pages/component/detail/detail?type=${type}&user=${user}&work_id=${item.work_id}`}
                  >
                    <AtCard
                      className='work-card'
                      note={item.author + "\xa0\xa0\xa0" + item.time}
                      extra='>'
                      title={item.title}
                    >
                      {item.content}
                    </AtCard>
                  </Navigator>
                    <View className='tip'>
                      {item.hasNew == 1 && <Text className='tip-text'>新</Text>}
                      {/* 完成按钮仅存在于家长端作业页面 */}
                      {type == "布置作业" &&
                        user == "0" &&
                        (item.hasCompleted == 1 ? (
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
                </View>
              );
            })}
        </View>
      </View>
      {/* 发布按钮存在于教师端 */}
      {user == "1" && (
        <View className='add'>
          <AtFab onClick={handleClick}>
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
