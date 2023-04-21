import { View, Button, ScrollView, Input, Checkbox, Label, Form } from "@tarojs/components";
// import Taro from "@tarojs/taro";
import { useState, useEffect } from 'react'
import { AtTabs, AtTabsPane, AtSearchBar, AtCheckbox, AtAvatar, AtModal, AtModalContent, AtModalAction, AtIcon } from 'taro-ui'
import './chooseUser.less'


function ChooseUser() {
    
    const scrollTop = 0;
    const Threshold = 20;
    const [current, setCurrent] = useState(0)
    const [searchValue, setSearchValue] = useState('')
    const [students, setStudents] = useState([]);   //获取到的原始人员数据（可用于初始化和搜索后的数据初始化）
    const [labelGroup, setLabelGroup] = useState([])   //获取到的原始群组数据（可用于初始化和搜索后的数据初始化）
    const [showData, setShowData] = useState([])    //用于展示的数据列表
    const [showGroupData, setShowGroupData] = useState([])    //用于展示的数据列表
    const [checkedList, setCheckedList] = useState([])
    const [checkedAll, setCheckedAll] = useState([])
    const [isOpened, setIsOpened] = useState(false)
    const [isOpenedEdit, setIsOpenedEdit] = useState(false)
    const [labelName, setLabelName] = useState('')

    const tabList = [
        {
            title: '朋友'
        },
        {
            title: '群组'
        },
    ]

    useEffect(() => {
        studentsData()
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
        let data = [
            {
              id: 1,
              label: "张三撒旦士大夫士大夫范德萨对方",
              value: "张三撒旦士大夫士大夫范德萨对方",
              status: 0,
              checked: false,
              img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
            },
            {
              id: 2,
              label: "李四张",
              value: "李四",
              status: 0,
              checked: true,
              img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
            },
            {
              id: 3,
              label: "王五",
              value: "王五",
              status: 0,
              checked: true,
              img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
            },
            {
              id: 4,
              label: "刘毅美画面给",
              value: "刘毅",
              status: 0,
              checked: false,
              img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
            },
            {
              id: 5,
              label: "小四的地方很精美画面给",
              value: "小四",
              status: 0,
              checked: true,
              img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
            },
            {
              id: 6,
              label: "张九都·打过",
              value: "张九",
              status: 0,
              checked: true,
            },
            {
              id: 7,
              label: "李承白",
              value: "李承白",
              status: 0,
              checked: false,
            },
            {
              id: 8,
              label: "黄文王",
              value: "黄文王",
              status: 0,
              checked: true,
            },
            {
              id: 9,
              label: "方赵宇发发",
              value: "方赵宇",
              status: 0,
              checked: false,
            },
            {
              id: 10,
              label: "张茂如美画面给",
              value: "张茂如",
              status: 0,
              checked: true,
            },
          ]
          let newData = data.map(item => {
                    let label = <View className='label-avatar'><AtAvatar size='small' circle  className='avatar-img' image={item.img} /><View className='label-text'>{item.label}</View></View>
                    return {
                        ...item,
                        label
                    }
            })
          //接口获取到的原始数据
          setStudents(newData)
          //用于初始化展示数据（显示完整的数据）
          setShowData(newData)
          let groupData = [
            {
              id: 1,
              label: '一年级一班',
              value: "一年级一班",
              status: 0,
              checked: false,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 2,
              label: "一年级二班一年级一班一年级一班",
              value: "一年级二班",
              status: 0,
              checked: true,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 3,
              label: "一年级三班",
              value: "一年级三班",
              status: 0,
              checked: true,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 4,
              label: "一年级四班",
              value: "一年级四班",
              status: 0,
              checked: false,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 5,
              label: "一年级五班",
              value: "一年级五班",
              status: 0,
              checked: true,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 6,
              label: "张九都·打过",
              value: "张九",
              status: 0,
              checked: true,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 7,
              label: "李承白",
              value: "李承白",
              status: 0,
              checked: false,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 8,
              label: "黄文王",
              value: "黄文王",
              status: 0,
              checked: true,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 9,
              label: "方赵宇发发",
              value: "方赵宇",
              status: 0,
              checked: false,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
            {
              id: 10,
              label: "张茂如美画面给",
              value: "张茂如",
              status: 0,
              checked: true,
              desc:'张三分隔符、李四规范化风格、王五更不会放过不能放过'
            },
          ]
          let newGroupData = groupData.map(item => {
            let label = <View className='label-icon'>
                          <View className='label-text'>{item.label}</View> 
                            <AtIcon className='icon' value='edit' size='25' color='#999' onClick={() => handleEdit(item)}></AtIcon>
                        </View>
            return {
                ...item,
                label
            }
    })

          setLabelGroup(newGroupData)
          setShowGroupData(newGroupData)

      }
    
    const handleChange = (e) => {
        setCurrent(e)
      }
    const handleSearch = (e) => {
        if(e == ''){
          setShowData(students)
        }
        setSearchValue(e)
    }
    const handleClear = () => {
      setShowData(students)
      setSearchValue('')
    }
    const handelSearchConfirm = () => {
      //判断搜索条件和数据列表是否匹配，若匹配则更新数据列表
      let showSearchData = students.filter(item => {
        let value = item.value
        if(value.search(searchValue) != -1){
          return {...item}
        }
      })
      //用于搜索后展示数据
      setShowData(showSearchData)
  }
    // const handleAction = () => {
    //   console.log(searchValue)
    //     console.log('开始搜索')
    // }
    const handleSelect = (value) => {
        console.log(value)
        setCheckedList(value)
    }
    const handleSelectAll = (value) => {
        if(value.length > 0){
            let newCheckedAll = students.map(item => item.value)
            setCheckedList(newCheckedAll)
            setCheckedAll(value)
        }else{
            setCheckedAll([])
            setCheckedList([])
        }
    }
    const scrollHeight = {
        height: '420px'
      }
    const onScroll = () => {
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
        // setIsOpened(false)
    }
    const handleConfirmEdit = () =>{
        console.log('确定')
        setIsOpenedEdit(false)
        //labelName传递给后端完成标签名字的修改
        console.log(labelName)
    }
    const handleEdit = (value) => {
      console.log(value)
    }
    const handleSend = () => {
        setIsOpened(true)
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
                        onScroll={() => onScroll()}
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
                <Button type='primary' className='send-button' onClick={() => handleSend()}>提交</Button>
            </AtTabsPane> 
            <AtTabsPane current={current} index={1}>
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
                      onScroll={() => onScroll()}
                    >
                    <AtCheckbox 
                      options={[{label:'全选',value:'全选',checked:false}]}
                      selectedList={checkedAll}
                      onChange={handleSelectAll}
                    />
                    <View>
                        <AtCheckbox 
                          className='check-box_group'
                          options={showGroupData}
                          selectedList={checkedList}
                          onChange={handleSelect}
                        />
                    </View>
                    </ScrollView>
                    </View>
                </View>
                
              <Button type='primary' className='send-button' onClick={() => handleSend()}>提交</Button>
            </AtTabsPane>
        </AtTabs>
        {/* <Button type='primary' className='sendButton' onClick={() => handleSend()}>提交</Button> */}
    </View>
}
export default ChooseUser