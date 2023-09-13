import api from '@/api/api';
import Taro from '@tarojs/taro';
import httpService from '../utils/httpService';

//班级列表
export async function getJoinClass(params){
    return httpService.post('/class/getJoinClass',params)
}
export async function getArticleList(){
    let url = "article/list"
    let data = api[url]
    return data
}
export async function getNews(params) {
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
    return httpService.get('/class/getClassAll')
    // return httpService.post('/user/register',params)
}
