import api from '@/api/api';
import Taro from '@tarojs/taro';
import httpService from '../utils/httpService';

//班级列表
export async function getJoinClass(params){
    return httpService.post('/class/joinClass',params)
}
export async function getClassStudent(params){
    return httpService.get('/class/getClassStudent',params)
}
export async function getArticleList(){
    let url = "article/list"
    let data = api[url]
    return data
}

