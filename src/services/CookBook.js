import api from '@/api/api';

export async function getCookList(){
    let url = 'cook/list'
    let data = api[url]
    return data 
}