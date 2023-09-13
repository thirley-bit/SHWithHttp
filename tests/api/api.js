export default {
  "identity": {
    code: 1,
    //data为对象
    data: {
      uuid: "45344534345",
      parent_id: 0,
      phone: "11122233345",
      pwd: "qwertyui",
      class_code: "47687867324325344",
      class_name: "一年级一班",
      user: 1, //登录身份 0：家长，1：教师
      student_id:'20230204', //学生序号
      student_name: "张三",
      teacher:'张老师', //如果是教师端返回teacher字段
      nick_name:"家长01323", //家人昵称（家长端返回字段）
      relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆（家长端返回字段）
      avatar: '',
      token: "fdgdgvfrtgtgfdgf",
    },
    msg: "success",
  },
  "parent/user/pass/list":{
    code:1,
    data:[
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
    ],
    msg:'success'
  },
  "parent/user/checked/list":{
    code:1,
    data:[
      {
          uuid: "45344534345",
          parent_id: 0,
          user: 0, //登录身份 0：家长，1：教师
          student_id:'20230204', //学生序号
          student_name: "张三",
          nick_name:"家长01323", //家人昵称
          relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
          avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
          pass:0,  //是否加入班级  -1：未通过，0：待审核，1：通过
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
          pass:-1, //是否加入班级  -1：未通过，0：待审核，1：通过
          reason:'资料不齐全', //不通过原因
          token: "fdgdgvfrtgtgfdgf",
      },
      ],
  msg: "success"
  },
  "change/user":{
    code:1,
    data:{
      uuid: "45344534345",
      parent_id: 0,
      phone: "11122233345",
      pwd: "qwertyui",
      class_code: "47687867324325344",
      class_name: "一年级一班",
      user: 0, //登录身份 0：家长，1：教师
      student_id:'20230214', //学生序号
      student_name: "张三",
      nick_name:"家长01323", //家人昵称
      relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
      avatar: 'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
      token: "fdgdgvfrtgtgfdgf",
    },
    msg: "success",
  },
  //撤销
  "checked/back":{
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
        ],
    msg: "success"
  },
  "teacher/user/pass/list":{
    code:1,
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
        {
          uuid: "45344534345",
          parent_id: 0,
          phone: "11122233345",
          pwd: "qwertyui",
          class_code: "47687867324325344",
          class_name: "一年级一班",
          user: 1, //登录身份 0：家长，1：教师
          student_id:'20232304', //学生序号
          student_name: "王五",
          nick_name:"家长01323", //家人昵称
          relative: "爸爸", //亲属关系  妈妈，爷爷，奶奶，外公，外婆
          avatar: '',
          pass:2,
          reason:'不是本班学生',
          token: "fdgdgvfrtgtgfdgf",
      },
        ],
    msg: "success"
  },
  "teacher/user/checked/list":{
    code:1,
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
  },

  //推荐文章
  "article/tab":{
    code:1,
    data:[
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
    ],
    msg:"success"
  },

  "article/list": {
    code: 1,
    count: 55,
    size: 10,
    current: 1,
    data: [
      {
        uuid: "134554647687988765445398765",
        type: 1, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "0",
        title:
          "认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 1, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "1",
        title:
          "教育教育教育教育教育教育教育教育教育教育教育防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 2, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "2",
        title:
          "安全安全安全安全安全安全安全安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 2, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "3",
        title:
          "安全安全安全安全安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 3, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "4",
        title:
          "智慧智慧智慧智慧智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 3, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "5",
        title:
          "智慧智慧智慧智慧智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 1, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "6",
        title:
          "教育教育教育防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 2, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "7",
        title:
          "安全安全安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        type: 1, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "8",
        title:
          "智慧智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
      {
        uuid: "134554647687988765445398765",
        type: 1, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "9",
        title:
          "教育防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
      {
        uuid: "134554647687988765445398765",
        type: 2, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "10",
        title:
          "安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
      {
        uuid: "134554647687988765445398765",
        type: 3, //接口请求时查找的范围 1:教育，2：安全，3：智慧
        type_id: "11",
        title:
          "智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
    ],
    msg:"success"
  },

  "article/detail": {
    code: 1,
    data: {
            uuid:'134554647687988765445398765',
            type_id:0,
            author:'张老师',
            title:'防溺水创意微视频⑨｜丹巴县城区小学校',
            detail_content:"<p>1:丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过 <br/>微视频</p><h1>微视频</h1>",   //HTML代码，完整页面内容
            create_time:'2023-11-15  14:12:34',
            img_url:"",
    },
    msg: "success",
  },

  //作业
  "subject/time/select":{
    code: 1,
    //data为数组
    data: [
        {
            uuid:'134554647687988765445398765',
            subject_type:0, //科目选择  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:true, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:false, //是否完成作业（家长端）
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
            time:'2023-06-20 14:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
        },
        {
            uuid:'134554647687988765445398765',
            subject_type:1, //科目选择  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:true, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:true, //是否完成作业（家长端）
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
            time:'2023-06-20 16:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
        },
    ], 
    msg: "success"
  },
  "subject/type/title":{
    code:1,
    data:[
      {
        uuid:'134554647687988765445398765',
        subject_type:'all', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'全部'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:'Chinese', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'语文'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:'Maths', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'数学'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:'English', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'英语'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:'Physics', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'物理'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:'Chemistry', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'化学'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
      {
        uuid:'134554647687988765445398765',
        subject_type:'Biology', //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        subject_title:'生物'  //科目选择范围 语文，数学，英语，物理，化学，生物
      },
    ], 
    msg: "success"
  },
  "subject/type/select":{
    code: 1,
    //data为数组
    data: [
        {
            uuid:'134554647687988765445398765',
            subject_type:0, //科目选择  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:true, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:false, //是否完成作业（家长端）
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
            time:'2023-06-20 14:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
        },
        {
            uuid:'134554647687988765445398765',
            subject_type:1, //科目选择  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
            work_id:0, //作业列表序号
            // checked:true, //是否查看状态 0：未查看，1：已查看
            hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
            hasCompleted:true, //是否完成作业（家长端）
            title:'【语文】 2023.04.25 （周二）语文练习',
            author:'张老师',
            content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
            time:'2023-06-20 16:34',
            avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
        },
        {
          uuid:'134554647687988765445398765',
          subject_type:1, //科目选择  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
          work_id:0, //作业列表序号
          // checked:true, //是否查看状态 0：未查看，1：已查看
          hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
          hasCompleted:false, //是否完成作业（家长端）
          title:'【语文】 2023.04.25 （周二）语文练习',
          author:'张老师',
          content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
          time:'2023-06-20 16:34',
          avatar:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
      },
    ], 
    msg: "success"
  },


  "classGroup/list": {
    code: 200,
    content: "success",
    data: [
      {
        id: 1,
        label: "一年级一班",
        value: "一年级一班",
        status: 0,
        checked: false,
        studentArr: [
          {
            id: 1,
            label: "张三",
            value: "张三",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 6,
            label: "张九都·打过",
            value: "张九都·打过",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
      {
        id: 2,
        label: "一年级二班一年级一班一年级一班",
        value: "一年级二班",
        status: 0,
        checked: true,
        studentArr: [
          {
            id: 1,
            label: "张三撒旦士大夫士大夫范德萨对方共和国",
            value: "张三撒旦士大夫士大夫范德萨对方",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
      {
        id: 3,
        label: "一年级三班",
        value: "一年级三班",
        status: 0,
        checked: true,
        studentArr: [
          {
            id: 1,
            label: "张三撒旦士大夫士大夫范德萨对方共和国",
            value: "张三撒旦士大夫士大夫范德萨对方",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
      {
        id: 4,
        label: "一年级四班",
        value: "一年级四班",
        status: 0,
        checked: false,
        studentArr: [
          {
            id: 1,
            label: "张三撒旦士大夫士大夫范德萨对方共和国",
            value: "张三撒旦士大夫士大夫范德萨对方",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
      {
        id: 5,
        label: "一年级五班",
        value: "一年级五班",
        status: 0,
        checked: true,
        studentArr: [
          {
            id: 1,
            label: "张三撒旦士大夫士大夫范德萨对方共和国",
            value: "张三撒旦士大夫士大夫范德萨对方",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
      {
        id: 6,
        label: "张九都·打过",
        value: "张九",
        status: 0,
        checked: true,
        studentArr: [
          {
            id: 1,
            label: "张三撒旦士大夫士大夫范德萨对方共和国",
            value: "张三撒旦士大夫士大夫范德萨对方",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
      {
        id: 7,
        label: "李承白",
        value: "李承白",
        status: 0,
        checked: false,
        studentArr: [
          {
            id: 1,
            label: "张三撒旦士大夫士大夫范德萨对方共和国",
            value: "张三撒旦士大夫士大夫范德萨对方",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
      {
        id: 8,
        label: "黄文王",
        value: "黄文王",
        status: 0,
        checked: true,
        studentArr: [
          {
            id: 1,
            label: "张三撒旦士大夫士大夫范德萨对方共和国",
            value: "张三撒旦士大夫士大夫范德萨对方",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 2,
            label: "李四张",
            value: "李四",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 3,
            label: "王五",
            value: "王五",
            status: 0,
            checked: true,
            img: "",
          },
          {
            id: 4,
            label: "刘毅美画面给",
            value: "刘毅",
            status: 0,
            checked: false,
            img: "",
          },
          {
            id: 5,
            label: "小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你",
            value: "小四",
            status: 0,
            checked: true,
            img: "",
          },
        ],
        // desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
      },
    ],
  },
 

  "subject/list": {
    code: 1,
    content: "success",
    data: [
      {
        uuid:'134554647687988765445398765',
        subject_type:0, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        work_id:0, //作业列表序号
        checked:false, //是否查看状态 0：未查看，1：已查看
        hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
        hasCompleted:0, //是否完成作业（家长端）0:未完成， 1：已完成
        title:'【语文】 2023.04.25 （周二）语文练习',
        author:'张老师',
        content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
        time:'2023-12-12 14:34',
        avatar:'',
    },
    {
      uuid:'134554647687988765445398765',
      subject_type:1, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
      work_id:1, //作业列表序号
      checked:true, //是否查看状态 0：未查看，1：已查看
      hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      hasCompleted:1, //是否完成作业（家长端）
      title:'【数学】 2023.04.25 （周二）语文练习',
      author:'张老师',
      content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
      time:'2023-12-12 14:34',
      avatar:'',
    },
    {
      uuid:'134554647687988765445398765',
      subject_type:2, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
      work_id:2, //作业列表序号
      checked:false, //是否查看状态 0：未查看，1：已查看
      hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      hasCompleted:0, //是否完成作业（家长端）
      title:'【英语】 2023.04.25 （周二）语文练习',
      author:'张老师',
      content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
      time:'2023-12-12 14:34',
      avatar:'',
    },
    {
      uuid:'134554647687988765445398765',
      subject_type:3, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
      work_id:3, //作业列表序号
      checked:false, //是否查看状态 0：未查看，1：已查看
      hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      hasCompleted:1, //是否完成作业（家长端）
      title:'【物理】 2023.04.25 （周二）语文练习',
      author:'张老师',
      content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
      time:'2023-12-12 14:34',
      avatar:'',
    },
    {
      uuid:'134554647687988765445398765',
      subject_type:4, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
      work_id:4, //作业列表序号
      checked:true, //是否查看状态 0：未查看，1：已查看
      hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      hasCompleted:0, //是否完成作业（家长端）
      title:'【化学】 2023.04.25 （周二）语文练习',
      author:'张老师',
      content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
      time:'2023-12-12 14:34',
      avatar:'',
    },
    {
      uuid:'134554647687988765445398765',
      subject_type:5, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
      work_id:5, //作业列表序号
      checked:false, //是否查看状态 0：未查看，1：已查看
      hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      hasCompleted:0, //是否完成作业（家长端）
      title:'【生物】 2023.04.25 （周二）语文练习',
      author:'张老师',
      content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
      time:'2023-12-12 14:34',
      avatar:'',
    },
    ],
  },

 
  "subject/detail":{
    code:1,
    data:{
        uuid:'134554647687988765445398765',
        work_id:0,
        hasCompleted:0, //是否完成作业（家长端）
        title:'【语文】 2023.04.25 （周二）语文练习',
        author:'张老师',
        detail_content:"<p>１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样</p>",   //HTML代码，完整页面内容
        time:'2023-11-15  14:12:34',
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
      }
  },

  //家长端
  "subject/completed":{
    code:1,
    data:[
      {
        uuid:'134554647687988765445398765',
        // subject_type:0, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
        work_id:0, //作业列表序号
        checked:true, //是否查看状态 0：未查看，1：已查看
        hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
        hasCompleted:0, //是否完成作业（家长端）0:未完成， 1：已完成
        title:'【语文】 2023.04.25 （周二）语文练习',
        author:'张老师',
        content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
        time:'2023-12-12 14:34',
        avatar:'',
    },
    {
      uuid:'134554647687988765445398765',
      // subject_type:1, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
      work_id:1, //作业列表序号
      checked:true, //是否查看状态 0：未查看，1：已查看
      hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      hasCompleted:1, //是否完成作业（家长端）
      title:'【数学】 2023.04.25 （周二）语文练习',
      author:'张老师',
      content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
      time:'2023-12-12 14:34',
      avatar:'',
    },
    {
      uuid:'134554647687988765445398765',
      // subject_type:2, //科目选择范围  '': 全部，0：语文，1：数学，2：英语，3：物理，4：化学，5：生物
      work_id:2, //作业列表序号
      checked:true, //是否查看状态 0：未查看，1：已查看
      hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      hasCompleted:0, //是否完成作业（家长端）
      title:'【英语】 2023.04.25 （周二）语文练习',
      author:'张老师',
      content:"１、完成课后习题１、２；２、想念初中的语文课。映着黄昏的微光，半躺半靠在床上，半醒半睡间，恍恍惚惚地想到了语文课本，忽然，那些隽永的语句，仿佛伴随着老师抑扬顿挫的声音，隐隐回响在脑海，事情就像发生在昨天一样",
      time:'2023-12-12 14:34',
      avatar:'',
    },
    ],
    msg:"success"
  },

  "subject/feedback/detail":{
    code:1,
    data:[
      {work_id:0,
      student_id:0,
      student_name:'张三',
      relative:'爸爸',
      feed_back_id:0, 
      feed_back:"一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
      create_time:'2023-11-15  14:12:34',
      reply:[
          {
            feed_back_id:0,
            reply_id:0,
            from:'张老师',
            avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
            to:'张三爸爸',
            content:'作业内容有问题?作业内容有问题?作业内容有问题?作业内容有问题?作业内容有问题?作业内容有问题?',
            time:'2023-2-21 12:34'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题?作业内容有问题?作业内容有问题?作业内容有问题?作业内容有问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },{
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
          {
            feed_back_id:0,
            reply_id:1,
            from:'张三爸爸',
            to:'张老师',
            content:'有什么问题'
          },
      ]}
    ],
    msg:"success"
  },

  "subject/edit/feedback/detail":{
    code:1,
    data:{
      work_id:0,
      student_id:0,
      student_name:'张三',
      relative:'爸爸', 
      feed_back:"<p>dfddvgdfvgdfgbfb fgbhfbhfhb第一自然段的内容是基地及慈善的成绩是底层就v互动和v大夫v回他如果让他如果突然个人复的跟他沟通人</p>",
      create_time:'2023-11-15  14:12:34',
      avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
      reply:[
          {
          from:'张老师',
          to:'张三爸爸',
          content:'ffgff'
          },
          {
          from:'张三爸爸',
          to:'张老师',
          content:'ffgff'
          },
      ]
    },
    msg:"success"
  },
  //教师端
  "subject/feedback/detail/list":{
    code:1,
    data:[
      {
          work_id:0,
          student_id:0,
          student_name:'张三',
          relative:'爸爸', 
          feed_back_id:0,
          feed_back:"一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
          create_time:'2023-11-15  14:12:34',
          avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
          reply:[
              {
                  feed_back_id:0,
                  reply_id:0,
                  from:'张老师',
                  to:'张三爸爸',
                  content:'有问题一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是'
              },
              {
                  feed_back_id:0,
                  reply_id:1,
                  from:'张三爸爸',
                  to:'张老师',
                  content:'没有问题一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是'
              },
          ]
      },
      {
          work_id:0,
          student_id:0,
          student_name:'李四',
          relative:'爸爸', 
          feed_back_id:1,
          feed_back:"一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是",
          create_time:'2023-11-15  14:12:34',
          avatar:"http://pay.cdjjbtm.com/upload/video_img/20200810/9a243c0a0793ce45671084bc1a225a13.png",
          reply:[
              {
                  feed_back_id:1,
                  reply_id:0,
                  from:'张老师',
                  to:'张三爸爸',
                  content:'什么问题一条浩浩荡荡的长江大河，有时流到很宽阔的境界，平原无际，一泻万里。有时流到很逼狭的境界，两岸丛山叠岭，绝壁断崖，江河流于其间，回环曲折，极其险峻。民族生命的进程，其经历亦复如是'
              },
              {
                  feed_back_id:1,
                  reply_id:1,
                  from:'张三爸爸',
                  to:'张老师',
                  content:'123'
              },
              {
                  feed_back_id:1,
                  reply_id:2,
                  from:'张三爸爸',
                  to:'张老师',
                  content:'345问题'
              },
          ]
      },
  ],
    msg:"success"
  },
  "subject/edit/detail":{
    code:1,
    data:{
      uuid:'134554647687988765445398765',
      work_id:0,
      title:'【语文】 2023.04.25 （周二）语文练习',
      author:'张老师',
      detail_content:"<p>正文内容</p>",   //HTML代码，完整页面内容
      time:'2023-11-15  14:12:34',
      avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
      token:'fdgdgvfrtgtgfdgf'
    }
  },

  "students/list":{
    code:1,
    data:[
      {
        work_id:0, //作业序号
        hasCompleted:true,  //是否完成作业 0：未完成，1：已完成
        checked:true,  //是否签到 true:可以签到，false：不签到
        student_id:0, //学生序号 
        student_name:'11张三张三张三张三',
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
      },
      {
        work_id:0,
        hasCompleted:true,
        checked:true,  //是否签到 
        student_id:1,
        student_name:'22张四李四王五',
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
      },
      {
        work_id:0,
        hasCompleted:true,
        checked:false,  //是否签到 
        student_id:2,
        student_name:'33张三张三李四李四',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:false,
        checked:true,  //是否签到 
        student_id:3,
        student_name:'44李四王五',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:false,
        checked:false,  //是否签到 
        student_id:4,
        student_name:'55王五',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:true,
        checked:false,  //是否签到 
        student_id:5,
        student_name:'66李四李四王五',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:true,
        checked:false,  //是否签到 
        student_id:6,
        student_name:'77李四李四王五',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:false,
        checked:true,  //是否签到 
        student_id:7,
        student_name:'88李四李四王五',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:false,
        checked:true,  //是否签到 
        student_id:8,
        student_name:'99李四李四王五',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:true,
        checked:true,  //是否签到 
        student_id:9,
        student_name:'00李四李四王五',
        avatar:''
      },
      {
        work_id:0,
        hasCompleted:true,
        checked:false,  //是否签到 
        student_id:10,
        student_name:'李四李四王五',
        avatar:''
      }
    ],
    msg:"success"
  },
  "sign/student":{
    code:1,
    data:[
      {
        student_id:0,
        student_name:'张三',
        checked:true
      }
    ]
  },
  // "subject/students/list":{
  //   code:1,
  //   data:[
  //     {
  //       work_id:0, //作业序号
  //       hasCompleted:0,  //是否完成作业 0：未完成，1：已完成
  //       student_id:0, //学生序号 
  //       student_name:'张三放热峰认同感认同感认同感飞人废人'
  //     },
  //     {
  //       work_id:0,
  //       hasCompleted:1,
  //       student_id:1,
  //       student_name:'张三一塌糊涂有'
  //     },
  //     {
  //       work_id:0,
  //       hasCompleted:1,
  //       student_id:2,
  //       student_name:'张三与教育经验'
  //     },
  //     {
  //       work_id:0,
  //       hasCompleted:0,
  //       student_id:3,
  //       student_name:'张三'
  //     },
  //     {
  //       work_id:0,
  //       hasCompleted:0,
  //       student_id:4,
  //       student_name:'张三教育教育教育局拒绝'
  //     },
  //     {
  //       work_id:0,
  //       hasCompleted:1,
  //       student_id:5,
  //       student_name:'张三'
  //     }
  //   ],
  //   msg:"success"
  // },
 





  //通知
  "notice/list": {
    code: 200,
    content: "success",
    data: [
      {
        uuid:'134554647687988765445398765',
        notice_id:0, //作业列表序号
        checked: 0, //是否已查看
        hasNew: 0, //是否有新通知
        title: "安全通知",
        author: "张老师",
        time: "2023-12-12 14:34",
        content:
          "家家校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校",
        avatar: "",
      },
      {
        uuid:'134554647687988765445398765',
        checked: 0,
        notice_id:1,
        hasNew: 0,
        title: "安全通知",
        author: "张老师",
        time: "2023-12-12 14:34",
        content:
          "家家校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校",
        avatar: "",
      },
      {
        uuid:'134554647687988765445398765',
        checked: 1,
        notice_id:2,
        hasNew: 1,
        title: "安全通知",
        author: "张老师",
        time: "2023-12-12 14:34",
        content:
          "家家校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校",
        avatar: "",
      },
      {
        uuid:'134554647687988765445398765',
        notice_id:3,
        checked: 1,
        hasNew: 1,
        title: "安全通知",
        author: "张老师",
        time: "2023-12-12 14:34",
        content:
          "家家校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校",
        avatar: "",
      },
      {
        uuid:'134554647687988765445398765',
        notice_id:4,
        checked: 1,
        hasNew: 1,
        hasCompleted: 0,
        title: "安全通知",
        author: "张老师",
        time: "2023-12-12 14:34",
        content:
          "家家校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校校沟通方面的应用比较好推广，目前学校网都是通的，硬件基础好，迄今为止，该校建校124年，位于丹巴县城，接收的学生多为机关、企事业单位双职工家庭的子女。该校共计学生581人，男女比例为4：6，女生居多，设立1-6年级，每一个年级有2个平行班。学校",
        avatar: "",
      },
    ],
    msg:"success"
  },
  "notice/detail":{
    code:1,
    data:{
      uuid:'134554647687988765445398765',
      notice_id:0, //作业列表序号
      checked:true, //是否查看状态 0：未查看，1：已查看
      hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      title:'安全注意事项',
      author:'张老师',
      detail_content:"<p>１、vfgvfgvfvbfgb安全安全安全安全</p>",
      time:'2023-12-12 14:34',
      avatar:'',
      },
      msg:"success"
  },

  //私密成绩
  "score/list":{
    code:1,
    data:[
      {
        uuid:'134554647687988765445398765',
        score_id:0, //成绩列表序号
        hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
        title:'语文考试',
        author:'张老师',
        publish:1, //是否发布成绩 0：未发布成绩， 1：未发布成绩
        test_time:'2023-11-23 12:56',
        time:'2023-12-12 14:34',
        avatar:'',
      },
      {
        uuid:'134554647687988765445398765',
        score_id:1, //成绩列表序号
        hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
        title:'语文考试',
        author:'张老师',
        publish:1,
        test_time:'2023-11-23 12:56',
        time:'2023-12-12 14:34',
        avatar:'http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png',
      },
      {
        uuid:'134554647687988765445398765',
        score_id:2, //成绩列表序号
        hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
        title:'语文考试',
        author:'张老师',
        publish:0,
        test_time:'2023-11-23 12:56',
        time:'2023-12-12 14:34',
        avatar:'http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png',
      },
      {
        uuid:'134554647687988765445398765',
        score_id:3, //成绩列表序号
        hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
        title:'语文考试',
        author:'张老师',
        publish:0,
        test_time:'2023-11-23 12:56',
        time:'2023-12-12 14:34',
        avatar:'http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png',
      },
      {
        uuid:'134554647687988765445398765',
        score_id:4, //成绩列表序号
        hasNew:1,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
        title:'语文考试',
        author:'张老师',
        publish:1,
        test_time:'2023-11-23 12:56',
        time:'2023-12-12 14:34',
        avatar:'http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png',
      },
    ],
    msg:"success"
  },
  "score/detail":{
    code:1,
    data:{
      uuid:'134554647687988765445398765',
      score_id:0, //作业列表序号
      hasNew:0,  //是否有新的家长反馈消息 0：无新反馈， 1：有新反馈
      title:'期末考试(一年级）',
      author:'张老师',
      publish:1,
      detail_content:"考试时间：2023-11-23 12:56 ",
      time:'2023-12-12 14:34',
      avatar:'http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png',
      },
      msg:"success"
  },
  "score/student/list":{
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
  },

  
  //资料下载
  "source/list":{
    code:1,
    data:[
      {
        uuid:'3454465456756',
        source_id:0, //资料序号
        name:'SH.rar',
        type:'rar',
        loader:'张老师',
        load_time:'2023-12-11  21:30',
        url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      },
      {
        uuid:'3454465456756',
        source_id:1, //资料序号
        name:'数学学习笔记.package',
        type:'package',
        loader:'张老师',
        load_time:'2023-12-11  21:30',
        url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      },
      {
        uuid:'3454465456756',
        source_id:2, //资料序号
        name:'学习笔记.jpg',
        type:'jpg',
        loader:'张老师',
        load_time:'2023-12-11  21:30',
        url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      },
      {
        uuid:'3454465456756',
        source_id:3, //资料序号
        name:'学习笔记.mp4',
        type:'mp4',
        loader:'张老师',
        load_time:'2023-12-11  21:30',
        url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      },
      
    ]
  },
  "delete":{
    code:1,
    data:[],
    msg:'success'
  },

  //参赛通道
  "channel/list":{
    code:1,
    data:[
      {
        uuid:234235435,
        channel_id:0, //参赛通道序号
        name:'四六级报名官网', //参赛名称
        url:'http://cet.neea.edu.cn/',  //参赛访问地址
      },
      {
        uuid:234235435,
        channel_id:1, //参赛通道序号
        name:'全国青少年科技创新大赛', //参赛名称
        url:'http://www.chinaaosai.com/about_us.php?id=44',  //参赛访问地址
      },
      {
        uuid:234235435,
        channel_id:2, //参赛通道序号
        name:'全国小学生信息技术创新与实践大赛', //参赛名称
        url:'http://www.chinaaosai.com/about_us.php?id=44',  //参赛访问地址
      }
    ],
    msg:'success'
  }, 

  //优惠政策
  "policy/list": {
    code: 1,
    count: 55,
    size: 10,
    current: 1,
    data: [
      {
        uuid: "134554647687988765445398765",
        policy_id:0,
        title:
          "中职高职优惠政策",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id: 1, 
        title:
          "教育教育教育教育教育教育教育教育教育教育教育防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id: 2, 
        title:
          "安全安全安全安全安全安全安全安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id: 3,
        title:
          "安全安全安全安全安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id: 4,
        title:
          "智慧智慧智慧智慧智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id: 5, 
        title:
          "智慧智慧智慧智慧智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id: 6,
        title:
          "教育教育教育防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id:7,
        title:
          "安全安全安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id:8,
        title:
          "智慧智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id:9,
        title:
          "教育防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id:10,
        title:
          "安全防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
      {
        uuid: "134554647687988765445398765",
        policy_id:11,
        title:
          "智慧防溺水创意微视频⑨｜丹巴县城区小学校供热通风个体人格认同感认同感认同感沟通过",
        create_time: "2023-11-15  14:12:34",
        img_url:
          "",
      },
    ],
    msg:"success"
  },
  

  //相册
  "photos/list":{
    code:1,
    data:[
      {
        uuid:'324333546',
        photo_id:0, //相册序号
        name:'午休情况', //相册名称
        detail:'午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况',//相册描述
        num:2,
        url:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg',
      },
      {
        uuid:'324333546',
        photo_id:1,
        name:'餐食情况',
        detail:'午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况午休情况',//相册描述
        num:2,
        url:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
      },
      {
        uuid:'324333546',
        photo_id:2,
        name:'活动情况',
        num:2,
        url:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
      },
      {
        uuid:'324333546',
        photo_id:3,
        name:'课堂情况',
        num:2,
        url:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
      },
      {
        uuid:'324333546',
        photo_id:4,
        name:'其他情况',
        num:5,
        url:'http://123.57.149.51/upload/upload_img/20230518/7949e771acece58fcc3523fe30c9b489.jpg',
      },
    ],
    msg:'success'
  },
  "photos/detail":{
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
                      uuid:'343544545',
                      url_id:0,
                      image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
                  },
                  {
                    uuid:'343544545',
                    url_id:1,
                    image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
                },{
                  uuid:'343544545',
                  url_id:0,
                  image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
              },
              {
                uuid:'343544545',
                url_id:1,
                image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
            },{
              uuid:'343544545',
              url_id:0,
              image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
          },
          {
            uuid:'343544545',
            url_id:1,
            image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
        },{
          uuid:'343544545',
          url_id:0,
          image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
      },
      {
        uuid:'343544545',
        url_id:1,
        image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
    },
              ] //照片列表
          },
          {
            uuid:'324333546',
            photo_id:0, //相册序号
            uploader:'张三家长', //照片上传者
            uploader_avatar:'http://123.57.149.51/upload/upload_img/20230510/1d4b6d8097826b0c33576e68e88f84f5.png',
            upload_time:'2023-09-22 13:59', //照片上传时间
            photo_list:[
                {
                    uuid:'343544545',
                    url_id:0,
                    image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
                },
                {
                  uuid:'343544545',
                  url_id:1,
                  image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
              },{
                uuid:'343544545',
                url_id:0,
                image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
            },
            {
              uuid:'343544545',
              url_id:1,
              image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
          },{
            uuid:'343544545',
            url_id:0,
            image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
        },
        {
          uuid:'343544545',
          url_id:1,
          image:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg',
      },
            ] //照片列表
        },
          ],
      msg:'success'
  },
  "new/photos":{}, //新建相册
  "publish/photos":{}, //上传照片

  //校园食谱
  "cook/list":{
    code:1,
    data:[
      {
        uuid:'3446557657686868',
        date:'2023-5-29', //本周周一至周五日期
        week_day:'星期一',
        recipe:{
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
        }
      },
      {
        uuid:'3446557657686868',
        date:'2023-5-30', 
        week_day:'星期三',
        recipe:{
          vegetable:[
            {
              title:'土豆丝'
            },
          ],
          meat:[
            {
              title:'烂肉莲白粉丝'
            },
            {
              title:'棒骨萝卜汤'
            },
          ]
        }
      },
      {
        uuid:'3446557657686868',
        date:'2023-5-31', 
        week_day:'星期二',
        recipe:{
          vegetable:[
            {
              title:'西红柿炒鸡蛋'
            },
            
          ],
          meat:[
            {
              title:'红烧肉'
            },
          ]
        }
      },
    ],
    msg:'success'
  },





  //通讯录
  "address/teacher/list":{
    code:1,
    data:[
      {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:0, //教师序号
        teacher:'张老师',
        note: '语文',
        is_class_teacher:true, //是否是班主任
        is_creator: true, //是否是创建者
        avatar:'http://123.57.149.51/upload/upload_img/20230518/2b1e874f9b5d6aaba56c322aeeeb7dfa.jpg'
      },
      {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:1, //教师序号
        teacher:'张老师',
        note: '语文',
        is_class_teacher:false, //是否是班主任
        is_creator: false, //是否是创建者
        avatar:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg'
      },
      {
        uuid:'dffvdvbfgbfgbgfhb',
        teacher_id:2, //教师序号
        teacher:'张老师',
        note: '语文',
        is_class_teacher:false, //是否是班主任
        is_creator: false, //是否是创建者
        avatar:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg'
      }
    ],
    msg:"success"
  },
  "address/parent/list":{
    code:1,
    data:[
      {
        student_id:0,  //学生序号
        parent_id:0, //家长序号
        nick_name:'家长01234', //家长昵称
        relative:'爸爸',
        avatar:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg'
      },
      {
        student_id:0,  //学生序号
        parent_id:1, //家长序号
        nick_name:'家长01234', //家长昵称
        relative:'妈妈',
        avatar:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg'
      },
      {
        student_id:0,  //学生序号
        parent_id:2, //家长序号
        nick_name:'家长01234', //家长昵称
        relative:'爷爷',
        avatar:'http://123.57.149.51/upload/upload_img/20230518/882d1e228be02f0124861a6111a27d5d.jpg'
      }
    ],
    msg:"success"
  },
  //添加家人
  "addressList/addFamily":{
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
  },
  //群聊列表
  "chat/group/list":{
    code:1,
    data:[
      {
        uuid:'efreferfer',
        group_id:0, //群聊序号
        group_name:"一年级一班",
        //content不确定，后期可能会调整
        content:'张三、刘毅美画面给、张九都·打过、李四张、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
      {
        uuid:'efreferfer',
        group_id:1, //群聊序号
        group_name:"一年级二班",
        content:'张三、李四张、刘毅美画面给、张九都·打过、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
      {
        uuid:'efreferfer',
        group_id:2, //群聊序号
        group_name:"二年级三班",
        content:'张三、张九都·打过、刘毅美画面给、李四张、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
      {
        uuid:'efreferfer',
        group_id:3, //群聊序号
        group_name:"一年级一班一年级三班",
        content:'张三、刘毅美画面给、张九都·打过、李四张、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
      {
        uuid:'efreferfer',
        group_id:4, //群聊序号
        group_name:"一年级六班",
        content:'张三、张九都·打过、李四张、刘毅美画面给、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
      {
        uuid:'efreferfer',
        group_id:5, //群聊序号
        group_name:"一年级六班",
        content:'张三、张九都、李四张、刘毅美画面给、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
      {
        uuid:'efreferfer',
        group_id:6, //群聊序号
        group_name:"一年级六班",
        content:'李四张、刘毅美画面给、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
      {
        uuid:'efreferfer',
        group_id:7, //群聊序号
        group_name:"四年级六班",
        content:'张三、张九都·打过、李四张、刘毅美画面给、小四的地方很精美画面给哈哈哈哈哈哈哈弄好给你'
      },
    ],
    msg:"success"
  },

  //私信列表
  "message/list":{
    code:1,
    data:[
      {
        uuid:'3434353454677',
        message_id:0, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:1, //消息序号
        teacher:'张老师',
        new:1,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:2, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:3, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:4, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:5, //消息序号
        teacher:'张老师',
        new:1,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
    ],
    msg:"success"
  },
  "message/updateListById":{
    code:1,
    data:[
      {
        uuid:'3434353454677',
        message_id:0, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:1, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:2, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:3, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:4, //消息序号
        teacher:'张老师',
        new:0,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
      {
        uuid:'3434353454677',
        message_id:5, //消息序号
        teacher:'张老师',
        new:1,  //是否有新消息 0：无新消息，1:有新消息
        note:'大富大贵的鬼地方',
        time:'2023-11-15  14:12:34', //可以返回时间戳
        avatar:"http://123.57.149.51/upload/upload_img/20230517/4382dbf0860709e3b46b3bb9ffe94a13.jpg",
        token:'fdgdgvfrtgtgfdgf'
      },
    ],
    msg:"success"
  },
  "message/detail":{
    code:1,
    pageNo:1,
    pageNum:5,
    pageSize:10,
    data:[
      {
        uuid:54657568,
        message_id:0,
        detail_id:0, //消息具体内容的序号
        speaker:'own', //发送者 own:自己，other：其他人
        name:'张三爸爸',
        avatar:'',
        content:'今天张三表现很好1', //消息内容
        time:'2023-11-15  14:12:34',
    },
        {
              uuid:54657568,
              message_id:0,
              detail_id:1, //消息具体内容的序号
              speaker:'other', //发送者 own:自己，other：其他人
              name:'李老师',
              avatar:'',
              content:'今天张三表现很好2', //消息内容
              time:'2023-11-15  14:12:34',
          },
          {
            uuid:54657568,
            message_id:0,
            detail_id:0, //消息具体内容的序号
            speaker:'own', //发送者 own:自己，other：其他人
            name:'张三爸爸',
            avatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
            content:'今天张三表现很好3', //消息内容
            time:'2023-11-15  14:12:34',
        },
      {
            uuid:54657568,
            message_id:0,
            detail_id:1, //消息具体内容的序号
            speaker:'other', //发送者 own:自己，other：其他人
            name:'李老师',
            avatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
            content:'今天张三表现很好', //消息内容
            time:'2023-11-15  14:12:34',
        },
        {
          uuid:54657568,
          message_id:0,
          detail_id:0, //消息具体内容的序号
          speaker:'own', //发送者 own:自己，other：其他人
          name:'张三爸爸',
          avatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
          content:'今天张三表现很好', //消息内容
          time:'2023-11-15  14:12:34',
      },
      {
          uuid:54657568,
          message_id:0,
          detail_id:1, //消息具体内容的序号
          speaker:'other', //发送者 own:自己，other：其他人
          name:'李老师',
          avatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
          content:'今天张三表现很好', //消息内容
          time:'2023-11-15  14:12:34',
      },
      {
        uuid:54657568,
        message_id:0,
        detail_id:0, //消息具体内容的序号
        speaker:'own', //发送者 own:自己，other：其他人
        name:'张三爸爸',
        avatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        content:'今天张三表现很好，倒数第四条', //消息内容
        time:'2023-11-15  14:12:34',
      },
      {
        uuid:54657568,
        message_id:0,
        detail_id:1, //消息具体内容的序号
        speaker:'other', //发送者 own:自己，other：其他人
        name:'李老师',
        avatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        content:'今天张三表现很好，倒数第三条', //消息内容
        time:'2023-11-15  14:12:34',
      },
      {
        uuid:54657568,
        message_id:0,
        detail_id:0, //消息具体内容的序号
        speaker:'own', //发送者 own:自己，other：其他人
        name:'张三爸爸',
        avatar:'',
        content:'今天张三表现很好，倒数第二条', //消息内容
        time:'2023-11-15  14:12:34',
      },
      {
        uuid:54657568,
        message_id:0,
        detail_id:1, //消息具体内容的序号
        speaker:'other', //发送者 own:自己，other：其他人
        name:'李老师',
        avatar:'https://ts1.cn.mm.bing.net/th?id=OIP-C.Rmu2HNfPTot9nN9kWt0dbgHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        content:'今天张三表现很好，最后一条', //消息内容
        time:'2023-11-15  14:12:34',
      },
    ],
    msg:"success"
  },


  //成长档案页面接口
  "growthFile/info": {
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
  //爱好与特长
  "hobby": {
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
      {
        name: "看书",
        active: false,
      },
      {
        name: "看书",
        active: false,
      },
      {
        name: "看书看书看书",
        active: false,
      },
      {
        name: "看书",
        active: false,
      },
      {
        name: "看书看书看书看书看书看书看书看书看书",
        active: false,
      },
      {
        name: "看书看书看书看书看书看书看书看看书看书",
        active: true,
      },
      {
        name: "看书",
        active: false,
      },
    ],
    msg: "success",
  },
  "strengths": {
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
      {
        name: "看书",
        active: false,
      },
      {
        name: "看书",
        active: false,
      },
      {
        name: "看书",
        active: false,
      },
      {
        name: "看书看书看书",
        active: true,
      },
      {
        name: "看书",
        active: false,
      },
      {
        name: "看书看书看书看书看书看书看书看书看书",
        active: false,
      },
      {
        name: "看书看书看书看书看书看书看书看看书看书",
        active: false,
      },
      {
        name: "看书",
        active: false,
      },
    ],
    msg: "success",
  },
}



