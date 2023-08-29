import api from '@/api/api';
import Taro from '@tarojs/taro';
import httpService from '../utils/httpService';

export async function getArticleList(){
    let url = "article/list"
    let data = api[url]
    return data
}
export async function getNews() {
    // let data = []
    // Taro.request({
    //     url:'https://jsonplaceholder.typicode.com/users',
    //     header:{
    //       'content-type':'application/json'
    //     },
    //     success:function(res){
    //       console.log(res,'res')
    //       data = res
    //     }
    // })
    // return data
    return httpService.get('/users')
}
export async function getAAA() {
    return httpService.post('/posts')
}