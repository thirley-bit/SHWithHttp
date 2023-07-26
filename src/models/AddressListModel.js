import { getTeacherList, getParentList, getMessageList, getMessageDetail } from '../services/AddressListServices';

const model = {
    namespace:'AddressList',
    state:{
        showLeft:'own', //判断布局是否是own
        teacherList:[], //通讯录老师列表
        parentList:[], //通讯录家长列表
        messageList:[], //私信列表
        messageDetail:[], //私信详情
    },
    effects:{
        *getTeacherList({payload},{call,put}){
            const response = yield call(getTeacherList, payload)
            if(response.code == 1){
                yield put({
                    type:'changeTeacherList',
                    payload:response.data
                })
            }
            return response
        },
        *getParentList({payload},{call,put}){
            const response = yield call(getParentList, payload)
            if(response.code == 1){
                yield put({
                    type:'changeParentList',
                    payload:response.data
                })
            }
            return response
        },
        *getMessageList({payload},{call,put}){
            const response = yield call(getMessageList, payload)
            if(response.code == 1){
                yield put({
                    type:'changeMessageList',
                    payload:response.data
                })
            }
            return response
        },
        *getMessageDetail({ payload }, { call, put }){
            const response = yield call(getMessageDetail, payload)
            if(response.code == 1){
                yield put({
                    type:'changeMessageDetail',
                    payload: response.data
                })
            }
        }
    },
    reducers:{
        changeTeacherList(state, { payload }){
            return {
                ...state,
                teacherList:payload
            }
        },
        changeParentList(state, { payload }){
            return {
                ...state,
                parentList:payload
            }
        },
        changeMessageList(state, { payload }){
            return { 
                ...state,
                messageList:payload
            }
        },
        changeMessageDetail(state, { payload }){
            return { 
                ...state,
                messageDetail:payload
            }
        }
    }
};
export default model