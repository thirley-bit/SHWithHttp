import cls from "classnames";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtCheckbox, AtIcon, AtAccordion } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import SearchBar from "@app/component/SearchBar/SearchBar";
import TreeItem from "@app/component/TreeSelect/TreeItem";
// import TreeSelect from '@app/component/TreeSelect/TreeSelect';
import normal from "@static/normal.png";
// import img from "../../../static/img.jpg";
// import "./TreeSelect.scss";

function Tree(props) {


const {
    dataSource,
    value: selectedValue,
    selectedName,
    onChange,
    multiple,
    loadData,
    treeDefaultExpandAll,
  } = props;
  if (!Array.isArray(dataSource)) return null
  return (
    <View className='tree'>
        {dataSource.map(item => {
          const { value } = item
          return (
            <TreeItem 
              key={value}
              data={item}
              loadData={loadData}
              onChange={onChange}
              multiple={multiple}
              selectedValue={selectedValue}
              selectedName={selectedName}
              treeDefaultExpandAll={treeDefaultExpandAll}
            />
          )
        })}
      </View>
  );
}
export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
  classStudent: state.Class.classStudent,
  chooseIdList: state.Class.chooseIdList,
  chooseName: state.Class.chooseName,
  subjectDetail: state.HomeWork.subjectDetail,
}))(Tree);
