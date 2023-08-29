import { getArticleList, getNews, getAAA } from "../services/ClassServices";

const model = {
  namespace: "Class",
  state: {
    articleArr: [], //文章列表数据
    news: [],
    AAA: [],
    bannerList: [
      {
        id: 1,
        title: "banner1",
        url: "http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg",
      },
      {
        id: 2,
        title: "banner2",
        url: "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        id: 3,
        title: "banner3",
        url: "http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg",
      },
    ], //banner轮播图
    tabList: [
      {
        id: 0,
        title: "作业",
        code: "homeWork",
        url: "/pages/class/HomeWork/HomeWork",
      },
      {
        id: 1,
        title: "通知",
        code: "notice",
        url: "/pages/class/Notice/Notice",
      },
      {
        id: 2,
        title: "安全确认",
        code: "sign",
        url: "/pages/class/Sign/Sign",
      },
      {
        id: 3,
        title: "私信",
        code: "message",
        url: "/pages/addressList/message/message",
      },
      {
        id: 4,
        title: "更多",
        code: "moreModules",
        url: "/pages/class/MoreModules/MoreModules",
      },
    ], //tab路由入口
  },

  effects: {
    *getAAA({ payload }, { call, put }) {
      const response = yield call(getAAA, payload);
      console.log(response, "responese111");
      // if (response.statusCode == 200) {
        yield put({
          type: "changeAAA",
          payload: response,
        });
      // }
      return response;
    },
    *getNews({ payload }, { call, put }) {
      const response = yield call(getNews, payload);
      console.log(response, "responese");
      if (response.statusCode == 200) {
        yield put({
          type: "changeNews",
          payload: response.data,
        });
      }
      return response;
    },
    *getArticleList({ payload }, { call, put }) {
      const response = yield call(getArticleList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeArticleArr",
          payload: response.data.slice(0, 6),
        });
      }
      return response;
    },
  },

  reducers: {
    changeAAA(state, { payload }) {
      return {
        ...state,
        AAA: payload,
      };
    },
    changeNews(state, { payload }) {
      return {
        ...state,
        news: payload,
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
