import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Editor, Image } from '@tarojs/components'
import img from "../../../../static/img.jpg"
import './homework.less'

function HomeWork() {
    const [contentEditor, setContentEditor] = useState('')
    const [processEditor, setProcessEditor] = useState('')
    //输入框内容
    const [msg, setMsg] = useState(""); 
    const [students, setStudents] = useState([
      {
        id: 1,
        name: "张三撒旦士大夫士大夫范德萨对方",
        value: "张三撒旦士大夫士大夫范德萨对方",
        status: 0,
        checked: false,
      },
      {
        id: 2,
        name: "李四张",
        value: "李四",
        status: 0,
        checked: true,
      },
      {
        id: 3,
        name: "王五",
        value: "王五",
        status: 0,
        checked: true,
      },
      {
        id: 4,
        name: "刘毅美画面给",
        value: "刘毅",
        status: 1,
        checked: false,
      },
      {
        id: 5,
        name: "小四的地方很精美画面给",
        value: "小四",
        status: 0,
        checked: true,
      },
      {
        id: 6,
        name: "张九都·打过",
        value: "张九",
        status: 0,
        checked: true,
      },
      {
        id: 7,
        name: "李承白",
        value: "李承白",
        status: 0,
        checked: false,
      },
      {
        id: 8,
        name: "黄文王",
        value: "黄文王",
        status: 0,
        checked: true,
      },
      {
        id: 9,
        name: "方赵宇发发",
        value: "方赵宇",
        status: 1,
        checked: false,
      },
      {
        id: 10,
        name: "张茂如美画面给",
        value: "张茂如",
        status: 0,
        checked: true,
      },
      {
        id: 11,
        name: "邓诗意",
        value: "邓诗意",
        status: 0,
        checked: true,
      },
      {
        id: 12,
        name: "黄义强",
        value: "黄义强",
        status: 1,
        checked: false,
      },
      {
        id: 13,
        name: "黄伟毅",
        value: "黄伟毅",
        status: 0,
        checked: true,
      },
      {
        id: 1,
        name: "张三撒旦士大夫士大夫范德萨对方",
        value: "张三撒旦士大夫士大夫范德萨对方",
        status: 0,
        checked: false,
      },
      {
        id: 2,
        name: "李四法国发过",
        value: "李四",
        status: 0,
        checked: true,
      },
      {
        id: 3,
        name: "王五",
        value: "王五",
        status: 0,
        checked: true,
      },
      {
        id: 4,
        name: "刘毅",
        value: "刘毅",
        status: 1,
        checked: false,
      },
      {
        id: 5,
        name: "小四法国韩国韩国",
        value: "小四",
        status: 0,
        checked: true,
      },
      {
        id: 6,
        name: "张九人纷纷",
        value: "张九",
        status: 0,
        checked: true,
      },
      {
        id: 7,
        name: "李承会更好白",
        value: "李承白",
        status: 0,
        checked: false,
      },
      {
        id: 8,
        name: "黄文王",
        value: "黄文王",
        status: 0,
        checked: true,
      },
      {
        id: 9,
        name: "方赵宇科技立即立即即可很尴尬规划",
        value: "方赵宇",
        status: 1,
        checked: false,
      },
      {
        id: 10,
        name: "张茂如",
        value: "张茂如",
        status: 0,
        checked: true,
      },
      {
        id: 11,
        name: "邓诗意",
        value: "邓诗意",
        status: 0,
        checked: true,
      },
      {
        id: 12,
        name: "黄义强",
        value: "黄义强",
        status: 1,
        checked: false,
      },
      {
        id: 13,
        name: "黄伟毅",
        value: "黄伟毅",
        status: 0,
        checked: true,
      },
      {
        id: 1,
        name: "张三撒旦士大夫士大夫·范德萨对方法国发",
        value: "张三撒旦士大夫士大夫范德萨对方",
        status: 0,
        checked: false,
      },
      {
        id: 2,
        name: "李四",
        value: "李四",
        status: 0,
        checked: true,
      },
      {
        id: 3,
        name: "王该方法分隔符分隔符",
        value: "王五",
        status: 0,
        checked: true,
      },
      {
        id: 4,
        name: "刘毅",
        value: "刘毅",
        status: 1,
        checked: false,
      },
      {
        id: 5,
        name: "小四",
        value: "小四",
        status: 0,
        checked: true,
      },
      {
        id: 6,
        name: "张九不够方便方便",
        value: "张九",
        status: 0,
        checked: true,
      },
      {
        id: 7,
        name: "李承白",
        value: "李承白",
        status: 0,
        checked: false,
      },
      {
        id: 8,
        name: "黄文王",
        value: "黄文王",
        status: 0,
        checked: true,
      },
      {
        id: 9,
        name: "方赵宇",
        value: "方赵宇",
        status: 1,
        checked: false,
      },
      {
        id: 10,
        name: "张茂如",
        value: "张茂如",
        status: 0,
        checked: true,
      },
      {
        id: 11,
        name: "邓诗意",
        value: "邓诗意",
        status: 0,
        checked: true,
      },
      {
        id: 12,
        name: "黄义强",
        value: "黄义强",
        status: 1,
        checked: false,
      },
      {
        id: 13,
        name: "黄伟毅",
        value: "黄伟毅",
        status: 0,
        checked: true,
      },
      {
        id: 1,
        name: "张三撒旦士大夫士大夫范德萨对方",
        value: "张三撒旦士大夫士大夫范德萨对方",
        status: 0,
        checked: false,
      },
      {
        id: 2,
        name: "李四",
        value: "李四",
        status: 0,
        checked: true,
      },
      {
        id: 3,
        name: "王五",
        value: "王五",
        status: 0,
        checked: true,
      },
      {
        id: 4,
        name: "刘毅",
        value: "刘毅",
        status: 1,
        checked: false,
      },
      {
        id: 5,
        name: "小四",
        value: "小四",
        status: 0,
        checked: true,
      },
      {
        id: 6,
        name: "张九",
        value: "张九",
        status: 0,
        checked: true,
      },
      {
        id: 7,
        name: "李承白",
        value: "李承白",
        status: 0,
        checked: false,
      },
      {
        id: 8,
        name: "黄文王",
        value: "黄文王",
        status: 0,
        checked: true,
      },
      {
        id: 9,
        name: "方赵宇",
        value: "方赵宇",
        status: 1,
        checked: false,
      },
      {
        id: 10,
        name: "张茂如",
        value: "张茂如",
        status: 0,
        checked: true,
      },
      {
        id: 11,
        name: "邓诗意",
        value: "邓诗意",
        status: 0,
        checked: true,
      },
      {
        id: 12,
        name: "黄义强",
        value: "黄义强",
        status: 1,
        checked: false,
      },
      {
        id: 13,
        name: "黄伟毅反对法52",
        value: "黄伟毅",
        status: 0,
        checked: true,
      },
    ]);
    const addContentImage = () => {
        Taro.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album'],
          success: (res) => {
            contentEditor.insertImage({
              src: res.tempFilePaths[0],
              width: '60%',
              success: () => {
                console.log('success')
              }
            })
          }
        })
      }
    const editorContentReady = () => {
        Taro.createSelectorQuery().select('#contentEditor').context((res) => {
            const editor = res.context
            setContentEditor(editor)
        }).exec()
    }
    //输入框
    const handleContentInput = (e) => {
        // setMsg(e.target.value)
        console.log(e)
        console.log(e.detail.html)
        console.log(e.detail.text)
        console.log(e.detail.delta)
    }

    const addProcessImage = () => {
        Taro.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album'],
          success: (res) => {
            processEditor.insertImage({
              src: res.tempFilePaths[0],
              width: '60%',
              success: () => {
                console.log('success')
              }
            })
          }
        })
      }
    const editorProcessReady = () => {
        Taro.createSelectorQuery().select('#processEditor').context((res) => {
            const editor = res.context
            setProcessEditor(editor)
        }).exec()
    }
    //输入框
    const handleProcessInput = (e) => {
        // setMsg(e.target.value)
        console.log(e)
        console.log(e.detail.html)
        console.log(e.detail.text)
        console.log(e.detail.delta)
    }
    //发送按钮
    const handleSend = () => {
        const sendMsg = msg
        const chooseArr = students.filter(item => item.checked == true)
        console.log(sendMsg,chooseArr)
      }
    return (
        <View className='main'>
            <View className='content'>
                <Text className='workContent'>家庭作业内容:</Text>
                <View className='componentsPage'>
                    <View className='operateBox' onClick={() => addContentImage()}>
                        {/* 插入图片 */}
                        <Image className='img' src={img} />
                        <Text className='imgName'>点击插入图片</Text>
                    </View>
                    <View className='editorBox'>
                        <Editor id='contentEditor' className='editor' placeholder='please input...' onReady={() => editorContentReady()} onInput={(e) => handleContentInput(e)}></Editor>
                    </View>
                </View>
            </View>
            <View className='process'>
                <Text className='workProcess'>完成情况:</Text>
                <View className='componentsPage'>
                    <View className='operateBox' onClick={() => addProcessImage()}>
                        {/* 插入图片 */}
                        <Image className='img' src={img} />
                        <Text className='imgName'>点击插入图片</Text>
                    </View>
                    <View className='editorBox'>
                        <Editor id='processEditor' className='editor' placeholder='please input...' onReady={() => editorProcessReady()} onInput={(e) => handleProcessInput(e)}></Editor>
                    </View>
                </View>
            </View>
            <Button type='primary' className='sendButton' onClick={() => handleSend()}>提交</Button>
        </View>
    )
}
export default HomeWork;
