// import { useState, useEffect, useRef } from "react";
// import { connect } from "react-redux";
// import { View } from "@tarojs/components";
// import Taro from "@tarojs/taro";
// import {
//   AtCheckbox,
//   AtAvatar,
//   AtAccordion,

// } from "taro-ui";
// import NavTab from "@app/component/NavTab/NavTab";
// import GradientButton from '@app/component/GradientButton';
// import SearchBar from '@app/component/SearchBar/SearchBar';
// import normal from "@static/normal.png";
// // import img from "../../../static/img.jpg";
// import "./SendUserList.scss";

// function SendUserList(props) {
//   console.log(props, "peops");
//   const { dispatch, classStudent, chooseIdList } = props;

//   const [searchValue, setSearchValue] = useState(""); //搜索朋友页面的人员
//   const [checkedList, setCheckedList] = useState([]); //朋友页面选中内容
//   const [checkedName, setCheckedName] = useState([]); //朋友页面选中内容
//   const [checkedAll, setCheckedAll] = useState([]); //朋友页面全选
//   const choosedStudents = useRef()
//   useEffect(() => {
//     classData('','')
//   }, []);
//   const classData = (wordId, key) => {
//     console.log(wordId,key)
//     dispatch({
//       type: "Class/getClassStudent",
//       payload: {
//         wordId: wordId,
//         searchKey: key
//       }
//     }).then(res => {
//       if(res.status == 200){
//         let newData = res.data.map(item => {
//           return {
//           ...item,
//             open: false,
//           }
//         })
//         dispatch({
//           type: "Class/changeClassStudent",
//           payload: newData
//         })
//       }
//     });
//   }
//   const handleSearch = (value) => {
//     setSearchValue(value);
//     classData('',value)
//   };
//   //清空搜索内容
//   const handleClear = () => {
//     //清空搜索框内容
//     setSearchValue("");
//     classData('','')
//   };
//   const handleOpen = (item,open,event) => {
//     console.log(item,open,event,'>>>>>>>')
//     event.stopPropagation();

//     item.open = !item.open
//   };
//   const handleSelectAll = (value) => {
//     console.log(value,'value')
//     let newCheckedAll = classStudent.filter((item) =>{return value.includes(item.id)});
//     const objChecked = {}
//     newCheckedAll.forEach(i => {
//       i.studentList.forEach((item) => {
//         objChecked[item.id] = item.studentName
//       })
//     })
//     choosedStudents.current = objChecked
//     setCheckedList(Object.keys(objChecked))
//     setCheckedAll(value);
//   };
//   const handleSelect = (value) => {
//     setCheckedList(value);
//   };
//   const handleSend = () => {
//     console.log(checkedList,'list')
//     dispatch({
//       type:'Class/changeChooseIdList',
//       payload:checkedList
//     })
//     dispatch({
//       type:'Class/changeChooseName',
//       payload: choosedStudents.current
//     })
//     Taro.navigateTo({
//       url: '/pages/component/publish/publish'
//     })
//   }
//   return (
//     <View className='main'>
//       <NavTab back title='新建' />
//         <SearchBar
//           value={searchValue}
//           onChange={handleSearch}
//           onClear={handleClear}
//         />
//       <View>
//         {classStudent.map((item, index) => {
//           return (
//             <View key={index}>
//               <AtAccordion
//                 title={
//                   <AtCheckbox
//                     options={[
//                       {
//                         label: item.className,
//                         value: item.id,
//                         checked: false,
//                       },
//                     ]}
//                     selectedList={checkedAll}
//                     onChange={handleSelectAll}
//                   />
//                 }
//                 open={item.open}
//                 onClick={(open,event) => handleOpen(item,open,event)}
//               >
//                 <AtCheckbox
//                   options={item.studentList.map((i) => {
//                     let value = i.id;
//                     let label = (
//                       <View className='label-avatar'>
//                         <AtAvatar
//                           size='small'
//                           circle
//                           className='avatar-img'
//                           image={i.avatar || normal}
//                         />
//                         <View className='label-text'>{i.studentName}</View>
//                       </View>
//                     );
//                     return {
//                       value,
//                       label,
//                     };
//                   })}
//                   selectedList={checkedList}
//                   onChange={handleSelect}
//                 />
//               </AtAccordion>
//             </View>
//           );
//         })}
//       </View>
//       <GradientButton type='primary' className='send-button' onClick={() => handleSend()}>确定</GradientButton>
//     </View>
//   );
// }

// export default connect((state) => ({
//   subjectType: state.HomeWork.subjectType,
//   classStudent: state.Class.classStudent,
//   chooseIdList: state.Class.chooseIdList,
//   chooseName: state.Class.chooseName,
//   subjectDetail: state.HomeWork.subjectDetail,
// }))(SendUserList);

import cls from 'classnames'
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtCheckbox, AtAvatar, AtAccordion } from "taro-ui";
import NavTab from "@app/component/NavTab/NavTab";
import GradientButton from "@app/component/GradientButton";
import SearchBar from "@app/component/SearchBar/SearchBar";
import TreeSelect from "@app/component/TreeSelect/TreeSelect";
import normal from "@static/normal.png";
// import img from "../../../static/img.jpg";
import "./SendUserList.scss";

const clsPrefix = 'cp-tree'

function SendUserList(props) {
  const { dispatch, classStudent, chooseIdList } = props;
  useEffect(() => {
    classData("", "");
  }, []);
  const classData = (wordId, key) => {
    console.log(wordId, key);
    dispatch({
      type: "Class/getClassStudent",
      payload: {
        wordId: wordId,
        searchKey: key,
      },
    }).then((res) => {
      if (res.status == 200) {
        let newData = res.data.map((item) => {
          return {
            ...item,
            open: false,
          };
        });
        dispatch({
          type: "Class/changeClassStudent",
          payload: newData,
        });
      }
    });
  };

  const [value, setValue] = useState([]);
  // const [multiple, setMultiple] = useState(true);
  // const [dataSource, setDataSource] = useState([]);
  const loadData = (data) => {
    data.children = [{
      label: '冰糖雪梨',
      value: 'test',
    }]
  }
  const dataSource = classStudent.map((item) => {
    let label = item.className
    // eslint-disable-next-line no-shadow
    let value = item.id
    let parentLevel = true
    let children = item.studentList.map((jt) => {
      // eslint-disable-next-line no-shadow
      let label = jt.studentName
      // eslint-disable-next-line no-shadow
      let value = jt.id
      return {
        label,
        value,
      }
    })
    return {
      label,
      value,
      parentLevel,
      children,
    }
  })
  // console.log(dataSource,'datasource')

  const onChange = (val,id,parentLevel) => {
    // id => 当前数据
    // value => 选中显示数据
    /**
     * [
     *  {
     *   "parentId": [
          *  childId
          * ]
     * }
     * ]
     */
    console.log(id,'id')
    console.log(val,'Value>>>')
    console.log(parentLevel,'prenatLevel>>>>')
    let objChecked  = {}
    let idList = []
    if(parentLevel){
      let newCheckedAll = dataSource.filter((item) =>{return val.includes(item.value)})
      // let newCheckedAll = dataSource.filter((item) => item.value == id)
      
      if(newCheckedAll.length == 0){
        console.log(1212)
        let newChecked = dataSource.filter((item) => item.value == id)
        newChecked.forEach(jt => {
          idList = jt.children.map(item => item.value)
        })
        // console.log(idList,'idList')
        // console.log(newChecked,'newChecked')
      }
      // console.log(newCheckedAll,'newChallll>>>>>>>>>>>')
      newCheckedAll.forEach(jt => {
        jt.children.forEach(item => {
          objChecked[item.value] = item.label
        })
      })
    }
    let a = val.filter((item) => idList.indexOf(item) != -1)
    // console.log(a,'aaa')
    // console.log(objChecked,'checked')
    // console.log(newVal,'newVal?????')
    // console.log(val.concat(newVal),'concat>>>>>')
    setValue(val.concat(Object.keys(objChecked)))
    // setValue(Object.keys(objChecked))
    // setValue(a)
    // setValue(val)
  };

  return (
    <View className='main'>
      <NavTab back title='新建' />
      <TreeSelect
        multiple
        value={value} 
        loadData={loadData}
        dataSource={dataSource} 
        onChange={onChange}
      />
    </View>
  );
}
export default connect((state) => ({
  subjectType: state.HomeWork.subjectType,
  classStudent: state.Class.classStudent,
  chooseIdList: state.Class.chooseIdList,
  chooseName: state.Class.chooseName,
  subjectDetail: state.HomeWork.subjectDetail,
}))(SendUserList);
