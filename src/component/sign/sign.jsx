import React, { useState } from 'react';
import Taro, { getSetting, authorize } from "@tarojs/taro";
import { View, Text, Button, Form, CoverView, Map, Switch } from '@tarojs/components'
// import Location from '@app/component/location/Location';

function Sign(props){
    const [students, setStudents] = useState([
        {
            id:1,
            name:'张三',
            status:0
        },
        {
            id:2,
            name:'李四',
            status:0
        },
        {
            id:3,
            name:'王五',
            status:0
        },
        {
            id:4,
            name:'刘毅',
            status:0
        },
        {
            id:5,
            name:'小四',
            status:0
        },
    ])
    const [user, setUser] = useState('teacher')

    const formSubmit = (index) => {
        console.log(index)
    }

    const formReset = (e) => {
        console.log(e)
    }
    const signHandle = (index) => {
        console.log(index)
    }
    return (
        <View className='index'>
        {
            user === "teacher" ? 
            <View>
                {
                    students.map((item,index) => {
                        console.log(item)
                        const name = item.name
                        return  <Form onSubmit={() => formSubmit(index)} onReset={formReset}>{name}
                        <Button type='primary' size='mini' onClick={() => signHandle(index)}>签到</Button>
                        </Form>
                    })
                }
                
            </View> :
            <View>
                <Text>打卡!</Text>
            </View>
        }
        {/* <Location></Location> */}

    </View>
    )
}

export default Sign;