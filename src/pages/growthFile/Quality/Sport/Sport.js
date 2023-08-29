import Taro, { useLoad } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import GradeCard from "@app/component/GradeCard/GradeCard";
import "./Sport.scss";

function Sport() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  const Grade = {
    PASS: "及格",
    FAIL: "不及格",
    GOOD: "良好",
    GREATE: "优秀",
  };
  const list = {
    year: "2022-2023上学期体质检测",
    score: "82.5",
    grade: "良好",

    children: [
      {
        run: "50米跑",
        score: "12.39秒",
        point: "80",
        result: "及格",
      },
      {
        run: "1500米跑",
        score: "12.39秒",
        point: "80",
        result: "不及格",
      },
      {
        run: "500米跑",
        score: "12.39秒",
        point: "80",
        result: "良好",
      },
      {
        run: "800米跑",
        score: "12.39秒",
        point: "80",
        result: "优秀",
      },
      {
        run: "50米跑",
        score: "12.39秒",
        point: "80",
        result: "及格",
      },
      {
        run: "800米跑",
        score: "12.39秒",
        point: "80",
        result: "优秀",
      },
    ],
  };

  const renderCard = (item) => {
    let cssName = "";

    switch (item.result) {
      case Grade.PASS:
        cssName = "perpo";
        break;

      case Grade.FAIL:
        cssName = "orange";
        break;

      case Grade.GOOD:
        cssName = "yellow";
        break;
      case Grade.GREATE:
        cssName = "blue";
        break;
    }
    return <GradeCard cssName={cssName} detail={item} />;
  };

  return (
    <View className='index'>
    <NavTab back title='运动与健康' />
    <View className='home'>
      <View className='cont'>
        <View className='cont-year'>{list.year}</View>
        <View className='score'>总分：{list.score}</View>
        <View className='score grade'>等级：{list.grade}</View>
      </View>

      {list.children.map((item) => renderCard(item))}
    </View>
    </View>
  );
}
export default Sport;
