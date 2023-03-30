import { Component } from 'react'
import { View, Text, Button, Navigator } from '@tarojs/components'
function Index(){
  return (
    <View className='index'>
         <Text>首页!</Text>
          <Navigator
          url="/component/sign/sign"
          >
          <Button type='primary' size='mini'>签到</Button>
          </Navigator>
      </View>
  )
}
export default Index
