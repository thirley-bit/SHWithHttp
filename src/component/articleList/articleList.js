import { View, Image, Navigator } from "@tarojs/components";
import { AtCard } from "taro-ui";
import "./articleList.less";

function ArticleList(props) {
  const { articleList } = props;
  const handleClick = () => {
    console.log(111);
  };
  return (
    <View className='tabs'>
      {articleList.map((item, index) => {
        return (
          <View key={index} className='card'>
            <Navigator url='/pages/component/article/article'>
              <AtCard
                key={index}
                className='card-item'
                onClick={() => handleClick(item)}
              >
                <View className='at-row at-row--wrap'>
                  <View className='at-col at-col-8 at-col--wrap'>
                    <View className='card-content'>{item.title}</View>
                    <View className='card-time'>{item.create_time}</View>
                  </View>
                  <View className='at-col at-col-3'>
                    <View className='card-img'>
                      <Image className='img' src={item.img_url} />
                    </View>
                  </View>
                </View>
              </AtCard>
            </Navigator>
          </View>
        );
      })}
    </View>
  );
}

export default ArticleList;
