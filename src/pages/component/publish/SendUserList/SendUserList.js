import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, Input, Text, Picker, Editor } from "@tarojs/components";
import Taro, { useRouter } from "@tarojs/taro";
import {
  AtCheckbox,
  AtList,
  AtIcon,
  AtMessage,
  AtAvatar,
  AtAccordion,
  AtSearchBar,
} from "taro-ui";
import DetailHeader from "@app/component/detailHeader/detailHeader";
import StudentsList from "@app/component/StudentsList/StudentsList";
import NavTab from "@app/component/NavTab/NavTab";
import normal from "@static/normal.png";
import GradientButton from "@app/component/GradientButton";
import Modal from "@app/component/Modal";
import Divider from "@app/component/Divider";
import api from "@/api/api";
// import img from "../../../static/img.jpg";
import "./SendUserList.scss";

function SendUserList(props) {
  console.log(props, "peops");
  const { dispatch, subjectType, classStudent, subjectDetail } = props;
  const [checkOption, setCheckOption] = useState([
    { label: "全选", value: "全选", checked: false },
  ]); //全选选项
  const [isOpened, setIsOpened] = useState(true);

  const [checkedList, setCheckedList] = useState([]); //朋友页面选中内容
  const [checkedAll, setCheckedAll] = useState([]); //朋友页面全选
  useEffect(() => {
    dispatch({
      type: "Class/getClassStudent",
    });
  }, []);
  const handleSelectAll = (value) => {
    console.log(value, "value");
    setCheckedAll(value);
  };
  const handleSelect = (value) => {
    console.log(value, ">>>>>>>>");
    setCheckedList(value);
  };
  return (
    <View className="main">
      <NavTab back title="新建" />
      {/* <View className="search">
        <AtSearchBar
          showActionButton
          value={searchValue}
          onChange={handleSearch}
          onClear={handleClear}
        />
      </View> */}
      <View>
        {classStudent.map((item, index) => {
          return (
            <View key={index}>
              <AtCheckbox
                style={{ display: "inline-block" }}
                options={[
                  { label: item.className, value: item.id, checked: false },
                ]}
                selectedList={checkedAll}
                onChange={handleSelectAll}
              />
              {/* 新建群聊——人员列表 */}
              <AtCheckbox
                options={item.studentList.map((i) => {
                  let value = item.id;
                  let label = (
                    <View className="label-avatar">
                      <AtAvatar
                        size="small"
                        circle
                        className="avatar-img"
                        image={i.avatar || normal}
                      />
                      <View className="label-text">{i.studentName}</View>
                    </View>
                  );
                  return {
                    value,
                    label,
                  };
                })}
                selectedList={checkedList}
                onChange={handleSelect}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
  classStudent: state.Class.classStudent,
  subjectDetail: state.HomeWork.subjectDetail,
}))(SendUserList);
