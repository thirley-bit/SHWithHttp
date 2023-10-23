import api from '@/api/api';
import Taro from '@tarojs/taro';
import httpService from '../utils/httpService';

//连接websocket
export async function getWebsocket(params){
    return httpService.websocket(`/websocket/${params}`,params)
}
//班级列表
export async function getJoinClass(params){
    return httpService.post('/class/joinClass',params)
}
export async function getClassStudent(params){
    return httpService.get(`/class/getClassStudent?workId=${params.workId}&searchKey=${params.searchKey}`,params)
}
//文章列表
export async function getArticleList(params){
    return httpService.post('/home/getArticleList',params)
}
//文章详情
export async function getArticleById(params){
    return httpService.get(`/home/getArticleById?id=${params}`,params)
}

