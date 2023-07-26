import api from '@/api/api';

export async function getStudent(){
    let url = 'sign/student'
    let data = api[url]
    return data
}