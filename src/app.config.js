export default defineAppConfig({
  pages: [
    // 主页
    'pages/class/class', //主页
    'pages/class/homeWork/homeWork', //主页——家庭作业
    'pages/class/homeWork/workDetail/workDetail', //作业详情页面
    'pages/class/notice/notice', //主页——通知页面
    'pages/class/notice/noticeDetail/noticeDetail',  //通知详情页面
    'pages/class/sign/sign', //主页——签到页面
    // 'pages/class/message/history/history', //活动通知——历史记录页面
    'pages/class/signInfo/signInfo', //主页——签到分类入口页面（区分家长和教师身份）
    'pages/class/moreArticle/moreArticle', //主页——推荐更多
    'pages/class/moreModules/moreModules', //主页——更多应用
    'pages/class/Score/Score', //主页——成绩
    'pages/class/Score/PublishScore/PublishScore', //主页——成绩发布
    'pages/class/Score/ScoreTitle/ScoreTitle', //主页——成绩发布
    'pages/class/Score/ScoreDetail/ScoreDetail', //主页——成绩发布
    'pages/class/Photos/Photos', //主页——相册
    'pages/class/Photos/NewPhotos/NewPhotos', //新建相册
    'pages/class/Photos/PhotosDetail/PhotosDetail', //相册详情
    'pages/class/Photos/PublishPhotos/PublishPhotos', //上传照片
    'pages/class/cookBook/cookBook', //主页——校园食谱


    //成长档案
    'pages/growthFile/growthFile', //成长档案

    //通讯录
    'pages/addressList/addressList', //通讯录
    'pages/addressList/addFamily/addFamily', //通讯录——添加家人
    'pages/addressList/groupChat/groupChat', //通讯录——群聊
    'pages/addressList/message/message', //主页——私信列表页面
    'pages/addressList/message/messageDetail/messageDetail', //主页——私信详情页面
    'pages/addressList/check/check', //通讯录——审核

    //个人中心
    'pages/my/my', // 我的

    //公共页面
    'pages/component/article/article',  //文章详情
    'pages/component/detail/detail', //通知或作业详情
    'pages/component/publish/publish', //发布页面
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
      'iconPath':"static/main.jpg",
      'selectedIconPath':"static/main.jpg"
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
  // usingComponents: {
  //   "taro-ui": "/node_modules/taro-ui/dist/index.js"
  // }
})
