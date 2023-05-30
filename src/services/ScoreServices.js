import api from '@/api/api';

export async function getScoreList(){
    let url = 'score/list'
    let data = api[url]
    return data
  }

export async function getScoreDetail(){
  let url = 'score/detail/data'
  let data = api[url]
  return data
}