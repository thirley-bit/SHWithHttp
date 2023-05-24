

import { useEffect, useState } from 'react'
import {  View,  } from '@tarojs/components'
import Work from '@app/component/Work/Work'
import api from '@/api/api'

function Score() {
  const [user, setUser] = useState("");
  const [showData, setShowData] = useState([])
  useEffect(()=>{
    userData();
    parentScore()
  },[])

  const userData = () => {
    let url = "identity";
    let data = api[url].data.user_code;
    setUser(data);
  };
  
  const parentScore = () => {
    let url = 'score/list'
    let data = api[url].data
    setShowData(data)
  }
  return (
    <View className='main'>
        <Work enter='score' user={user} showData={showData} />
    </View>
  )
}
export default Score
