import api from '@/api/api';


 export async function getSubjectList(){
    let url = "subject/list"
    let data = api[url]
    return data
 }
 export async function getTimeSelect(params){
    console.log(params,"----params-----")
    let url = "subject/time/select"
    let data = api[url]
    return data
 }
 export async function getTypeTitle(){
    let url = "subject/type/title"
    let data = api[url]
    return data
 }
 export async function getTypeSelect(params){
    console.log(params,"params")
    let url = "subject/type/select"
    let data = api[url]
    return data
 }

 export async function getSubjectDetail(){
    let url = "subject/detail"
    let data = api[url]
    return data
 }

 export async function getStudentsList(){
   let url = "students/list"
   let data = api[url]
   return data
 }
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