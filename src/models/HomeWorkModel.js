import {
  getListByType,
  getTypeSelect,
  getInsertHomework,
  getUpdateHomework,
  getWorkList,
  getWorkById,
  getViewHomework,
  getCompleteWork,
  getCompleteSituationList,
  getReplyList,
  getFeedbackFirst,
  getFeedbackReply,

  getSubjectList,
  getSubjectDetail,
  getStudentsList,
  getFeedBackDetail,
  getEditFeedBack,
  getFeedBackList,
} from "../services/HomeWorkServices";

const model = {
  namespace: "HomeWork",
  state: {
    workList:[], //作业列表
    subjectType: [], //科目选择栏目
    subjectDetail: {}, //作业详情
    completeSituationList:[], //作业提交列表
    replyList:[], //反馈列表

    feedBackList: [], //教师端反馈信息列表
    
    homeWorkArr: [], //作业列表
    studentsList: [], //学生列表
    
    submitListAll: [], //学生提交作业列表
    feedBack: [], //家长端反馈信息
  },

  effects: {
    *getListByType({ payload }, { call, put }) {
      const response = yield call(getListByType, payload);
      let all = [{
        id:0,
        name:'全部',
        value:'1000',
      }]
      let data = all.concat(response.data)
      if(response.status == 200){
        yield put({
          type: "changeSubjectType",
          payload: data,
        });
      }
      return response;
    },
    
    *getInsertHomework({ payload }, { call }) {
      const response = yield call(getInsertHomework, payload);
      return response;
    },
    *getUpdateHomework({ payload }, { call }) {
      const response = yield call(getUpdateHomework, payload);
      return response;
    },
    *getWorkList({ payload }, { call, put }) {
      const response = yield call(getWorkList, payload);
      if(response.status == 200){
        yield put({
          type: "changeWorkList",
          payload: response.data,
        });
      }
      return response;
    },
    *getViewHomework({ payload }, { call }) {
      const response = yield call(getViewHomework, payload);
      return response;
    },
    *getWorkById({ payload }, { call, put }) {
      const response = yield call(getWorkById, payload);
      if (response.status == 200) {
        yield put({
          type: "changeSubjectDetail",
          payload: response.data,
        });
      }
      return response;
    },
    *getCompleteWork({ payload }, { call }) {
      const response = yield call(getCompleteWork, payload);
      return response;
    }, 
    *getCompleteSituationList({ payload }, { call }) {
      const response = yield call(getCompleteSituationList, payload);
      return response;
    },
    *getReplyList({ payload }, { call, put }) {
      const response = yield call(getReplyList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeReplyList",
          payload: response.data,
        });
      }
      return response;
    },
    *getFeedbackFirst({ payload }, { call }) {
      const response = yield call(getFeedbackFirst, payload);
      return response;
    },
    *getFeedbackReply({ payload }, { call }) {
      const response = yield call(getFeedbackReply, payload);
      return response;
    },





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
    
    *getSubjectDetail({ payload }, { call }) {
      const response = yield call(getSubjectDetail, payload);
      if (response.code == 1) {
        // yield put({
        //   type: "changeSubjectDetail",
        //   payload: response.data,
        // });
      }
      return response;
    },
    *getStudentsList({ payload }, { call, put }) {
      const response = yield call(getStudentsList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeStudentsList",
          payload: response.data,
        });
      }
      return response;
    },
    *getFeedBackDetail({ payload }, { call, put }) {
      const response = yield call(getFeedBackDetail, payload);
      if (response.code == 1) {
        yield put({
          type: "changeSubjectFeedBack",
          payload: response.data,
        });
      }
      return response;
    },
    *getEditFeedBack({ payload }, { call, put }) {
      const response = yield call(getEditFeedBack, payload);
      if (response.code == 1) {
        yield put({
          type: "changeEditFeedBack",
          payload: response.data,
        });
      }
      return response;
    },
    *getFeedBackList({ payload }, { call, put }) {
      const response = yield call(getFeedBackList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeFeedBackList",
          payload: response.data,
        });
      }
      return response;
    },
  },
  reducers: {
    changeSubjectType(state, { payload }) {
      return {
        ...state,
        subjectType: payload,
      };
    },
   
    changeWorkList(state, { payload }) {
      return {
        ...state,
        workList: payload,
      };
    },
    changeReplyList(state, { payload }) {
      return {
        ...state,
        replyList: payload,
      };
    },





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
