import {
  getTimeSelect,
  getTypeSelect,
  getSubjectList,
  getTypeTitle,
  getSubjectDetail,
  getStudentsList,
  getFeedBackDetail,
  getEditFeedBack,
  getFeedBackList,
} from "../services/HomeWorkServices";

const model = {
  namespace: "HomeWork",
  state: {
    homeWorkArr: [], //作业列表
    subjectTitle: [], //科目选择栏目
    subjectDetail: {}, //作业详情
    submitListAll: [], //学生提交作业列表
    submittedList: [], //学生已提交作业列表
    notSubmittedList: [], //学生未提交作业列表
    feedBack: [], //家长端反馈信息
    feedBackList: [], //教师端反馈信息列表
  },

  effects: {
    *getSubjectList({ payload }, { call, put }) {
      const response = yield call(getSubjectList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeSubjectList",
          payload: response.data,
        });
      }
      return response;
    },
    *getTimeSelect({ payload }, { call, put }) {
      const response = yield call(getTimeSelect, payload);
      if (response.code == 1) {
        yield put({
          type: "changeTimeSelect",
          payload: response.data,
        });
      }
      return response;
    },
    *getTypeTitle({ payload }, { call, put }) {
      const response = yield call(getTypeTitle, payload);
      if (response.code == 1) {
        yield put({
          type: "changeTypeTitle",
          payload: response.data,
        });
      }
      return response;
    },
    *getTypeSelect({ payload }, { call, put }) {
      const response = yield call(getTypeSelect, payload);
      console.log(payload, "payload");
      if (response.code == 1) {
        yield put({
          type: "changeTypeSelect",
          payload: response.data,
        });
      }
      return response;
    },
    *getSubjectDetail({ payload }, { call, put }) {
      const response = yield call(getSubjectDetail, payload);
      if (response.code == 1) {
        yield put({
          type: "changeSubjectDetail",
          payload: response.data,
        });
      }
    },
    *getStudentsList({ payload }, { call, put }) {
      const response = yield call(getStudentsList, payload);
      if (response.code == 1) {
        yield [
          put({
            type: "changeSubjectSubmitList",
            payload: response.data,
          }),
          put({
            type: "changeSubmittedList",
            payload: response.data.filter((item) => item.hasCompleted == 1),
          }),
          put({
            type: "changeNotSubmittedList",
            payload: response.data.filter((item) => item.hasCompleted == 0),
          }),
        ];
      }
    },
    *getFeedBackDetail({ payload }, { call, put }) {
      const response = yield call(getFeedBackDetail, payload);
      if (response.code == 1) {
        yield put({
          type: "changeSubjectFeedBack",
          payload: response.data,
        });
      }
    },
    *getEditFeedBack({ payload }, { call, put }) {
      const response = yield call(getEditFeedBack, payload);
      if (response.code == 1) {
        yield put({
          type: "changeEditFeedBack",
          payload: response.data,
        });
      }
    },
    *getFeedBackList({ payload }, { call, put }) {
      const response = yield call(getFeedBackList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeFeedBackList",
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    changeSubjectList(state, { payload }) {
      return {
        ...state,
        homeWorkArr: payload,
      };
    },
    changeTimeSelect(state, { payload }) {
      return {
        ...state,
        homeWorkArr: payload,
      };
    },
    changeTypeTitle(state, { payload }) {
      return {
        ...state,
        subjectTitle: payload,
      };
    },
    changeTypeSelect(state, { payload }) {
      return {
        ...state,
        homeWorkArr: payload,
      };
    },
    changeSubjectDetail(state, { payload }) {
      return {
        ...state,
        subjectDetail: payload,
      };
    },
    changeSubjectSubmitList(state, { payload }) {
      return {
        ...state,
        submitListAll: payload,
      };
    },
    changeSubmittedList(state, { payload }) {
      return {
        ...state,
        submittedList: payload,
      };
    },
    changeNotSubmittedList(state, { payload }) {
      return {
        ...state,
        notSubmittedList: payload,
      };
    },

    changeSubjectFeedBack(state, { payload }) {
      return {
        ...state,
        feedBack: payload,
      };
    },
    changeEditFeedBack(state, { payload }) {
      return {
        ...state,
        feedBack: payload,
      };
    },
    changeFeedBackList(state, { payload }) {
      return {
        ...state,
        feedBackList: payload,
      };
    },
  },
};
export default model;
