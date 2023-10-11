import api from '@/api/api'
import httpService from '../utils/httpService';

//新建相册
export async function getInsertAlbum(params){
    return httpService.post('/album/insertAlbum',params)
}
//相册上传图片
export async function getInsertAlbumImage(params){
    return httpService.post('/album/insertAlbumImage',params)
}
//获取相册列表
export async function getAlbumList(params){
    return httpService.post(`/album/getAlbumList/${params}`,params)
}
//获取相册图片列表
export async function getAlbumImageList(params){
    return httpService.get(`/album/getAlbumImageList?id=${params}`,params)
}
export async function getPhotosList(){
    let url = "photos/list"
    let data = api[url]
    return data
}
export async function getPhotoDetail(){
    let url = "photos/detail"
    let data = api[url]
    return data
}