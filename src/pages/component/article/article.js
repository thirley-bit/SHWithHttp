import { useEffect, useState } from "react";
import { View, Image } from "@tarojs/components";
import { useRouter } from '@tarojs/taro';
import NavTab from '@app/component/NavTab/NavTab';
import api from "@/api/api";
import './Article.scss'

function ArticleDetail(props) {
  console.log(props);
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
      <NavTab needBackIcon mainTitle='诚道吉111' />
      <View className='at-article'>
        <View className='at-article__h1'>{article.title}</View>
        <View className='at-article__info'>
          {article.author} &nbsp;&nbsp;&nbsp; {article.create_time} 
        </View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='article_content' dangerouslySetInnerHTML={{ __html: article.detail_content }}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ArticleDetail;
