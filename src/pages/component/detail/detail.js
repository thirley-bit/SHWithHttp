import { View, Input, Editor } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import { AtIcon, AtMessage } from "taro-ui";
import { connect } from "react-redux";
import { createContext, useContext, useEffect, useState } from "react";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import DetailContent from "@app/component/detailContent/detailContent";
import CommentContext from "@app/component/context/CommentContext";
import GradientButton from "@app/component/GradientButton";
import NavTab from "@app/component/NavTab/NavTab";
import "./detail.scss";

function WorkDetail(props) {
  const {
    dispatch,
    user,
    studentId,
    userId,
    pageSize,
    subjectDetail,
    replyList,
  } = props;
  const router = useRouter();
  const enter = router.params.enter;
  const [editorShow, setEditorShow] = useState(false); // 显示家长第一次反馈的文本框及提交按钮
  const [editorValue, setEditorValue] = useState(""); //文本框内容
  const [editor, setEditor] = useState(""); //文本框输入内容
  const [inputShow, setShowInput] = useState(false); //显示回复的输入框
  const [inputValue, setInputValue] = useState(""); //输入框内容
  const [toId, setToId] = useState(""); //教师端反馈给家长端时的家长id
  const [feedBackId, setFeedBackId] = useState(""); //反馈内容id

  console.log(subjectDetail, "subjectDetail");
  const replyListData = () => {
    let payload = {
      page: 1,
      pageSize: pageSize,
      workId: subjectDetail.id,
    };
    if (user == 0) {
      payload = {
        ...payload,
        studentId: studentId,
        userId: userId,
      };
    }
    dispatch({
      type: "HomeWork/getReplyList",
      payload: payload,
    });
  };

  //是否显示回复的输入框
  const showInput = (e) => {
    setToId(e.userId);
    setFeedBackId(e.id);
    setShowInput(true);
  };
  //是否隐藏回复的输入框
  const hideInput = () => {
    setShowInput(false);
  };
  //是否显示第一次回复的文本框
  const showEditor = () => {
    setEditorShow(true);
  };
  //是否隐藏第一次回复的文本框
  const hideEditor = () => {
    setEditorShow(false);
  };
  //文本框
  const editorReady = () => {
    Taro.createSelectorQuery()
      .select("#editor")
      .context((res) => {
        let newData = res.context;
        setEditor(newData);
      })
      .exec();
  };

  //文本框内容
  const handleEditorInput = (e) => {
    setEditorValue(e.detail.html);
  };
  //文本框选择图片
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
  //发送第一次反馈内容，调用接口
  const handleSend = () => {
    dispatch({
      type: "HomeWork/getFeedbackFirst",
      payload: {
        studentId: studentId,
        workId: subjectDetail.id,
        userId: userId,
        feedback: editorValue,
      },
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        setEditorShow(false);
        replyListData();
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };

  //文本框输入内容
  const handleInput = (e) => {
    setInputValue(e.detail.value);
  };
  //发送回复内容，调用接口
  const handleComfirm = (e) => {
    console.log(e, "val");
    let payload = {
      fromId: userId,
      mainId: feedBackId,
      content: inputValue,
    };
    if (user == 0) {
      payload = {
        ...payload,
        toId: subjectDetail.createBy,
      };
    } else {
      payload = {
        ...payload,
        toId: toId,
      };
    }
    dispatch({
      type: "HomeWork/getFeedbackReply",
      payload: payload,
    }).then((res) => {
      if (res.status == 200) {
        Taro.atMessage({
          message: res.message,
          type: "success",
        });
        setInputValue("");
        replyListData();
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  };

  return (
    <View className='detail-header'>
      <NavTab back title='作业' />
      {/* 头部详情——不含成绩发布和保存页面 */}
      <DetailHeader enter={enter} />
      <View className='detail-center'></View>
      {/* 仅存在于作业和成绩部分 */}
      {(enter == "homework" || enter == "score") && (
        <CommentContext
          value={{ showInput, hideInput, showEditor, hideEditor }}
        >
          <DetailContent enter={enter} id={subjectDetail.id} />
        </CommentContext>
      )}

      <View style={{ position: "fixed", bottom: "220rpx", left: "12rpx" }}>
        <Input
          type='text'
          value={inputValue}
          focus={inputShow}
          confirmType='发送'
          onInput={handleInput}
          onConfirm={handleComfirm}
        />
      </View>
      {user == 0 && editorShow && (
        <View className='editor-show'>
          <View className='editor-box'>
            <Editor
              id='editor'
              className='editor'
              placeholder='请输入反馈...'
              onReady={() => editorReady()}
              onInput={(e) => handleEditorInput(e)}
            ></Editor>
          </View>
          <View className='add-image' onClick={() => addImage()}>
            <AtIcon value='camera' size='30' color='#999'></AtIcon>
            <View>添加图片</View>
          </View>
          <GradientButton
            type='primary'
            className='send-button'
            onClick={() => handleSend()}
          >
            提交反馈
          </GradientButton>
        </View>
      )}
      <AtMessage />
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
  pageSize: state.users.pageSize,
  userId: state.users.userId,
  studentId: state.users.studentId,
  subjectDetail: state.HomeWork.subjectDetail,
  replyList: state.HomeWork.replyList,
}))(WorkDetail);
