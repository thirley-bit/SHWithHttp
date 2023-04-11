// import Taro, { Component } from '@tarojs/taro'
import { useState } from 'react'
import { View, Navigator, Button } from '@tarojs/components'
import './tabs.less'

function Tabs(props) {
    const [userTeacher, setUserTeacher] = useState('teacher')
    const [userParent, setUserParent] = useState('parent')
    const [touchDot, setTouchDot] = useState(0)
    const [timer, setTimer] = useState(null)
    const [interval, setInterval] = useState(0)
    const [isMoving, setIsMoving] = useState(false)

    const handleClick = (current) => {    //触发的点击事件
        // console.log(current)
        // const { onClick } = props     //组件中onClick触发的方法,从父组件中传递过来,(传给父组件的方法，必须以on开头)
        // onClick && onClick(current)    //onClick存在(即为true时),执行后面的onClick方法,...arguments是展开伪数组
    }

    const handleTouchStart = (e) => {      //手指触摸屏幕事件
        const touchDot = e.touches[0].pageX
        setTouchDot(touchDot)
        console.log(interval, "43")
        const timer = setInterval(() => {
            interval++        //默认0
        }, 100)
        setTimer(timer)
    }

    const handleTouchMove = (e) => {          //开始滑动的事件,组件中的方法,但是用到了父组件的变量,需要传递进来,,通过手指的滑动,触发handleClick事件的current加一或者是减一
        const {
            current,
            tabList
        } = props

        const touchMove = e.touches[0].pageX      //手指触摸屏幕的位置
        const moveDistance = touchMove - touchDot      //手指移动的距离
        const maxIndex = tabList.length      //最大的index,即一共有多少块减一
        //下面判断是左滑和右滑,   //_isMoving 肯定是false,取反,  //_interval ,一秒内滑动   //this._touchDot  滑动的距离大于20排序,限定滑动的条件
        if (!isMoving && interval < 10 && touchDot > 20) {
            // 向左滑动
            if (current + 1 < maxIndex && moveDistance <= -100) {
                isMoving = true
                handleClick(current + 1)

                // 向右滑动
            } else if (current - 1 >= 0 && moveDistance >= 100) {
                isMoving = true
                handleClick(current - 1)
            }
        }
    }

    const handleTouchEnd = (e) => {       //滑动结束的事件,清除定时器,_interval 归零,_isMoving 归位
        clearInterval(timer)
        setInterval(0)
        setIsMoving(false)
    }

    //  根据需要可自定义,也可写死,,先把this.props中的变量解构出来,下面用到的时候,就不用写那么长了
    const { tabList, current, flexWrap = 'nowrap', maxOneRow = 3, children } = props
    return <View className='tabs'>
        <View className='hd' style={`flex-wrap: ${flexWrap};`}>
            {tabList.map((tab, i) => {
                return <View
                    className={`option ${i === current ? 'option_active' : ''}`}    //当当前的current等于对应的index时,添加对应的样式
                    style={`width: ${flexWrap === 'nowrap'        //当不换行时,每个tab项的宽度是100/总项数(均衡)
                        ? (100 / tabList.length)
                        : (100 / maxOneRow)}%`}    //换行时,100/一行最多的个数
                    onClick={() => handleClick(i)}>
                    <Navigator
                        url={`${tab.url}?user=${tab.user}`}
                    >
                        {tab.title}
                    </Navigator>
                    <View className='underline'></View>
                </View>
            })}
        </View>
        <View className='bd' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            {children}
        </View>
    </View>
}

export default Tabs