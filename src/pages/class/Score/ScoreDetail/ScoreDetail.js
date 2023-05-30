import {  View,  } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import { connect } from 'react-redux';
import { useRouter } from '@tarojs/taro';
import "./ScoreDetail.scss"

//成绩详情页面
function ScoreDetail(props) {
  const { scoreTitle, scoreDetail } =props
  const [showData, setShowData] = useState([]);
  const router = useRouter()
  const id = router.params.id
  useEffect(()=>{
    if(id){
      let showArr = scoreTitle.map(item => {
        console.log(item)

        let { dataIndex } = item
        let editable = true
        if(dataIndex == 'number' || dataIndex == 'name'){
          editable = false
        }
        let value = scoreDetail[dataIndex]
        return{
          editable,
          ...item,
          value
        }
      })
      setShowData(showArr)
    }else{
      setShowData(scoreTitle)
    }
  },[])
  const onSubmit = () => {
    console.log("submit");
  };
  const onReset = (e) => {
    console.log(e, showData, "reset");
  };
  const handleChange = (e) => {
    console.log(e, "change");
  };
  return (
    <View className='main'>
      <AtForm onSubmit={onSubmit} onReset={onReset}>
        {
          showData.map((item,index) => {
            return <AtInput
              key={index}
              name={item.title}
              title={item.title}
              type={item.type}
              value={item.value}
              editable={item.editable}
              required={item.required}
              onChange={handleChange}
            />
          })
        }
      </AtForm>
      <View className='bottom'>
        <AtButton
          type='primary'
          size='small'
          className='button-submit'
          onClick={onReset}
        >
          重置
        </AtButton>
        <AtButton
          type='primary'
          size='small'
          className='button-reset'
          onClick={onSubmit}
        >
          提交
        </AtButton>
      </View>
    </View>
  );
}
export default connect(state => ({
  scoreTitle: state.Score.scoreTitle,
  scoreDetail:state.Score.scoreDetail
})) (ScoreDetail)
