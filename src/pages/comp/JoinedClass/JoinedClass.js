// import { View, Text } from "@tarojs/components";
// import { connect } from "react-redux";
// import { useEffect, useState } from "react";
// import {
//   AtAvatar,
//   AtButton,
//   AtCard,
//   AtIcon,
//   AtTabs,
//   AtTabsPane,
// } from "taro-ui";

// import "./JoinedClass.scss";

// function JoinedClass(props) {
//   console.log(props);
//   const {
//     dispatch,
//     user,
//     identity,
//     parentPassList,
//     parentCheckedList,
//     teacherPassList,
//     teacherCheckedList,
//   } = props;
//   const [current, setCurrent] = useState(0);
//   let tabTitle = user == 0 ? "已加入" : "已审核";
//   const tabList = [
//     {
//       title: tabTitle,
//     },
//     {
//       title: "待审核",
//     },
//   ];
//   useEffect(() => {
//     dispatch({
//       type: "users/getIdentity",
//     });
//     dispatch({
//       type: "users/getUser",
//     }).then((res) => {
//       if (res.data.user == 0) {
//         dispatch({
//           type: "users/getParentPassList",
//         });
//         dispatch({
//           type: "users/getParentCheckedList",
//         });
//       } else {
//         dispatch({
//           type: "users/getTeacherPassList",
//         });
//         dispatch({
//           type: "users/getTeacherCheckedList",
//         });
//       }
//     });
//   }, []);
//   const handleClick = (e) => {
//     setCurrent(e);
//   };
//   const handleChangeUser = (e) => {
//     dispatch({
//       type: "users/getChangeUser",
//       payload: e,
//     });
//   };
//   const handleBack = (e) => {
//     console.log(e);
//   };
//   return (
//     <View className='main'>
//       <AtTabs current={current} tabList={tabList} onClick={handleClick}>
//         <AtTabsPane current={current} index={0}>
//           {(user == 0 ? parentPassList : teacherPassList).map((item, index) => {
//             let title = "";
//             let note = "";
//             if (user == 0) {
//               title = item.class_name;
//               note = item.student_name + "\xa0" + item.relative;
//             } else {
//               title = item.student_name + item.relative + "申请加入";
//               note = "审核人：" + identity.teacher;
//             }
//             console.log(item);
//             return (
//               <View key={index} className='join-card'>
//                 <AtCard
//                   className={
//                     user == 0 && identity.student_id == item.student_id
//                       ? "item-active"
//                       : "item"
//                   }
//                   onClick={() => handleChangeUser(item.student_id)}
//                 >
//                   <View className='top'>
//                     <View className='left'>
//                       <AtAvatar
//                         className='img'
//                         size='small'
//                         image={item.avatar}
//                       />
//                     </View>
//                     <View className='card-content clearfix'>
//                       <View className='card-center'>
//                         <View className='card-name'>{title}</View>
//                         <View className='card-msg'>{note}</View>
//                       </View>
//                     </View>
//                     <View className='right'>审核通过</View>
//                   </View>
//                 </AtCard>
//               </View>
//             );
//           })}
//         </AtTabsPane>
//         <AtTabsPane current={current} index={1}>
//           {(user == 0 ? parentCheckedList : teacherCheckedList).map(
//             (item, index) => {
//               return (
//                 <View key={index} className='join-card'>
//                   <AtCard
//                     className={
//                       identity.student_id == item.student_id
//                         ? "item-active"
//                         : "item"
//                     }
//                     onClick={() => handleChangeUser(item.student_id)}
//                   >
//                     <View className='top'>
//                       <View className='left'>
//                         <AtAvatar
//                           className='img'
//                           size='small'
//                           image={item.avatar}
//                         />
//                       </View>
//                       <View className='card-content clearfix'>
//                         <View className='card-center'>
//                           <View className='card-name'>
//                             {identity.class_name}
//                           </View>
//                           <View className='card-msg'>
//                             {item.student_name + "\xa0" + item.relative}
//                           </View>
//                         </View>
//                       </View>
//                       <View className='right'>
//                         {user == 0 ? (
//                           "正在审核中..."
//                         ) : (
//                           <View className='right-button'>
//                             <AtButton
//                               className='refuse'
//                               type='secondary'
//                               size='small'
//                             >
//                               不通过
//                             </AtButton>
//                             <AtButton type='primary' size='small'>
//                               通过
//                             </AtButton>
//                           </View>
//                         )}
//                       </View>
//                     </View>
//                     {/* 家长端显示底部撤销按钮 */}
//                     {user == 0 && (
//                       <View
//                         className='bottom'
//                         onClick={() => handleBack(item.student_id)}
//                       >
//                         <AtIcon value='reload'></AtIcon>
//                         <Text>撤销申请</Text>
//                       </View>
//                     )}
//                   </AtCard>
//                 </View>
//               );
//             }
//           )}
//         </AtTabsPane>
//       </AtTabs>
//     </View>
//   );
// }
// export default connect((state) => ({
//   user: state.users.user,
//   identity: state.users.identity,
//   parentPassList: state.users.parentPassList,
//   parentCheckedList: state.users.parentCheckedList,
//   teacherPassList: state.users.teacherPassList,
//   teacherCheckedList: state.users.teacherCheckedList,
// }))(JoinedClass);
