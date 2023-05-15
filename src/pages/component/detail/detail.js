import { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { AtButton, AtDivider, AtIcon, AtTabs, AtTabsPane } from "taro-ui";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import StudentsList from "@app/component/studentsList/studentsList";
import api from "@/api/api";

import "./detail.scss";

function WorkDetail() {
  const [feedBackDetail, setFeedBackDetail] = useState({}); //家长端家长反馈内容
  const [studentsData, setStudentsData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [tabList, setTabList] = useState([]);
  const [isEdit, setIsEdit] = useState(false); //是否修改反馈 true：修改反馈 false：提交反馈
  const [allList, setAllList] = useState([]); //全部学生列表
  const [delivered, setDelivered] = useState([]); //已交列表
  const [noDelivered, setNoDelivered] = useState([]); //未交列表

  const router = useRouter();
  const type = router.params.type;
  const user = router.params.user;
  const work_id = router.params.work_id;
  console.log(type, "type");

  useEffect(() => {
    feedBackData();
    studentsList();
  }, []);

  const feedBackData = () => {
    console.log(work_id); //此处请求接口需要传work_id
    let url = "subject/feedback/detail";
    let data = api[url].data;
    setFeedBackDetail(data);
  };

  const studentsList = () => {
    let url = "subject/students/list";
    let data = api[url].data;
    let newDelivered = data.filter((item) => item.hasCompleted === 0);
    let newNoDelivered = data.filter((item) => item.hasCompleted === 1);
    setStudentsData(data);
    setAllList(data);
    setDelivered(newDelivered);
    setNoDelivered(newNoDelivered);
    const tab = [
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
    setTabList(tab);
  };

  const handleTabChange = (index) => {
    setCurrent(index);
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
  console.log(studentsData);

  return (
    <View className='main'>
      {/* 头部详情 */}
      <DetailHeader type={type} user={user} work_id={work_id} />
      {type == "布置作业" && (
        <View>
          {/* 家长反馈 */}
          <View className='tab'>
            {user == "0" ? (
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
            ) : (
              <View>
                <AtTabs
                  current={current}
                  tabList={tabList}
                  onClick={handleTabChange}
                >
                  {tabList.map((item, index) => {
                    return (
                      <AtTabsPane key={index} current={current} index={index}>
                        <View className='data'>
                          {studentsData.map((i, j) => {
                            return (
                              <StudentsList
                                key={j}
                                current={current}
                                type={type}
                                user={user}
                                work_id={work_id}
                                showData={studentsData}
                              />
                            );
                          })}
                        </View>
                      </AtTabsPane>
                    );
                  })}
                </AtTabs>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

export default WorkDetail;
