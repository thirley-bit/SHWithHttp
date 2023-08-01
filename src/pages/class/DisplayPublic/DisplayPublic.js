import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Input, Text, Button } from "@tarojs/components";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import {
  AtIcon,
  AtMessage,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtTabs,
  AtTabsPane,
  AtTag,
} from "taro-ui";
import "./DisplayPublic.scss";

function DisplayPublic(props) {
  const { dispatch, hobbyList, strengthsList } = props;
  const [list, setList] = useState([]);
  const [current, setCurrent] = useState(0); //当前tab页
  const [isOpened, setIsOpened] = useState(false); //弹层是否打开
  const [modalIndex, setModalIndex] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const tabList = [
    {
      title: "爱好",
    },
    {
      title: "特长",
    },
  ];
  useEffect(() => {
    dispatch({
      type: "DisplayPublic/getHobby",
    });
    dispatch({
      type: "DisplayPublic/getStrengths",
    });
  }, []);
  useEffect(() => {
    if (hobbyList || strengthsList) {
      let newList1 = hobbyList.filter((it) => it.active == true);
      let newList2 = strengthsList.filter((it) => it.active == true);
      let newList = newList1.concat(newList2);
      setList(newList);
    }
  }, [hobbyList, strengthsList]);

  //顶部删除
  const handleDel = (value) => {
    value.active = false;
    let newList1 = hobbyList.map((item) => {
      const name = item.name;
      const active = item.active;
      return {
        name,
        active,
      };
    });
    dispatch({
      type: "DisplayPublic/changeHobbyList",
      payload: newList1,
    });
    let newList2 = strengthsList.map((item) => {
      const name = item.name;
      const active = item.active;
      return {
        name,
        active,
      };
    });
    dispatch({
      type: "DisplayPublic/changeStrengthsList",
      payload: newList2,
    });
  };
  //tab切换
  const handleChange = (e) => {
    setCurrent(e);
  };

  //选中或取消
  const handleActive = (value, index) => {
    if (list.length > 11) {
      if (value.active == false) {
        Taro.atMessage({
          message: "长度超过12",
          type: "error",
        });
      }
      value.active = false;
    } else {
      value.active = !value.active;
    }
    let newList1 = (index == 0 ? hobbyList : strengthsList).map((item) => {
      const name = item.name;
      const active = item.active;
      return {
        name,
        active,
      };
    });
    if (index == 0) {
      dispatch({
        type: "DisplayPublic/changeHobbyList",
        payload: newList1,
      });
    } else {
      dispatch({
        type: "DisplayPublic/changeStrengthsList",
        payload: newList1,
      });
    }
  };
  //添加爱好或特长弹窗
  const handleEdit = (index) => {
    setIsOpened(true);
    setModalIndex(index);
    console.log(index, "index");
  };

  const handleInput = (e) => {
    setInputVal(e.detail.value);
  };
  
  const handleClose = () => {
    setIsOpened(false);
  };
  
  const handleConfirm = () => {
    if (inputVal == "") {
      Taro.atMessage({
        message: "输入不能为空",
        type: "error",
      });
    } else {
      let newObj = {
        name: inputVal,
        active: false,
      };
      if (modalIndex == 0) {
        let newList1 = hobbyList.concat(newObj);
        dispatch({
          type: "DisplayPublic/changeHobbyList",
          payload: newList1,
        });
      } else {
        let newList2 = strengthsList.concat(newObj);
        dispatch({
          type: "DisplayPublic/changeStrengthsList",
          payload: newList2,
        });
      }
      setIsOpened(false);
    }
  };
  //顶部提交按钮
  const handleSave = () => {
    dispatch({
      type: "DisplayPublic/getHobby",
      payload:hobbyList
    });
    dispatch({
      type: "DisplayPublic/getStrengths",
      payload:strengthsList
    });
  };

  return (
    <View className='index'>
      <NavTab needBackIcon mainname='爱好与特长' />
      <View className='show'>
        {list.map((item, index) => {
          const name = item.name;
          let className = "top";
          if (name.length > 4) {
            className += " top2";
          }
          return (
            <View key={index} className={className}>
              {item.name}
              <View className='icon' onClick={() => handleDel(item)}></View>
              <View className='clearfloat'></View>
            </View>
          );
        })}
        <View className='clearfloat'></View>
        <View className='count'>
          <Text style='color:#999999'>{list.length}</Text>/12
        </View>
      </View>
      <View className='choose'>
        <AtTabs current={current} tabList={tabList} onClick={handleChange}>
          <AtTabsPane current={current} index={0}>
            <View className='hobby'>
              {hobbyList.map((it, i) => {
                return (
                  <View key={i} className='bottom'>
                    <AtTag
                      type='primary'
                      name={it.name}
                      circle
                      active={it.active}
                      onClick={() => handleActive(it, 0)}
                    >
                      {it.name}
                    </AtTag>
                    <View className='clearfloat'></View>
                  </View>
                );
              })}
              <View className='add-edit' onClick={() => handleEdit(0)}>
                <AtIcon value='edit' size={20} color='#999999'></AtIcon>
                <Text style='color:#999999;marginLeft:16rpx'>编辑</Text>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View className='hobby'>
              {strengthsList.map((it, i) => {
                return (
                  <View key={i} className='bottom'>
                    <AtTag
                      type='primary'
                      name={it.name}
                      circle
                      active={it.active}
                      onClick={() => handleActive(it, 1)}
                    >
                      {it.name}
                    </AtTag>
                  </View>
                );
              })}
              <View className='add-edit' onClick={() => handleEdit(1)}>
                <AtIcon value='edit' size={20} color='#999999'></AtIcon>
                <Text style='color:#999999;marginLeft:16rpx'>编辑</Text>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
      <AtModal
        className='edit-modal'
        isOpened={isOpened}
        closeOnClickOverlay={false}
      >
        <AtModalContent className='modal-edit'>
          请输入{modalIndex == 0 ? "爱好" : "特长"}：
          <Input
            className='modal-input'
            value={inputVal}
            maxlength={19}
            placeholder='请输入'
            focus
            onInput={handleInput}
          />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => handleClose()}>取消</Button>
          <Button onClick={() => handleConfirm()}>确认</Button>
        </AtModalAction>
      </AtModal>
      <AtMessage />
      <GradientButton type='primary' onClick={handleSave}>
        确认
      </GradientButton>
    </View>
  );
}
export default connect((state) => ({
  hobbyList: state.DisplayPublic.hobbyList,
  strengthsList: state.DisplayPublic.strengthsList,
}))(DisplayPublic);
