import api from '@/api/api';

export async function getIdentity(){
    // return 
    let url = "identity"
    let data = api[url]
    return data
}
export async function getParentPassList(){
    let url = "parent/user/pass/list"
    let data = api[url]
    return data
}
export async function getChangeUser(){
    let url = "change/user"
    let data = api[url]
    return data
}
export async function getParentCheckedList(){
    let url = "parent/user/checked/list"
    let data = api[url]
    return data
}
export async function getTeacherPassList(){
    let url = "teacher/user/pass/list"
    let data = api[url]
    return data
}
export async function getTeacherCheckedList(){
    let url = "teacher/user/checked/list"
    let data = api[url]
    return data
}
export async function getStudentInfo(){
    let url = 'growthFile/info'
    let data = api[url]
    return data
}