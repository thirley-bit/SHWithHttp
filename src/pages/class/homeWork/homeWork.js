import { useState, useEffect } from "react";
import { View, Navigator } from "@tarojs/components";
import { AtFab, AtIcon } from "taro-ui";
import Work from "@app/component/work/work";
import api from "@/api/api";
import "./homeWork.scss";

function HomeWork() {
  const [user, setUser] = useState("");
  const [selector, setSelector] = useState([]); //科目选择项
  const [showWorkData, setShowWorkData] = useState([]); //作业列表

  useEffect(() => {
    userData();
    subData();
    homeWorkData();
  }, []);

  const userData = () => {
    let url = "identity";
    let data = api[url].data.user;
    setUser(data);
  };
  const subData = () => {
    let url = "subject/list";
    let data = api[url].data;
    setSelector(data);
  };

  const homeWorkData = () => {
    let url = "homeWork/list";
    let data = api[url].data;
    setShowWorkData(data);
  };
  return (
    <View className='main'>
        <Work
          type='布置作业'
          user={user}
          selector={selector}
          showData={showWorkData}
        />
    </View>
  );
}
export default HomeWork;
