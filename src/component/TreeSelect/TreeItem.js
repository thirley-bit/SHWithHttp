import cls from "classnames";
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtCheckbox, AtIcon, AtAccordion } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import SearchBar from "@app/component/SearchBar/SearchBar";
import Tree from '@app/component/TreeSelect/Tree';

function TreeItem(props) {
  // const { visible, loading } = this.state
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const {
    selectedValue,
    onChange,
    multiple,
    data,
    treeDefaultExpandAll,
    loadData,
  } = props;
  const { label, children, value,parentLevel, disabled } = data || {};
  const moreIcon = loading
    ? "loading-3"
    : visible
    ? "chevron-down"
    : "chevron-up";
  const isRenderLeafIcon = Array.isArray(children) && children.length > 0;
  const checked = selectedValue === value;

  const handleToggleMore = () => {
    setVisible(!visible);
  };
  return (
    <View className='tree-item'>
        <View className='tree-item-content'>
          {/* 多选树 */}
          {multiple&&(
            <AtCheckbox 
              options={[{
                label,
                value,
                parentLevel,
              }]}
              onChange={(e) => onChange(e,value,parentLevel)}
              selectedList={selectedValue||[]}
            />)}
          
          {/* 展开收起加载中状态下的图标 */}
          {isRenderLeafIcon&&(
            <View className='tree-item-more' onClick={handleToggleMore}>
              <AtIcon value={moreIcon} size={20} color='#C7C7CC' />
            </View>)}
        </View>
        {/* 子级树 */}
        <View className={cls({
          "none": !visible,
        })}
        >
          <Tree
            value={selectedValue}
            multiple={multiple}
            onChange={onChange}
            loadData={loadData}
            dataSource={children} 
            treeDefaultExpandAll={treeDefaultExpandAll}
          />
        </View>
      </View>
  );
}
export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
  classStudent: state.Class.classStudent,
  chooseIdList: state.Class.chooseIdList,
  chooseName: state.Class.chooseName,
  subjectDetail: state.HomeWork.subjectDetail,
}))(TreeItem);
