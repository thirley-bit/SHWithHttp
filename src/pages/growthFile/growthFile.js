// import { useState, createContext } from 'react'
import { View, Image, Text } from "@tarojs/components";
import { AtDivider, AtAvatar } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import add from "@static/add.png";
import newPic from "@static/new.png";
import setting from "@static/setting.png";
import right from "@static/right.png";
import normal from "@static/normal.png";
import dialog from "@static/dialog.png";
import "./GrowthFile.scss";
import "../../component/FeedBack/index.scss";

function GrowthFile() {
  let settingList = [
    {
      id: 0,
      name: "个人信息",
      avatar: add,
    },
    {
      id: 1,
      name: "个人成长史",
      avatar: newPic,
    },
    {
      id: 2,
      name: "综合素质评价",
      avatar: setting,
    },
  ];
  const handleNav = () => {
    console.log("nav");
  };
  const list = [
    {
      work_id: 0,
      student_id: 0,
      student_name: "张三",
      relative: "爸爸",
      feed_back_id: 0,
      feed_back:
        "一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
      create_time: "2023-11-15  14:12:34",
      avatar:
        "http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
      reply: [
        {
          feed_back_id: 0,
          reply_id: 0,
          from: "张老师",
          to: "张三爸爸",
          content: "有问题一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
        },
        {
          feed_back_id: 0,
          reply_id: 1,
          from: "张三爸爸",
          to: "张老师",
          content: "没有问一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是题",
        },
      ],
    },
    {
      work_id: 0,
      student_id: 0,
      student_name: "李四",
      relative: "爸爸",
      feed_back_id: 1,
      feed_back:
        "一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
      create_time: "2023-11-15  14:12:34",
      avatar:
        "http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
      reply: [
        {
          feed_back_id: 1,
          reply_id: 0,
          from: "张老师",
          to: "张三爸爸",
          content: "什么问题一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
        },
        {
          feed_back_id: 1,
          reply_id: 1,
          from: "张三爸爸",
          to: "张老师",
          content: "123一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
        },
        {
          feed_back_id: 1,
          reply_id: 2,
          from: "张三爸爸",
          to: "张老师",
          content: "345问题",
        },
      ],
    },
  ];

  return (
    <View className='index'>
      <NavTab needBackIcon={false} mainTitle='诚道吉' />
      <View className='my-content'>
        {settingList.map((item, index) => {
          return (
            <View key={index}>
              <View className='at-row at-row__align--end content'>
                <View className='at-col at-col-2 avatar'>
                  {/* <AtAvatar
                    // circle
                    size='small'
                    image={item.avatar}
                  ></AtAvatar> */}
                  <Image className='image' src={item.avatar} />
                </View>
                <View className='at-col at-col-9 '>
                  <Text className='content-name'>{item.name}</Text>
                </View>
                <View className='at-col at-col-3 right' onClick={handleNav}>
                  <Image className='image' src={right} />
                </View>
                <View className='divider'>
                  <AtDivider height={12} lineColor='#E6E6E6' />
                </View>
              </View>
            </View>
          );
        })}
      </View>
      
    </View>
  );
}
export default GrowthFile;
