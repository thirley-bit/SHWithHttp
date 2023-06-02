import { getCookList } from '../services/CookBook';

const model = {
    namespace:'CookBook',
    state:{
        cookArr:[],
    },
    effects:{
        *getCookList({payload},{call,put}){
            const response = yield call(getCookList, payload)
            if(response.code == 1){
                yield put({
                    type:'changeCookList',
                    payload:response.data
                })
            }
        }
    },
    reducers:{
        changeCookList(state, { payload }){
            return {
                ...state,
                cookArr:payload
            }
        }
    }
};
export default model