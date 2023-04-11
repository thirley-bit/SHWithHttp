const path = require('path')
const config = {
  projectName: 'SH',
  date: '2023-3-29',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    // '@tarojs/plugin-sass'
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain, webpack) {
      chain.merge({
        resolve: {
          alias: {
            "@app": path.resolve(__dirname, "../src")
          }
        }
      })
    },
    plugins:[
      [
        "@tarojs/plugin-mock",
        {   //Mock 插件可以接受如下参数
            host: "localhost",  //	设置数据 mock 服务地址，默认为 127.0.0.1
            port: 9999, //设置数据 mock 服务端口，默认为 9527
            // mocks: { //设置数据 mock 接口
            //     "GET /api/user/list": {
            //         statusCode: 200,
            //         message: "success",
            //         data: [
            //             {
            //                 id: 1,
            //                 name: "zs",
            //                 age: "23",
            //                 job: "前端工程师",
            //             },
            //             {
            //                 id: 2,
            //                 name: "ww",
            //                 age: "24",
            //                 job: "后端工程师",
            //             },
            //         ],
            //     },
            // },
        },
    ],
    ]
  },
  
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
