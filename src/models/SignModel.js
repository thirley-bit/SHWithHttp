import { getStudent } from '../services/SignServices';
import { getStudentsList } from '../services/HomeWorkServices';

const model = {
    namespace:'Sign',
    state:{
        studentsList:[], //教师端学生签到列表
        selectList:[], //选中列表
        student:[], //通讯录家长列表
        messageList:[], //私信列表
        messageDetail:[], //私信详情
    },
    effects:{
        *getStudentsList({ payload }, { call,put }){
            const response = yield call(getStudentsList, payload)
            if(response.code == 1){
                // yield put({
                //     type:'changeStudentsList',
                //     payload:response.data
                // })
                yield [
                    put({
                        type:'changeStudentsList',
                        payload:response.data
                    }),
                    put({
                        type:'changeSelectData',
                        payload:response.data.filter(item => item.checked == true)
                    })
                ]
            }
        },
        *getStudent({payload},{call,put}){
            const response = yield call(getStudent, payload)
            if(response.code == 1){
                yield put({
                    type:'changeStudent',
                    payload:response.data
                })
            }
            return response
        },
        
    },
    reducers:{
        changeStudentsList(state, { payload }){
            return {
                ...state,
                studentsList:payload
            }
        },
        changeStudent(state, { payload }){
            return {
                ...state,
                student:payload
            }
        },
        changeSelectData(state, { payload }){
            return {
                ...state,
                selectList:payload
            }
        }
    }
};
export default model