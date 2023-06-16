export default defineAppConfig({
  pages: [
    // 主页
    'pages/class/class', //主页
    'pages/class/HomeWork/HomeWork', //主页——家庭作业
    'pages/class/HomeWork/WorkDetail/WorkDetail', //作业详情页面
    'pages/class/Notice/Notice', //主页——通知页面
    'pages/class/Notice/NoticeDetail/NoticeDetail',  //通知详情页面
    'pages/class/Sign/Sign', //主页——签到页面
    // 'pages/class/message/history/history', //活动通知——历史记录页面
    // 'pages/class/signInfo/signInfo', //主页——签到分类入口页面（区分家长和教师身份）
    'pages/class/MoreArticle/MoreArticle', //主页——推荐更多
    'pages/class/MoreModules/MoreModules', //主页——更多应用
    'pages/class/Score/Score', //主页——成绩
    'pages/class/Score/PublishScore/PublishScore', //主页——成绩发布
    'pages/class/Score/ScoreTitle/ScoreTitle', //主页——成绩发布
    'pages/class/Score/ScoreDetail/ScoreDetail', //主页——成绩发布
    'pages/class/DataDownLoad/DataDownLoad', //资料下载
    'pages/class/ExamChannel/ExamChannel', //参赛通道
    'pages/class/Policy/Policy', //优惠政策
    'pages/class/Photos/Photos', //主页——相册
    'pages/class/Photos/NewPhotosAlbum/NewPhotosAlbum', //新建相册
    'pages/class/Photos/PhotosDetail/PhotosDetail', //相册详情
    'pages/class/Photos/PublishPhotos/PublishPhotos', //上传照片
    'pages/class/Photos/ChoosePhotosAlbum/ChoosePhotosAlbum', //选择相册
    'pages/class/CookBook/CookBook', //主页——校园食谱
    'pages/class/DisplayPublic/DisplayPublic', //展示墙


    //成长档案
    'pages/GrowthFile/GrowthFile', //成长档案

    //通讯录
    'pages/addressList/addressList', //通讯录
    'pages/addressList/AddFamily/AddFamily', //通讯录——添加家人
    'pages/addressList/groupChat/groupChat', //通讯录——群聊
    'pages/addressList/message/message', //主页——私信列表页面
    'pages/addressList/message/MessageDetail/MessageDetail', //主页——私信详情页面
    'pages/addressList/check/check', //通讯录——审核

    //个人中心
    'pages/my/my', // 我的
    'pages/my/ChildMsg/ChildMsg', //孩子信息页面

    //公共页面
    'pages/component/Article/Article',  //文章详情
    'pages/component/detail/detail', //通知或作业详情
    'pages/component/publish/publish', //发布页面
    'pages/component/JoinedClass/JoinedClass', //切换班级/加入变更审核页面
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
      'pagePath':"pages/GrowthFile/GrowthFile",
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
})
