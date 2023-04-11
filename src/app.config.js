export default defineAppConfig({
  pages: [
    'pages/index/index', //主页
    'pages/notice/notice', //主页——班级通知
    'pages/homework/homework', //家庭作业
    'pages/seatwork/seatwork', //课堂作业
    'pages/message/message', //活动通知页面
    'pages/addressList/addressList', //主页——通讯录
    'pages/signInfo/signInfo', //主页——签到分类入口页面（区分家长和教师身份）
    'pages/sign/sign', //签到页面

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
      'pagePath':"pages/index/index",
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
