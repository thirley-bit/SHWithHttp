import { getNoticeList, getNoticeDetail } from '../services/NoticeServices';

const model = {
    namespace:'Notice',
    state:{
        noticeList:[], //消息列表
        noticeDetail:{}, //消息详情
    },
    effects:{
        *getNoticeList({payload},{call,put}){
            const response = yield call(getNoticeList, payload)
            if(response.code == 1){
                yield put({
                    type:'changeNoticeList',
                    payload:response.data
                })
            }
            return response
        },
        *getNoticeDetail({ payload }, {call, put}){
            const response = yield call(getNoticeDetail, payload)
            if(response.code == 1){
                yield put({
                    type:'changeNoticeDetail',
                    payload:response.data
                })
            }
            return response
        }
    },
    reducers:{
        changeNoticeList(state, { payload }){
            return {
                ...state,
                noticeList:payload
            }
        },
        changeNoticeDetail(state, { payload }){
            return {
                ...state,
                noticeDetail:payload
            }
        }
    }
};
export default model