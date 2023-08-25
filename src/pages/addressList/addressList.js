import { useEffect, useState, useRef } from 'react'
import Taro from "@tarojs/taro";
import { connect } from 'react-redux';
import {  View, Text  } from '@tarojs/components'
import { AtButton, AtSearchBar, AtTabBar } from 'taro-ui'
import PersonList from '@app/component/personList/personList'
import NavTab from '@app/component/NavTab/NavTab';
import SearchBar from '@app/component/SearchBar/SearchBar';

// import search from '@app/component/SearchBar/wx_search-ma'
import api from '@/api/api'
import newAdd from "../../static/newadd.png"
import group from "../../static/group.png"
import msg from "../../static/add-message.png"
import addGroup from "../../static/add-group.png"
import "./AddressList.scss"


function AddressList(props) {
  console.log(props,"addressprops")
  const { dispatch, teacherList, parentList } = props
  const [current, setCurrent] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [showTeacherData, setShowTeacherData] = useState([])
  const [showParentData, setShowParentData] = useState([])
  const tabList = [
    {
      title: '添加',
      image: newAdd,
      url:'/pages/my/AddClass/AddClass'
    },
    {
      title: '群聊',
      image: group,
      // iconType:'user',
      url:'/pages/addressList/groupChat/groupChat'
    },
    {
      title: '私信',
      // iconType:'user',
      image: msg,
      url:'/pages/addressList/message/message',
    },
    {
      title: '审核',
      // iconType:'user',
      image: addGroup,
      url:'/pages/addressList/Check/Check'
    },
  ]


  useEffect(() => {
    dispatch({
      type:'AddressList/getTeacherList'
    })
    dispatch({
      type:'AddressList/getParentList'
    })
    // teacherData()
    // parentData()
    
  },[])

  // const teacherData = () => {
  //   let url = "address/teacher/list"
  //   let data = api[url].data
  //   setShowTeacherData(data)
  // }
  // const parentData = () => {
  //   let url = "address/parent/list"
  //   let data = api[url].data
  //   setShowParentData(data)
  // }

  const handleClick = (e) => {
    console.log(e)
    setCurrent(e)
    Taro.navigateTo({
      url:tabList[e].url
    })
  }
  const searchInput = (e) => {
    console.log(e,"param")
    // setSearchValue(e)
    console.log('searchInput >>> ')
  }

  const searchClear = () => {
    console.log(searchValue,'searchClear')
    // setSearchValue('')
  }
  const searchTab = (e) => {
    console.log(e,"searchTab")
    // let key = e.detail.key
    // let value = e.detail.value
    // if(key === 'search'){
    //   console.log('searchTab >>> search')
    //   console.log(e.detail,"e.detail")
    // }else if(key === 'back'){
    //   console.log('searchTab >>> back')
    //   console.log(e.detail,"e.detail")
    // }
  }
 
  return (
    <View className='index'>
        <NavTab needBackIcon={false} mainTitle='诚道吉' />
      <View className='search' handleSearch='handleSearch'>
        <AtSearchBar />
        {/* <SearchBar placeholder='请输入关键字' value={searchValue} /> */}
      </View>
      <AtTabBar 
        tabList={tabList}
        onClick={handleClick}
        current={current}
      />
      <View className='teacher-list'>
      <View  className='text'>
          <Text>老师</Text>
        </View>
        <PersonList enter='address' showData={teacherList} />
      </View>
      <View className='teacher-list'>
        <View  className='text'>
          <Text>家长</Text>
          
        </View>
        <PersonList enter='address' showData={parentList} />
      </View>
    </View>
  )
}
export default connect((state) => ({
  teacherList: state.AddressList.teacherList,
  parentList: state.AddressList.parentList
})) (AddressList)
