module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {},
  plugins: [
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
],
}
