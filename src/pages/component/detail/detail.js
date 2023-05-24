import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import DetailContent from "@app/component/detailContent/detailContent";

import "./detail.scss";

function WorkDetail() {
  const router = useRouter();
  const enter = router.params.enter;
  const user = router.params.user;
  const id = router.params.id;
  const publish = router.params.publish;
  console.log(publish, "pudhscjsd csbch");

  return (
    <View className='main'>
      {/* 头部详情——不含成绩发布和保存页面 */}
     <DetailHeader enter={enter} user={user} id={id} />
      {/* 仅存在于作业和成绩部分 */}
      {(enter == "homework" || enter == "score") && (
        <DetailContent enter={enter} user={user} id={id} />
      )}
    </View>
  );
}

export default WorkDetail;
