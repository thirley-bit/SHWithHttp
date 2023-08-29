import { View, Image } from "@tarojs/components";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  AtForm,
  AtCard,
  AtDivider,
  AtIcon,
  AtInput,
  AtButton,
  AtTextarea,
  AtImagePicker,
} from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from '@app/component/GradientButton';

import "./FeedBack.scss";

function FeedBack(props) {
  const [value, setValue] = useState();
  const [files, setFiles] = useState();
  const [inputValue, setInputValue] = useState();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <View>
      <NavTab back title='意见反馈' />
      <View className='feed'>
        <AtForm onSubmit={onSubmit}>
          <AtTextarea
            value={value}
            onChange={(v) => {
              setValue(v);
            }}
            maxLength={500}
            height={500}
            placeholder='请输入您要反馈的问题（5-500字以内）'
          />
          <AtImagePicker //   mode="top"
            files={files}
            onChange={(v) => {
              setFiles(v);
            }}
            onFail={(msg1) => {
              console.log(msg1);
            }}
            onImageClick={(index, file) => {
              console.log(index, file);
            }}
          />
          <AtInput
            name='inputValue'
            border={false}
            title='手机号码'
            type='phone'
            placeholder='请输入手机号码'
            value={inputValue}
            onChange={(v) => {
              setInputValue(v);
            }}
            className='inputValues'
          />
          <GradientButton type='primary' className='send-button' >提交反馈</GradientButton>
        </AtForm>
      </View>
    </View>
  );
}
export default FeedBack;
