import { View, Button, Input } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { AtForm, AtModal, AtModalAction, AtModalContent, AtSearchBar, AtInput, AtButton } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';
import Divider from '@app/component/Divider';
import normal from "@static/normal.png";
import "./AddClass.scss";

function AddClass(props) {
  const { dispatch, classList } = props
  const [showClassData, setShowClassData] = useState([])
  const [isOpened, setIsOpened] = useState(false)
  const [classId, setClassId] = useState('')
  const [searchValue, setSearchValue] = useState(""); //搜索朋友页面的人员
  const title = [
    {
      title: "学生姓名:",
      type: "text",
      name: 'studentName'
    },
    {
      title: "学生学号:",
      type: "text",
      name: 'studentNo'
    },
    {
      title: "亲属关系:",
      type: "text",
      name: 'relative'
    },
  ];
  
  useEffect(() => {
    dispatch({
      type:'users/getClassAll'
    })
  },[])
  useEffect(() => {
    if(classList){
      setShowClassData(classList)
    }
  },[classList])
  console.log(searchValue,'searchValue')

  //输入搜索内容
  const handleChangeValue = (val) => {
    setSearchValue(val)
    if(val.length  == 0) return setShowClassData(classList)
  }
  //搜索
  const handleSearch = () => {
   let data = classList.filter(item => item.className == searchValue)
   setShowClassData(data)
  };

  //清空搜索内容
  const handleClear = () => {
    setSearchValue("");
    setShowClassData(classList)
  };

  const handleEnter = (e) => {
    setIsOpened(true)
    setClassId(e.id)
  }
  const handleChange = (value, record) => {
    record.value = value;
  };
  const onSubmit = (evt) => {
    let userObj = Object.assign({classId:classId},evt[0].detail.value)
    console.log(userObj,'userobj')
    dispatch({
      type:'Class/getJoinClass',
      payload:userObj
    }).then((res) => {
      if (res.status == 200) {
        //关闭弹窗
        setIsOpened(false)
        //消息提示
        Taro.atMessage({
          message: '添加成功，待审核...',
          type: "success",
        });
      } else {
        Taro.atMessage({
          message: res.message,
          type: "error",
        });
      }
    });
  }
  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <View className='index'>
      <NavTab back title='加入新班级' />
      <View className='new-class'>
      <View className='search'>
              <AtSearchBar
                value={searchValue}
                onChange={handleChangeValue}
                onClear={handleClear}
                onActionClick={handleSearch}
              />
            </View>
        <View className='team'>
          {showClassData.map((item) => {
            return (
              <View key={item.id}>
              <View className='chat' >
                <View className='left'>
                  <View className='content'>
                    <View className='class'>{item.className}</View>
                    <View className='people'>
                      <View>{item.grade}级{item.classNum}班</View>
                      <View style={{ marginLeft: "23rpx", color: "#999" }}>
                        {item.status}
                      </View>
                    </View>
                    <View className='study'>{item.slogan}</View>
                  </View>
                </View>
                <View className='button'>
                    <GradientButton size='small' type='primary' onClick={() => handleEnter(item)}>加入</GradientButton>
                </View>
              </View>
              <Divider />
              </View>
            );
          })}
        </View>
      </View>
      <AtModal
        className='edit-modal'
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
      <AtForm name='modalname' onSubmit={onSubmit}>
        <AtModalContent className='modal-edit'>
            {title.map((item,index) => {
              return (
                <AtInput
                  key={index}
                  name={item.name}
                  title={item.title}
                  type={item.type}
                  value={item.value}
                  disabled={item.disabled}
                  onChange={(e) => handleChange(e, item)}
                />
              );
            })}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => handleClose()}>取消</Button>
          <Button formType='submit'>确认</Button>
        </AtModalAction>
        
        </AtForm>
      </AtModal>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  classList: state.users.classList,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(AddClass);
