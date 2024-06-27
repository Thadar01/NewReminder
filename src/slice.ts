import ReminderList from "./screens/ReminderList";

const reminderSlice = (set:any) => ({
  reminderList:[],
 

  addReminderList:(reminderList:any)=>set((state:any)=>({reminderList:[...state.reminderList,reminderList]})),

  deleteReminderList: (id: string) => set((state: any) => ({
    reminderList: state.reminderList.filter((item: any) => item.id !== id)
  })),  

  editReminderList: (id: string, updateData: any) => set((state: any) => ({
    reminderList: state.reminderList.map((item: any) => item.id === id ? {...item, ...updateData} : item)
  })),




  

});
 export default reminderSlice