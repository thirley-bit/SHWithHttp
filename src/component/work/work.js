import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Picker, Navigator } from "@tarojs/components";
import { AtAvatar, AtButton, AtCard, AtFab, AtIcon } from "taro-ui";
import { connect } from 'react-redux';
import "./Work.scss";

function Work(props) {
  const { dispatch, enter, user, selector, showData } = props;
  const [time, setTime] = useState("");
  const [selectorChecked, setSelectorChecked] = useState(""); //选中的科目下标
  const onTimeChange = (e) => {
    setTime(e.detail.value);
  };
  const onSubChange = (e) => {
    setSelectorChecked(e.detail.value);
  };
  const handleCompleted = (e) => {
    console.log(e);
  };
  const handleNav = (e) => {
    let id = ''
    if(e.work_id){
      id = e.work_id
    }else if(e.notice_id){
      id = e.notice_id
    }else{
      id = e.score_id
    }
    //如果是未发布的成绩，进入创建成绩页面，其他进入详情页面
    if(e.publish == 0){
      Taro.navigateTo({url:`/pages/class/Score/PublishScore/PublishScore`})
    }else{
      Taro.navigateTo({ url:`/pages/component/detail/detail?enter=${enter}&id=${id}`})
    }
  }
  const handleClick = () => {
    Taro.navigateTo({ url: "/pages/component/publish/publish" });
  };
  const handlePublish = (e) => {
    console.log(e);
  };
  return (
    <View className='main'>
      <View className='content'>
        {/* 搜索功能仅存在于作用页面 */}
        {enter == "homework" && (
          <View>
            <View className='date'>
              <Picker mode='date' onChange={onTimeChange}>
                {time == "" ? "请选择日期" : time}
              </Picker>
            </View>
            <View className='selector'>
              <Picker
                mode='selector'
                range={selector.map((item) => item.subject_title)}
                onChange={onSubChange}
              >
                {selectorChecked == ""
                  ? "请选择科目"
                  : selector.filter(
                      (item) => item.subject_id == selectorChecked
                    )[0].subject_title}
              </Picker>
            </View>
          </View>
        )}
        <View className='work'>
          {showData &&
            showData.map((item, index) => {
              // 判断数据列表中是否有work_id,如果没有就表示从通知页面进入，则传notice_id
              // let newId =
              //   item.work_id == undefined ? item.notice_id : item.work_id;
              //   setId(newId)
              return (
                <View key={index} className='work-list' onClick={() => handleNav(item)}>
                  {/* <Navigator
                    url={`/pages/component/detail/detail?enter=${enter}&user=${user}&id=${id}`}
                  > */}
                    <AtCard
                      className='work-card'
                      note={
                        enter == "score" ? ( //是否是成绩页面
                          <View>
                            <View className='test-time'>
                              {"考试时间:" + "\xa0" + item.test_time}
                            </View>
                            <View>
                              {"发布人:" + "\xa0\xa0\xa0\xa0" + item.author}
                            </View>
                          </View> // 成绩页面显示的note为
                        ) : (
                          item.author + "\xa0\xa0\xa0\xa0" + item.time
                        )
                      }
                      extra='>'
                      title={item.title}
                    >
                      {item.content}
                    </AtCard>
                  {/* </Navigator> */}
                  {enter == "score" && user == "1" && item.publish == 0 && (
                    <View
                      className='button-publish'
                      onClick={() => handlePublish(item.score_id)}
                    >
                      <AtIcon value='lightning-bolt' color='#1f98f0' />
                      <Text>发布成绩</Text>
                    </View>
                  )}
                  <View className='tip'>
                    {/* 是否有新消息 */}
                    {item.hasNew == 1 && <Text className='tip-text'>新</Text>}
                    {/* 完成按钮仅存在于（家长端）作业页面 */}
                    {enter == "homework" &&
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
                    {enter == "score" &&
                      user == "1" &&
                      (item.publish == 0 ? (
                        <View className='publish'>未发布</View>
                      ) : (
                        <View className='published'>已发布</View>
                      ))}
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
              <Text className='add-text'>
                {enter == "homework"
                  ? "布置作业"
                  : enter == "notice"
                  ? "发布通知"
                  : "发布成绩"}
              </Text>
            </View>
          </AtFab>
        </View>
      )}
    </View>
  );
}
// export default Work;

export default connect(state =>({
  user:state.users.user
}))(Work)