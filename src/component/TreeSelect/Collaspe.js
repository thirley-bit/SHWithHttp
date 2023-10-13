import { View } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import classnames from "classnames";

export default  function Collaspe({ itemKey, header, children, onChangeKey, activeKeys}) {
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
