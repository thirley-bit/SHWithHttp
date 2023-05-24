import { useEffect, useState } from 'react'
import Taro from "@tarojs/taro";
import {  View, Text  } from '@tarojs/components'
import { AtSearchBar, AtTabBar } from 'taro-ui'
import PersonList from '@app/component/personList/personList'

import api from '@/api/api'
import "./AddressList.scss"


function AddressList() {
  const [current, setCurrent] = useState(0)
  const [showTeacherData, setShowTeacherData] = useState([])
  const [showParentData, setShowParentData] = useState([])
  const tabList = [
    {
      title: '添加家人',
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      url:'/pages/addressList/addFamily/addFamily'
    },
    {
      title: '群聊',
      // image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      iconType:'user',
      url:'/pages/addressList/groupChat/groupChat'
    },
    {
      title: '私信',
      iconType:'user',
      url:'/pages/addressList/message/message',
    },
    {
      title: '审核',
      iconType:'user',
      url:'/pages/addressList/check/check'
    },
  ]

  useEffect(() => {
    teacherData()
    parentData()
    
  },[])

  const teacherData = () => {
    let url = "address/teacher/list"
    let data = api[url].data
    setShowTeacherData(data)
  }
  const parentData = () => {
    let url = "address/parent/list"
    let data = api[url].data
    setShowParentData(data)
  }

  const handleClick = (e) => {
    console.log(e)
    setCurrent(e)
    Taro.navigateTo({
      url:tabList[e].url
    })
  }
 
  return (
    <View className='main'>
        
      <View className='search'>
        <AtSearchBar />
      </View>
      <AtTabBar 
        tabList={tabList}
        onClick={handleClick}
        current={current}
      />
      <View className='teacher-list'>
        <Text>老师</Text>
        <PersonList enter='address' showData={showTeacherData} />
      </View>
      <View className='teacher-list'>
        <Text>家长</Text>
        <PersonList enter='address' showData={showParentData} />
      </View>
    </View>
  )
}
export default AddressList
