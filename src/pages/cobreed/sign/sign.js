import  {  useState, useEffect } from 'react';
import Taro, { useRouter } from "@tarojs/taro";
import { View, Text, Button, Form,  Picker, ScrollView } from '@tarojs/components'
import './sign.less'

function Sign() {
  const scrollTop = 0;
  const Threshold = 20;
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(router.params.user)
  const [isEdit, setIsEdit] = useState(true)
  useEffect(() => {
    studentsData()
  },[])
  
  const studentsData = () => {
    Taro.request({
      url: "http://localhost:9999/api/user/list",
      }).then((res) => {
        setStudents(res.data.data)
    })
  }
  const [students, setStudents] = useState([]);
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
    setTime(e.detail.value)
  }
  const scrollHeight = {
    height: '550px'
  }
  const onScroll = () => {
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