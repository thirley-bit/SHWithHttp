import { useState, useEffect } from 'react'
// import Taro from "@tarojs/taro";

import { AtTabs, AtTabsPane, AtSearchBar, AtCheckbox, AtAvatar, AtModal, AtModalContent, AtModalAction, AtIcon, AtButton } from 'taro-ui'
import { View, Button, ScrollView, Input, } from "@tarojs/components";

import api from '@/api/api'
import './chooseUser.scss'


function ChooseUser() {
    
    const scrollTop = 0;
    const Threshold = 20;
    const [current, setCurrent] = useState(0)
    const [searchValue, setSearchValue] = useState('')  //搜索朋友页面的人员
    const [searchLabelValue, setSearchLabelValue] = useState('') //搜索群组页面的标签
    const [students, setStudents] = useState([]);   //获取到的原始人员数据（可用于初始化和搜索后的数据初始化）
    const [labelData, setlabelData] = useState([])   //获取到的原始群组数据（可用于初始化和搜索后的数据初始化）
    const [showData, setShowData] = useState([])    //用于展示朋友页面的数据列表
    const [showLabelData, setshowLabelData] = useState([])    //用于展示群组页面的数据列表
    const [checkedList, setCheckedList] = useState([])  //朋友页面选中内容
    const [checkedLabelList, setCheckedLabelList] = useState([])  //朋友页面选中内容
    const [checkedAll, setCheckedAll] = useState([])  //朋友页面全选
    const [checkedLabelAll, setCheckedLabelAll] = useState([])  //群组页面全选
    const [isOpened, setIsOpened] = useState(false)
    const [isOpenedEdit, setIsOpenedEdit] = useState(false)
    const [labelName, setLabelName] = useState('')   //朋友页面添加标签名
    const [labelEdit, setLabelEdit] = useState({})  //群组页面修改标签名

    const tabList = [
        {
            title: '朋友'
        },
        {
            title: '群组'
        },
    ]

    console.log(labelEdit)
    console.log(showData)
    console.log(checkedList)
    useEffect(() => {
        studentsData()
        groupData()
      },[])
      const studentsData = () => {
        // Taro.request({
        //   url: "http://localhost:9999/api/user/list",
        //   }).then((res) => {
        //     console.log(res.data.data)

        //     let newData = res.data.data.map(item => {
        //         let label = <View className='label-avatar'><AtAvatar size='small' circle  className='avatar-img' image={item.img} /><View className='label-text'>{item.label}</View></View>
        //         return {
        //             ...item,
        //             label
        //         }
        //     })
        //     setStudents(newData)
        // })
        let studentsUrl = 'students/list'
        let data = api[studentsUrl].data
          let newData = data.map(item => {
                    let label = <View className='label-avatar'><AtAvatar size='small' circle  className='avatar-img' image={item.img} /><View className='label-text'>{item.label}</View></View>
                    return {
                        ...item,
                        label
                    }
          })
          //接口获取到的原始数据
          setStudents(newData)
          //用于数据列表展示
          setShowData(newData)
      }

    const groupData = () => {
      let classUrl = 'classGroup/list'
      let data = api[classUrl].data
      let newGroupData = data.map(item => {
        let label = <View className='label-icon'>
                      <View className='label-text'>{item.label}</View> 
                        <AtIcon className='icon' value='edit' size='25' color='#999' onClick={() => handleEdit(item)}></AtIcon>
                    </View>
        let newDesc = item.studentArr.map(jtem => jtem.label)
        let desc = newDesc.toString()
        return {
            ...item,
            label,
            desc
        }
      })
      //接口获取到的原始数据
      setlabelData(newGroupData)
      //用于数据列表展示
      setshowLabelData(newGroupData)
    }
    
    //切换tab页，current为0时为朋友页面，current为1时为群组页面,切换时数据全部清空
    const handleChange = (e) => {
        setCurrent(e)
        setCheckedList([])
        setCheckedLabelList([])
        setCheckedAll([])
        setCheckedLabelAll([])
        setShowData(students)
        setshowLabelData(labelData)
    }

    console.log(searchValue)
    console.log(searchLabelValue)

    //输入搜索内容
    const handleSearch = (e) => {
      //current为0时， 显示为朋友页面
      if(current === 0){
        if(e == ''){
          //搜索条件清空时，数据列表显示原数据
          setShowData(students)
        }
        setSearchValue(e)
      }else{
        //current为1时， 显示为群组页面
        if(e == ''){
          //搜索条件清空时，数据列表显示原数据
          setshowLabelData(labelData)
        }
        setSearchLabelValue(e)
        if(JSON.stringify(labelEdit) != '{}'){
          if(e == ''){
            //搜索条件清空时，数据列表显示原数据
            setShowData(checkedList)
          }
          setSearchValue(e)
        }
      }  
    }

    //清空搜索内容
    const handleClear = () => {
      setShowData(students)
      setshowLabelData(labelData)
      setSearchValue('')
      setSearchLabelValue('')
    }

    //点击搜索按钮
    const handelSearchConfirm = () => {
      //当current为0时，显示为朋友页面
      if(current === 0){

      //判断搜索条件和数据列表是否匹配，若匹配则更新数据列表
        let newSearchData = students.filter(item => {
          let value = item.value
          if(value.search(searchValue) != -1){
            return {...item}
          }
        })
        //用于搜索后展示数据
        setShowData(newSearchData)
      }else{ 
      //当current为1时，显示为朋友页面

      //判断搜索条件和数据列表是否匹配，若匹配则更新数据列表
        let newSearchLabelData = labelData.filter(item => {
          let value = item.value
          if(value.search(searchLabelValue) != -1){
            return {...item}
          }
        })
        //用于搜索后展示数据
        setshowLabelData(newSearchLabelData)
        if(JSON.stringify(labelEdit) != '{}'){
          let newSearchData = students.filter(item => {
            let value = item.value
            if(value.search(searchValue) != -1){
              return {...item}
            }
          })
          //用于搜索后展示数据
          setShowData(newSearchData)
        }
      }
    }
  
    //选中的人员或标签，current为0时选中人员，current为1时选中标签
    const handleSelect = (value) => {
      //当current为0时，显示为朋友页面
        if(current === 0){
          setCheckedList(value)
        }else{
          //当current为1时，显示为群组页面
          setCheckedLabelList(value)
          //编辑群组时显示的人员列表数据
          if(JSON.stringify(labelEdit) != '{}'){
            setCheckedList(value)
          }
        }
    }

    //全选
    const handleSelectAll = (value) => {
      //当current为0时，显示为朋友页面
      if(current === 0){
        if(value.length > 0){
          //全选
          let newCheckedAll = students.map(item => item.value)
          setCheckedList(newCheckedAll)
          setCheckedAll(value)
        }else{
          //全不选
          setCheckedList([])
          setCheckedAll([])
        }
      }else{
        //当current为1时，显示为群组页面
        if(value.length > 0){
          //全选
          let newCheckedLabeledAll = labelData.map(item => item.value)
          setCheckedLabelList(newCheckedLabeledAll)
          setCheckedLabelAll(value)
        }else{
          //全不选
          setCheckedLabelList([])
          setCheckedLabelAll([])
        }
        //编辑群组人员
        if(JSON.stringify(labelEdit) != '{}'){
          if(value.length > 0){
            //全选
            let newCheckedAll = students.map(item => item.value)
            setCheckedList(newCheckedAll)
            setCheckedAll(value)
          }else{
            //全不选
            setCheckedList([])
            setCheckedAll([])
          }
        }
      }   
    }

    const scrollHeight = {
        height: '420px'
    }

    const handleClose = () => {
        setIsOpened(false)
    }

    const handleCancel = () => {
        setIsOpened(false)
    }

    const handleConfirm = () =>{
        console.log('确定')
        setIsOpened(false)
        setIsOpenedEdit(true)
    }

    const handleInput = (e) => {
        console.log(e)
        setLabelName(e.detail.value)
    }

    const handleCloseEdit = () => {
        setIsOpenedEdit(false)
    }

    //输入标签的modal框
    const handleConfirmEdit = () =>{
        console.log('确定')
        setIsOpenedEdit(false)
        //labelName传递给后端完成标签名字的修改
        console.log(labelName)
    }

    //编辑群组
    const handleEdit = (value) => {
      setSearchLabelValue('')
      setLabelEdit(value)
      let data = value.studentArr.map(item => item.value)
      setCheckedList(data)
    }
    
    //点击提交按钮
    const handleSend = () => {
      if(current == 0){
        setIsOpened(true)
      }else{
        setLabelEdit({})
      }
    }

    return <View className='content'>
        <AtTabs current={current} tabList={tabList} onClick={handleChange}>
            <AtTabsPane current={current} index={0}>
                <View className='main'>
                    <View className='search'>
                      <AtSearchBar 
                        value={searchValue} 
                        onChange={handleSearch} 
                        onClear={handleClear}
                        onConfirm={handelSearchConfirm} 
                        onActionClick={handelSearchConfirm}
                      />
                    </View>

                    <View className='person'>
                      <ScrollView
                        className='scroll-view'
                        scrollY
                        scrollWithAnimation
                        style={scrollHeight}
                        scrollTop={scrollTop}
                        lowerThreshold={Threshold}
                        upperThreshold={Threshold}
                      >
                      <AtCheckbox 
                        options={[{label:'全选',value:'全选',checked:false}]}
                        selectedList={checkedAll}
                        onChange={handleSelectAll}
                      />
                          <AtCheckbox 
                            options={showData}
                            selectedList={checkedList}
                            onChange={handleSelect}
                          />
                      </ScrollView>
                    </View>
                    <View>
                        <AtModal
                          className='modal'
                          isOpened={isOpened}
                          cancelText='忽略'
                          confirmText='存为标签'
                          onClose={handleClose}
                          onCancel={handleCancel}
                          onConfirm={handleConfirm}
                          content='存为标签，方便下次直接使用'
                        />
                        <AtModal isOpened={isOpenedEdit} closeOnClickOverlay={false}>
                            <AtModalContent className='modal-edit'>
                               标签名字：<Input className='modal-input' onInput={handleInput} />
                            </AtModalContent>
                            <AtModalAction> 
                                <Button onClick={() => handleCloseEdit()}>取消</Button> 
                                <Button onClick={() => handleConfirmEdit()}>确认</Button> 
                            </AtModalAction>
                        </AtModal>
                    </View>
                </View>
                <AtButton type='primary' className='send-button' onClick={() => handleSend()}>提交</AtButton>
            </AtTabsPane> 
            <AtTabsPane current={current} index={1}>
            <View className='main'>
                    <View className='search'>
                      {
                        JSON.stringify(labelEdit) === '{}'  ? '' :
                        //点击修改按钮时显示标签输入框
                          <View className='label-edit'>
                            <Input className='label-input' type='text' value={labelEdit.label} />
                          </View>
                      }
                      <AtSearchBar 
                        value={searchLabelValue} 
                        onChange={handleSearch} 
                        onClear={handleClear}
                        onConfirm={handelSearchConfirm} 
                        onActionClick={handelSearchConfirm}
                      />
                    </View>

                    <View className='person'>
                    <ScrollView
                      className='scroll-view'
                      scrollY
                      scrollWithAnimation
                      style={scrollHeight}
                      scrollTop={scrollTop}
                      lowerThreshold={Threshold}
                      upperThreshold={Threshold}
                    >
                    <AtCheckbox 
                      options={[{label:'全选',value:'全选',checked:false}]}
                      selectedList={checkedLabelAll}
                      onChange={handleSelectAll}
                    />
                    <View>
                        <AtCheckbox 
                          className='check-box_group'
                          options={JSON.stringify(labelEdit) === '{}' ? showLabelData : showData}
                          selectedList={JSON.stringify(labelEdit) === '{}' ? checkedLabelList : checkedList}
                          onChange={handleSelect}
                        />
                    </View>
                    </ScrollView>
                    </View>
                </View>
                
              <AtButton type='primary' className='send-button' onClick={() => handleSend()}>提交</AtButton>
            </AtTabsPane>
        </AtTabs>
        {/* <Button type='primary' className='sendButton' onClick={() => handleSend()}>提交</Button> */}
    </View>
}
export default ChooseUser