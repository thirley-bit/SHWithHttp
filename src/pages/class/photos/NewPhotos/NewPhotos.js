import { View } from "@tarojs/components";
import { useState } from "react";
import { AtDivider, AtInput, AtList, AtListItem, AtTextarea } from "taro-ui";
import "./NewPhotos.scss"

//新建相册页面
function NewPhotos(props) {
  const { dispatch } = props;
  const [value, setValue] = useState("午休情况");
  const handleChange = (e) => {
    setValue(e);
  };
  const handleChoose = () => {
    console.log(111)
  }
  return (
    <View className='main'>
      <View className='top'>
        <AtInput
          name='value'
          placeholder='请输入相册名称'
          value={value}
          onChange={handleChange}
        />
        <AtTextarea
          name='value'
          placeholder='请输入相册描述'
          value={value}
          onChange={handleChange}
        />
        <AtList>
            <AtListItem title='封面图' extraText='请选择' arrow='right' onClick={handleChoose} />
        </AtList>
      </View>
    </View>
  );
}
export default NewPhotos;
