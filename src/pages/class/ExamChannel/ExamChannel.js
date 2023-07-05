import { useEffect, useState } from 'react'
import { View, Text} from '@tarojs/components'
import { connect } from 'react-redux'
import { AtButton, AtFab, AtIcon } from 'taro-ui'
import NavTab from '@app/component/NavTab/NavTab'
import "./ExamChannel.scss"

function ExamChannel(props){
 const { dispatch, user, channelArr } = props
 console.log(channelArr,user)
 useEffect(() => {
  dispatch({
    type:'users/getUser'
  })
  dispatch({
    type:'ExamChannel/getChannelList'
  })
 },[])
 const handlePublishClick = () => {
  console.log(111)

 }
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='参赛通道' />
      {
        channelArr.map((item,index) => {
          return <View key={index}>
             <View style='margin:2%'>{item.name}</View>
             <AtButton className='button-url' type='primary'>{item.url}</AtButton>
             </View>
        })
      }
      {user == "1" && (
        <View className='add'>
          <AtFab onClick={handlePublishClick}>
            <View>
              <AtIcon
                className='add-icon'
                value='add'
                size='25'
                color='#fff'
              ></AtIcon>
              <Text className='add-text'>
                比赛链接
              </Text>
            </View>
          </AtFab>
        </View>
      )}
    </View>
  )
}
export default connect(state => ({
  user:state.users.user,
  channelArr:state.ExamChannel.channelArr
})) (ExamChannel)
