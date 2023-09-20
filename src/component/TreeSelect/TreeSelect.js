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
import Tree from '@app/component/TreeSelect/Tree';
// import TreeSelect from '@app/component/TreeSelect/TreeSelect';
import normal from "@static/normal.png";
// import img from "../../../static/img.jpg";
import "./TreeSelect.scss";

const clsPrefix = 'cp-tree'

function TreeSelect(props) {
    
    const { dataSource, multiple, value, onChange, treeDefaultExpandAll, loadData } = props

  return (
    <View className={cls(clsPrefix, {
        [`${clsPrefix}-radio`]: !multiple,
        [`${clsPrefix}-multiple`]: multiple,
      })}
    >
        <Tree
          value={value}
          loadData={loadData}
          multiple={multiple}
          onChange={onChange}
          dataSource={dataSource} 
          treeDefaultExpandAll={treeDefaultExpandAll}
        />
      </View>
  );
}
export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
  classStudent: state.Class.classStudent,
  chooseIdList: state.Class.chooseIdList,
  chooseName: state.Class.chooseName,
  subjectDetail: state.HomeWork.subjectDetail,
}))(TreeSelect);
