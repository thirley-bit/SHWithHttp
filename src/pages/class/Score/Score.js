

import { useEffect, useState } from 'react'
import {  View,  } from '@tarojs/components'
import Work from '@app/component/Work/Work'
import NavTab from '@app/component/NavTab/NavTab'
import { connect } from 'react-redux'

import "./Score.scss"

function Score(props) {
  const { dispatch, scoreArr } = props
  useEffect(()=>{
    dispatch({
      type:'Score/getScoreList'
    })
  },[])
 
  return (
    <View className='index'>
      <NavTab needBackIcon mainTitle='成绩' />
        <Work enter='score' showData={scoreArr} />
    </View>
  )
}

export default connect(state => ({
  identity:state.users.identity,
  scoreArr:state.Score.scoreArr
}))(Score)
