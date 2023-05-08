export default defineAppConfig({
  pages: [
    // 'pages/index/index', //主页
    'pages/class/class',
    'pages/class/moreModules/moreModules', //主页——班级通知
    'pages/class/homeWork/homeWork', //家庭作业
    'pages/class/homeWork/workDetail/workDetail', //作业详情页面
    'pages/class/message/message', //活动通知页面
    'pages/class/notice/notice', //活动通知页面
    'pages/class/message/chooseUser/chooseUser', //活动通知——选择用户页面
    'pages/class/message/history/history', //活动通知——历史记录页面
    'pages/class/signInfo/signInfo', //主页——签到分类入口页面（区分家长和教师身份）
    'pages/class/sign/sign', //签到页面
    'pages/class/moreArticle/moreArticle', //推荐更多
    'pages/component/article/article',  //文章详情

    'pages/growthFile/growthFile', //班级圈
    'pages/addressList/addressList', //主页——通讯录
    // 'pages/class/class', //共育
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
      'pagePath':"pages/class/class",
      'text': '班级',
      'iconPath':"static/main.jpg",
      'selectedIconPath':"static/main.jpg"
      
      // 'iconPath':"static/image/main.png",
      // 'selectedIconPath':"static/image/main_h_.png"
    },
    {
      'pagePath':"pages/growthFile/growthFile",
      'text': '成长档案',
      'iconPath':"static/main.jpg",
      'selectedIconPath':"static/main.jpg"
      
      // 'iconPath':"static/image/main.png",
      // 'selectedIconPath':"static/image/main_h_.png"
    },
    {
      'pagePath':"pages/addressList/addressList",
      'text': '通讯录',
      'iconPath':"static/main.jpg",
      'selectedIconPath':"static/main.jpg"
      
      // 'iconPath':"static/image/main.png",
      // 'selectedIconPath':"static/image/main_h_.png"
    },
    {
      'pagePath':"pages/my/my",
      'text': '个人中心',
      'iconPath':"static/my.jpg",
      'selectedIconPath':"static/my.jpg"
      // 'iconPath':"static/image/my.png",
      // 'selectedIconPath':"static/image/my_h_.png"
    }]
  },
  window: {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#1F98F0',
    'navigationBarTitleText': '诚道吉科技有限公司',
    'navigationBarTextStyle': 'black',
  },
})
