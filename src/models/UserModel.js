import {
  getIdentity,
  getParentPassList,
  getChangeUser,
  getParentCheckedList,
  getTeacherPassList,
  getTeacherCheckedList,
  getStudentInfo,
} from "../services/UserServices";

const model = {
  namespace: "users",
  state: {
    identity: {}, //登录信息
    user: "",
    enter: "",
    settingList: [
      {
        id: 0,
        name: "加入新班级",
        avatar:
          "http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg",
      },
      {
        id: 1,
        name: "我的待办",
        avatar:
          "http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg",
      },
      {
        id: 2,
        name: "设置",
        avatar:
          "http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg",
      },
    ],
    parentPassList: [], //家长端已加入班级列表
    parentCheckedList: [], //家长端待审核列表
    teacherPassList: [], //教师端已审核列表
    teacherCheckedList: [], //教师端待审核列表
    studentInfo:{}, //学生详细信息
  },

  effects: {
    *getIdentity({ payload }, { call, put }) {
      const response = yield call(getIdentity, payload);
      if (response.code == 1) {
        yield put({
          type: "changeIdentity",
          payload: response.data,
        });
      }
      return response;
    },
    *getUser({ payload }, { call, put }) {
      const response = yield call(getIdentity, payload);
      if (response.code == 1) {
        yield put({
          type: "userReducer",
          payload: response.data.user,
        });
      }
      return response;
    },

    *getParentPassList({ payload }, { call, put }) {
      const response = yield call(getParentPassList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeParentPassList",
          payload: response.data,
        });
      }
      return response;
    },
    *getChangeUser({ payload }, { call, put }) {
      const response = yield call(getChangeUser, payload);
      if (response.code == 1) {
        yield put({
          type: "changeIdentity",
          payload: response.data,
        });
      }
      return response;
    },
    *getParentCheckedList({ payload }, { call, put }) {
      const response = yield call(getParentCheckedList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeParentCheckedList",
          payload: response.data,
        });
      }
      return response;
    },
    *getTeacherPassList({ payload }, { call, put }) {
      const response = yield call(getTeacherPassList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeTeacherPassList",
          payload: response.data,
        });
      }
      return response;
    },
    *getTeacherCheckedList({ payload }, { call, put }) {
      const response = yield call(getTeacherCheckedList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeTeacherCheckedList",
          payload: response.data,
        });
      }
      return response;
    },
    *getStudentInfo({ payload }, { call, put }) {
      const response = yield call(getStudentInfo, payload);
      if (response.code == 1) {
        yield put({
          type: "changeStudentInfo",
          payload: response.data,
        });
      }
      return response;
    },
  },

  reducers: {
    changeIdentity(state, { payload }) {
      return {
        ...state,
        identity: payload,
      };
    },
    userReducer(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
    changeEnter(state, { payload }) {
      return {
        ...state,
        enter: payload,
      };
    },
    changeParentPassList(state, { payload }) {
      return {
        ...state,
        parentPassList: payload,
      };
    },
    changeParentCheckedList(state, { payload }) {
      return {
        ...state,
        parentCheckedList: payload,
      };
    },
    changeTeacherPassList(state, { payload }) {
      return {
        ...state,
        teacherPassList: payload,
      };
    },
    changeTeacherCheckedList(state, { payload }) {
      return {
        ...state,
        teacherCheckedList: payload,
      };
    },
    changeStudentInfo(state, { payload }) {
      return {
        ...state,
        studentInfo: payload,
      };
    },
  },
};
export default model;
