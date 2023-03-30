export default defineAppConfig({
  'pages': [
    'pages/index/index',
    'pages/logs/logs',
    'component/sign/sign'
  ],
  'permission':{
    'scope.userLocation':{
      'desc':"当前需要获取您的地理位置"
    }
  },
  'tabBar':{
    'list':[{
      'pagePath':"pages/index/index",
      'text': '首页',
      'iconPath':"static/main.jpg",
      'selectedIconPath':"static/main.jpg"
    },{
      'pagePath':"pages/logs/logs",
      'text': '我的',
      'iconPath':"static/my.jpg",
      'selectedIconPath':"static/my.jpg"
    }]
  },
  'window': {
    'backgroundTextStyle': 'light',
    'navigationBarBackgroundColor': '#fff',
    'navigationBarTitleText': 'WeChat',
    'navigationBarTextStyle': 'black'
  },
})
