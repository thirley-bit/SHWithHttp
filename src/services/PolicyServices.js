import api from '@/api/api';

export async function getPolicyList(){
    let url = 'policy/list'
    let data = api[url]
    return data
}