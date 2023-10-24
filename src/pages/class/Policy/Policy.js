import { useEffect, useState } from 'react'
import { View,} from '@tarojs/components'
import ArticleList from '@app/component/ArticleList/ArticleList'
import NavTab from '@app/component/NavTab/NavTab';
import { connect } from 'react-redux'
import { AtSearchBar } from 'taro-ui'
import "./Policy.scss"

function Policy(props){
  const { dispatch, policyArr } = props
  useEffect(() => {
    dispatch({
      type:'Policy/getPolicyList'
    })
  },[])
 

  return (
    <View className='index'>
      
      <NavTab back title='优惠政策' />
      <View className='search' handleSearch='handleSearch'>
        <AtSearchBar />
        {/* <SearchBar placeholder='请输入关键字' value={searchValue} /> */}
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
