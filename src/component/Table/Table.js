import { useEffect, useState } from "react";
import { View } from "@tarojs/components";
import { AtIcon, AtActionSheet, AtActionSheetItem } from 'taro-ui';
import Taro from '@tarojs/taro';
import "./Table.scss";

function Table(props) {
  const { columns, dataSource } = props;
  const [isOpened, setIsOpened] = useState(false)

  const handleEdit = (e) => {
    console.log(e)
    setIsOpened(true)
  }
  const handleCancel = () => {
    setIsOpened(false)
  }
  const handleClose = () => {
    setIsOpened(false)
  }
  const handleSheetEdit = () => {
    console.log('edit')
    Taro.navigateTo({url:'/pages/class/Score/ScoreDetail/ScoreDetail'})
  }
  const handleSheetDel = () => {
    console.log('delete')
  }
  const handleSheetInsert = () => {
    console.log('insert')
  }
  return (
    <View className='main'>
      <View className='table-container'>
        <View className='table'>
          <View className='thead table-thead-fix'>              
            {columns.map((item, index) => {
              return (
                <View key={index} className='cell'>
                  {item.title}
                </View>
              );
            })}
            <View className='cell table-cell-fix-right'>操作</View> 
          </View>
          <View className='tbody'>
            {dataSource.map((item, index) => {
              console.log(item)
              return (
                <View key={index} className='row'>
                  {columns.map((item2, index2) => {
                    if (item2.render) {
                      return (
                        <View key={index2} className='cell'>
                          {
                            item2.render(item[item2.dataIndex]) //判断表头是不是有render 有就执行render
                          }
                          <View style='overflow:hidden;clear:both'></View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index2} className='cell'>
                          {
                            item[item2.dataIndex] //根据表头填数据
                          }
                        </View>
                      );
                    }
                  })} 
                  <View className='cell table-cell-fix-right' onClick={() => handleEdit(item)}>
                    <AtIcon value='edit' size='14' ></AtIcon>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <AtActionSheet isOpened={isOpened} cancelText='取消' onCancel={handleCancel} onClose={handleClose}>
        <AtActionSheetItem onClick={handleSheetEdit}>
          编辑
        </AtActionSheetItem>
        <AtActionSheetItem onClick={handleSheetDel}>
          删除
        </AtActionSheetItem>
        <AtActionSheetItem onClick={handleSheetInsert}>
          插入行
        </AtActionSheetItem>
      </AtActionSheet>
    </View>
  );
}

export default Table;
