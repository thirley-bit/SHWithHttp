import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Editor, Image } from '@tarojs/components'
import img from "../../static/img.jpg"
import './seatwork.less'

function SeatWork() {
    const [contentEditor, setContentEditor] = useState('')
    const [processEditor, setProcessEditor] = useState('')
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
        // const sendMsg = msg
        // const chooseArr = students.filter(item => item.checked == true)
        // console.log(sendMsg,chooseArr)
      }
    return (
        <View className='main'>
            <View className='content'>
                <Text className='workContent'>课堂作业内容:</Text>
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
export default SeatWork;
