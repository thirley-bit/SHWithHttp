import { getChannelList } from '../services/ExamChannelServices';


const model = {
    namespace:'ExamChannel',
    state:{
        channelArr:[]
    },
    effects:{
        *getChannelList({payload}, { call, put }) {
            const response = yield call(getChannelList, payload)
            if(response.code == 1){
                yield put({
                    type:'changeChannelList',
                    payload:response.data
                })
            }
            return response
        },
    },
    reducers:{
        changeChannelList(state, { payload }){
            return {
                ...state,
                channelArr:payload
            }
        },        
    }
}
export default model