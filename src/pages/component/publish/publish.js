import { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { View, Input, Text, Picker, Editor, Button } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import {
  AtButton,
  AtList,
  AtIcon,
  AtMessage,
  AtModal,
  AtModalContent,
  AtModalAction,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import TreeSelect from "@app/component/TreeSelect/TreeSelect";
import Modal from "@app/component/Modal";
import Divider from "@app/component/Divider";
// import img from "../../../static/img.jpg";
import "./publish.scss";

function WorkDetail(props) {
  const {
    dispatch,
    subjectType,
    classStudent,
    subjectDetail,
    chooseIdList,
    chooseName,
  } = props;
  console.log(classStudent, "calss");
  const sChooseNames = Object.values(chooseName).join(",");
  // const idList = Object.keys(chooseName)
  // const idList = ["11", "33", "44", "55", "66", "77", "88"];
  const router = useRouter();
  const enter = router.params.enter;
  const type = router.params.type;
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(""); //选中的科目下标
  const [time, setTime] = useState(""); //选中日期
  const [isOpened, setIsOpened] = useState(false); //打卡弹窗
  const [personModalOpened, setPersonModalOpened] = useState(false); //人员选择弹窗
  const [choosePerson, setChoosePerson] = useState([]) //选择的学生列表人员
  const refTree = useRef();

  const editorRef = useRef();
  const handleTitleInput = (e) => {
    setTitle(e.detail.value);
  };
  useEffect(() => {
    dispatch({
      type: "HomeWork/getListByType",
      payload: 1,
    });
    
    let payload = {
      workId:subjectDetail.id,
      // workId:'4c5e2127a6134d64829bcc85b8df30a2',
      searchKey:''
    }

    if (enter == "homework" && type == "edit") {
      setTitle(subjectDetail.title);
      setMsg(subjectDetail.detailContent)
      // setEditor(subjectDetail.detailEditor);
      editorRef.current &&
        editorRef.current.setContents({ html: subjectDetail.detailContent });
      setSelectedSubject(
        subjectType.map((item) => item.value).indexOf(subjectDetail.subjectType)
      );
      setTime(subjectDetail.endTime);
    }
    dispatch({
      type: "Class/getClassStudent",
      payload:payload
    });
  }, []);
  console.log(subjectType.map((item) => item.value),'value>>>')
  console.log(subjectDetail.subjectType,'type')
  console.log(subjectType.map((item) => item.value).indexOf(subjectDetail.subjectType),'12121212121')
  console.log(subjectDetail,'subject')

  const sendData = (val) => {
    let url = "";
    let payload = {
      title: title,
      detailContent: msg,
      subjectType: subjectType[selectedSubject]?.value,
      studentIdList: choosePerson?.map(item => item.value),
      endTime: time,
    };
    if (type == "edit") {
      url = "HomeWork/getUpdateHomework";
      payload = {
        ...payload,
        id: subjectDetail.id,
        type: val,
      };
    } else {
      url = "HomeWork/getInsertHomework";
    }
    console.log(payload,'payload')
    dispatch({
      type: url,
      payload: payload,
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
  };
  //输入框
  const handleInput = (e) => {
    console.log(e, ">>>>");
    setMsg(e.detail.html);
  };
  const editorReady = (e) => {
    console.log(e, "eeee");
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        editorRef.current = res.context;
        editorRef.current.setContents({ html: subjectDetail.detailContent });
        // newData.value = 12
        // console.log(newData,'newData')
        // newData.setContents({html:'<p>11</p>'})
        // setEditor(newData);
        // setEditor
      })
      .exec();
  };
  const addImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        editorRef.current.insertImage({
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
  //选择发送人
  const onPersonChange = () => {
    setPersonModalOpened(true);
  };
  //处理传入treeSelect的数据结构
  const dataSource = classStudent.map((item) => {
    let label = item.className;
    // eslint-disable-next-line no-shadow
    let value = item.id;
    let checked = false;
    let children = item.studentList.map((jt) => {
      // eslint-disable-next-line no-shadow
      let label = jt.studentName;
      // eslint-disable-next-line no-shadow
      let value = jt.id;
      // eslint-disable-next-line no-shadow
      let checked = false;
      return {
        label,
        value,
        checked,
      };
    });
    return {
      label,
      value,
      checked,
      children,
    };
  });
  //获取树形选择器传出的值
  const onChangeHandler = useCallback((selectItems) => {
    setChoosePerson(selectItems)
  }, []);
  const handlePersonClose = () => {
    setPersonModalOpened(false)
  }
  const handlePersonCancel = () => {
    setPersonModalOpened(false);
    // setChoosePerson([])
  }
  const handlePersonConfirm = () => {
    setPersonModalOpened(false);
  }

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
      //此处修改过
    } else if (choosePerson.length == 0) {
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
        sendData();
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
    sendData(0);
    Taro.navigateTo({ url: "/pages/class/HomeWork/HomeWork" });
  };
  const handleConfirm = () => {
    setIsOpened(false);
    sendData(1);
    Taro.navigateTo({ url: "/pages/class/HomeWork/HomeWork" });
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
                {selectedSubject == ""
                  ? ""
                  : subjectType[selectedSubject]?.name}
              </View>
              <View className='at-col-0'>
                <AtIcon value='chevron-right' color='#999'></AtIcon>
              </View>
            </View>
          </View>
        </Picker>
        <Divider />
        <View className='choose' onClick={() => onPersonChange()}>
          <View className='at-row'>
            <View className='at-col at-col-8'>
              <Text className='content-name'>
                选择发送人
              </Text>
            </View>
            <View
              className='at-col-3'
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {choosePerson.length  ? Object.values(choosePerson.map(item => item.label)).join(',') : ''}
            </View>
            <View className='at-col-0'>
              <AtIcon value='chevron-right' color='#999'></AtIcon>
            </View>
          </View>
        </View>
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
        isOpened={isOpened}
        cancelText='否'
        confirmText='是'
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content='通知学生重新完成？'
      />
      <View className='person'>
        <AtModal isOpened={personModalOpened} onClose={handlePersonClose}>
          <AtModalContent className='person-modal'>
              {dataSource.length ? (
                <TreeSelect
                  ref={refTree}
                  dataSource={dataSource}
                  onChange={onChangeHandler}
                />
              ) : (
                <View style={{ margin: "50% 40%" }}>暂无数据</View>
              )}
          </AtModalContent>
          <AtModalAction>
            <Button style={{borderRight:'1rpx solid #dedede'}} onClick={handlePersonCancel}>取消</Button>
            <Button onClick={handlePersonConfirm}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    </View>
  );
}

export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
  classStudent: state.Class.classStudent,
  chooseIdList: state.Class.chooseIdList,
  chooseName: state.Class.chooseName,
  subjectDetail: state.HomeWork.subjectDetail,
}))(WorkDetail);
