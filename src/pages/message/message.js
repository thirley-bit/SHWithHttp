import { Component, useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Input, Textarea, Button, Checkbox, Image, Editor, CheckboxGroup, Form, Label, ScrollView, RichText } from '@tarojs/components'
import './message.less'
import banner1 from "../../static/image/menu.png"
import img from "../../static/img.jpg"
// import '../../mock/api'
// import banner1 from "../../static/banner1.jpg"
// import { chooseImage } from 'miniprogram_npm/@tarojs/taro-h5';

function Message() {
  const scrollTop = 0;
  const Threshold = 20;
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
  const [showTabBar, setShowTabBar] = useState(true)
  const [editor, setEditor] = useState('')

  //输入框内容
  const [msg, setMsg] = useState('')
  console.log(students.length)

  //全选按钮状态
  const [checked, setChecked] = useState(false)

  //输入框
  const handleInput = (e) => {
    // setMsg(e.target.value)
    console.log(e)
    console.log(e.detail.html)
    console.log(e.detail.text)
    console.log(e.detail.delta)
  }

  const scrollHeight = {
    height: '400px'
  }
  const onScroll = () => {

  }

  //全选按钮
  const handleAll = () => {
    const newArr = students.map((item, index) => ({
      ...item,
      checked: !checked
    }))
    setChecked(!checked)
    setStudents(newArr)
  }

  //选择指定用户
  const handleCheck = (value, id) => {
    const newArr = students.map((item, index) => {
      if (item.id === id) {
        const checked = !item.checked
        return {
          ...item,
          checked
        }
      } else {
        return { ...item }
      }
    })
    setStudents(newArr)
  }

  //发送按钮
  const handleSend = async () => {
    const sendMsg = msg
    const chooseArr = students.filter(item => item.checked == true)
    console.log(sendMsg,chooseArr)
    Taro.request({
      url: "http://localhost:9999/api/user/list",
    }).then(function (res){
      console.log(res)
    })
    Taro.request({
      url:'http://localhost:9999/api/addressList/user',

    }).then((REs)=>{
      console.log(REs,'rrrr')
    })
  }
  const editorReady = () => {
    Taro.createSelectorQuery().select('#editor').context((res) => {
      const editor = res.context
      setEditor(editor)
    }).exec()
  }
  const addImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success: (res) => {
        editor.insertImage({
          src: res.tempFilePaths[0],
          width: '60%',
          success: () => {
            console.log('success')
          }
        })
      }
    })
  }

  return (
    <View className='index'>
      <View className='componentsPage'>
        <View className='operateBox' onClick={() => addImage()}>
          {/* 插入图片 */}
          <Image className='img' src={img} />
          <Text className='imgName'>点击插入图片</Text>
        </View>
        <View className="editorBox">
          <Editor id='editor' className='editor' placeholder='please input...' onReady={() => editorReady()} onInput={(e) => handleInput(e)}></Editor>
        </View>
      </View>
      <View className='chooseUser'>
        <View >
          请选择指定用户
          <View className='chooseAll'>
            <Checkbox className='allCheck' onClick={() => handleAll()} checked={checked}>全选</Checkbox>
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
          <View className='checkboxView'>
            {
              students.map((item, index) => {
                const name = item.name
                let className = 'form'
                if (name.length > 15) {
                  className += ' form100'
                } else if (name.length > 8) {
                  className += ' form75'
                }
                else if (name.length > 3) {
                  className += ' form50'
                }
                return <Form className={className} key={index}>
                  <Label className='checkboxLabel' for={index} key={index}>
                    <Checkbox className='checkBox' value={item.value} checked={item.checked} onClick={() => handleCheck(item, item.id)}>{item.name}</Checkbox>
                  </Label>
                </Form>
              })
            }
          </View>
        </ScrollView>
        <Button type='primary' className='sendButton' onClick={() => handleSend()}>发送</Button>
      </View>
    </View>
  )
}
export default Message
