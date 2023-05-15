import { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { AtButton, AtDivider, AtIcon, AtTabs, AtTabsPane } from "taro-ui";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import StudentsList from "@app/component/studentsList/studentsList";
import api from "@/api/api";

import "./noticeDetail.scss";

function NoticeDetail(props) {
  const [studentsData, setStudentsData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [tabList, setTabList] = useState([]);
  // const [delivered, setDelivered] = useState([]); //已交列表
  // const [noDelivered, setNoDelivered] = useState([]); //未交列表

  useEffect(() => {
    dataList();
  }, []);

  const dataList = () => {
    let url = "students/list";
    let data = api[url].data;
    setStudentsData(data);
    // setDelivered(newDelivered);
    // setNoDelivered(newNoDelivered);
  };
  const router = useRouter();
  const user = router.params.user;

  // const data = JSON.parse(decodeURIComponent(router.params.data));
  // console.log(data);

  const data = {
    id: 1,
    checked: 0,
    hasNew: 0,
    hasCompleted: 0,
    title: "【语文】 2023.04.25 （周二）语文练习",
    author: "张老师",
    time: "2023-12-12 14:34",
    content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
    avatar:"https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    feedBack:'热风热风个人个人提供给如风个人提供人推广和认同感认同感认同感认同感额尔特瑞特个忍痛割肉个人提供二锅头特工他尔特个人提供厄尔二'  
  };

  const handleChange = (index) => {
    setCurrent(index);
  };

  return (
    <View className='main'>
      {/* 头部详情 */}
      <DetailHeader />
    </View>
  );
}

export default NoticeDetail;
