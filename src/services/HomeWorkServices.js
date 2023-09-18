import api from '@/api/api';
import httpService from '../utils/httpService';

//查询学科科目
export async function getListByType(params){
   return httpService.get(`/dictionary/getListByType?type=${params}`,params)
}
//新建作业
export async function getInsertHomework(params){
   return httpService.post(`/homework/insertHomework`,params)
}
//作业列表
export async function getWorkList(params){
   return httpService.post(`/homework/getWorkList`,params)
}
//作业列表去除红点（取出新消息）
export async function getViewHomework(params){
   return httpService.post(`/homework/viewHomework`,params)
}
//作业详情
export async function getWorkById(params){
   return httpService.get(`/homework/getWorkById?id=${params.workId}&studentId=${params.studentId}`,params)
}
//完成作业
export async function getCompleteWork(params){
   return httpService.post(`/homework/completeWork`,params)
}
//教师端查看完成作业情况列表
export async function getCompleteSituationList(params){
   return httpService.get(`/homework/getCompleteSituationList?workId=${params.workId}`,params)
}
//反馈列表
export async function getReplyList(params){
   return httpService.post(`/homework/getReplyList`,params)
}
//家长端第一次反馈
export async function getFeedbackFirst(params){
   console.log(params,'params')
   return httpService.post(`/homework/feedbackFirst`,params)
}
//反馈回复
export async function getFeedbackReply(params){
   return httpService.post(`/homework/feedbackReply`,params)
}



 export async function getSubjectList(){
    let url = "subject/list"
    let data = api[url]
    return data
 }
 export async function getTimeSelect(params){
    let url = "subject/time/select"
    let data = api[url]
    return data
 }

 export async function getTypeSelect(params){
    let url = "subject/type/select"
    let data = api[url]
    return data
 }

 export async function getSubjectDetail(){
    let url = "subject/detail"
    let data = api[url]
    return data
 }

//  export async function getStudentsList(){
//    let url = "students/list"
//    let data = api[url]
//    return data
//  }
 export async function getFeedBackDetail(){
   let url = "subject/feedback/detail"
   let data = api[url]
   return data
 }
 export async function getEditFeedBack(){
   let url = 'subject/edit/feedback/detail'
   let data = api[url]
   return data
 }

 export async function getFeedBackList(){
   let url = 'subject/feedback/detail/list'
   let data = api[url]
   return data
 }