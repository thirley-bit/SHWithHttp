import api from '@/api/api'

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