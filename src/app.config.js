export default defineAppConfig({
  pages: [
    'pages/login/login', //登录页面
    'pages/login/Register/Register', //注册页面
    'pages/login/ForgetPass/ForgetPass', //忘记密码页面
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
    'pages/GrowthFile/Info/Info', //个人信息页面
    'pages/GrowthFile/History/History', //个人成长史页面
    'pages/GrowthFile/History/Rewards/Rewards', //个人成长史——奖励页面
    'pages/GrowthFile/History/CheckIn/CheckIn', //个人成长史——考勤页面
    'pages/GrowthFile/History/CheckIn/Request/Request', //个人成长史——考勤页面——补卡申请页面
    'pages/GrowthFile/Quality/Quality', //综合素质评价页面
    'pages/GrowthFile/Quality/Sport/Sport', //综合素质评价页面

    //通讯录
    'pages/addressList/addressList', //通讯录
    'pages/addressList/AddFamily/AddFamily', //通讯录——添加家人
    'pages/addressList/groupChat/groupChat', //通讯录——群聊
    'pages/addressList/message/message', //主页——私信列表页面
    'pages/addressList/message/MessageDetail/MessageDetail', //主页——私信详情页面
    'pages/addressList/Check/Check', //通讯录——审核

    //个人中心
    'pages/my/my', // 我的
    'pages/my/ChildMsg/ChildMsg', //孩子信息页面
    'pages/my/CreateClass/CreateClass', // 创建新班级
    'pages/my/AddClass/AddClass', // 加入新班级
    'pages/my/WaitTodo/WaitTodo', // 我的待办
    'pages/my/Review/Review', // 年终总结
    'pages/my/Setting/Setting', // 设置
    'pages/my/Setting/ChangePassword/ChangePassword', // 设置-密码修改
    'pages/my/Setting/ChangeUser/ChangeUser', // 设置-切换账户
    'pages/my/Setting/ChangeUser/AddUser/AddUser', // 设置-添加账户
    'pages/my/Setting/FeedBack/FeedBack', // 设置-意见反馈
    

    //公共页面
    'pages/component/Article/Article',  //文章详情
    'pages/component/detail/detail', //通知或作业详情
    'pages/component/publish/publish', //发布页面
    'pages/component/publish/SendUserList/SendUserList', //选择的发送班级人员列表
    'pages/component/JoinedClass/JoinedClass', //切换班级/加入变更审核页面
  ],
  'permission':{
    'scope.userLocation':{
      'desc':"当前需要获取您的地理位置"
    }
  },
  tabBar:{
    backgroundColor: '#fff',
    selectedColor:'#00a3ff',
    color:'#b6b6b6',
    list:[{
      'pagePath':"pages/class/class",
      'text': '首页',
      'iconPath':"static/class.png",
      'selectedIconPath':"static/class-active.png"
    },
    {
      'pagePath':"pages/GrowthFile/GrowthFile",
      'text': '成长档案',
      'iconPath':"static/growth.png",
      'selectedIconPath':"static/growth-active.png"
    },
    {
      'pagePath':"pages/addressList/addressList",
      'text': '通讯录',
      'iconPath':"static/address.png",
      'selectedIconPath':"static/address-active.png"
    },
    {
      'pagePath':"pages/my/my",
      'text': '我的',
      'iconPath':"static/my.png",
      'selectedIconPath':"static/my-active.png"
    }]
  },
  window: {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#fff',
    'navigationBarTitleText': '诚道吉科技有限公司',
    'navigationBarTextStyle': 'black',
    'navigationStyle': "custom",
    // 'enablePullDownRefresh': false
  },
})
