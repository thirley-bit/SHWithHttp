import { getSourceList, DeleteServices } from '../services/DataDownLoad'

const model = {
    namespace:'Source',
    state:{
        sourceArr:[]
    },
    effects:{
        *getSourceList({payload}, { call, put }) {
            const response = yield call(getSourceList, payload)
            if(response.code == 1){
                yield put({
                    type:'changeSourceList',
                    payload:response.data
                })
            }
            return response
        },
        *getDelete({ payload }, { call, put }){
            console.log(payload)
            const response = yield call(DeleteServices, payload)
            if(response.code == 1){
                yield put({
                    type:'deleteReducers',
                    payload:response
                });
            }
            return response
        }
    },
    reducers:{
        changeSourceList(state, { payload }){
            return {
                ...state,
                sourceArr:payload
            }
        },
        deleteReducers(state, { payload }){
            return {
                ...state
            }
        }
    }
}
export default model