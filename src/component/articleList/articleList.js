import { View, Image, Navigator } from "@tarojs/components";
import { connect } from 'react-redux';
import { AtCard } from "taro-ui";
import "./ArticleList.scss"

function ArticleList(props) {
  const { dispatch, articleList } = props;
  console.log(props,'articlepeops');
  const handleClick = (e) => {
    dispatch({
      type:'Class/getArticleById',
      payload:e.id
    })
  };
  return (
    <View className='article'>
      {articleList.map((item, index) => {
        return (
          <View key={index} className='card'>
            <Navigator url='/pages/comp/Article/Article'>
              <AtCard
                key={index}
                className='card-item'
                onClick={() => handleClick(item)}
              >
                <View className='at-row at-row--wrap'>
                  {/* 左侧标题和简要文章显示 */}
                  <View className='at-col at-col-8 at-col--wrap'>
                    <View className='card-content'>{item.title}</View>
                    <View className='card-time'>{item.createTime}</View>
                  </View>
                  {/* 缩略图 */}
                  <View className='at-col at-col-3'>
                    <View className='card-img'>
                      <Image className='img' src={item.imgUrl} />
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

export default connect((state) => ({
  articleDetail: state.Class.articleDetail
}))(ArticleList);
