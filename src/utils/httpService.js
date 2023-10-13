import Taro from "@tarojs/taro";
import apiConfig from "./apiConfig";

//网络请求拦截器
const interceptor = function (chain) {
  const requestParams = chain.requestParams;
  const { method, data, url } = requestParams;
  // let token = Taro.getStorageSync("token"); //拿到本地缓存中存的token
  // let tokenParams = token ? {token} : {}
  requestParams.header = {
    ...requestParams.header,
    // ...tokenParams, //将token添加到头部
  };
  return chain.proceed(requestParams).then((res) => {
    return res;
  });
};
Taro.addInterceptor(interceptor);

//接口结果反馈
const responseTips = (res) => {
  Taro.hideLoading()
      //如果返回错误，原因
      let title = res.data?.error;
      //返回码
      let status = res?.statusCode
      //根据不同返回状态值进行操作
      switch (res?.statusCode) {
        case 200:{
          break;
        }
        case 401:{
          Taro.showToast({
            title: '登录超时,请重新登录',
            icon: "error",
            duration: 2000,
            success:() => {
              setTimeout(function() {
                Taro.navigateTo({url:'/pages/login/login'})
              },2000)
              }
          });
          break;
        }
        case status: {
          Taro.showToast({
            title: title || '',
            icon: "error",
          });
          break;
        }
        default:
          break;
      }
}

const request = async (method, url, params) => {
  //由于post请求时习惯性query参数使用params，body参数使用data，而taro只有data参数，使用contentType作为区分，因此此处需要做一个判断
  // let contentType = params ? 'application/json' : 'application/x-www-form-urlencoded';
  // let contentType = "application/json";
  // if (params) contentType = params?.headers?.contentType || contentType;

  //接口返回前显示加载状态
  Taro.showLoading({
    title:'加载中',
  })
  const option = {
    method,
    isShowLoading: false,
    url: apiConfig.baseUrl + url,
    data: params,
    header: {
      "content-type": "application/json",
      // "token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFsTmFtZSI6IiIsInRlbGVwaG9uZSI6IjE1MDgyMTc4OTg0IiwidXNlclR5cGUiOjAsInVzZXJOYW1lIjoiIiwicmFuZG9tRGF0ZSI6MTY5NTM0NDcyNTAxNiwidXNlcklkIjoiYTdmOTMzYjgxMGYyNDE5Yjg0MjBjMzA5NWM4ZDg4ZDUifQ.DQ_FlCPs7fbFdIHl6VihZcvMWctJ74PGRUiE3A4q8Uk'
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFsTmFtZSI6IiIsInRlbGVwaG9uZSI6IjEyMyIsInVzZXJUeXBlIjoxLCJ1c2VyTmFtZSI6IueUqOaItzEyMyIsInJhbmRvbURhdGUiOjE2OTcxMDIxNzc0NTgsInVzZXJJZCI6IjNlZTgzYjg1NzNiNTRmNWM5OTI4ODYxODAzOWI3Yzg0In0.vs3sWk23WLO2SoL2f5OkPfiSZOc9U5a7chpKGA2TAvU"
     },
    success(res) {
      responseTips(res)
    },
    error(e) {
      console.log("api", "请求接口出现问题", e);
    },
  };
  const resp = await Taro.request(option);
  return resp.data; //根据个人需要返回
};
const uploadFile = async function(url, filePath) {
  const fileOption = {
    url: apiConfig.baseUrl + url,
    filePath: filePath,
    name: 'file',
    header: {
      "content-type": "application/json",
      'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWFsTmFtZSI6IiIsInRlbGVwaG9uZSI6IjEyMyIsInVzZXJUeXBlIjoxLCJ1c2VyTmFtZSI6IueUqOaItzEyMyIsInJhbmRvbURhdGUiOjE2OTcwNzI3OTI5MzUsInVzZXJJZCI6IjNlZTgzYjg1NzNiNTRmNWM5OTI4ODYxODAzOWI3Yzg0In0.VCFe-4fgryhAHwmkOQ4SApBNfBr7x63mefnxG-OW90o'
    },
    success: (res) => {
      responseTips(res)
    },
  }
  const response = await Taro.uploadFile(fileOption)
  return JSON.parse(response.data);
}


export default {
  get: (url, config) => {
    return request("GET", url, config);
  },
  post: (url, config) => {
    return request("POST", url, config);
  },
  put: (url, config) => {
    return request("PUT", url, config);
  },
  delete: (url, config) => {
    return request("DELETE", url, config);
  },
  patch: (url, config) => {
    return request("PATCH", url, config);
  },
  uploadFile: (url, config) => {
    return uploadFile(url, config);
  }
};
