import { useState, useImperativeHandle, forwardRef } from "react";
import { View } from "@tarojs/components";
import cloneDeep from "lodash.clonedeep";
import TreeCheckbox from './TreeCheckBox';
import Collaspe from './Collaspe';
import TreeFlat from './TreeFlat';
import "./TreeSelect.scss"

function TreeSelect(props, ref) {
  const { dataSource, onChange } = props;
  const [_dataSource, setDataSource] = useState(() => dataSource);
  const [activedKey, setActiveKey] = useState([]);

  const onChangeHandler = ({ value, option, dataIndex }) => {
    let _index = 0;
    const childrenChecked = (data) => {
      const checked = data.checked;
      const disabled = data.disabled || false;
      const deepMap = (_data) => {
        _data.forEach((item) => {
          item.checked = checked;
          item.disabled = disabled
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
      data[current].disabled = !data[current].children.some(
        (item) => item.disabled
      );
    };
    const _option = childrenChecked(option);
    const nSource = cloneDeep(_dataSource);
    parentChecked(nSource);
    onChange && onChange(TreeFlat(nSource))
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
    return TreeFlat(_dataSource);
  };

  useImperativeHandle(ref, () => {
    return {
      selectedItems: selectedItems(),
    };
  });

  const renderItem = (item, dataIndex) => {
    return (
      <View key={dataIndex} className='tselect-content__item'>
        <TreeCheckbox
          value={item.value}
          label={item.label}
          option={item}
          disabled={item.disabled}
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
              <TreeCheckbox
                value={item.value}
                label={item.label}
                option={item}
                disabled={item.disabled}
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
