import { useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import { connect } from "react-redux";
import { AtAvatar, AtCard, AtDivider, AtIcon } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import Change from "@static/change.png";
import newClass from "@static/create-class.png"
import add from "@static/add-class.png";
import wait from "@static/wait-todo.png";
import review from "@static/review.png"
import setting from "@static/setting.png";
import right from "@static/right.png";
import normal from "@static/normal.png"

import "./my.scss";

function My(props) {
  
  const { dispatch, user, identity } = props;
  let settingList = [
    {
      id: 0,
      name: "创建新班级",
      avatar: newClass,
      url:'/pages/my/CreateClass/CreateClass'
    },
    {
      id: 1,
      type:true, //教师端和家长端均存在，无该属性表示仅在教师端存在
      name: "加入新班级",
      avatar: add,
      url:'/pages/my/AddClass/AddClass'
    },
    {
      id: 2,
      type:true,
      name: "我的待办",
      avatar: wait,
      url:'/pages/my/WaitTodo/WaitTodo'
    },
    {
      id: 3,
      name: "年终总结",
      avatar: review,
      url:'/pages/my/Review/Review'
    },
    {
      id: 4,
      type:true,
      name: "设置",
      avatar: setting,
      url:'/pages/my/Setting/Setting'
    },
  ];

  useEffect(() => {
    // dispatch({
    //   type: "users/getIdentity",
    // });
    
    // dispatch({
    //   type: "users/getUser",
    // });
  }, []);
  const handleUpload = () => {
    console.log("upload");
    Taro.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success: (res) => {
        // editorRef.current.insertImage({
        //   src: res.tempFilePaths[0],
        //   width: "60%",
        //   success: () => {},
        // });
        console.log(res,'res')
        // var tempFilePaths = res.tempFilePaths
        let filePathList = res.tempFilePaths.map((file) =>
        // console.log(file,'file')
              dispatch({
                type: "AddressList/getUploadFile",
                payload: file,
              }).then((resp) => {
                console.log(resp,'reps')
                // return resp.data;
              })
            );
        console.log(filePathList,'tempFile')
        // item.record = tempFilePaths
      },
    });
  };
  const handleNav = (value) => {
    if(value == 1){
      Taro.navigateTo({ url: "/pages/addressList/Check/Check" });
    }else if(value == 2){
      Taro.navigateTo({ url: "/pages/my/ChildMsg/ChildMsg" });
    }else{
      Taro.navigateTo({ url:value})
    }
  };
  return (
    <View className='index'>
      <NavTab needBackIcon={false} mainTitle='' />
      <View className='at-row at-row__align--center my-head'>
        <View className='at-col at-col-3 '>
          <View onClick={handleUpload} className='avatar'>
            <AtAvatar circle size='large'  image={identity.avatar ? identity.avatar : normal}></AtAvatar>
            {/* <Image className='image' src={identity.avatar} /> */}
          </View>
          <View className='icon' onClick={() => handleNav(1)}>
              <Image className='head-image' src={Change} />
            </View>
        </View>
        <View className='at-col at-col-6 head'>
          <View className='head-name'>
            <Text className='name'>{identity.userName}</Text>
            {/* <Text className='stu-name'>{identity.student_name}</Text> */}
            <Text className='stu-name'>张三</Text>

          </View>
            
        </View>
        <View className='at-col at-col-2'>
          <View onClick={() => handleNav(2)} className='head-right'>
            孩子信息
            <AtIcon value='chevron-right' size='15'></AtIcon>
          </View>
        </View>
      </View>

      <View className='my-content'>
        {(user == 0 ? settingList.filter(item => item?.type) : settingList).map((item, index) => {
          console.log(item)
          return (
            <View key={index} onClick={() => handleNav(item.url)}>
              <View className='at-row at-row__align--end content'>
                <View className='at-col at-col-2 avatar'>
                  <Image className='image' src={item.avatar} />
                </View>
                <View className='at-col at-col-9 '>
                  <Text className='content-name'>{item.name}</Text>
                </View>
                <View className='at-col at-col-3 right' >
                  <Image className='image' src={right} />
                </View>
                <View className='divider'>
                  <AtDivider height={12} lineColor='#E6E6E6' />
                </View>
              </View>
            </View>
          );
        })}
      </View>
      
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(My);
