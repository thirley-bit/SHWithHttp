import  {  useState } from 'react';
import  { useRouter } from "@tarojs/taro";
import { View, Text, Button, Form,  Picker, ScrollView } from '@tarojs/components'
import './sign.less'

function Sign(props) {
  const scrollTop = 0;
  const Threshold = 20;
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(router.params.user)
  const [isEdit, setIsEdit] = useState(true)
  const [students, setStudents] = useState([
    {
      id: 1,
      name: '张三撒旦士大夫士大夫范德萨对方',
      value: '张三撒旦士大夫士大夫范德萨对方',
      status: 0,
      checked: false
    },
    {
      id: 2,
      name: '李四张',
      value: '李四',
      status: 0,
      checked: true
    },
    {
      id: 3,
      name: '王五',
      value: '王五',
      status: 0,
      checked: true
    },
    {
      id: 4,
      name: '刘毅美画面给',
      value: '刘毅',
      status: 1,
      checked: false
    },
    {
      id: 5,
      name: '小四的地方很精美画面给',
      value: '小四',
      status: 0,
      checked: true
    },
    {
      id: 6,
      name: '张九都·打过',
      value: '张九',
      status: 0,
      checked: true
    },
    {
      id: 7,
      name: '李承白',
      value: '李承白',
      status: 0,
      checked: false
    },
    {
      id: 8,
      name: '黄文王',
      value: '黄文王',
      status: 0,
      checked: true
    },
    {
      id: 9,
      name: '方赵宇发发',
      value: '方赵宇',
      status: 1,
      checked: false
    },
    {
      id: 10,
      name: '张茂如美画面给',
      value: '张茂如',
      status: 0,
      checked: true
    },
    {
      id: 11,
      name: '邓诗意',
      value: '邓诗意',
      status: 0,
      checked: true
    },
    {
      id: 12,
      name: '黄义强',
      value: '黄义强',
      status: 1,
      checked: false
    },
    {
      id: 13,
      name: '黄伟毅',
      value: '黄伟毅',
      status: 0,
      checked: true
    },
    {
      id: 1,
      name: '张三撒旦士大夫士大夫范德萨对方',
      value: '张三撒旦士大夫士大夫范德萨对方',
      status: 0,
      checked: false
    },
    {
      id: 2,
      name: '李四法国发过',
      value: '李四',
      status: 0,
      checked: true
    },
    {
      id: 3,
      name: '王五',
      value: '王五',
      status: 0,
      checked: true
    },
    {
      id: 4,
      name: '刘毅',
      value: '刘毅',
      status: 1,
      checked: false
    },
    {
      id: 5,
      name: '小四法国韩国韩国',
      value: '小四',
      status: 0,
      checked: true
    },
    {
      id: 6,
      name: '张九人纷纷',
      value: '张九',
      status: 0,
      checked: true
    },
    {
      id: 7,
      name: '李承会更好白',
      value: '李承白',
      status: 0,
      checked: false
    },
    {
      id: 8,
      name: '黄文王',
      value: '黄文王',
      status: 0,
      checked: true
    },
    {
      id: 9,
      name: '方赵宇科技立即立即即可很尴尬规划',
      value: '方赵宇',
      status: 1,
      checked: false
    },
    {
      id: 10,
      name: '张茂如',
      value: '张茂如',
      status: 0,
      checked: true
    },
    {
      id: 11,
      name: '邓诗意',
      value: '邓诗意',
      status: 0,
      checked: true
    },
    {
      id: 12,
      name: '黄义强',
      value: '黄义强',
      status: 1,
      checked: false
    },
    {
      id: 13,
      name: '黄伟毅',
      value: '黄伟毅',
      status: 0,
      checked: true
    },
    {
      id: 1,
      name: '张三撒旦士大夫士大夫·范德萨对方法国发',
      value: '张三撒旦士大夫士大夫范德萨对方',
      status: 0,
      checked: false
    },
    {
      id: 2,
      name: '李四',
      value: '李四',
      status: 0,
      checked: true
    },
    {
      id: 3,
      name: '王该方法分隔符分隔符',
      value: '王五',
      status: 0,
      checked: true
    },
    {
      id: 4,
      name: '刘毅',
      value: '刘毅',
      status: 1,
      checked: false
    },
    {
      id: 5,
      name: '小四',
      value: '小四',
      status: 0,
      checked: true
    },
    {
      id: 6,
      name: '张九不够方便方便',
      value: '张九',
      status: 0,
      checked: true
    },
    {
      id: 7,
      name: '李承白',
      value: '李承白',
      status: 0,
      checked: false
    },
    {
      id: 8,
      name: '黄文王',
      value: '黄文王',
      status: 0,
      checked: true
    },
    {
      id: 9,
      name: '方赵宇',
      value: '方赵宇',
      status: 1,
      checked: false
    },
    {
      id: 10,
      name: '张茂如',
      value: '张茂如',
      status: 0,
      checked: true
    },
    {
      id: 11,
      name: '邓诗意',
      value: '邓诗意',
      status: 0,
      checked: true
    },
    {
      id: 12,
      name: '黄义强',
      value: '黄义强',
      status: 1,
      checked: false
    },
    {
      id: 13,
      name: '黄伟毅',
      value: '黄伟毅',
      status: 0,
      checked: true
    },
    {
      id: 1,
      name: '张三撒旦士大夫士大夫范德萨对方',
      value: '张三撒旦士大夫士大夫范德萨对方',
      status: 0,
      checked: false
    },
    {
      id: 2,
      name: '李四',
      value: '李四',
      status: 0,
      checked: true
    },
    {
      id: 3,
      name: '王五',
      value: '王五',
      status: 0,
      checked: true
    },
    {
      id: 4,
      name: '刘毅',
      value: '刘毅',
      status: 1,
      checked: false
    },
    {
      id: 5,
      name: '小四',
      value: '小四',
      status: 0,
      checked: true
    },
    {
      id: 6,
      name: '张九',
      value: '张九',
      status: 0,
      checked: true
    },
    {
      id: 7,
      name: '李承白',
      value: '李承白',
      status: 0,
      checked: false
    },
    {
      id: 8,
      name: '黄文王',
      value: '黄文王',
      status: 0,
      checked: true
    },
    {
      id: 9,
      name: '方赵宇',
      value: '方赵宇',
      status: 1,
      checked: false
    },
    {
      id: 10,
      name: '张茂如',
      value: '张茂如',
      status: 0,
      checked: true
    },
    {
      id: 11,
      name: '邓诗意',
      value: '邓诗意',
      status: 0,
      checked: true
    },
    {
      id: 12,
      name: '黄义强',
      value: '黄义强',
      status: 1,
      checked: false
    },
    {
      id: 13,
      name: '黄伟毅反对法52',
      value: '黄伟毅',
      status: 0,
      checked: true
    },
  ])
  const [student, setStudent] = useState({
    id: 2,
    name: '张三撒旦士大夫士大夫范德萨对方',
    status: 0
  })
  const [time, setTime] = useState('17:50')

  const handleChange = () => {
    setIsEdit(!isEdit)
  }
  const formSubmit = (index) => {
    console.log(index)
  }

  const signHandle = (item, id) => {
    setStudent({
      id: 2,
      name: '张三',
      status: 1
    })
    // eslint-disable-next-line no-shadow
    const newStudents = students.map((item) => {
      if (item.id === id) {
        const status = 1
        return {
          ...item,
          status
        }
      } else {
        return { ...item }
      }
    })
    setStudents(newStudents)
  }
  
  const onTimeChange = (e) => {
    console.log(e.detail.value)
    setTime(e.detail.value)
  }
  const scrollHeight = {
    height: '550px'
  }
  const onScroll = () => {
    console.log("scroll")
  }
  console.log(students.length)
  return (

    <View className='index'>

      {
        user === "teacher" ?
          <View>
            <View className='text'>
              <Picker mode='time' onChange={onTimeChange}>放学时间：{time}</Picker>
              <Text onClick={() => handleChange()}>
                请确认学生是否到校
              </Text>
              <View>
                <Text className='text-send'>
                  点击学生将发送消息至家长确定学生到校情况
                </Text>
              </View>
            </View>

            <ScrollView
              className='scrollView'
              scrollY
              scrollWithAnimation
              style={scrollHeight}
              scrollTop={scrollTop}
              lowerThreshold={Threshold}
              upperThreshold={Threshold}
              onScroll={() => onScroll()}
            >
              <View className='formW'>
                {
                  students.map((item, index) => {
                    const name = item.name
                    let className = 'form'
                    if (name.length > 15) {
                      className += ' form100'
                    } else if (name.length > 9) {
                      className += ' form75'
                    }
                    else if (name.length > 3) {
                      className += ' form50'
                    }

                    return <Form className={className} key={index} onSubmit={() => formSubmit(item.id)}>
                      {
                        item.status === 0 ?
                          <Button className='signButton' type='primary' size='mini' onClick={() => signHandle(item, item.id)}>{name}</Button> :
                          <Button disabled className='signButton' type='default' size='mini'>{name}</Button>
                      }
                    </Form>
                  })
                }
              </View>
            </ScrollView>

          </View> :
          <View>
            {student.name}
            {
              student.status === 0 ?
                <Button className='signButton' type='primary' size='mini' onClick={() => signHandle(student, student.id)}>确认</Button> :
                <Button disabled className='signButton' type='default' size='mini'>已确认</Button>
            }
          </View>
      }

    </View>
  )
}

export default Sign;