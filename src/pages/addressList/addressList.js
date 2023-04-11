import { Component, useState } from 'react'
import { Input, View, Button } from '@tarojs/components'
import axios, { Axios } from "axios"

function AddressList() {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };
  // const handleClick=()=>{
  //   console.log(111)
  //   // axios.
  // }
  return (
    <View className='index'>
        <Input type="checkbox" checked={isChecked} onInput={() => onChange()}/>
        {
          isChecked ? 'A' : 'B'
        }
        {/* <Button onClick={ ()=>handleClick()}>点击</Button> */}
    </View>
  )
}
export default AddressList
