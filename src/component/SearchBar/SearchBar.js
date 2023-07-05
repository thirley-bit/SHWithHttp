import { View, Text, Input, Image } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import { useState, useEffect } from "react";
import "./SearchBar.scss";

function SearchBar(props) {
  console.log(props, "searchBarprops");
  const { needBackAtIcon, mainTitle, value, placeholder } = props;
  // const [placeholder, setPlaceholder] = useState('请输入内容')
  // const [Value, setValue] = useState("");
  useEffect(() => {
    // getNavHeight();
  }, []);

  const searchInput = (e) => {
    console.log(e,"eeeeeee")
    // setValue(e.detail.value)
  }
  const searchConfirm = (e) => {
    console.log(e,"eeeqqqeeeqqq")
  }
  const searchClear = () => {
    console.log(111,'111')
    // setValue('')
    props.bindInput('')
  }
  // const sendValue = () => {
  //   props.bindInput(Value)
  // }
  console.log(value)
  return (
    <View className='index'>
      <View class='ab-search-bar'>
        <View class='ab-search-bar__box'>
          {/* <AtIcon class='ab-search-bar__AtIcon' value='search' size='18' /> */}
          <AtInput
            class='ab-search-bar__input'
            type='text'
            placeholder={placeholder}
            // value={value}
            onInput={searchInput}
            onConfirm={searchConfirm}
          />
          {/* <View  class='ab-search-bar__AtIcon-clear' onClick={searchClear}>
            <AtIcon value='close-circle' size='18' />
          </View> */}
        
        </View>
        <View
          class='ab-search-bar__search-btn'
          onClick={searchConfirm}
        >
          {value == "" ? "搜索" : "返回"}
        </View>
      </View>
    </View>
  );
}

export default SearchBar;
