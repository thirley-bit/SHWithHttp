import { useEffect, useState } from "react";
import { View, Image } from "@tarojs/components";
// import './articleDetail.less'
import api from "@/api/api";

function ArticleDetail(props) {
  console.log(props);
  const [article, setArticle] = useState({});
  useEffect(() => {
    articleData();
  }, []);

  const articleData = () => {
    let url = "articleDetail";
    let data = api[url].data;
    console.log(data);
    setArticle(data);
  };
  return (
    <View className='tabs'>
      <View className='at-article'>
        <View className='at-article__h1'>{article.title}</View>
        <View className='at-article__info'>
          {article.time} &nbsp;&nbsp;&nbsp;{article.author}
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>{article.title_02}</View>
            <View className='at-article__h3'>{article.title_03}</View>
            <View className='at-article__p'>{article.content}</View>
            <Image
              className='at-article__img'
              src={article.img}
              mode='widthFix'
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default ArticleDetail;
