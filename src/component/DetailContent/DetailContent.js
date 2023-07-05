import { useState, useEffect } from "react";
import { View, Text, } from "@tarojs/components";
import {
  AtButton,
  AtDivider,
  AtIcon,
  AtTabs,
  AtTabsPane,
  AtAvatar,
} from "taro-ui";

import StudentsList from "@app/component/StudentsList/StudentsList";
import Table from "@app/component/Table/Table";
import api from "@/api/api";
import { connect } from "react-redux";

import "./DetailContent.scss";

//校园食谱页面
function DetailContent(props) {
  console.log(props, "props feedbacl");
  const { dispatch, enter, user, id, scoreTitle, scoreDetailArr, feedBack, submitListAll, submittedList, notSubmittedList, feedBackList } = props;
  const [studentsData, setStudentsData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [tabList, setTabList] = useState([]);
  const [isEdit, setIsEdit] = useState(false); //是否修改反馈 true：修改反馈 false：提交反馈
  // const [allList, setAllList] = useState([]); //全部学生列表
  // const [delivered, setDelivered] = useState([]); //已交列表
  // const [noDelivered, setNoDelivered] = useState([]); //未交列表

  console.log(submitListAll,submitListAll.length,submittedList,submittedList.length,'length')

  useEffect(() => {
    dispatch({
      type: "Score/getScoreDetailArr",
    });
    // if(user == 0){
    //   dispatch({
    //     type: "HomeWork/getFeedBackDetail",
    //   });
    // }else{
    //   dispatch({
    //     type:'HomeWork/getStudentsList'
    //   })
    //   dispatch({
    //     type: 'HomeWork/getFeedBackList'
    //   })
    // }
    studentsList()
  }, [user]);
  // useEffect(() => {
  //   studentsList();
  // },[])

  const studentsList = () => {
    // 数据初始化，并处理数据
    // let url = "students/list";
    // let data = api[url].data;
    // let newDelivered = data.filter((item) => item.hasCompleted === 0);
    // let newNoDelivered = data.filter((item) => item.hasCompleted === 1);
    // setStudentsData(data);
    // setAllList(data);
    // setDelivered(newDelivered);
    // setNoDelivered(newNoDelivered);
    console.log(submitListAll.length,"allLenght")
    let tab = [];
    if (user == 0 && enter == "homework") {
      tab = [
        {
          title: `家长反馈`,
        },
      ];
    } else {
      tab = [
        {
          title: `全部${submitListAll.length}`,
        },
        {
          title: `已交${submittedList.length}`,
        },
        {
          title: `未交${notSubmittedList.length}`,
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
      setStudentsData(submitListAll);
    } else if (index == 1) {
      setStudentsData(submittedList);
    } else if (index == 2) {
      setStudentsData(notSubmittedList);
    } else {
      // let url = "subject/feedback/detail/list";
      // let data = api[url].data;
      setStudentsData(feedBackList);
    }
  };
  const handleSend = () => {
    if (isEdit) {
      //处于修改反馈状态
      setIsEdit(false);
      dispatch({
        type: "HomeWork/getEditFeedBack",
      });
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
              dangerouslySetInnerHTML={{ __html: feedBack.feed_back }}
            ></View>
            <View className='feed'>
              {feedBack.reply &&
                feedBack.reply.map((item, index) => {
                  return (
                    <View key={index} className='feed-content'>
                        <View className='at-row at-row--wrap'>
                          <View className='at-col at-col-2 at-col--wrap'>
                            <View className='card-img'>
                              <AtAvatar className='img' size='small' circle image={item.avatar} />
                            </View>
                          </View>
                          <View className='at-col at-col-9'>
                            <View className='card-name'>{item.from}</View>
                            <View className='card-content'>
                              回复<Text className='card-name' style='margin:0 6rpx'>{item.to}:</Text>{item.content}
                            </View>
                          </View>
                        </View>
                    </View>
                  );
                })}
            </View>
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
        {user == "1" && enter == "homework" && (
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
        {user == "1" && enter == "score" && (
          <Table columns={scoreTitle} dataSource={scoreDetailArr}></Table>
        )}
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  scoreTitle: state.Score.scoreTitle,
  scoreDetailArr: state.Score.scoreDetailArr,
  feedBack: state.HomeWork.feedBack,
  feedBackList: state.HomeWork.feedBackList,
  submitListAll:state.HomeWork.submitListAll,
  submittedList: state.HomeWork.submittedList,
  notSubmittedList: state.HomeWork.notSubmittedList
}))(DetailContent);
