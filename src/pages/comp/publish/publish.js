import { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { View, Input, Text, Picker, Editor, Button } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import {
  AtIcon,
  AtMessage,
  AtModal,
  AtModalContent,
  AtModalAction,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import TreeSelect from "@app/component/TreeSelect/TreeSelect";
import TreeFlat from '@app/component/TreeSelect/TreeFlat';
import Modal from "@app/component/Modal";
import Divider from "@app/component/Divider/Divider";
import "./publish.scss";

function WorkDetail(props) {
  const {
    dispatch,
    subjectType,
    classStudent,
    subjectDetail,
  } = props;
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
    setMsg(e.detail.html);
  };
  const editorReady = () => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        editorRef.current = res.context;
        editorRef.current.setContents({ html: subjectDetail.detailContent });
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
    let value = item.id;
    //初始化时父元素选中，可选
    let checked = true, disabled = false;
    let children = item.studentList.map((jt) => {
      let _label = jt.studentName;
      let _value = jt.id;
      //判断子元素是否有ifChoose为1（布置作业已被选择），
      const isChoosed = jt.ifChoose === 1;
      //子元素中有ifChoose为1，父级选择框选中且不可选；否则父级选择框为选中且可选
      if (isChoosed) {
        disabled = true
      } else {
        //父级未选中
        checked = false;
      }
      return {
        label:_label,
        value:_value,
        checked: isChoosed,
        disabled: isChoosed,
      };
    });
    return {
      label,
      value,
      checked,
      disabled,
      children,
    };
  });
  const aaa = useRef(null)
 useEffect(() => {
aaa.current
 },[])
 console.log(aaa,'aaaa')
  //获取树形选择器传出的值
  const onChangeHandler = useCallback((selectItems) => {
    console.log(selectItems,'sekectitems')
    setChoosePerson(selectItems)
  }, []);
  const handlePersonClose = () => {
    setPersonModalOpened(false)
  }
  const handlePersonCancel = () => {
    setPersonModalOpened(false);
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
    //判断输入是否为空，
    let inputVal = "";
    //输入为空时的提示语
    let tips = "";
    if (title == "") {
      tips = "请输入标题";
      inputVal = false;
    } else if (msg == "") {
      tips = "请输入正文内容";
      inputVal = false;
    } else if (selectedSubject == "") {
      tips = "请选择学科科目";
      inputVal = false;
      //此处修改过
    } else if (choosePerson.length == 0) {
      tips = "请选择指定发送人";
      inputVal = false;
    } else if (time == "") {
      tips = "截至日期";
      inputVal = false;
    } else {
      //当前页所有输入不为空时设置为true,为true时可以请求接口
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
        <Divider className='divider' />
        <View className='editor-box'>
          <Editor
            id='editor'
            className='editor'
            placeholder='请输入...'
            onReady={editorReady}
            onInput={(e) => handleInput(e)}
          ></Editor>
        </View>
        <View className='add-image' onClick={() => addImage()}>
          <AtIcon value='camera' size='30' color='#999'></AtIcon>
          <View>添加图片</View>
        </View>
        <Divider className='divider' />
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
        <Divider className='divider' />
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
        <Divider className='divider' />
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
