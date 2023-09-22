// import cls from "classnames";
// import { useState, useEffect, useRef } from "react";
// import { connect } from "react-redux";
// import { View, Text } from "@tarojs/components";
// import Taro from "@tarojs/taro";
// import { AtCheckbox, AtIcon, AtAccordion } from "taro-ui";
// import NavTab from "@app/component/NavTab/NavTab";
// import GradientButton from "@app/component/GradientButton";
// import SearchBar from "@app/component/SearchBar/SearchBar";
// import TreeItem from "@app/component/TreeSelect/TreeItem";
// import Tree from '@app/component/TreeSelect/Tree';
// // import TreeSelect from '@app/component/TreeSelect/TreeSelect';
// import normal from "@static/normal.png";
// // import img from "../../../static/img.jpg";
// import "./TreeSelect.scss";

// const clsPrefix = 'cp-tree'

// function TreeSelect(props) {
    
//     const { dataSource, multiple, value, onChange, treeDefaultExpandAll, loadData } = props

//   return (
//     <View className={cls(clsPrefix, {
//         [`${clsPrefix}-radio`]: !multiple,
//         [`${clsPrefix}-multiple`]: multiple,
//       })}
//     >
//         <Tree
//           value={value}
//           loadData={loadData}
//           multiple={multiple}
//           onChange={onChange}
//           dataSource={dataSource} 
//           treeDefaultExpandAll={treeDefaultExpandAll}
//         />
//       </View>
//   );
// }
// export default connect((state) => ({
//   subjectType: state.HomeWork.subjectType,
//   classStudent: state.Class.classStudent,
//   chooseIdList: state.Class.chooseIdList,
//   chooseName: state.Class.chooseName,
//   subjectDetail: state.HomeWork.subjectDetail,
// }))(TreeSelect);

import { useState, useImperativeHandle, forwardRef } from "react";
import { View, Checkbox, Label } from "@tarojs/components";
import classnames from "classnames";
import cloneDeep from "lodash.clonedeep";
import "./TreeSelect.scss"
import { AtCheckbox, AtIcon } from 'taro-ui';


function MyCheckbox({
  value,
  label,
  onChange,
  option,
  checked = false,
  disabled = false,
  dataIndex,
}) {
  const onChangeHandler = (e) => {
    e.stopPropagation();
    const _option = { ...option, checked: !checked };
    onChange && onChange({ value, option: _option, dataIndex });
  };

  return (
    <Label onClick={onChangeHandler}>
      <Checkbox value={value} checked={checked} disabled={disabled}>
        {label}
      </Checkbox>
    </Label>
  );
}
function treeFlat(dataSource) {
  const result = [];
  const arrayToTree = (data) => {
    if (data.children) {
      data.children.forEach((item) => {
        arrayToTree(item);
      });
    }
    const obj = { ...data };
    Reflect.deleteProperty(obj, "children");
    if (obj.checked) result.push(obj);
  };
  dataSource.forEach((item) => arrayToTree(item));
  return result;
}

function Collaspe({ itemKey, header, children, onChangeKey, activeKeys}) {
  const visible = activeKeys.includes(itemKey)
  const icon = visible ? "chevron-down" : "chevron-up";
  return (
    <View className='tselect__wrapper'>
      <View className='tselect-header'>
        {header}
        <View className='action-btn' onClick={() => onChangeKey(itemKey)}>
        <AtIcon value={icon} size={20} color='#C7C7CC' />
        </View>
      </View>
      <View
        className={classnames("tselect-content", {
          "is-open": visible,
        })}
      >
        {children}
      </View>
    </View>
  );
}

function TreeSelect(props, ref) {
  const { dataSource, onChange } = props;
  const [_dataSource, setDataSource] = useState(() => dataSource);
  const [activedKey, setActiveKey] = useState([]);

  const onChangeHandler = ({ value, option, dataIndex }) => {
    let _index = 0;
    const childrenChecked = (data) => {
      const checked = data.checked;
      const deepMap = (_data) => {
        _data.forEach((item) => {
          item.checked = checked;
          if (item.children) {
            deepMap(item.children);
          }
        });
      };
      if (data.children) {
        deepMap(data.children);
      }
      return { ...data, checked };
    };
    const parentChecked = (data) => {
      const current = dataIndex[_index];
      if (_index < dataIndex.length - 1) {
        _index++;
        parentChecked(data[current].children);
      } else {
        return (data[current] = _option);
      }
      data[current].checked = !data[current].children.some(
        (item) => !item.checked
      );
    };
    const _option = childrenChecked(option);
    const nSource = cloneDeep(_dataSource);
    parentChecked(nSource);
    onChange && onChange(treeFlat(nSource))
    setDataSource(nSource);
  };

  const onTsHandler = (index) => {
    let _activedKey = [...activedKey];
    if (_activedKey.includes(index)) {
      _activedKey = _activedKey.filter((i) => i !== index);
    } else {
      _activedKey.push(index);
    }

    setActiveKey(_activedKey);
  };

  const selectedItems = () => {
    return treeFlat(_dataSource);
  };

  useImperativeHandle(ref, () => {
    return {
      selectedItems: selectedItems(),
    };
  });

  const renderItem = (item, dataIndex) => {
    return (
      <View key={dataIndex} className='tselect-content__item'>
        <MyCheckbox
          value={item.value}
          label={item.label}
          option={item}
          checked={item.checked}
          onChange={onChangeHandler}
          dataIndex={dataIndex}
        />
      </View>
    );
  };
  return (
    <View className='tree-select'>
      {_dataSource.map((item, index) => {
        return (
          <Collaspe
            key={index}
            header={
              <MyCheckbox
                value={item.value}
                label={item.label}
                option={item}
                checked={item.checked}
                onChange={onChangeHandler}
                dataIndex={Object.freeze([index])}
              />
            }
            onChangeKey={onTsHandler}
            activeKeys={activedKey}
            itemKey={index}
          >
            {item.children.map((_item, _index) => {
              return renderItem(_item, Object.freeze([index, _index]));
            })}
          </Collaspe>
        );
      })}
    </View>
  );
}

export default forwardRef(TreeSelect);
