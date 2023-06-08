import api from '@/api/api';

export async function getChannelList(){
    let url = 'channel/list'
    let data = api[url]
    return data
}