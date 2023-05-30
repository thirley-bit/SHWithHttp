import { getIdentity, getArticleList } from '../services/ClassServices'

const model = {
    namespace: 'users',
    state: {
      identity:{}, //登录信息
      user:'',
      articleArr:[], //文章列表数据
      bannerList:[{
        id: 1,
        title: "banner1",
        url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      },
      {
        id: 2,
        title: "banner2",
        url:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg'
      },
      {
        id: 3,
        title: "banner3",
        url:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg'
      }], //banner轮播图
      tabList:[{
        id: 0,
        title: "作业",
        code: "homeWork",
        url: "/pages/class/homeWork/homeWork",
      },
      {
        id: 1,
        title: "通知",
        code: "notice",
        url: "/pages/class/notice/notice",
      },
      {
        id: 2,
        title: "安全确认",
        code: "sign",
        url: "/pages/class/sign/sign"
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
        url: "/pages/class/moreModules/moreModules",
      }], //tab路由入口
    },
  
    effects: {
        *getIdentity({ payload }, {call,put}){
            const response = yield call(getIdentity,payload)
            console.log(response)
            if(response.code == 1){
                yield put({
                    type: 'changeIdentity',
                    payload:response.data
                })
            }
        },
        *getUser({ payload }, {call,put}){
          const response = yield call(getIdentity,payload)
          console.log(response)
          if(response.code == 1){
              yield put({
                type:'changeUser',
                payload:response.data.user_code
              })
          }
      },
        *getArticleList({ payload },{ call, put }){
            const response = yield call(getArticleList,payload)
            console.log(response)
            if(response.code == 1){
                yield put({
                    type:'changeArticleArr',
                    payload:response.data.slice(0,6)
                })
            }
        }
    },
  
    reducers: {
      changeIdentity(state, {payload}){
        return{
            ...state,
            identity:payload
        }
      },
      changeUser(state, { payload }){
        return{
          ...state,
          user:payload
        }
      },
      changeArticleArr(state, {payload}){
        return{
            ...state,
            articleArr:payload
        }
    }
    },
   
  };
  export default model