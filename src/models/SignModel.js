import {
  getStudent,
  getSignRecordList,
  getUpdateSignRecord,
  getSchoolEndTimeInfo,
  getUpdateSchoolEndTime,
} from "../services/SignServices";
import { getStudentsList } from "../services/HomeWorkServices";

const model = {
  namespace: "Sign",
  state: {
    signRecordList: [], //签到记录列表
    specialTime: new Date().getHours(),
    schoolEndTimeInfo: "", //放学时间

    studentsList: [], //教师端学生签到列表
    selectList: [], //选中列表
    student: [], //通讯录家长列表
    messageList: [], //私信列表
    messageDetail: [], //私信详情
  },
  effects: {
    *getSignRecordList({ payload }, { call, put }) {
      const response = yield call(getSignRecordList, payload);
      let specialTime = new Date().getHours();
      if (response.status == 200) {
        yield [
          put({
            type: "changeSignRecordList",
            payload: response.data,
          }),
          put({
            type: "changeSelectData",
            payload: response.data.filter(
              (item) =>
                (specialTime < 12 ? item.earlyStatus : item.lateStatus) == 0
            ),
          }),
        ];
      }
      return response;
    },
    *getUpdateSignRecord({ payload }, { call }) {
      const response = yield call(getUpdateSignRecord, payload);
      return response;
    },
    *getSchoolEndTimeInfo({ payload }, { call, put }) {
      const response = yield call(getSchoolEndTimeInfo, payload);
      console.log(response.data.endTime,'school>>>>')
      if (response.status == 200) {
        yield put({
          type: "changeSchoolTime",
          payload: response.data.endTime,
        });
      }
      return response;
    },
    *getUpdateSchoolEndTime({ payload }, { call }) {
      const response = yield call(getUpdateSchoolEndTime, payload);
      return response;
    },




    *getStudentsList({ payload }, { call, put }) {
      const response = yield call(getStudentsList, payload);
      if (response.code == 1) {
        // yield put({
        //     type:'changeStudentsList',
        //     payload:response.data
        // })
        yield [
          put({
            type: "changeStudentsList",
            payload: response.data,
          }),
          // put({
          //     type:'changeSelectData',
          //     payload:response.data.filter(item => item.checked == true)
          // })
        ];
      }
    },
    *getStudent({ payload }, { call, put }) {
      const response = yield call(getStudent, payload);
      if (response.code == 1) {
        yield put({
          type: "changeStudent",
          payload: response.data,
        });
      }
      return response;
    },
  },
  reducers: {
    changeSignRecordList(state, { payload }) {
      return {
        ...state,
        signRecordList: payload,
      };
    },
    changeSelectData(state, { payload }) {
      return {
        ...state,
        selectList: payload,
      };
    },
    changeSchoolTime(state, { payload }) {
      return {
        ...state,
        schoolEndTimeInfo: payload,
      };
    },




    changeStudentsList(state, { payload }) {
      return {
        ...state,
        studentsList: payload,
      };
    },
    changeStudent(state, { payload }) {
      return {
        ...state,
        student: payload,
      };
    },
  },
};
export default model;
