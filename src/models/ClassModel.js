import {
  getWebsocket,
  getJoinClass,
  getClassStudent,
  getArticleList,
  getArticleById,
} from "../services/ClassServices";

const model = {
  namespace: "Class",
  state: {
    classStudent: [], //班级学生列表
    articleArr: [], //文章列表数据
    articleDetail: {}, //文章详情
    chooseIdList: [], //选择的人员id
    chooseName: '', //选择的人员名称
    bannerList: [
      {
        id: 1,
        title: "banner1",
        url: "http://123.57.149.51/upload/upload_img/20230915/3c59fd23f513578756cd9d2f3fece756.png",
      },
      {
        id: 2,
        title: "banner2",
        url: "http://123.57.149.51/upload/upload_img/20230915/054b0d1c6c4c599c43fc8105f5c10c93.png",
      },
      {
        id: 3,
        title: "banner3",
        url: "http://123.57.149.51/upload/upload_img/20230918/d41718cfbeab3bf6a04b77a9fea38dbf.png",
      },
    ], //banner轮播图
  },

  effects: {
    *getWebsocket({ payload }, { call }) {
      const responese = yield call(getWebsocket, payload);
      return responese;
    },
    *getJoinClass({ payload }, { call }) {
      const responese = yield call(getJoinClass, payload);
      return responese;
    },
    *getClassStudent({ payload }, { call, put }) {
      const response = yield call(getClassStudent, payload);
      if (response.status == 200) {
        yield put({
          type: "changeClassStudent",
          payload: response.data,
        });
      }
      return response;
    },
    *getArticleList({ payload }, { call, put }) {
      const response = yield call(getArticleList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeArticleArr",
          payload: response.data,
        });
      }
      return response;
    },
    *getArticleById({ payload }, { call, put }) {
      const response = yield call(getArticleById, payload);
      if (response.status == 200) {
        yield put({
          type: "changeArticleById",
          payload: response.data,
        });
      }
      return response;
    },
  },

  reducers: {
    changeClassStudent(state, { payload }) {
      return {
        ...state,
        classStudent: payload,
      };
    },
    changeChooseIdList(state, { payload }) {
      return {
       ...state,
        chooseIdList: payload,
      };
    },
    changeChooseName(state, { payload }) {
      return {
       ...state,
        chooseName: payload,
      };
    },
    changeArticleById(state, { payload }) {
      return {
        ...state,
        articleDetail: payload,
      };
    },
    changeArticleArr(state, { payload }) {
      return {
        ...state,
        articleArr: payload,
      };
    },
  },
};
export default model;
