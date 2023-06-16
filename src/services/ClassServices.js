import api from '@/api/api';

export async function getArticleList(){
    let url = "article/list"
    let data = api[url]
    return data
}