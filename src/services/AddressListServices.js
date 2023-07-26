import api from '@/api/api';

export async function getTeacherList(){
    let url = 'address/teacher/list'
    let data = api[url]
    return data
}
export async function getParentList(){
    let url = 'address/parent/list'
    let data = api[url]
    return data
}
export async function getCheckStudentsList(){
    let url = 'students/list'
    let data = api[url]
    return data
}
export async function getChatGroupList(){
    let url = 'chat/group/list'
    let data = api[url]
    return data
}
export async function getMessageList(){
    let url = 'message/list'
    let data = api[url]
    return data
}
export async function getMessageDetail(){
    let url = 'message/detail'
    let data = api[url]
    return data
}