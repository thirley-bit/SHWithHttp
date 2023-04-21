export default defineAppConfig({
  pages: [
    // 'pages/index/index', //主页
    'pages/cobreed/cobreed',
    'pages/cobreed/notice/notice', //主页——班级通知
    'pages/cobreed/notice/homework/homework', //家庭作业
    'pages/cobreed/notice/seatwork/seatwork', //课堂作业
    'pages/cobreed/notice/message/message', //活动通知页面
    'pages/cobreed/notice/message/chooseUser/chooseUser', //活动通知——选择用户页面
    'pages/cobreed/notice/message/history/history', //活动通知——历史记录页面
    'pages/cobreed/addressList/addressList', //主页——通讯录
    'pages/cobreed/signInfo/signInfo', //主页——签到分类入口页面（区分家长和教师身份）
    'pages/cobreed/sign/sign', //签到页面
    'pages/cobreed/moreArticle/moreArticle', //推荐更多

    'pages/classInfo/classInfo', //班级圈
    // 'pages/cobreed/cobreed', //共育
    'pages/my/my', // 我的
  ],
  'permission':{
    'scope.userLocation':{
      'desc':"当前需要获取您的地理位置"
    }
  },
  tabBar:{
    backgroundColor: '#fff',
    list:[{
      'pagePath':"pages/cobreed/cobreed",
      'text': '共育',
      'iconPath':"static/main.jpg",
      'selectedIconPath':"static/main.jpg"
      
      // 'iconPath':"static/image/main.png",
      // 'selectedIconPath':"static/image/main_h_.png"
    },
    {
      'pagePath':"pages/classInfo/classInfo",
      'text': '班级圈',
      'iconPath':"static/main.jpg",
      'selectedIconPath':"static/main.jpg"
      
      // 'iconPath':"static/image/main.png",
      // 'selectedIconPath':"static/image/main_h_.png"
    },{
      'pagePath':"pages/my/my",
      'text': '我的',
      'iconPath':"static/my.jpg",
      'selectedIconPath':"static/my.jpg"
      // 'iconPath':"static/image/my.png",
      // 'selectedIconPath':"static/image/my_h_.png"
    }]
  },
  window: {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#fff',
    'navigationBarTitleText': '诚道吉',
    'navigationBarTextStyle': 'black',
  },
})
