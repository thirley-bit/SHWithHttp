import { View, Button, Picker } from "@tarojs/components";
import { connect } from "react-redux";
import Taro from "@tarojs/taro";
import { useEffect, useRef, useState } from "react";
import {
  AtForm,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtInput,
  AtMessage,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import Divider from "@app/component/Divider/Divider";
import SearchBar from '@app/component/SearchBar/SearchBar';
import "./AddClass.scss";

function AddClass(props) {
  const { dispatch, classList } = props;
  const [showClassData, setShowClassData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [classId, setClassId] = useState("");
  const [searchValue, setSearchValue] = useState(""); //搜索朋友页面的人员
  const [selectorChecked, setSelectorChecked] = useState("");
  const handleClassChange = (e) => {
    setSelectorChecked(e.detail.value);
  };
  const title = [
    {
      title: "学生姓名:",
      type: "text",
      name: "studentName",
    },
    {
      title: "学生学号:",
      type: "text",
      name: "studentNo",
    },
    {
      title: "亲属关系:",
      type: "text",
      name: "relative",
    },
  ];

  useEffect(() => {
    dispatch({
      type: "users/getClassAll",
    });
  }, []);
  useEffect(() => {
    if (classList) {
      setShowClassData(classList);
    }
  }, [classList]);

  //输入搜索内容
  const handleChangeValue = (val) => {
    setSearchValue(val);
    if(val){
      let data = classList.filter((item) => item.className == searchValue);
    setShowClassData(data);
    }else{
      setShowClassData(classList)
    }
  };

  //清空搜索内容
  const handleClear = () => {
    setSearchValue("");
    setShowClassData(classList);
  };

  const handleEnter = (e) => {
    setIsOpened(true);
    setClassId(e.id);
  };
  const handleChange = (value, record) => {
    record.value = value;
  };
  const onSubmit = (evt) => {
    let userObj = Object.assign({ classId: classId }, evt[0].detail.value);
    console.log(userObj, "userobj");
    if (userObj.studentName == "") {
      Taro.showToast({
        title: "请输入学生姓名",
        icon: "error",
      });
    } else if (userObj.studentNo == "") {
      Taro.showToast({
        title: "请输入学生学号",
        icon: "error",
      });
    } else {
      dispatch({
        type: "Class/getJoinClass",
        payload: userObj,
      }).then((res) => {
        if (res.status == 200) {
          //关闭弹窗
          setIsOpened(false);
          //消息提示
          Taro.atMessage({
            message: "添加成功，待审核...",
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
  };
  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <View className='index'>
      <NavTab back title='加入新班级' />
      <View className='new-class'>
        <SearchBar 
          value={searchValue}
          onChange={handleChangeValue}
          onClear={handleClear}
        />
        <View className='team'>
          {showClassData.map((item) => {
            return (
              <View key={item.id}>
                <View className='chat'>
                  <View className='left'>
                    <View className='content'>
                      <View className='class'>{item.className}</View>
                      <View className='people'>
                        <View>
                          {item.grade}级{item.classNum}班
                        </View>
                        <View style={{ marginLeft: "23rpx", color: "#999" }}>
                          {item.status}
                        </View>
                      </View>
                      <View className='study'>{item.slogan}</View>
                    </View>
                  </View>
                  <View className='button'>
                    <GradientButton
                      size='small'
                      type='primary'
                      onClick={() => handleEnter(item)}
                    >
                      加入
                    </GradientButton>
                  </View>
                </View>
                <Divider className='divider' />
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
        <AtForm name='modal-name' onSubmit={onSubmit}>
          <AtModalContent>
            {title.map((item, index) => {
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
      <AtMessage />
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  classList: state.users.classList,
  identity: state.users.identity,
  settingList: state.users.settingList,
}))(AddClass);
