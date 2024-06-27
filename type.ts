export interface TReminder {
    date: Date;
    time: string;
    title: string;
    location: string;
    id:string;
    createdAt:string

    
}

export interface TMainReminder{
   
    reminderList:TReminder[],
    
    
    addReminderList:(reminderList:any)=>void,
    deleteReminderList:(id:string)=>void,
    editReminderList:(id:string, updateData: any)=>void
}