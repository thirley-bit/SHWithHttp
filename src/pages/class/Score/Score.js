

import { useEffect, useState } from 'react'
import {  View,  } from '@tarojs/components'
import Work from '@app/component/Work/Work'
import api from '@/api/api'
import { connect } from 'react-redux'

function Score(props) {
  const { dispatch, scoreArr } = props
  useEffect(()=>{
    dispatch({
      type:'Score/getScoreList'
    })
  },[])
 
  return (
    <View className='main'>
        <Work enter='score' showData={scoreArr} />
    </View>
  )
}

export default connect(state => ({
  identity:state.users.identity,
  scoreArr:state.Score.scoreArr
}))(Score)
