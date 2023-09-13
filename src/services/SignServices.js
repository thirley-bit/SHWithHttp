import api from '@/api/api';
import httpService from '../utils/httpService';

//学生安全确认列表
export async function getSignRecordList(params){
    return httpService.post('/student/getSignRecordList',params)
}
//更新安全确认状态
export async function getUpdateSignRecord(params){
    return httpService.post('/student/updateSignRecord',params)
}
//获取放学时间
export async function getSchoolEndTimeInfo(params){
    return httpService.post('/student/getSchoolEndTimeInfo',params)
}
//修改放学时间
export async function getUpdateSchoolEndTime(params){
    return httpService.post('/student/updateSchoolEndTime',params)
}
export async function getStudent(){
    let url = 'sign/student'
    let data = api[url]
    return data
}