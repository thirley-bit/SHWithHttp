import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Input, Text, Picker, Editor } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { AtButton, AtList, AtIcon, AtMessage } from "taro-ui";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import StudentsList from "@app/component/StudentsList/StudentsList";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import Modal from "@app/component/Modal";
import Divider from "@app/component/Divider";
import api from "@/api/api";
// import img from "../../../static/img.jpg";
import "./publish.scss";

function WorkDetail(props) {
  const { dispatch, subjectType, classStudent, subjectDetail } = props;
  const router = useRouter();
  const enter = router.params.enter;
  const type = router.params.type;
  const [title, setTitle] = useState("");
  const [editor, setEditor] = useState("");
  //输入框内容
  const [msg, setMsg] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(""); //选中的科目下标
  const [selectedPerson, setSelectedPerson] = useState(""); //选中的班级下标
  const [time, setTime] = useState(""); //选中日期
  const [isOpened, setIsOpened] = useState(false); //打卡弹窗

  const handleTitleInput = (e) => {
    setTitle(e.detail.value);
  };
  useEffect(() => {
    dispatch({
      type: "HomeWork/getListByType",
      payload: 1,
    });
    dispatch({
      type: "Class/getClassStudent",
    });
    if (enter == "homework" && type == "edit") {
      setTitle(subjectDetail.title);
      // setMsg(subjectDetail.detailContent)
      setEditor(subjectDetail.detailEditor);
      setSelectedSubject(
        subjectType.map((item) => item.value).indexOf(subjectDetail.subjectType)
      );
      setTime(subjectDetail.endTime);
    }
  }, []);

  const sendData = (val) => {
    let url = ''
    let payload = {
      title: title,
      detailContent: msg,
      subjectType: subjectType[selectedSubject]?.value,
      studentIdList: classStudent[selectedPerson]?.studentList.map(
        (it) => it.id
      ),
      endTime: time,
    }
    if(type == 'edit'){
      url = 'HomeWork/getUpdateHomework'
      payload = {
        ...payload,
        id:subjectDetail.id,
        type:val
      }
    }else{
      url = 'HomeWork/getInsertHomework'
    }
    dispatch({
      type: url,
      payload: payload
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
  }
  //输入框
  const handleInput = (e) => {
    setMsg(e.detail.html);
  };
  const editorReady = (e) => {
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
          success: () => {},
        });
      },
    });
  };
  //选择科目
  const onSubChange = (e) => {
    //设置选择框中的显示科目
    setSelectedSubject(e.detail.value);
  };
  const onPersonChange = (e) => {
    setSelectedPerson(e.detail.value);
  };

  //选择截至日期
  const onTimeChange = (e) => {
    setTime(e.detail.value);
  };

  //发送按钮
  const handleSend = () => {
    //判断输入是否为空
    let inputVal = "";
    let tips = "";
    if (title == "") {
      tips = "请输入标题";
      inputVal = false;
    } else if (msg == "") {
      tips = "请输入正文内容";
      inputVal = false;
    } else if (selectedSubject == "") {
      inputVal = false;
      tips = "请选择学科科目";
    } else if (selectedPerson == "") {
      tips = "请选择指定发送人";
      inputVal = false;
    } else if (time == "") {
      tips = "截至日期";
      inputVal = false;
    } else {
      inputVal = true;
    }

    //输入不为空时请求接口
    if (inputVal) {
      if (type == "edit") {
        setIsOpened(true);
      } else {
        sendData()
      }
    } else {
      //输入为空提示
      Taro.atMessage({
        message: tips,
        type: "error",
      });
    }
  };
  const handleClose = () => {
    setIsOpened(false);
  };
  const handleCancel = () => {
    setIsOpened(false);
    sendData(0)
  };
  const handleConfirm = () => {
    setIsOpened(false);
    sendData(1)
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
            placeholder='请输入...'
            // onReady={() => editorReady()}
            onReady={editorReady}
            onInput={(e) => handleInput(e)}
          ></Editor>
        </View>
        <View className='add-image' onClick={() => addImage()}>
          <AtIcon value='camera' size='30' color='#999'></AtIcon>
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
                {selectedSubject == "" ? "" : subjectType[selectedSubject]?.name}
              </View>
              <View className='at-col-0'>
                <AtIcon value='chevron-right' color='#999'></AtIcon>
              </View>
            </View>
          </View>
        </Picker>
        <Divider />
        {/* <Picker
          mode='selector'
          range={classStudent.map((item) => item.className)}
          onChange={onPersonChange}
        > */}
          <View className='choose' onClick={() => {Taro.navigateTo({url:'/pages/component/publish/SendUserList/SendUserList'})}}>
            <View className='at-row'>
              <View className='at-col at-col-8'>
                <Text className='content-name'>选择发送人</Text>
              </View>
              <View className='at-col-3'>
                {selectedPerson == ""
                  ? ""
                  : classStudent[selectedPerson].className}
              </View>
              <View className='at-col-0'>
                <AtIcon value='chevron-right' color='#999'></AtIcon>
              </View>
            </View>
          </View>
        {/* </Picker> */}
        <Divider />
        <Picker mode='date' onChange={onTimeChange}>
          <View className='choose'>
            <View className='at-row'>
              <View className='at-col at-col-8'>
                <Text className='content-name'>截至日期</Text>
              </View>
              <View className='at-col-3'>{time}</View>
              <View className='at-col-0'>
                <AtIcon value='chevron-right' color='#999'></AtIcon>
              </View>
            </View>
          </View>
        </Picker>
      </View>

      <GradientButton
        type='primary'
        className='send-button'
        onClick={() => handleSend()}
      >
        发送
      </GradientButton>
      <AtMessage />
      <Modal
        className='modal'
        isOpened={isOpened}
        cancelText='否'
        confirmText='是'
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content='通知学生重新完成？'
      />
    </View>
    // </View>
  );
}

export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
  classStudent: state.Class.classStudent,
  subjectDetail: state.HomeWork.subjectDetail,
}))(WorkDetail);
