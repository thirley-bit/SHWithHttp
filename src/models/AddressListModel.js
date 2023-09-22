import {
  getInsertGroup,
  getUpdateGroup,
  getDeleteGroup,
  getGroupList,
  getGroupUserList,
  getAddressBookList,
  getChatList,
  getUpdateChatList,
  getDeleteChatList,
  getMessageList,
  getBeforeConnect,
  getWebsocket,

  getTeacherList,
  getParentList,
  // getMessageList,
  getMessageDetail,
} from "../services/AddressListServices";

const model = {
  namespace: "AddressList",
  state: {
    showLeft: "own", //判断布局是否是own
    groupList: [], //群聊列表
    groupUserList:[], //群聊家长列表
    addressList: {}, //通讯录列表
    chatList: [], //私信列表


    teacherList: [], //通讯录老师列表
    parentList: [], //通讯录家长列表
    messageList: [], //私信列表
    messageDetail: [], //私信详情
  },
  effects: {
    *getInsertGroup({ payload }, { call }) {
        const response = yield call(getInsertGroup, payload);
        return response;
    },
    *getUpdateGroup({ payload }, { call }) {
        const response = yield call(getUpdateGroup, payload);
        return response;
    },
    *getDeleteGroup({ payload }, { call }) {
      const response = yield call(getDeleteGroup, payload);
      return response;
  },
    *getGroupList({ payload }, { call, put }) {
      const response = yield call(getGroupList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeGroupList",
          payload: response.data,
        });
      }
      return response;
    },
    *getGroupUserList({ payload }, { call, put }) {
      const response = yield call(getGroupUserList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeGroupUserList",
          payload: response.data,
        });
      }
      return response;
    },
    *getAddressBookList({ payload }, { call, put }) {
      const response = yield call(getAddressBookList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeAddressList",
          payload: response.data,
        });
      }
      return response;
    },
    *getChatList({ payload }, { call, put }) {
      const response = yield call(getChatList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeChatList",
          payload: response.data,
        });
      }
      return response;
    },
    *getUpdateChatList({ payload }, { call, put }) {
      const response = yield call(getUpdateChatList, payload);
      return response;
    },
    *getDeleteChatList({ payload }, { call, put }) {
      const response = yield call(getDeleteChatList, payload);
      return response;
    },
    *getMessageList({ payload }, { call, put }) {
      const response = yield call(getMessageList, payload);
      if (response.status == 200) {
        yield put({
          type: "changeMessageList",
          payload: response.data,
        });
      }
      return response;
    },
    *getBeforeConnect({ payload }, { call, put }) {
      const response = yield call(getBeforeConnect, payload);
      return response;
    },
    *getWebsocket({ payload }, { call, put }) {
      const response = yield call(getWebsocket, payload);
      return response;
    },




    *getTeacherList({ payload }, { call, put }) {
      const response = yield call(getTeacherList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeTeacherList",
          payload: response.data,
        });
      }
      return response;
    },
    *getParentList({ payload }, { call, put }) {
      const response = yield call(getParentList, payload);
      if (response.code == 1) {
        yield put({
          type: "changeParentList",
          payload: response.data,
        });
      }
      return response;
    },
    
    *getMessageDetail({ payload }, { call, put }) {
      const response = yield call(getMessageDetail, payload);
      if (response.code == 1) {
        yield put({
          type: "changeMessageDetail",
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    changeGroupList(state, { payload }) {
      return {
        ...state,
        groupList: payload,
      };
    },
    changeGroupUserList(state, { payload }) {
      return {
        ...state,
        groupUserList: payload,
      };
    },
    changeAddressList(state, { payload }) {
      return {
        ...state,
        addressList: payload,
      };
    },
    changeChatList(state, { payload }) {
      return {
       ...state,
        chatList: payload,
      };
    },



    changeTeacherList(state, { payload }) {
      return {
        ...state,
        teacherList: payload,
      };
    },
    changeParentList(state, { payload }) {
      return {
        ...state,
        parentList: payload,
      };
    },
    changeMessageList(state, { payload }) {
      return {
        ...state,
        messageList: payload,
      };
    },
    changeMessageDetail(state, { payload }) {
      return {
        ...state,
        messageDetail: payload,
      };
    },
  },
};
export default model;
