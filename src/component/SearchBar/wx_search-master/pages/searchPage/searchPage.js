// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        list: [{
                routingCode: '1111',
                routingName: '上海-北京',
                tonPrice: 200,
                cubePrice: 200,
            },
            {
                routingCode: '2222',
                routingName: '上海-苏州',
                tonPrice: 200,
                cubePrice: 200,
            },
            {
                routingCode: '3333',
                routingName: '无锡-苏州',
                tonPrice: 500,
                cubePrice: 151,
            },
            {
                routingCode: '44444',
                routingName: '海南-扬州',
                tonPrice: 200,
                cubePrice: 200,
            },
        ],
    },

    searchList(e) {
        this.setData({
            list: e.detail.list
        })
    },
    change(e) {
        console.log('输入的值改变了', e.detail.value);
    }
})