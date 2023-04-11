export default {
    "GET /api/user/list":{
        statusCode:200,
        message:"success",
        data:[
            {
                id:0,
                title:'家长签到',
                user: 'parent',
                url: '/pages/sign/sign'
              },
              {
                id:1,
                title:'教师签到',
                user: 'teacher',
                url:'/pages/sign/sign'
              },
        ]
    }
}