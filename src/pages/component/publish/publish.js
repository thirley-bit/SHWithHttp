import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Input, Text, Picker, Editor } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { AtButton, AtList, AtIcon, AtMessage } from "taro-ui";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import StudentsList from "@app/component/StudentsList/StudentsList";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import Divider from "@app/component/Divider";
import api from "@/api/api";
// import img from "../../../static/img.jpg";
import "./publish.scss";

function WorkDetail(props) {
  console.log(props);
  const { dispatch, subjectType } = props;
  const [title, setTitle] = useState("");
  const [editor, setEditor] = useState("");
  const [selectorChecked, setSelectorChecked] = useState(""); //选中的科目下标
  //   const [user, setUser] = useState("");
  //   const [selector, setSelector] = useState([]); //科目选择项
  //   const [showWorkData, setShowWorkData] = useState([]); //通知列表

  const handleTitleInput = (e) => {
    setTitle(e.detail.value);
  };
  //输入框内容
  const [msg, setMsg] = useState("");

  //输入框
  const handleInput = (e) => {
    setMsg(e.detail.html);
  };

  //发送按钮
  console.log(msg, "msg");
  const handleSend = () => {
    dispatch({
      type: "HomeWork/getInsertHomework",
      payload: {
        title: title,
        detailContent: msg,
        subjectType: "1002",
        studentIdList: ["11", "22", "33"],
        endTime: "2023-09-21",
      },
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        //新建成功，跳转至列表页面
        setTimeout(() => {
          Taro.navigateTo({ url: "/pages/class/HomeWork/HomeWork" });
        }, 1000);
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
    // dispatch({
    //   type:'HomeWork/getInsertHomework',
    //   payload:{
    //     title:title,
    //     detailContent:msg,
    //     subjectType:'1002',
    //     studentIdList:['11','22','33'],
    //     endTime:'2023-09-21'
    //   }
    // })
  };
  const editorReady = () => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        let newData = res.context;
        setEditor(newData);
      })
      .exec();
  };
  const addImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        editor.insertImage({
          src: res.tempFilePaths[0],
          width: "60%",
          success: () => {
            console.log("success");
          },
        });
      },
    });
  };
  //选择科目
  const onSubChange = (e) => {
    let No = e.detail.value;
    //设置选择框中的显示科目
    setSelectorChecked(No);
  };

  return (
    <View className='main'>
      <NavTab back title='新建' />
      <View className='components-page'>
        <Input
          placeholder='标题：如语文练习'
          value={title}
          onInput={handleTitleInput}
        />
        <Divider />
        <View className='editor-box'>
          <Editor
            id='editor'
            className='editor'
            placeholder='正文...'
            onReady={() => editorReady()}
            onInput={(e) => handleInput(e)}
          ></Editor>
        </View>
        <View className='add-image' onClick={() => addImage()}>
          <AtIcon
            className='img1'
            value='camera'
            size='30'
            color='#999'
          ></AtIcon>
          <View>添加图片</View>
        </View>
        <Divider />
        <Picker
          mode='selector'
          range={subjectType.map((item) => item.name)}
          onChange={onSubChange}
        >
          <View className='choose'>
            <View className='at-row'>
              <View className='at-col at-col-10'>
                <Text className='content-name'>学科科目</Text>
              </View>
              <View className='at-col-1'>
                {selectorChecked == "" ? "" : subjectType[selectorChecked].name}
              </View>
              <View className='at-col-0'>
                <AtIcon value='chevron-right' color='#999'></AtIcon>
              </View>
            </View>
          </View>
        </Picker>
        <Divider />
        <View className='choose'>
          <View className='at-row'>
            <View className='at-col at-col-10 '>
              <Text className='content-name'>谁可以看</Text>
            </View>
            <View className='at-col'>
              <View style={{ display: "inline-block" }}>公开</View>
              <AtIcon value='chevron-right' color='#999'></AtIcon>
            </View>
          </View>
        </View>
        <Divider />
      </View>

      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleSend()}
      >
        发送
      </GradientButton>
      <AtMessage />
    </View>
    // </View>
  );
}

export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
}))(WorkDetail);
