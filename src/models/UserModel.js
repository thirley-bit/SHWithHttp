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
} from "../services/UserServices";

const model = {
  namespace: "users",
  state: {
    studentId:'', //家长绑定的学生
    user:'', //登录用户的类型，0：家长；1：老师
    userId:'', //登录用户的Id
    identity:{}, //登录用户信息
    enter: "",
    classList: [], //班级列表
    pageSize: 10,
    checkedList: [], //审核列表
    bindStudent:{}, //家长默认绑定学生
    uploadFile:{}, //文件上传的信息
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
    *getStudentById({ payload }, { call }) {
      const response = yield call(getStudentById, payload);
      return response;
    },
    *getUpdateStudent({ payload }, { call }) {
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
  },
};
export default model;
