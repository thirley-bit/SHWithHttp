let baseUrlPrefix = ''
let baseUrlSocketPrefix = ''
const env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
console.log('编译环境：',process.env.NODE_ENV)
switch (env) {
  case 'development':
    baseUrlPrefix = 'http://192.168.1.157:5002'
    baseUrlSocketPrefix = 'ws://192.168.1.157:5002'
    break
  case 'production':
    baseUrlPrefix = 'http://192.168.1.157:5002'
    baseUrlSocketPrefix = 'ws://192.168.1.157:5002'
    break
}

const api = {
  baseUrl: baseUrlPrefix,
  baseUrlSocket: baseUrlSocketPrefix
//其他相关变量
}

export default api