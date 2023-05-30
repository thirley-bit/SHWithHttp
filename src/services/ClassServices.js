import api from '@/api/api';

export async function getIdentity(){
    // return 
    let url = "identity"
    let data = api[url]
    return data
}
export async function getArticleList(){
    let url = "article/list"
    let data = api[url]
    return data
}