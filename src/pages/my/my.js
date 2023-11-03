import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { connect } from "react-redux";
import { AtAvatar, AtIcon } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import Divider from "@app/component/Divider/Divider";
import Change from "@static/change.png";
import newClass from "@static/create-class.png";
import add from "@static/add-class.png";
import wait from "@static/wait-todo.png";
import review from "@static/review.png";
import setting from "@static/setting.png";
import right from "@static/right.png";
import normal from "@static/normal.png";

import "./my.scss";

function My(props) {
  const { dispatch, user, identity, bindStudent } = props;
  let settingList = [
    {
      id: 0,
      name: "创建新班级",
      avatar: newClass,
      url: "/pages/my/CreateClass/CreateClass",
    },
    {
      id: 1,
      type: true, //教师端和家长端均存在，无该属性表示仅在教师端存在
      name: "加入新班级",
      avatar: add,
      url: "/pages/my/AddClass/AddClass",
    },
    {
      id: 2,
      type: true,
      name: "我的待办",
      avatar: wait,
      url: "/pages/my/WaitTodo/WaitTodo",
    },
    {
      id: 3,
      name: "年终总结",
      avatar: review,
      url: "/pages/my/Review/Review",
    },
    {
      id: 4,
      type: true,
      name: "设置",
      avatar: setting,
      url: "/pages/my/Setting/Setting",
    },
  ];

  // 上传用户头像
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
        console.log(res, "res");
        // var tempFilePaths = res.tempFilePaths
        let filePathList = res.tempFilePaths.map((file) =>
          // console.log(file,'file')
          dispatch({
            type: "AddressList/getUploadFile",
            payload: file,
          }).then((resp) => {
            // return resp.data;
          })
        );
        console.log(filePathList, "tempFile");
        // item.record = tempFilePaths
      },
    });
  };
  // 跳转页面
  const handleNav = (value) => {
    // 切换至审核页面
    if (value == 1) {
      Taro.navigateTo({ url: "/pages/addressList/Check/Check" });
    } else if (value == 2) {
      // 切换至孩子信息详情页面
      Taro.navigateTo({ url: "/pages/my/ChildMsg/ChildMsg" });
    } else {
      // 跳转至列表对应页面
      Taro.navigateTo({ url: value });
    }
  };
  // 顶部头像等样式
  const _headAvatar = (e) => {
    // 家长端左右布局
    if (user == 0) {
      return (
        <View className='at-row at-row__align--center my-head'>
          <View className='at-col at-col-3 '>
            {/* 用户头像 */}
            <View onClick={handleUpload} className='my-head-avatar'>
              <AtAvatar
                circle
                size='large'
                image={identity.avatar || normal}
              ></AtAvatar>
            </View>
            {/* 跳转至审核页面 */}
            <View className='my-head-icon' onClick={() => handleNav(1)}>
              <Image className='image' src={Change} />
            </View>
          </View>
          <View className='at-col at-col-6 my-head-center'>
            {/* 用户信息 */}
            <View className='my-head-name'>
              {/* 用户名 */}
              <Text className='name'>{identity && identity.userName}</Text>
              <Text className='stu-name'>
                {bindStudent && bindStudent.userName}
              </Text>
              {/* 家长绑定的学生名 */}
            </View>
          </View>
          {/* 家长端跳转至孩子详情信息 */}
          {user == 0 && (
            <View className='at-col at-col-2'>
              <View onClick={() => handleNav(2)} className='my-head-right'>
                孩子信息
                <AtIcon value='chevron-right' size='15'></AtIcon>
              </View>
            </View>
          )}
        </View>
      );
    } else {
      // 家长端上下居中对齐
      return (
        <View className='teacher-head'>
          {/* 用户头像 */}
          <View onClick={handleUpload} className='teacher-head-avatar'>
            <AtAvatar
              circle
              size='large'
              image={identity.avatar || normal}
            ></AtAvatar>
          </View>
          {/* 跳转至审核页面 */}
          <View className='teacher-head-icon' onClick={() => handleNav(1)}>
            <Image className='image' src={Change} />
          </View>
          <View className='teacher-head-name'>
            {/* 用户名 */}
            <View className='name'>{identity && identity.userName}</View>
            {/* 老师特殊身份(班主任,任课老师等) */}
            <View className='special'>
              {/* 是班主任 */}
              {identity && identity.ifClassTeacher === 1 && <View className='isClassTeacher'>班主任</View>}
              {/* 是否是任课老师 */}
              {identity && identity.Teacher && <View className='isTeacher'>{identity.teacher}</View>}
            </View>
          </View>
        </View>
      );
    }
  };
  return (
    <View className='index'>
      <NavTab needBackIcon={false} mainTitle='' />
      {/* 顶部头像等样式 */}
      <View className='my'>{_headAvatar()}</View>
      {/* 设置列表 */}
      <View className='my-content'>
        {(user == 0
          ? settingList.filter((item) => item?.type)
          : settingList
        ).map((item, index) => {
          return (
            <View key={index} onClick={() => handleNav(item.url)}>
              <View className='at-row at-row__align--end content'>
                {/* 左侧图标 */}
                <View className='at-col at-col-2 avatar'>
                  <Image className='image' src={item.avatar} />
                </View>
                {/* 中间名称 */}
                <View className='at-col at-col-9 '>
                  <Text className='content-name'>{item.name}</Text>
                </View>
                {/* 右侧'>'图标 */}
                <View className='at-col at-col-3 right'>
                  <Image className='image' src={right} />
                </View>
                {/* 底部分割线 */}
                <Divider height={12} className='divider80' />
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
  bindStudent: state.users.bindStudent,
}))(My);
