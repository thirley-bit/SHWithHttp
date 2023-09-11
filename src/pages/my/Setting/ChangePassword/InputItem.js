import { View, Input, Image} from "@tarojs/components";
import { AtDivider, AtIcon } from 'taro-ui';
import "./ChangePassword.scss";

const InputItem=(prop)=>{
    const {label,value,name, color,handleBlur, handleInput}=prop
    
    return(
        <View className='pass-write'>
        <View className='left'>
        <View className='write'>{label}</View>
        <Input className='input' type='password' password name={name} onBlur={handleBlur} onInput={handleInput} />
        </View>
        {/* <Image style='width:46rpx;height:46rpx' src={src} className='img' /> */}
        <AtIcon value={value} color={color}></AtIcon>
    </View> 
    )
}

export default InputItem;