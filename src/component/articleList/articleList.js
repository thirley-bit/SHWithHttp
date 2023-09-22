import { View, Image, Navigator } from "@tarojs/components";
import { connect } from 'react-redux';
import { AtCard } from "taro-ui";
import "./ArticleList.scss"

function ArticleList(props) {
  const { dispatch, articleList, articleDetail } = props;
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
            <Navigator url='/pages/component/Article/Article'>
              <AtCard
                key={index}
                className='card-item'
                onClick={() => handleClick(item)}
              >
                <View className='at-row at-row--wrap'>
                  <View className='at-col at-col-8 at-col--wrap'>
                    <View className='card-content'>{item.title}</View>
                    <View className='card-time'>{item.createTime}</View>
                  </View>
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
