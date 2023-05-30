import api from '@/api/api'

export async function getPhotosList(){
    let url = "photos/list"
    let data = api[url]
    return data
}