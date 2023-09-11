import api from '@/api/api';
import httpService from '../utils/httpService';

export async function getListByType(params){
   return httpService.get(`/dictionary/getListByType?type=${params}`,params)
}
export async function getWorkList(params){
   return httpService.post(`/homework/getWorkList`,params)
}
export async function getViewHomework(params){
   return httpService.post(`/homework/viewHomework`,params)
}
export async function getWorkById(params){
   return httpService.get(`/homework/getWorkById?id=${params.workId}&studentId=${params.studentId}`,params)
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