import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import { AtSearchBar, AtTabBar } from "taro-ui";
import PersonList from "@app/component/personList/personList";
import NavTab from "@app/component/NavTab/NavTab";
import newAdd from "../../static/newadd.png";
import group from "../../static/group.png";
import msg from "../../static/add-message.png";
import addGroup from "../../static/add-group.png";
import "./AddressList.scss";

function AddressList(props) {
  const { dispatch, user, pageSize, userId, identity, addressList } = props;
  const [current, setCurrent] = useState(0);
  const tabList = [
    {
      title: "添加",
      image: newAdd,
      url: "/pages/my/AddClass/AddClass",
    },
    {
      title: "群聊",
      image: group,
      url: "/pages/addressList/groupChat/groupChat",
    },
    {
      title: "私信",
      image: msg,
      url: "/pages/addressList/message/message",
    },
    {
      title: "审核",
      image: addGroup,
      url: "/pages/addressList/Check/Check",
    },
  ];

  useEffect(() => {
    //老师端必传，当前老师切换的班级id,家长端不传
    let classId = "";
    if (user == 1) {
      classId = identity.classId;
    }
    dispatch({
      type: "AddressList/getAddressBookList",
      payload: {
        searchKey: "",
        classId: classId,
      },
    });
    dispatch({
      type: "users/getJoinReviewList",
      payload:{
        page:1,
        pageSize:pageSize,
        //是老师时为当前登录人id， 是家长时为当前切换的审核数据id
        userId: userId,
        status:[0,1,2,3]
      }
    });
  }, []);


  const handleClick = (e) => {
    setCurrent(e);
    Taro.navigateTo({
      url: tabList[e].url,
    });
  };
  const handleEdit = (record) => {
    console.log(record,'record')
    Taro.makePhoneCall({
      phoneNumber:record.telephone
    })
  }
  const handleDel = (id) => {
    console.log(id, "type,id");
  };

  return (
    <View className='index'>
      <NavTab iconTheme='black' home title='通讯录' />
      <View className='search' handleSearch='handleSearch'>
        <AtSearchBar />
        {/* <SearchBar placeholder='请输入关键字' value={searchValue} /> */}
      </View>
      <AtTabBar tabList={tabList} onClick={handleClick} current={current} />
      <View className='teacher-list'>
        <View className='text'>
          <Text>老师</Text>
        </View>
        <PersonList
          enter='teacher'
          showData={addressList.teacherList}
          onEdit={handleEdit}
          onDel={handleDel}
        />
      </View>
      <View className='teacher-list'>
        <View className='text'>
          <Text>家长</Text>
        </View>
        <PersonList
          enter='teacher'
          showData={addressList.parentList}
          onEdit={handleEdit}
          onDel={handleDel}
        />
      </View>
    </View>
  );
}
export default connect((state) => ({
  user: state.users.user,
  userId: state.users.userId,
  identity: state.users.identity,
  pageSize: state.users.pageSize,
  addressList: state.AddressList.addressList,
}))(AddressList);
