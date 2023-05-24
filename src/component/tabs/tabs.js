import { View, Navigator } from '@tarojs/components'
import './Tabs.scss'

function Tabs(props) {
    console.log(props)
    const handleClick = (current) => {    //触发的点击事件
        console.log(current)
        // const { onClick } = props     //组件中onClick触发的方法,从父组件中传递过来,(传给父组件的方法，必须以on开头)
        // onClick && onClick(current)    //onClick存在(即为true时),执行后面的onClick方法,...arguments是展开伪数组
    }

    //  根据需要可自定义,也可写死,,先把this.props中的变量解构出来,下面用到的时候,就不用写那么长了
    const { user, tabList, current, flexWrap = 'nowrap', maxOneRow = 3 } = props
    return <View className='tabs'>
        <View className='hd' style={`flex-wrap: ${flexWrap};`}>
            {tabList.map((tab, i) => {
                return <View
                  key={i}
                  className={`option ${i === current ? 'option_active' : ''}`}    //当当前的current等于对应的index时,添加对应的样式
                  style={`width: ${flexWrap === 'nowrap'        //当不换行时,每个tab项的宽度是100/总项数(均衡)
                        ? (100 / tabList.length)
                        : (100 / maxOneRow)}%`}    //换行时,100/一行最多的个数
                  onClick={() => handleClick(i)}
                >
                    <Navigator
                      url={`${tab.url}?user=${user}`}
                    >
                        {tab.title}
                    </Navigator>
                    <View className='underline'></View>
                </View>
            })}
        </View>
    </View>
}

export default Tabs