import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { connect } from "react-redux";
import { useEffect } from "react";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import DetailContent from "@app/component/detailContent/detailContent";
import NavTab from '@app/component/NavTab/NavTab';
import "./detail.scss";

function WorkDetail(props) {
  const router = useRouter();
  const enter = router.params.enter;

  return (
    <View className='detail-header'>
      <NavTab back title='作业' />
      {/* 头部详情——不含成绩发布和保存页面 */}
      <DetailHeader enter={enter} />
      <View className='detail-center'></View>
      {/* 仅存在于作业和成绩部分 */}
      {(enter == "homework" || enter == "score") && (
        <DetailContent enter={enter}  />
      )}
    </View>
  );
}

export default connect((state) => ({
  user: state.users.user,
}))(WorkDetail);
