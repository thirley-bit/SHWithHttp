import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { connect } from "react-redux";
import { useEffect } from "react";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import DetailContent from "@app/component/detailContent/detailContent";
import NavTab from '@app/component/NavTab/NavTab';
import "./detail.scss";

function WorkDetail(props) {
  console.log(props, "detailpropssssssssss");
  const {
    dispatch,
    user,
  } = props;
  const router = useRouter();
  const enter = router.params.enter;
  const id = router.params.id;
  console.log(enter, id, "enter,id");

  useEffect(() => {
    // dispatch({ 
    //   type: "Score/getScoreDetailArr",
    // });
    if (user == 0) {
      dispatch({
        type: "HomeWork/getFeedBackDetail",
      });
    } else {
      dispatch({
        type: "HomeWork/getStudentsList",
      });
      dispatch({
        type: "HomeWork/getFeedBackList",
      });
    }
  }, []);

  return (
    <View className='detail-header'>
      <NavTab needBackIcon mainTitle='作业' />
      {/* 头部详情——不含成绩发布和保存页面 */}
      <DetailHeader enter={enter} />
      <View className='detail-center'></View>
      {/* 仅存在于作业和成绩部分 */}
      {(enter == "homework" || enter == "score") && (
        <DetailContent enter={enter} id={id} />
      )}
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
  feedBack: state.HomeWork.feedBack,
  feedBackList: state.HomeWork.feedBackList,
  submitListAll: state.HomeWork.submitListAll,
  submittedList: state.HomeWork.submittedList,
  notSubmittedList: state.HomeWork.notSubmittedList,
}))(WorkDetail);
