import { getPolicyList } from '../services/PolicyServices';

const model = {
    namespace:'Policy',
    state:{
        policyArr:[]
    },
    effects:{
        *getPolicyList({payload}, { call, put }) {
            const response = yield call(getPolicyList, payload)
            if(response.code == 1){
                yield put({
                    type:'changePolicyList',
                    payload:response.data
                })
            }
            return response
        },
    },
    reducers:{
        changePolicyList(state, { payload }){
            return {
                ...state,
                policyArr:payload
            }
        },        
    }
}
export default model