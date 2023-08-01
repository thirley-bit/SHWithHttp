# 丹巴API
## api/list 
### 注册|登录 
#### 注册
#### api/v1/register `POST`
* request body
```json
{
    phone:11122233345,
    pwd:'qwertyui',
    class_code:47687867324325344,
    class_name:'一年级一班',
    user:0,  // 登录身份 0：家长，1：教师
    student_id:'20230204', //（仅家长端返回）
    student_name:'张三', //（仅家长端返回）
    nick_name:"家长01234"|"张风毅老师", //（家长端返回家长01234|老师端返回"张风毅"）
    relative:'爸爸'|'妈妈'|'爷爷'|'奶奶'|'外公'|'外婆',  //亲属关系（仅家长端返回某一个）
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
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 0, //登录身份 0：家长，1：教师
            student_id:'20230204', //学生序号
            student_name: "张三",
            nick_name:"家长01234"|"张风毅老师", //（家长端返回家长01234|老师端返回"张风毅"）
            relative:'爸爸'|'妈妈'|'爷爷'|'奶奶'|'外公'|'外婆',  //亲属关系（仅家长端返回某一个）
            avatar:"http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png",
            token:fdgdgvfrtgtgfdgf
        }
    msg: "success"
}
```
#### 登录
#### api/v1/login `POST`
* request body
```json
{
    phone:11122233345,
    pwd:'qwertyui',
    token:fdgdgvfrtgtgfdgf
}
```
* response body
```json
{
    code: 1,
    //data为对象
    data: {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 0, //登录身份 0：家长，1：教师
            student_id:'20230204', //学生序号
            student_name: "张三",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            token: "fdgdgvfrtgtgfdgf",
        }
    msg: "success"
}
```
### 个人中心页面
####  身份切换列表——已加入pass为1(家长端)
#### api/v1/parent/user/pass/list `POST`
* request body
```json
{
    pass:1,//是否加入班级  0：待审核，1：通过，2：未通过，3：撤销
}
```
* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 0, //登录身份 0：家长，1：教师
            student_id:'20230204', //学生序号
            student_name: "张三",
            nick_name:"家长01323", //家人昵称
            pass:1, //是否加入班级  0：待审核，1：通过，2：未通过，3：撤销
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            token: "fdgdgvfrtgtgfdgf",
        },
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 0, //登录身份 0：家长，1：教师
            student_id:'20230214', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            pass:1,
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            token: "fdgdgvfrtgtgfdgf",
        },
        ]
    msg: "success"
}
```
####  身份切换列表——待审核pass为0,2(家长端)
#### api/v1/parent/user/checked/list `POST`
* request body
```json
{
    pass:0、2, //是否加入班级  0：待审核，1：通过，2：未通过，3：撤销
}
```
* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid: "45344534345",
            parent_id: 0,
            user: 0, //登录身份 0：家长，1：教师
            student_id:'20230204', //学生序号
            student_name: "张三",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:0,  //是否加入班级  0：待审核，1：通过，2：未通过，3：撤销
            token: "fdgdgvfrtgtgfdgf",
        },
        {
            uuid: "45344534345",
            parent_id: 0,
            user: 0, //登录身份 0：家长，1：教师
            student_id:'20230214', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:2, //是否加入班级  0：待审核，1：通过，2：未通过，3：撤销
            reason:'资料不齐全', //不通过原因
            token: "fdgdgvfrtgtgfdgf",
        },
        ],
    msg: "success"
}
```
#### 身份切换（家长端）
#### api/v1/change/user `POST`
* request body
```json
{
    student_id:'20230204', //学生序号,
}
```
* response body
```json
{
    code: 1,
    //data为对象
    data: {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 0, //登录身份 0：家长，1：教师
            student_id:'20230204', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:1,
            token: "fdgdgvfrtgtgfdgf",
        }
    msg: "success"
}
```
#### 身份切换列表——待审核（家长端）
#### api/v1/parent/user/checked/list `GET`
* request body
```json
{
    
}
```
* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20231204', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:0,
            token: "fdgdgvfrtgtgfdgf",
        },
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20232304', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:2,
            reason:'不是本班级学生',
            token: "fdgdgvfrtgtgfdgf",
        },
        ]
    msg: "success"
}
```
#### 身份切换列表——待审核——撤销申请（家长端）
#### api/v1/checked/back `POST`
* request body
```json
{
    student_id:'20231204', //传入学生id，从审核列表中移除该条数据
}
```
* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20231204', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:0,
            token: "fdgdgvfrtgtgfdgf",
        },
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20232304', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:-1,
            reason:'不是本班学生',
            token: "fdgdgvfrtgtgfdgf",
        },
        ]
    msg: "success"
}
```
#### 审核列表——已审核（教师端）
#### api/v1/teacher/user/pass/list `GET`
* request body
```json
{
    
}
```
* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20231204', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:1,
            token: "fdgdgvfrtgtgfdgf",
        },
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20232304', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:2,
            reason:'不是本班学生',
            token: "fdgdgvfrtgtgfdgf",
        },
        ],
    msg: "success"
}
```
#### 审核列表——待审核列表（教师端）
#### api/v1/teacher/user/checked/list `GET`
* request body
```json
{
    
}
```
* response body
```json
{
    code: 1,
    //data为数组
    data: [
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20231204', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:0,
            token: "fdgdgvfrtgtgfdgf",
        },
        {
            uuid: "45344534345",
            parent_id: 0,
            phone: "11122233345",
            pwd: "qwertyui",
            class_code: "47687867324325344",
            class_name: "一年级一班",
            user: 1, //登录身份 0：家长，1：教师
            student_id:'20232304', //学生序号
            student_name: "李四",
            nick_name:"家长01323", //家人昵称
            relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
            avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
            pass:0,
            token: "fdgdgvfrtgtgfdgf",
        },
        ],
    msg: "success"
}
```
#### 审核列表——待审核列表——不通过接口（pass状态为2）（教师端）
#### api/v1/teacher/user/checked/refuse `GET`
* request body
```json
{
    student_id:'20231204',
    // pass:2,//不通过，修改pass为2
}
```
* response body
```json
{
   
}
```
#### 审核列表——待审核列表——通过接口（pass状态为1）（教师端）
#### api/v1/teacher/user/checked/pass `GET`
* request body
```json
{
    student_id:'20231204',
    // pass:1, //通过，修改pass为1
}
```
* response body
```json
{
   
}
```

### 班级页面
##### 推荐——更多——文章tab标题
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
        uuid:'134554647687988765445398765',
        type:0, //tab栏的序号 0：全部，1：教育，2：安全，3：智慧
        title:'全部', //tab栏的标题 全部，教育，安全，智慧
      },
      {
        uuid:'134554647687988765445398765',
        type:1, //tab栏的序号 0：全部，1：教育，2：安全，3：智慧
        title:'教育', //tab栏的标题 全部，教育，安全，智慧
      },
      {
        uuid:'134554647687988765445398765',
        type:2, //tab栏的序号 0：全部，1：教育，2：安全，3：智慧
        title:'安全', //tab栏的标题 全部，教育，安全，智慧
      },
      {
        uuid:'134554647687988765445398765',
        type:3, //tab栏的序号 0：全部，1：教育，2：安全，3：智慧
        title:'智慧', //tab栏的标题 全部，教育，安全，智慧
      }
    ]
    msg: "success"
}
```
##### 文章列表
#### api/v1/article/list `GET`
* request body
```json
{
    type: 0|1|2|3,  //'':全部，0：教育，1：安全，2：智慧
    limit:10, //当前页条数
    pageNo:1, //当前页
    token:fdgdgvfrtgtgfdgf
}
```

* response body
```json
{
    code: 1,
    count:55,  //总条数
    size:10, //当前页条数
    pageNo:1, //当前页
    pageNum:5, //总页数
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            type:1,  //接口请求时查找的范围 0:全部，1:教育，2：安全，3：智慧
            article_id:0,  //文章序号
            title:'防溺水创意微视频⑨｜丹巴县城区小学校',
            create_time:'2023-11-15  14:12:34',
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
    article_id:0,
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
            article_id:0
            author:张老师,
            title:防溺水创意微视频⑨｜丹巴县城区小学校,
            detail_content:"<p>正文内容</p>"   //HTML代码，完整页面内容
            create_time:2023-11-15  14:12:34,
            img_url:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        }
    msg: "success"
}
```


### 作业
##### 作业—时间选择下拉框
#### api/v1/subject/time/select `GET`
* request body
```json
{
    Time_S:'2023-06-20', //开始时间
    Time_E:'2023-07-20', //结束时间
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
            subject_type:0, //科目选择  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:0, //是否完成作业（家长端） 0：未完成，1：已完成
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-06-20 14:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
        },
        {
            uuid:134554647687988765445398765,
            subject_type:1, //科目选择  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:0, //是否完成作业（家长端） 0：未完成，1：已完成
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-06-20 16:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
        },
    ], 
    msg: "success"
}
```
##### 作业—科目选择栏目
#### api/v1/subject/type/title `GET`
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
        uuid:'134554647687988765445398765',
        subject_type:0, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'语文'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:1, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'数学'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:2, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'英语'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:3, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'物理'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:4, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'化学'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:5, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'生物'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
    ],
    msg: "success"
}
```
##### 作业—科目选择下拉框
#### api/v1/subject/type/select `GET`
* request body
```json
{
    subject_type:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
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
            subject_type:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:0, //是否完成作业（家长端） 0：未完成，1：已完成
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-12-12 14:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
        },
        {
            uuid:134554647687988765445398765,
            subject_type:0, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:1, //是否完成作业（家长端）0：未完成，1：已完成
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:张老师,
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-12-12 14:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
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
    // select_time:'' //时间选择 ''全部
    // subject_type:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
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
            subject_type:0, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:0, //是否完成作业（家长端）0：未完成，1：已完成
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-12-12 14:34',
            avatar:'',
        },
        {
            uuid:134554647687988765445398765,
            subject_type:0, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:1, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
            hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:1, //是否完成作业（家长端）0：未完成，1：已完成
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-12-12 14:34',
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
            hasCompleted:0, //是否完成作业（家长端）0：未完成，1：已完成
            title:【语文】 2023.04.25 （周二）语文练习,
            author:张老师,
            detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
            time:2023-11-15  14:12:34,
            avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        }
    msg: "success"
}
```
##### 未完成按钮(家长端)
#### api/v1/subject/completed `POST`
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
    //data为数组
    data: [
        {
            uuid:134554647687988765445398765,
            work_id:0, //作业列表序号
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:1, //是否完成作业（家长端）0：未完成，1：已完成
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-12-12 14:34',
            avatar:'',
        },
        {
            uuid:134554647687988765445398765,
            work_id:1, //作业列表序号
            hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:1, //是否完成作业（家长端）0：未完成，1：已完成
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、抄fdfer额外的市场形成的是fdfdvg上的色佛的人而发热粉色色夫人serfserfserf 二二分地方士大夫是否色粉色发是的发涩粉色色粉色分色法而发热放热峰输入法方法是大润发地方的方法的方式放松放松的方式的方式发是否士大夫色粉色f写课后第二自然段",
            time:'2023-12-12 14:34',
            avatar:'',
        },
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
    //data为数组
    data: [
            {
                work_id:0,
                student_id:0,
                student_name:张三,
                relative:爸爸, 
                feed_back_id:0,
                feed_back:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
                create_time:2023-11-15  14:12:34,
                avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
                reply:[
                    {
                        feed_back_id:0,
                        reply_id:0,
                        from:张老师,
                        to:张三爸爸,
                        content:ffgff
                    },
                    {
                        feed_back_id:0,
                        reply_id:1,
                        from:张三爸爸,
                        to:张老师,
                        content:ffgff
                    },
                ]
            },
        ],
    msg: "success"
}
```
##### 家长反馈详情(教师端)
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
    //data为数组
    data: [
            {
                work_id:0,
                student_id:0,
                student_name:'张三',
                relative:'爸爸', 
                feed_back_id:0,
                feed_back:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
                create_time:'2023-11-15  14:12:34',
                avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
                reply:[
                    {
                        feed_back_id:0,
                        reply_id:0,
                        from:'张老师',
                        to:'张三爸爸',
                        content:'ffgff'
                    },
                    {
                        feed_back_id:0,
                        reply_id:1,
                        from:'张三爸爸',
                        to:'张老师',
                        content:'ffgff'
                    },
                ]
            },
            {
                work_id:0,
                student_id:0,
                student_name:'张三',
                relative:'爸爸', 
                feed_back_id:1,
                feed_back:"<p>第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
                create_time:'2023-11-15  14:12:34',
                avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
                reply:[
                    {
                        feed_back_id:1,
                        reply_id:0,
                        from:'张老师',
                        to:'张三爸爸',
                        content:'ffgff'
                    },
                    {
                        feed_back_id:1,
                        reply_id:1,
                        from:'张三爸爸',
                        to:'张老师',
                        content:'ffgff'
                    },
                    {
                        feed_back_id:1,
                        reply_id:2,
                        from:'张三爸爸',
                        to:'张老师',
                        content:'ffgff'
                    },
                ]
            },
        ],
    msg: "success"
}
```

<!-- ##### 家长修改反馈(家长端)
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
``` -->
<!-- 
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
``` -->

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


##### 私密成绩——成绩列表
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
            publish:1, //是否发布成绩(教师端) 0：未发布成绩， 1：已发布成绩
            test_time:2023-11-23 12:56
            time:2023-12-12 14:34,
            avatar:'',
        },
    ], 
    msg: "success"
}
```

##### 发布成绩——新发布接口
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
##### 发布成绩——快速发布接口(未定)
#### api/v1/score/quickPublish `POST`
* request body
```json
{
    score_id:0, //成绩列表序号
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

##### 成绩详情(已发布)
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
##### 成绩详情(未发布)——成绩标题和时间
#### api/v1/score/detail/title `POST`
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
            title:语文考试,
            test_time:2023-12-13
        },
    msg: "success"
}
```
##### 成绩详情(未发布)——数据详情
#### api/v1/score/detail/data `GET`
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
    data:[
            {
                uuid:121213,
                score_id:0,
                score_detail_id:0,
                number: "202323",
                name: "小红",
                Chinese: "88",
                Math: "99",
                English: "89",
        },
        {
                uuid:121213,
                score_id:0,
                score_detail_id:1,
                number: "20323",
                name: "张三",
                Chinese: "88",
                Math: "99",
                English: "89",
        },
        {
                uuid:121213,
                score_id:0,
                score_detail_id:2,
                number: "20232323",
                name: "李四",
                Chinese: "88",
                Math: "99",
                English: "89",
        },
    ],
    msg: "success"
}
```

### 资料下载
##### 资料下载列表
#### api/v1/source/list `GET`
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
        uuid:'3454465456756', 
        source_id:0, //资料序号
        name:'SH', //上传的资料名称
        type:'.rar', //上传类型
        loader:'张老师',  //上传者
        load_time:'2023_12_11 : 21:30', //上传时间
        url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      }
    ],
    msg:'success'
}
```
##### 下载接口(不确定，尚不明确需要什么数据)
#### api/v1/source/download `POST`
* request body
```json
{
    source_id:0,
    url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
}
```
* response body
```json
{
    code:1,
    data:[],
    msg:'success'
}
```
##### 删除资料接口
#### api/v1/source/delete `POST`
* request body
```json
{
    source_id:0,
}
```
* response body
```json
{
    code:1,
    data:[],
    msg:'success'
}
```
##### 新建文件夹
#### api/v1/source/new/package `POST`
* request body
```json
{
    name:'新建文件夹',
    type:'package',
    loader:'张老师',
    load_time: '2012-12-23 22:23',
    url:''
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:232423, 
            source_id:2,  //资料序号，自增
            name:'新建文件夹',
            type:'package',
            loader:'张老师',
            load_time: '2012-12-23 22:23',
            url:''
        }
    ],
    msg:'success'
}
```
##### 上传文件（图片、视频、文件）
#### api/v1/source/upload `POST`
* request body
```json
{
    name:'新上传的文件、视频、图片',
    type:'jpg' //上传的格式 jpg|mp4|rar|doc|xls 等，
    loader:'张老师',
    load_time:'2012-12-23 22:23',
    url:''
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:232423, 
            source_id:4,  //资料序号，自增
            name:'新建文件夹',
            type:'package',
            loader:'张老师',
            load_time: '2012-12-23 22:23',
            url:''
        }
    ],
    msg:'success'
}
```

### 参赛通道
##### 参赛通道列表
#### api/v1/channel/list `GET`
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
            uuid:234235435,
            channel_id:0, //参赛通道序号
            name:'四六级报名官网', //参赛名称
            url:'http://cet.neea.edu.cn/',  //参赛访问地址
        }
    ],
    msg:'success'
}
```
##### 上传参赛信息
#### api/v1/channel/upload `GET`
* request body
```json
{
    name:'四六级报名官网', //参赛名称
    url:'http://cet.neea.edu.cn/',  //参赛访问地址
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:234235435,
            channel_id:1, //参赛通道序号
            name:'四六级报名官网', //参赛名称
            url:'http://cet.neea.edu.cn/',  //参赛访问地址
        }
    ],
    msg:'success'
}
```
### 优惠政策
##### 优惠政策列表
#### api/v1/policy/list `GET`
* request body
```json
{
    
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
            policy_id:0,
            title:防溺水创意微视频⑨｜丹巴县城区小学校,
            create_time:2023-11-15  14:12:34,
            img_url:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        },
    ], 
    msg: "success"
}
```

##### 优惠政策详情
#### api/v1/policy/detail `GET`
* request body
```json
{
    policy_id:0,
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
            policy_id:0
            author:张老师,
            title:防溺水创意微视频⑨｜丹巴县城区小学校,
            detail_content:"<p>正文内容</p>"   //HTML代码，完整页面内容
            create_time:2023-11-15  14:12:34,
            img_url:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
        }
    msg: "success"
}
```

### 相册
##### 相册列表(相册列表页面)
#### api/v1/photos/list `GET`
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
            uuid:324333546,
            photo_id:0, //相册序号
            name:'午休情况', //相册名称
            num:2, 
            url:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg', //相册封面
        },
    ],
    msg:'success'
}
```
##### 相册详情（点击相册列表进入的相册具体内容）
#### api/v1/photos/detail `GET`
* request body
```json
{
    photo_id:0
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:'324333546',
            photo_id:0, //相册序号
            uploader:'张老师', //照片上传者
            uploader_avatar:'http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png',
            upload_time:'2023-12-22 12:45', //照片上传时间
            photo_list:[
                {
                    uuid:343544545,
                    url_id:0,
                    image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
                },
            ] //照片列表
        },
        ],
    msg:'success'
}
```

##### 新建相册（创建数据传至后台形成新增数据）
#### api/v1/new/photos `POST`
* request body
```json
{
    name:'新增相册1',
    detail:'新增描述新增描述',
    num:0,
    url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg',
}
```
* response body
```json
{
    code:1,
    data:[
            {
            uuid:324333546,
            photo_id:0, //相册序号
            name:'午休情况', //相册名称
            num:2, 
            url:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg', //相册封面
        },
        {
            uuid:324333546,
            photo_id:1, //相册序号
            name:'新增相册1',
            detail:'新增描述新增描述',
            num:0,
            url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg',
        },
    ],
    msg:'success'
}
```

##### 上传照片（选择相册上传照片）
#### api/v1/publish/photos `POST`
* request body
```json
{
    uuid:'2132323423',
    photo_id:0,
    uploader:'小王',
    uploader_avatar:'',
    uploade_time:'2012-11-23 23:33',
    photo_list:[
        {
            image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
        }
    ]
}
```
* response body
```json
{
    code:1,
    data:[
        {
            uuid:'2132323423',
            photo_id:0,
            uploader:'张老师',
            uploader_avatar:'',
            uploade_time:'2012-10-23 20:44',
            photo_list:[
                {
                    image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
                }
            ]
        },
        {
            uuid:'2132323423',
            photo_id:0,
            uploader:'小王',
            uploader_avatar:'',
            uploade_time:'2012-11-23 23:33',
            photo_list:[
                {
                    image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
                }
            ]
        }
    ],
    msg:'success'
}
```

### 校园食谱页面
##### 校园食谱列表
#### api/v1/cook/list `GET`
* request body
```json
{
 time:2023-2-22
}
```
* response body
```json
{
    code:1,
    data:[
        {
          uuid:'3446557657686868',
          date:'2023-5-29', //本周周一
        //   recipe:{
            vegetable:[
            {
              title:'西红柿炒鸡蛋'
            },
            {
              title:'土豆丝'
            },
            {
              title:'红烧豆腐'
            },
            {
              title:'红烧茄子'
            },
            {
              title:'炖白菜'
            },
            ],
            meat:[
            {
              title:'红烧肉'
            },
            {
              title:'宫保鸡丁'
            },
            {
              title:'红萝卜炒牛肉'
            },
            {
              title:'烂肉莲白粉丝'
            },
            {
              title:'棒骨萝卜汤'
            },
            {
              title:'鲜肉炒蒜苔'
            },
            {
              title:'鲜肉炒西兰花'
            },
            {
              title:'黄瓜圆子汤'
            },
          ]
        // }
      }
    ]
}
```

### 展示墙
##### 展示墙—时间选择下拉框
#### api/v1/subject/title/select `GET`
* request body
```json
{
    time:'', //时间选择范围  
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
            subject_type:0, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            subject_name:'语文', //0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
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
##### 展示墙—类型选择下拉框
#### api/v1/subject/title/select `GET`
* request body
```json
{
    subject_type:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
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
            subject_type:'', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            subject_name:'语文', //0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:0, //是否查看状态 0：未查看，1：已查看
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
        subject_type: 0,
        is_class_teacher:true, //是否是班主任
        is_creator: true, //是否是创建者
        avatar:''
      },
      {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:1, //教师序号
        teacher_name:'张老师',
        subject_type: 1,
        is_class_teacher:false, //是否是班主任
        is_creator: false, //是否是创建者
        avatar:''
      },
      {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:2, //教师序号
        teacher_name:'张老师',
        subject_type: 2,
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
        parent_id:1, //家长序号
        nick_name:"家长03934", //家长昵称
        relative:'爸爸',
        avatar:''
      },
      {
        student_id:0,  //学生序号
        parent_id:2, //家长序号
        nick_name:"家长03934", //家长昵称
        relative:'爸爸',
        avatar:''
      }
    ],
    msg:"success"
}
```
##### 家长人员列表（教师端）
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
        student_name:'张三',
        parent_id:0, //家长序号
        nick_name:"家长03934", //家长昵称
        relative:'爸爸',
        avatar:''
      },
      {
        student_id:1,  //学生序号
        student_name:'张三',
        parent_id:1, //家长序号
        nick_name:"家长03934", //家长昵称
        relative:'爸爸',
        avatar:''
      },
      {
        student_id:2,  //学生序号
        student_name:'张三',
        parent_id:2, //家长序号
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
#### api/v1/chat/new/group `POST`
* request body
```json
{
    group_name:'二年级'|'', //群组名称，可能为空
    student_list:['张三','李四','王五']
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
            student_list:"张三、刘毅美画面给、张九都·打过、李四张、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你"
        }
    ],
    msg:"success"
}
```
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
            student_list:"张三、刘毅美画面给、张九都·打过、李四张、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你"
        }
    ],
    msg:"success"
}
```

##### 修改群聊名称
#### api/v1/chat/edit/group `POST`
* request body
```json
{
    group_name:'修改后的群名'
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
            group_name:"修改后的群名",
            student_list:"张三、刘毅美画面给、张九都·打过、李四张、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你"
        }
    ],
    msg:"success"
}
```
##### 删除群聊
#### api/v1/chat/delete/group `POST`
* request body
```json
{
    group_id:0,
}
```
* response body
```json
{
 
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
    pageNo:1, //当前页
    pageNum:3, //总页
    pageSize:10, //每页条数
    data:[
        {
            uuid:54657568,
            message_id:0,
            detail_id:0, //消息具体内容的序号
            speaker:'own', //发送者 own:自己，other：其他人
            userName:'张三爸爸',
            userAvatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
            content:'今天张三表现很好', //消息内容
            time:'2023-11-15  14:12:34',
            token:fdgdgvfrtgtgfdgf
        },
       {
            uuid:54657568,
            message_id:0,
            detail_id:1, //消息具体内容的序号
            speaker:'other', //发送者 own:自己，other：其他人
            expertName:'李老师',
            expertAvatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
            content:'今天张三表现很好', //消息内容
            time:'2023-11-15  14:12:34',
            token:fdgdgvfrtgtgfdgf
        },
    ]
    msg:"success"
}
```

### 成长档案页面

##### 个人信息
#### api/v1/growthFile/info `GET`
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
    data: {
      uuid: "45344534345",
      user: 0, //登录身份 0：家长，1：教师
      student_id:'20230204', //学生序号
      student_name: "张三",
      sex:'女',
      birthday:'2009-12-20',
      birthplace:'四川省甘孜藏族自治州',
      address:'四川省甘孜藏族自治州嘉绒步行街38号',
      school:'四川省甘孜小学',
      class:'2023级2班',
      token: "fdgdgvfrtgtgfdgf",
    },
    msg: "success",
  },
```

##### 爱好与特长
#### api/v1/hobby `GET`
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
        name: "阅读",
        active: true,
      },
      {
        name: "运动",
        active: true,
      },
      {
        name: "跑步",
        active: true,
      },
    ],
    msg: "success",
  },
```
#### api/v1/strengths `GET`
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
        name: "绘画",
        active: true,
      },
      {
        name: "滑冰",
        active: true,
      }, 
   ],
    msg: "success",
},
```
##### 提交
#### api/v1/change
* request body
```json
{
hobby:[
{
        name: "阅读",
        active: true,
      },
      {
        name: "运动",
        active: true,
      },
      {
        name: "跑步",
        active: true,
      },
],
strengths:[
{
        name: "绘画",
        active: true,
      },
      {
        name: "滑冰",
        active: true,
      }, 
]
}
