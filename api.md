# 丹巴API
## api/list 
### 注册|登录 
#### 注册
#### register/list `POST`
* request body
```json
{
    phone:11122233345,
    pwd:qwertyui,
    class_code:47687867324325344,
    class_name:一年级一班,
    user_code:0,  // 登录身份 0：家长，1：教师
    student_name:张三,
    relative:爸爸|妈妈|爷爷|奶奶|外公|外婆,  //亲属关系
    avatar:"http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png",
    token:fdgdgvfrtgtgfdgf
}
```
* response body
```json
{
    code: 1,
    //data为对象
    data: {
            uuid:45344534345,
            user_id:001,
            phone:11122233345,
            pwd:qwertyui,
            class_code:47687867324325344,
            class_name:一年级一班,
            user_code:0,  //登录身份 0：家长，1：教师
            student_id:0, //学生序号
            student_name:张三,
            relative:爸爸, //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar:"http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png",
            token:fdgdgvfrtgtgfdgf
        }
    msg: "success"
}
```
#### 登录
#### login/list `POST`
* request body
```json
{
    username:11122233345,
    pwd:qwertyui,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: {
            uuid:45344534345,
            user_id:001
            username:11122233345,
            pwd:qwertyui,
            class_code:47687867324325344,
            class_name:一年级一班,
            user_code:parent|teacher,
            user_name:家长|老师
            student_name:张三,
            relative:爸爸|妈妈|爷爷|奶奶|外公|外婆,
            avatar:"http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png",
            token:fdgdgvfrtgtgfdgf
        }
    msg: "success"
}
```

### 班级页面
##### 文章列表
#### api/v1/article/list `GET`
* request body
```json
{
    type: ''|0|1|2,
    limit:10,
    page:1,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    count:55,
    size:10,
    current:1,
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            type:1,  //接口请求时查找的范围 1:教育，2：安全，3：智慧
            type_id:0,
            title:防溺水创意微视频⑨｜丹巴县城区小学校,
            create_time:2023-11-15  14:12:34,
            img_url:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        },
    ], 
    msg: "success"
}
```

##### 文章详情
#### api/v1/article/detail `GET`
* request body
```json
{
    type_id:0,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: {
            uuid:134554647687988765445398765,
            type_id:0
            author:张老师,
            title:防溺水创意微视频⑨｜丹巴县城区小学校,
            detail_content:"<p>正文内容</p>"   //HTML代码，完整页面内容
            create_time:2023-11-15  14:12:34,
            img_url:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        }
    msg: "success"
}
```
##### 更多文章tab标题
#### api/v1/article/tab `GET`
* request body
```json
{

}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: [
        {
            uuid:134554647687988765445398765,
            type_id:0, //tab栏的序号 0：全部，1：教育，2：安全，3：智慧
            type_name:'全部', //tab栏的标题 全部，教育，安全，智慧
        }
    ]
    msg: "success"
}
```

### 作业
##### 作业—科目选择下拉框
#### api/v1/subject/select `GET`
* request body
```json

```

* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            subject_id:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            subject_title:语文  //科目选择范围 语文，数学，英语，物理，化学，生物
        },
    ], 
    msg: "success"
}
```

##### 作业—作业列表
#### api/v1/subject/list `GET`
* request body
```json
{
    select_time:'' //时间选择 ''全部
    subject_id:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
    token:fdgdgvfrtgtgfdgf
},
```

* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            subject_id:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:0, //是否完成作业（家长端）
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:2023-12-12 14:34,
            avatar:'',
        },
    ], 
    msg: "success"
}
```

##### 作业—作业详情
#### api/v1/subject/detail `GET`
* request body
```json
{
    work_id:0,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: {
            uuid:134554647687988765445398765,
            work_id:0,
            hasCompleted:0, //是否完成作业（家长端）
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        }
    msg: "success"
}
```
##### 家长完成按钮(家长端)
#### api/v1/subject/detail/completed `POST`
* request body
```json
{
    work_id:0,
    hasCompleted:1, //点击按钮，状态改为1，表示已完成
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: [
        {
            uuid:134554647687988765445398765,
            work_id:0,
            hasCompleted:1, //是否完成作业（家长端）
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        },
        {
            uuid:134554647687988765445398765,
            work_id:1,
            hasCompleted:0, //是否完成作业（家长端）
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        },
        {
            uuid:134554647687988765445398765,
            work_id:2,
            hasCompleted:0, //是否完成作业（家长端）
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        }
    ],
    msg: "success"
}
```
##### 家长反馈详情(家长端)
#### api/v1/subject/feedback/detail `GET`
* request body
```json
{
    work_id:0,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: {
            work_id:0,
            student_id:0,
            student_name:张三,
            relative:爸爸, 
            feed_back:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
            create_time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            reply:[
                {
                from:张老师,
                to:张三爸爸,
                content:ffgff
                },
                {
                from:张三爸爸,
                to:张老师,
                content:ffgff
                },
            ]
        },
    msg: "success"
}
```

##### 家长修改反馈(家长端)
#### api/v1/subject/edit/feedback/detail `POST`
* request body
```json
{
    work_id:0,
    student_id:0,
    student_name:张三,
    relative:爸爸, 
    feed_back:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
    create_time:2023-11-15  14:12:34,
    avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
    reply:[
        {
        from:张老师,
        to:张三爸爸,
        content:ffgff
        },
        {
        from:张三爸爸,
        to:张老师,
        content:ffgff
        },
    ]
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: {
            work_id:0,
            student_id:0,
            student_name:张三,
            relative:爸爸, 
            feedback:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
            create_time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            reply:[
                {
                from:张老师,
                to:张三爸爸,
                content:ffgff
                },
                {
                from:张三爸爸,
                to:张老师,
                content:ffgff
                },
            ]
        },
    msg: "success"
}
```

##### 修改作业内容（教师端）
#### api/v1/subject/edit/detail `POST`
* request body
```json
{
    uuid:134554647687988765445398765,
    work_id:0,
    title:【语文】 2023.04.25 （周二）语文练习,
    author:张老师,
    detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
    time:2023-11-15  14:12:34,
    avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data: {
            uuid:134554647687988765445398765,
            work_id:0,
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
          }
    msg: "success"
}
```

##### 删除作业内容（教师端）
#### api/v1/subject/edit/detail `POST`
* request body
```json
{
    uuid:134554647687988765445398765,
    work_id:0,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data: []
    msg: "删除成功"
}
```

##### 是否提交作业的学生名单（教师端）
#### api/v1/subject/students/list `GET`
* request body
```json
{
    work_id:0,
    hasCompleted:'', //查询是否提交作业学生名单 '':全部（包含已交和未交），0:未交，1：已交
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            work_id:0, //作业序号
            hasCompleted:0,  //是否完成作业 0：未完成，1：已完成
            student_id:0, //学生序号 
            checked:0,  //是否签到 0：未签到，1：已签到
            student_name:'张三放热峰认同感认同感认同感飞人废人'
        },
        {
            work_id:1, //作业序号
            hasCompleted:1,  //是否完成作业 0：未完成，1：已完成
            student_id:1, //学生序号 
            checked:1,  //是否签到 0：未签到，1：已签到
            student_name:'张三放热峰认同感认同感飞人废人'
        }
    ]
    msg: "success"
}
```
##### 家长反馈列表(教师端)
#### api/v1/subject/feedback/list `GET`
* request body
```json
{
    work_id:0,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            work_id:0,
            student_id:0,
            student_name:张三,
            relative:爸爸, 
            feedback:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
            create_time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            //回复内容，涉及回复多次
            reply:[
                {
                from:张老师,
                to:张三爸爸,
                content:ffgff
                },
                {
                from:张三爸爸,
                to:张老师,
                content:ffgff
                },
            ]
        },
        {
            work_id:0,
            student_id:1,
            student_name:李四,
            relative:妈妈, 
            feedback:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
            create_time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            reply:reply:[
                {
                from:张老师,
                to:李四妈妈,
                content:ffgff
                },
                {
                from:李四妈妈,
                to:张老师,
                content:ffgff
                },
            ]
        }
    ]
    msg: "success"
}
```
##### 布置作业（教师端）
#### api/v1/subject/publish `POST`
* request body
```json
{
    title:安全通知,
    detail_content:"<p>地方大师傅的人反感的旅馆的法国v</p>"
    token:fdgdgvfrtgtgfdgf，
}  
```
* response body
```json
{
    code:1,
    data:{
            uuid:134554647687988765445398765,
            work_id:0,
            author:张老师,
            title:安全通知,
            detail_content:"<p>地方大师傅的人反感的旅馆的法国v</p>" 
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf，
        }
    msg:"success"
}
```

### 通知
##### 通知—通知列表
#### api/v1/notice/list `GET`
* request body
```json

```

* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            notice_id:0, //作业列表序号
            checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            title:安全注意事项,
            author:张老师,
            content:"１、安全安全安全安全",
            time:2023-12-12 14:34,
            avatar:'',
        },
    ], 
    msg: "success"
}
```

##### 通知—通知详情
#### api/v1/notice/detail `GET`
* request body
```json
{
    notice_id:0,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为对象
    data: {
            uuid:134554647687988765445398765,
            notice_id:0, //作业列表序号
            checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            title:安全注意事项,
            author:张老师,
            detail_content:"<p>１、安全安全安全安全</p>",
            time:2023-12-12 14:34,
            avatar:'',
        },
    msg: "success"
}
```

##### 修改通知内容（教师端）
#### api/v1/notice/edit/detail `POST`
* request body
```json
{
    uuid:134554647687988765445398765,
    notice_id:0,
    title:安全通知,
    author:张老师,
    detail_content:"<p>正文内容</p>"   //HTML代码，完整页面内容
    time:2023-11-15  14:12:34,
    avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data: {
            uuid:134554647687988765445398765,
            notice_id:0,
            title:安全通知,
            author:张老师,
            detail_content:"<p>正文内容</p>"   //HTML代码，完整页面内容
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
          }
    msg: "success"
}
```

##### 删除通知内容（教师端）
#### api/v1/notice/edit/detail `POST`
* request body
```json
{
    uuid:134554647687988765445398765,
    notice_id:0,
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data: []
    msg: "删除成功"
}
```

##### 发布通知（教师端）
#### api/v1/notice/publish `POST`
* request body
```json
{
    title:安全通知,
    detail_content:"<p>地方大师傅的人反感的旅馆的法国v</p>"
    token:fdgdgvfrtgtgfdgf，
}  
```
* response body
```json
{
    code:1,
    data:{
        uuid:134554647687988765445398765,
        notice_id:0,
        author:张老师,
        title:安全通知,
        detail_content:"<p>地方大师傅的人反感的旅馆的法国v</p>" 
        time:2023-11-15  14:12:34,
        avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        token:fdgdgvfrtgtgfdgf
    }
    msg:"success"
}
```

### 安全确认
##### 签到（家长端）
#### api/v1/parent/sign `GET`
* request body
```json
{

}
```
* response body
```json
{
    code:1,
    data:[
        {
            student_id:0,
            student_name:张三,
            checked:0, //是否已签到 0：未签到，1：已签到
        }
    ]
    msg:"success"
}
```

##### 签到（教师端）
#### api/v1/students/list `GET`


##### 私密成绩
#### api/v1/score/list `GET`
* request body
```json

```

* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            score_id:0, //成绩列表序号
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            title:语文考试,
            author:张老师,
            publish:1, //是否发布成绩(教师端) 0：未发布成绩， 1：未发布成绩
            test_time:2023-11-23 12:56
            time:2023-12-12 14:34,
            avatar:'',
        },
    ], 
    msg: "success"
}
```
##### 发布成绩
#### api/v1/score/publish `POST`
* request body
```json
{
    uuid:134554647687988765445398765,
    score_id:0, //成绩列表序号
    hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
    title:语文考试,
    author:张老师,
    publish:1, //是否发布成绩(教师端) 0：未发布成绩， 1：已发布成绩
    detail_content:"考试时间：2023-11-23 12:56 ",
    time:2023-12-12 14:34,
    avatar:'',
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            score_id:0, //成绩列表序号
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            title:语文考试,
            author:张老师,
            publish:1, //是否发布成绩(教师端) 0：未发布成绩， 1：未发布成绩
            test_time:2023-11-23 12:56
            time:2023-12-12 14:34,
            avatar:'',
        },
    ], 
    msg: "success"
}
```

##### 成绩详情
#### api/v1/score/detail `POST`
* request body
```json
{
    score_id:0
}
```

* response body
```json
{
    code: 1,
    //data为数组
    data:{
            uuid:134554647687988765445398765,
            score_id:0, //成绩列表序号
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            title:语文考试,
            author:张老师,
            publish:1, //是否发布成绩(教师端) 0：未发布成绩， 1：未发布成绩
            detail_content:"考试时间：2023-11-23 12:56 ",
            time:2023-12-12 14:34,
            avatar:'',
        },
    msg: "success"
}
```



### 通讯录页面
##### 教师人员列表
#### api/v1/address/teacher/list `GET`
* request body
```json
{

}
```
* response body
```json
{
    code:1,
    data:[
        {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:0, //教师序号
        teacher_name:'张老师',
        subject: '任教科目：语文',
        is_class_teacher:true, //是否是班主任
        is_creator: true, //是否是创建者
        avatar:''
      },
      {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:1, //教师序号
        teacher_name:'张老师',
        subject: '任教科目：语文',
        is_class_teacher:false, //是否是班主任
        is_creator: false, //是否是创建者
        avatar:''
      },
      {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:2, //教师序号
        teacher_name:'张老师',
        subject: '任教科目：语文',
        is_class_teacher:false, //是否是班主任
        is_creator: false, //是否是创建者
        avatar:''
      }
    ],
    msg:"success"
}
```
##### 家长人员列表（家长端）
#### api/v1/address/parent/list `GET`
* request body
```json
{

}
```
* response body
```json
{
    code:1,
    data:[
        {
        student_id:0,  //学生序号
        parent_id:0, //家长序号
        nick_name:"家长03934", //家长昵称
        relative:'爸爸',
        avatar:''
      },
      {
        student_id:0,  //学生序号
        parent_id:0, //家长序号
        nick_name:"家长03934", //家长昵称
        relative:'爸爸',
        avatar:''
      },
      {
        student_id:0,  //学生序号
        parent_id:0, //家长序号
        nick_name:"家长03934", //家长昵称
        relative:'爸爸',
        avatar:''
      }
    ],
    msg:"success"
}
```
##### 添加家人
#### api/v1/addressList/addFamily `POST`
* request body
```json
{
    parent_id:1,
    phone:"11222233433",
    class_code: "47687867324325344",
    class_name: "一年级一班",
    student_id:0, //学生序号
    nick_name:"家长03934", //家长昵称
    relative: "妈妈", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
    avatar:'',
}
```
* response body
```json
{
    code:1,
    data:{
        parent_id:1,
        phone:"11222233433",
        class_code: "47687867324325344",
        class_name: "一年级一班",
        student_id:0, //学生序号
        nick_name:"家长03934", //家长昵称
        relative: "妈妈", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
        avatar:'',
    },    
    msg:"success"
}
```

##### 新建群聊人员列表
##### 新建群聊群组列表
#### api/v1/chat/group/list `GET`
* request body
```json
{

}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:efreferfer,
            group_id:0, //群聊序号
            group_name:"一年级一班",
            //content不确定，后期可能会调整
            content:"张三、刘毅美画面给、张九都·打过、李四张、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你"
        }
    ],
    msg:"success"
}
```



### 私信
##### 私信列表
#### api/v1/message/list `GET`
* request body
```json
{

}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:3434353454677,
            message_id:0, //消息标识
            teacher:张老师,
            new:0,  //是否有新消息 0：无新消息，1:有新消息
            message:大富大贵的鬼地方,
            time:2023-11-15  14:12:34, //可以返回时间戳
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        },
        {
            uuid:3434353454677,
            message_id:0, //消息标识
            teacher:张老师,
            new:0,  //是否有新消息 0：无新消息，1:有新消息
            message:大富大贵的鬼地方,
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        }
    ],
    msg:"success"
}
```

##### 点击新消息时，新消息标签清除
#### api/v1/message/updateListById `POST`
* request body
```json
{
    message_id:0,
    token:dfddddgvffbggf
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:3434353454677,
            message_id:0, //消息标识
            teacher:张老师,
            new:0,  //是否有新消息 0：无新消息，1:有新消息
            message:大富大贵的鬼地方,
            time:2023-11-15  14:12:34, //可以返回时间戳
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        },
        {
            uuid:3434353454677,
            message_id:0, //消息标识
            teacher:张老师,
            new:0,  //是否有新消息 0：无新消息，1:有新消息
            message:大富大贵的鬼地方,
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        }
    ],
    msg:"success"
}
```

##### 删除私信
#### api/v1/message/del `POST`
* request body
```json
{
    message_id:0,
    token:dfddddgvffbggf
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:3434353454677,
            message_id:0, //消息标识
            teacher:张老师,
            new:0,  //是否有新消息 0：无新消息，1:有新消息
            message:大富大贵的鬼地方,
            time:2023-11-15  14:12:34, //可以返回时间戳
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        },
        {
            uuid:3434353454677,
            message_id:0, //消息标识
            teacher:张老师,
            new:0,  //是否有新消息 0：无新消息，1:有新消息
            message:大富大贵的鬼地方,
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        }
    ],
    msg:"success"
}
```

##### 私信内容
#### api/v1/message/detail `GET`
* request body
```json
{
    message_id:0,
    token:fdgdgvfrtgtgfdgf
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:54657568,
            message_id:0,
            sender:0, //发送者 0：教师，1：家长
            teacher:张老师
            message:今天张三表现很好,
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        },
        {
            uuid:54657568,
            message_id:0,
            sender:0,
            teacher:张老师,
            message:张三今天没有带水杯回家,
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        },
        //结构可能需要修改
        {
            uuid:54657568,
            message_id:0,
            sender:1,  //发送者 0：教师，1：家长
            student_id:0,
            relative:爸爸,
            message:谢谢老师提醒,
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
            token:fdgdgvfrtgtgfdgf
        },
        //结构可能需要修改
    ]
    msg:"success"
}
```