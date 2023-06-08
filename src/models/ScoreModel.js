import { getScoreList, getScoreDetail } from "../services/ScoreServices";

const model = {
  namespace: "Score",
  state: {
    scoreArr: [], //成绩列表数据
    scoreDetailId: "", //成绩详情id
    scoreDetailArr: [], //成绩详情列表
    scoreDetail: {}, //成绩详情
    scoreTitle: [
      {
        title: "学生学号",
        dataIndex: "number",
        type: "number",
        required: true,
      },
      {
        title: "学生姓名",
        dataIndex: "name",
        type: "text",
        required: true,
      },
      {
        title: "语文成绩",
        dataIndex: "Chinese",
        type: "number",
      },
      {
        title: "数学成绩",
        dataIndex: "Math",
        type: "number",
      },
      {
        title: "英语成绩",
        dataIndex: "English",
        type: "number",
      },
      {
        title: "物理成绩",
        dataIndex: "Physics",
        type: "number",
      },
      {
        title: "化学成绩",
        dataIndex: "Chemistry",
        type: "number",
      },
      {
        title: "生物成绩",
        dataIndex: "Biology",
        type: "number",
      },
    ], //成绩列标题
    selectTitle:[], //所选用的列标题
  },

  effects: {
    *getScoreList({ payload }, { call, put }) {
      const response = yield call(getScoreList, payload);
      console.log(response);
      if (response.code == 1) {
        yield put({
          type: "changeScore",
          payload: response.data,
        });
      }
      return response
    },
    *getScoreDetailArr({payload},{call,put}){
      const response = yield call(getScoreDetail, payload);
      if (response.code == 1) {
        yield put({
            type:"changeScoreDetailArr",
            payload:response.data
        })
      }
      return response
    },
    *getScoreDetail({ payload }, { call, put }) {
      const response = yield call(getScoreDetail, payload);
      if (response.code == 1) {
        yield put({
            type: "changeScoreDetail",
            payload: response.data.filter(
              (item) => item.score_detail_id == payload
            )[0],
          })
      }
      return response
    },
  },

  reducers: {
    changeScore(state, { payload }) {
      return {
        ...state,
        scoreArr: payload,
      };
    },
    changeScoreTitle(state, { payload }) {
      return {
        ...state,
        scoreTitle: payload,
      };
    },
    changeSelectTitle(state,{payload}){
        console.log(payload)
        return{
            ...state,
            selectTitle:payload
        }
    },
    changeDetailId(state, { payload }) {
      return {
        ...state,
        scoreDetailId: payload,
      };
    },
    changeScoreDetailArr(state, { payload }) {
      return {
        ...state,
        scoreDetailArr: payload,
      };
    },
    changeScoreDetail(state, { payload }) {
      return {
        ...state,
        scoreDetail: payload,
      };
    },
  },
};
export default model;
