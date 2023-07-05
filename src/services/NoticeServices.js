import api from '@/api/api';

export async function getNoticeList(){
    let url = 'notice/list'
    let data = api[url]
    return data
}
export async function getNoticeDetail(){
    let url = 'notice/detail'
    let data = api[url]
    return data
}