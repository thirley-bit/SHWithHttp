import { useState, useEffect } from "react";
import { View, Navigator } from "@tarojs/components";
import { AtFab, AtIcon } from "taro-ui";
import Work from "@app/component/Work/Work";
import api from "@/api/api";
import "./homeWork.scss";

// 作业页面
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
    let data = api[url].data.user_code;
    setUser(data);
  };
  const subData = () => {
    let url = "subject/select";
    let data = api[url].data;
    setSelector(data);
  };

  const homeWorkData = () => {
    let url = "subject/list";
    let data = api[url].data;
    setShowWorkData(data);
  };
  return (
    <View className='main'>
        <Work
          enter='homework'
          user={user}
          selector={selector}
          showData={showWorkData}
        />
    </View>
  );
}
export default HomeWork;
