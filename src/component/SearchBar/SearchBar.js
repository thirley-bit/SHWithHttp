import Taro from "@tarojs/taro"
import { View, Text, Input, Image } from "@tarojs/components";
import { AtButton, AtInput, AtSearchBar } from "taro-ui";
import { useState, useEffect } from "react";
import "./SearchBar.scss";

function SearchBar({ children, className, ...props }) {
  return (
    <View className='search'>
      <AtSearchBar showActionButton {...props}></AtSearchBar>
    </View>
  );
}

export default SearchBar;
