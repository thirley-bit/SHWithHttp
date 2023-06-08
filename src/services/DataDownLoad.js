import api from '@/api/api';

export async function getSourceList(){
    let url = "source/list"
    let data = api[url]
    return data
}
export async function DeleteServices(){
    let url = "delete"
    let data = api[url]
    return data
}
