import { View , Input} from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { connect } from "react-redux";
import { createContext, useContext, useEffect, useState } from "react";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import DetailContent from "@app/component/detailContent/detailContent";
import CommentContext from '@app/component/context/CommentContext';
import NavTab from '@app/component/NavTab/NavTab';
import "./detail.scss";

function WorkDetail(props) {
  const { dispatch } = props;
  const router = useRouter();
  const enter = router.params.enter;
  const id = router.params.id;
  const [inputShow, setShowInput] = useState(false)
  const [inputValue, setInputValue]= useState("")
  const showInput = (e) => {
    console.log('show input')
    console.log(e,'eeeee')
    setShowInput(true)
  }

  const hideInput = () => {
    setShowInput(false)
  }

  const handleInput = (e) => {
    console.log(e,'eee')
    setInputValue(e.detail.value)
  }

  console.log(inputValue,'inputValue')
  const handleComfirm = (e) => {
    console.log(e,'val')
    dispatch({
      type:'HomeWork/getFeedbackReply',
      payload:{
        toId:"3ee83b8573b54f5c99288618039b7c84",
        fromId:"3ee83b8573b54f5c99288618039b7c84",
        mainId:"00e1d3e060184180856879347eab5db1",
        content:"老师回复"
      }
    })
  }
  return (
    <View className='detail-header'>
      <NavTab back title='作业' />
      {/* 头部详情——不含成绩发布和保存页面 */}
      <DetailHeader enter={enter} />
      <View className='detail-center'></View>
      {/* 仅存在于作业和成绩部分 */}
      {(enter == "homework" || enter == "score") && (
        <CommentContext value={{ showInput, hideInput }}>
          <DetailContent enter={enter} id={id} />
        </CommentContext>
      )}

      <View style={{position:'fixed',bottom:'220rpx'}}>
      <Input type='text' value={inputValue} focus={inputShow} confirmType='发送' onInput={handleInput} onConfirm={handleComfirm} />
      </View>
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
}))(WorkDetail);
