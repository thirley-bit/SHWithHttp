import { View } from '@tarojs/components'
import { AtTabs } from 'taro-ui'
import './MyTabs.scss'

function MyTabs({children, className, ...props}) {
    const { current, tabList, onClick} = props
    return <View className='tabs'>
        <AtTabs current={current} tabList={tabList} onClick={onClick}>
            {children}
      </AtTabs>
    </View>
}

export default MyTabs