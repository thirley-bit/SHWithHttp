import api from '@/api/api';
import httpService from '../utils/httpService';
//注册
export async function getRegister(params){
    return httpService.post('/user/register',params)
}
//班级列表
export async function getClassAll(params){
    return httpService.get('/class/getClassAll',params)
}
//获取短信验证码
export async function getVerifyCode(params){
    return httpService.post('/user/sendMessage',params)
}
//登录
export async function getLogin(params){
    return httpService.post('/login/login',params)
}
//退出
export async function getLogout(){
    return httpService.post('/login/logout')
}
//忘记密码
export async function getForgetPass(params){
    return httpService.post('/user/forgetPass',params)
}
//修改密码
export async function getUpdatePassword(params){
    return httpService.post('/user/updatePassword',params)
}
//审核列表
export async function getJoinReviewList(params){
    return httpService.post(`/class/getJoinReviewList`,params)
}
//审核接口（撤销，通过，驳回）
export async function getUpdateJoinReview(params){
    return httpService.post('/class/updateJoinReview',params)
}
//绑定的当前学生
export async function getUpdateDefaultFlag(params){
    return httpService.post(`/class/updateDefaultFlag/${params}`,params)
}
//学生分页查询列表
export async function getStudentList(params){
    return httpService.post('/student/getStudentList',params)
}
//查看学生详情
export async function getStudentById(params){
    return httpService.get(`/student/geStudentById?id=${params}`)
}
//修改学生详情
export async function getUpdateStudent(params){
    return httpService.post(`/student/updateStudent`,params)
}


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