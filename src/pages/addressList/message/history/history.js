import { useState, useEffect  } from 'react'

import { AtCard, AtFloatLayout, AtList, AtListItem } from "taro-ui";
import groupPic from '@app/static/my.png'
import { View, Image } from "@tarojs/components";
import NavTab from '@app/component/NavTab/NavTab';
import api from '@/api/api'
import './history.scss'


function History() {
    const [history, setHistory] = useState([])
    const [isOpened, setIsOpened] = useState(false)
    const [labelData, setLabelData] = useState([])
    const [showGroupData, setShowGroupData] = useState({})
    useEffect(() => {
        historyData()
        groupData()
    },[])
    
    
    const historyData = () => {
        let url = 'history/list'
        let data = api[url].data
        setHistory(data)
    }

    const groupData = () => {
        let url = 'classGroup/list'
        let data = api[url].data
        setLabelData(data)
        // let newGroupData = data.map(item => {

        // })
        console.log(data)
    }

    const handleDetail = (value) => {
        console.log(value)
    }

    const hanldeShowGroup = (value) => {
        setIsOpened(true)
        let newData = labelData.filter(item => item.id === value.id)[0]
        // let newData = 
        setShowGroupData(newData)
        console.log(value.id)
    }

    const handleClose = () => {
        setIsOpened(false)
    }
    console.log(showGroupData)
    return <View>
        
        {
            history && history.map((item,index) => {
                return <View
                  key={index}  
                  className='card'
                >
                    <AtCard
                      key={index}
                      note={<View className='note'>{item.time} <Image className='img' src={groupPic} onClick={() => hanldeShowGroup(item)} /></View>}
                      className='card-item'
                      title={item.user}
                      thumb={item.avatar}
                      onClick={() =>handleDetail(item)}
                    >
                        {item.content}
                    </AtCard>
                        {
                            isOpened ? 
                            <AtFloatLayout 
                              title={showGroupData.label} 
                              isOpened={isOpened} 
                              scrollY
                              scrollTop={0}
                              onClose={handleClose}
                            >
                                {
                                    showGroupData && showGroupData.studentArr.map(i => {
                                        return <View key={index}>
                                            <AtList>
                                              <AtListItem title={i.label} thumb={i.img} />
                                            </AtList>
                                        </View>
                                    })
                                }
                            
                        </AtFloatLayout>
                        : ''
                        }
                </View>
            })
        }
        
    </View>
}
export default History