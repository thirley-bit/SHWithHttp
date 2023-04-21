import {  View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { AtTabs, AtTabsPane, AtCard,  } from 'taro-ui'
import './moreArticle.less'

function MoreArticle() {
  const [articleList, setArticleList] = useState([])
  const [tabList, setTabList] = useState([])
  const [current, setCurrent] = useState(0)
  useEffect(()=>{
    articleData()
  },[])

  const articleData = () => {
    // Taro.request({
    //   url:"http://localhost:9999/api/article/allList",
    // }).then((res) =>{ 
      const data = [
        {
          id:0,
          type:0,
          title:'教育',
          content:'小学生作文不会写怎么办？一个写作技巧教孩子写出满分作文！比HTML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-12-12 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:1,
          type:0,
          title:'教育',
          content:'教育部推荐“小学生必读书目”，1-6年级精选书单（含外文名著）！可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-12-11 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:2,
          type:0,
          title:'教育',
          content:'多措并举 从“心”出发——丹巴教育局全力打好校园疫情防控心理健康保！ML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-11-12 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:3,
          type:0,
          title:'教育',
          content:'教育部推荐“小学生必读书目”，1-6年级精选书单（含外文名著）！可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-10-12 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:4,
          type:0,
          title:'教育',
          content:'农村小学教育水平提升的同时应试化的倾向却不容忽视！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-10-13 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:5,
          type:1,
          title:'安全',
          content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-12-15 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:6,
          type:1,
          title:'安全',
          content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-12-14 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:7,
          type:1,
          title:'安全',
          content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！！的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-12-22 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:8,
          type:1,
          title:'安全',
          content:'防溺水创意微视频⑨｜丹巴县城区小学校：小学生防溺水安全！可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-02-12 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:9,
          type:2,
          title:'智慧',
          content:'智慧智慧智慧智慧，智慧智慧智慧智！多措并举 从“心”出发——丹巴教育局全力打好校园疫情防控心理健康保功能比HTML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-01-12 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          id:10,
          type:2,
          title:'智慧',
          content:'智慧智慧智慧智慧，智慧智慧智慧智！多措并举 从“心”出发——丹巴教育局全力打好校园疫情防控心理健康保功能比HTML中的butoon按钮更加丰富，可以直接更改颜色，大小之类的，通过open-type属性可以调用微信提供的各种功能',
          time:'2023-01-14 14:56',
          img:'https://img1.baidu.com/it/u=413643897,2296924942&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        }
      ]
      
      let newData = data
      // let newData = res.data.data
      if(!(newData instanceof Array) || newData.length == 0) {
        return {}
      }
      let map = {};
      for(let i = 0; i < newData.length; i++) {
        if(newData[i] instanceof Array || newData.length < 2){
            continue
        }
        let type = newData[i].type;
        if(type !=undefined) {
            if(map[type] == undefined){
                map[type] = []
            }
            map[type].push(newData[i])
        }
      }
      let newArr = Object.values(map).map((item,) => {
        let title = item[0].title
        return {
            title,
        }
      })
      newArr.unshift({title:'全部'})
      setArticleList(newData)
      setTabList(newArr)
    // })
  }
  const handleChange = (e) => {
    setCurrent(e)
  }
  console.log(tabList)
  return (
    // <View>
      <AtTabs current={current} tabList={tabList} onClick={handleChange}>
        {
          tabList.map((item,index) => {
            return <AtTabsPane 
              key={index} 
              current={current} 
              index={index}
            >
              <View className='content'>
              {
                    articleList && (item.title == '全部' ? articleList : articleList.filter(jtem => jtem.title == item.title)).map(i => {
                      return <View 
                        key={i.id}
                        className='card'
                      >
                      <AtCard
                        className='card-item'
                        title={i.title}
                        key={index}
                      >
                    <View className='at-row at-row--wrap'>
                      <View className='at-col at-col-8 at-col--wrap'>
                        <View className='card-content'>
                          {i.content}
                        </View>
                        <View className='card-time'>{i.time}</View>
                      </View>
                      <View className='at-col at-col-3'>
                        <View className='card-img'>
                         <Image className='img' src={i.img} />
                        </View>
                      </View>
                    </View>
                  </AtCard>
                      </View> 
                    })
              }
              </View>
          </AtTabsPane>
         })
        } 
      </AtTabs>
    // </View>
  )
}
export default MoreArticle
