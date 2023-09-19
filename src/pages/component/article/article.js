import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { View, Image } from "@tarojs/components";
import { useRouter } from '@tarojs/taro';
import NavTab from '@app/component/NavTab/NavTab';
import api from "@/api/api";
import './Article.scss'

function ArticleDetail(props) {
  console.log(props,'1122333444');
  const { dispatch, articleDetail } = props;
  const [article, setArticle] = useState({});
  const router = useRouter()
  console.log(router)
  useEffect(() => {
    articleData();
  }, []);

  const articleData = () => {
    let url = "article/detail";
    let data = api[url].data;
    console.log(data);
    setArticle(data);
  };
  return (
    <View className='tabs'>
      <NavTab back title='文章详情' />
      <View className='at-article'>
        <View className='at-article__h1'>{articleDetail.title}</View>
        <View className='at-article__info'>
          {/* {articleDetail.author} &nbsp;&nbsp;&nbsp;  */}
          {articleDetail.createTime} 
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='article_content' dangerouslySetInnerHTML={{ __html: articleDetail.detailContent }}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default connect((state) => ({
  articleDetail: state.Class.articleDetail
}))(ArticleDetail);
