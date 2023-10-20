import {
  getRegister,
  getVerifyCode,
  getClassAll,
  getLogin,
  getForgetPass,
  getLogout,
  getUpdatePassword,
  getJoinReviewList,
  getUpdateJoinReview,
  getUpdateDefaultFlag,
  getStudentList,
  getStudentById,
  getUpdateStudent,
  getUploadFile,



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
    // identity: { telephone: "15082178984" }, //登录信息
    // userId:'a7f933b810f2419b8420c3095c8d88d5',
    // user:0,
    // studentId: "11",
    // identity: { telephone: "15680595767" }, //登录信息
    // userId:'c57dae13ea244eb292f9d5e441200cf2',
    // user:0,
    // studentId: "22",
    studentId:'',
    user:'',
    userId:'',
    identity:{},
    // user:1,
    // userId: "3ee83b8573b54f5c99288618039b7c84", //登录人id
    // identity:{telephone:'123',classId:'1'},
    enter: "",
    classList: [],
    pageSize: 10,
    checkedList: [], //审核列表
    bindStudent:{}, //家长默认绑定学生
    uploadFile:{},



    parentPassList: [], //家长端已加入班级列表
    parentCheckedList: [], //家长端待审核列表
    teacherPassList: [], //教师端已审核列表
    teacherCheckedList: [], //教师端待审核列表
    studentInfo: {}, //学生详细信息
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
    studentDetail:[
      {
        key: "studentName",
        title: "学生姓名",
        type: "text",
        disabled: true,
      },
      {
        key: "studentNo",
        title: "学生学号",
        type: "number",
        disabled: true,
      }, 
      {
        key: "className",
        title: "所属班级",
        type: "text",
        disabled: true,
      },
      {
        key: "classId",
        title: "班级Id",
        type: "text",
        disabled: true,
      },
      {
        key: "birthday",
        title: "出生年月",
        type: "number",
        placeholder:'请输入出生年月'
      },
      {
        key: "address",
        title: "家庭住址",
        type: "text",
        placeholder:'请输入家庭住址'
      },
      // {
      //   key: "avatar",
      //   title: "头像",
      //   type: "text",
      //   placeholder:'请上传头像',
      //   url: "/pages/class/DisplayPublic/DisplayPublic",
      // },
    ]
  },

  effects: {
    *getRegister({ payload }, { call }) {
      const response = yield call(getRegister, payload);
      return response;
    },
    *getVerifyCode({ payload }, { call }) {
      const response = yield call(getVerifyCode, payload);
      return response;
    },
    *getClassAll({ payload }, { call, put }) {
      const response = yield call(getClassAll, payload);
      if (response.status == 200) {
        yield put({
          type: "changeClassList",
          payload: response.data,
        });
      }
      return response;
    },

    *getLogin({ payload }, { call, put }) {
      const response = yield call(getLogin, payload);
      if (response.status == 200) {
        yield [
          put({
            type: "userReducer",
            payload: response.data.userType,
          }),
          put({
            type: "userIdReducer",
            payload: response.data.id,
          }),
          put({
            type: "changeIdentity",
            payload: response.data,
          }),
        ];
      }
      return response;
    },
    *getLogout({ payload }, { call }) {
      const response = yield call(getLogout, payload);
      return response;
    },
    *getForgetPass({ payload }, { call }) {
      const response = yield call(getForgetPass, payload);
      return response;
    },
    *getUpdatePassword({ payload }, { call }) {
      const response = yield call(getUpdatePassword, payload);
      return response;
    },
    *getJoinReviewList({ payload }, { call, put }) {
      const response = yield call(getJoinReviewList, payload);
      let DefaultStudent = response.data?.filter((item) => item?.defaultFlag == 1)[0]
      if (response.status == 200) {
        yield [put({
            type: "changeCheckedList",
            payload: response.data,
          }),
          put({
            type: "changeBindStudent",
            payload: DefaultStudent,
          }),
          put({
            type: "changeStudentId",
            payload: DefaultStudent?.studentId,
          })
        ];
      }
      return response;
    },
    *getUpdateJoinReview({ payload }, { call }) {
      const response = yield call(getUpdateJoinReview, payload);
      return response;
    },
    *getUpdateDefaultFlag({ payload }, { call }) {
      const response = yield call(getUpdateDefaultFlag, payload);
      return response;
    },
    *getStudentList({ payload }, { call, put }) {
      const response = yield call(getStudentList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeStudentList",
          payload: response.data,
        });
      }
      return response;
    },
    *getStudentById({ payload }, { call, put }) {
      const response = yield call(getStudentById, payload);
      return response;
    },
    *getUpdateStudent({ payload }, { call, put }) {
      const response = yield call(getUpdateStudent, payload);
      return response;
    },
    *getUploadFile({ payload }, { call, put }) {
      const response = yield call(getUploadFile, payload);
      if (response.status == 200) {
        yield put({
          type: "changeUploadFile",
          payload: response.data,
        });
      }
      return response;
    },









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
      // if (response.code == 1) {
      //   yield put({
      //     type: "userReducer",
      //     payload: response.data.user,
      //   });
      // }
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
      // if (response.code == 1) {
      //   yield put({
      //     type: "changeIdentity",
      //     payload: response.data,
      //   });
      // }
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
    changeClassList(state, { payload }) {
      return {
        ...state,
        classList: payload,
      };
    },
    userReducer(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
    userIdReducer(state, { payload }) {
      return {
        ...state,
        userId: payload,
      };
    },
    changeIdentity(state, { payload }) {
      return {
        ...state,
        identity: payload,
      };
    },
    changeCheckedList(state, { payload }) {
      return {
        ...state,
        checkedList: payload,
      };
    },
    changeBindStudent(state, { payload }) {
      return {
        ...state,
        bindStudent: payload,
      };
    },
    changeStudentId(state, { payload }) {
      return {
        ...state,
        studentId: payload,
      };
    },
    changeStudentList(state, { payload }) {
      return {
        ...state,
        studentList: payload,
      };
    },
    changeUploadFile(state, { payload }) {
      return {
        ...state,
        uploadFile: payload,
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
