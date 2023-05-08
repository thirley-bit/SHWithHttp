import Taro from "@tarojs/taro";
import { useState } from 'react'
import { View,  Navigator, CoverImage } from '@tarojs/components'
import homeWork from "../../../static/image/menu.png"
import seatWork from "../../../static/image/calendar.png"
import message from "../../../static/image/love.png"
import schedule from "../../../static/image/资源 5渗透.png"
import './moreModules.scss'

function Notice() {

    const [noticeList, setNoticeList] = useState([
        {
            id: 1,
            title: '家庭作业',
            img: homeWork,
            pageUrl:'/pages/class/notice/homework/homework'
        },
        {
            id: 2,
            title: '课堂作业',
            img: seatWork,
            pageUrl:'/pages/class/notice/seatwork/seatwork'
        },
        {
            id: 3,
            title: '活动通知',
            img: message,
            pageUrl:'/pages/class/notice/message/message'
        },
        {
            id: 4,
            title: '课程表',
            img: schedule,
            pageUrl:'/pages/class/notice/homework/homework'
        },
        {
            id: 5,
            title: '考试安排',
            img: "/static/main.jpg",
            pageUrl:'/pages/class/notice/homework/homework'
        },
        {
            id: 6,
            title: '成绩查询',
            img: "/static/main.jpg",
            pageUrl:'/pages/class/notice/homework/homework'
        },
        {
            id: 7,
            title: '在校表现',
            img: "/static/main.jpg",
            pageUrl:'/pages/class/notice/homework/homework'
        },
        {
            id: 8,
            title: '在家表现',
            img: "/static/main.jpg",
            pageUrl:'/pages/class/notice/homework/homework'
        },
        {
            id: 9,
            title: '年终评语',
            img: "/static/main.jpg",
            pageUrl:'/pages/class/notice/homework/homework'
        }
    ])

    return (
        <View className='index'>
            <View>
            {
                noticeList.map((item, index) => {
                    return <View className='formItem' key={index}>
                        <Navigator url={`${item.pageUrl}`}>
                            <View className='img'>
                                 <CoverImage src={item.img} />
                            </View>
                            <View className='title'>
                                {item.title}
                            </View>
                        </Navigator>
                    </View>
                })
            }
            </View>
        </View>
    )
}
export default Notice
