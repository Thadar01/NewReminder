// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import AddReminder from './AddReminder'
// import ReminderList from './ReminderList'
// import { TReminder } from '@/type'

// export interface TReminderProps {
 
//     // date: string;
//     // time: string;


//   }
// const ReminderContainer:React.FC<TReminderProps>= () => {
//     const [add,setAdd]=useState(true)
//     const [reminderList,setReminderList]=useState([] as TReminder[])
//     const [editID,setEditID]=useState("")
//     const [isEdit,setIsEdit]=useState(false)
     

  
//   return (
//     <>
//   {add ? <AddReminder  setAdd={setAdd} reminderList={reminderList} setReminderList={setReminderList} editID={editID} isEdit={isEdit} setIsEdit={setIsEdit}/> : 
//   <ReminderList  reminderList={reminderList} setAdd={setAdd} setReminderList={setReminderList} handleEdit={handleEdit}/>}
//     </>
//   )
// }

// export default ReminderContainer