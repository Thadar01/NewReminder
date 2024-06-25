export interface TReminder {
    date: Date;
    time: string;
    title: string;
    location: string;
    id:string;

    
}

export interface TMainReminder{
    reminderList:TReminder[],
    isEdit:boolean,
    selectedReminder:TReminder,
    addReminderList:(reminderList:any)=>void,
    deleteReminderList:(id:string)=>void,
    editReminderList:(id:string, updateData: any)=>void
    editSelectedReminder:(item:{})=>void
    handleEdit:(bool:boolean)=>void
}