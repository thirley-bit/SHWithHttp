import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import DetailContent from "@app/component/detailContent/detailContent";

import "./detail.scss";

function WorkDetail() {
  const router = useRouter();
  const enter = router.params.enter;
  const id = router.params.id;
  console.log(enter)

  return (
    <View className='main'>
      {/* 头部详情——不含成绩发布和保存页面 */}
     <DetailHeader enter={enter}  id={id} />
      {/* 仅存在于作业和成绩部分 */}
      {(enter == "homework" || enter == "score") && (
        <DetailContent enter={enter}  id={id} />
      )}
    </View>
  );
}

export default WorkDetail;
