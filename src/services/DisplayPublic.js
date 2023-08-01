import api from '@/api/api';

export async function getHobby(params){
    console.log(params,'params')
    let url = 'hobby'
    let data = api[url]
    return data
}

export async function getStrengths(params){
    console.log(params,'params1')
    let url = 'strengths'
    let data = api[url]
    return data
}