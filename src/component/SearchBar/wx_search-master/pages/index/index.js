// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {},
    goSearch() {
        wx.navigateTo({
            url: '/pages/searchPage/searchPage',
        })
    },
    goStaff() {
        wx.navigateTo({
            url: '/pages/staffPage/staffPage',
        })
    }
})