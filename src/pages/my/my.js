import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import './my.scss'

function My(props){
  const { dispatch, user } = props
  console.log(user)
  useEffect(() => {
    dispatch({
      type:'users/getUser'
    })
  })
  return (
    <View  className='main'>
      <Text>我的fefrerr</Text>
    </View>
  )
}
export default connect(state => ({
  user:state.users.user
}))(My)
