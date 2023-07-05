import { useEffect, useState } from 'react'
import { View,} from '@tarojs/components'
import ArticleList from '@app/component/articleList/articleList'
import NavTab from '@app/component/NavTab/NavTab';
import { connect } from 'react-redux'
import "./Policy.scss"
import { AtSearchBar } from 'taro-ui'

function Policy(props){
  const { dispatch, policyArr } = props
  useEffect(() => {
    dispatch({
      type:'Policy/getPolicyList'
    })
  },[])
 

  return (
    <View className='index'>
      
      <NavTab needBackIcon mainTitle='优惠政策' />
      <View>
        <AtSearchBar />
      </View>
      <View>
      <ArticleList
        articleList={policyArr}
      ></ArticleList>
      </View>
    </View>
  )
}
export default connect(state => ({
  policyArr:state.Policy.policyArr
}))(Policy)
