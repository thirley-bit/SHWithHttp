import { getHobby, getStrengths } from '../services/DisplayPublic';

const model = {
    namespace:'DisplayPublic',
    state:{
        hobbyList:[],
        strengthsList:[]
    },
    effects:{
        *getHobby({payload},{call,put}){
            const response = yield call(getHobby, payload)
            if(response.code == 1){
                yield put({
                    type:'changeHobbyList',
                    payload:response.data
                })
            }
            return response
        },
        *getStrengths({payload},{call,put}){
            const response = yield call(getStrengths, payload)
            if(response.code == 1){
                yield put({
                    type:'changeStrengthsList',
                    payload:response.data
                })
            }
            return response
        }
    },
    reducers:{
        changeHobbyList(state, { payload }){
            return {
                ...state,
                hobbyList:payload
            }
        },
        changeStrengthsList(state, { payload }){
            return {
                ...state,
                strengthsList:payload
            }
        },
    }
};
export default model