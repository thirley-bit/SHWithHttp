import { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton, AtDivider, AtIcon, AtTabs, AtTabsPane } from "taro-ui";

import StudentsList from "@app/component/StudentsList/StudentsList";
import Table from "@app/component/Table/Table"
import api from "@/api/api";
import { connect } from 'react-redux';

//校园食谱页面
function DetailContent(props) {
  console.log(props);
  const { dispatch, enter, user, id, scoreTitle, scoreDetailArr } = props
  const [feedBackDetail, setFeedBackDetail] = useState({}); //家长端家长反馈内容
  const [studentsData, setStudentsData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [tabList, setTabList] = useState([]);
  const [isEdit, setIsEdit] = useState(false); //是否修改反馈 true：修改反馈 false：提交反馈
  const [allList, setAllList] = useState([]); //全部学生列表
  const [delivered, setDelivered] = useState([]); //已交列表
  const [noDelivered, setNoDelivered] = useState([]); //未交列表

  useEffect(() => {
    feedBackData();
    studentsList();
    dispatch({
      type:'Score/getScoreDetailArr'
    })
  }, []);

  const feedBackData = () => {
    console.log(id); //此处请求接口需要传id
    let url = "subject/feedback/detail";
    let data = api[url].data;
    setFeedBackDetail(data);
  };

  const studentsList = () => {
    // 数据初始化，并处理数据
      let url = "students/list";
      let data = api[url].data;
      let newDelivered = data.filter((item) => item.hasCompleted === 0);
      let newNoDelivered = data.filter((item) => item.hasCompleted === 1);
      setStudentsData(data);
      setAllList(data);
      setDelivered(newDelivered);
      setNoDelivered(newNoDelivered);
      let tab = [];
      if (user == 0 && enter == 'homework') {
        tab = [
          {
            title: `家长反馈`,
          },
        ];
      } else {
        tab = [
          {
            title: `全部${data.length}`,
          },
          {
            title: `已交${newDelivered.length}`,
          },
          {
            title: `未交${newNoDelivered.length}`,
          },
          {
            title: `家长反馈`,
          },
        ];
      }
      setTabList(tab);
    
  };

  const handleTabChange = (index) => {
    setCurrent(index);
    // 切换tab时请求不同的接口，展示不同的数据
    if (index == 0) {
      setStudentsData(allList);
    } else if (index == 1) {
      setStudentsData(delivered);
    } else if (index == 2) {
      setStudentsData(noDelivered);
    } else {
      let url = "subject/feedback/list";
      let data = api[url].data;
      setStudentsData(data);
    }
  };
  const handleSend = () => {
    if (isEdit) {
      //处于修改反馈状态
      setIsEdit(false);
      let url = "subject/edit/feedback/detail";
      let data = api[url].data;
      setFeedBackDetail(data);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <View className='main'>
      <View className='tab'>
        {/* 作业页面的家长反馈 */}
        {user == "0" && enter == "homework" && (
          <View>
            <View className='tab-title'>
              <Text>家长反馈</Text>
              <AtDivider className='divider' />
            </View>
            {/* 家长反馈内容 */}
            <View
              className='content'
              dangerouslySetInnerHTML={{ __html: feedBackDetail.feed_back }}
            ></View>
            <AtDivider className='divider' />
            {/* 插入图片和文字 */}
            {isEdit && (
              // 家长端修改反馈内容时显示
              <View className='insert'>
                <View className='img'>
                  <AtIcon value='image'></AtIcon>
                  <Text>添加图片</Text>
                </View>
                <View className='video'>
                  <AtIcon value='video'></AtIcon>
                  <Text>添加视频</Text>
                </View>
              </View>
            )}
            <AtButton
              type='primary'
              className='send-button'
              onClick={() => handleSend()}
            >
              {isEdit ? "提交反馈" : "修改反馈"}
            </AtButton>
          </View>
        )}
        {user == "1" && enter == 'homework' && (
          <View>
            {/* 作业页面教师端的反馈详情 */}
            <AtTabs
              current={current}
              tabList={tabList}
              onClick={handleTabChange}
            >
              {tabList.map((item, index) => {
                return (
                  <AtTabsPane key={index} current={current} index={index}>
                    <View className='data'>
                      <StudentsList
                        current={current}
                        enter={enter}
                        id={id}
                        showData={studentsData}
                      />
                    </View>
                  </AtTabsPane>
                );
              })}
            </AtTabs>
          </View>
        )}
        {
          user == '1' && enter == 'score' && 
          <Table columns={scoreTitle} dataSource={scoreDetailArr}></Table>
        }
      </View>
    </View>
  );
}
export default connect(state => ({
  user:state.users.user,
  scoreTitle:state.Score.scoreTitle,
  scoreDetailArr:state.Score.scoreDetailArr
}))(DetailContent);
