import { SafeAreaView, Text ,KeyboardAvoidingView,TouchableWithoutFeedback,Platform,Keyboard,View,Pressable,TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import DatePicker from './components/DatePicker'
import Time from './components/Time'
import { TReminder } from '@/type'
import useStore from '../store'
import { router } from 'expo-router'
import uuid from "react-native-uuid";
import TimeContainer from './components/TimeContainer'

const MainReminderScreen:React.FC<TReminder> = () => {
    const {  addReminderList, isEdit,selectedReminder,handleEdit,editReminderList , reminderList} = useStore();

    const data=isEdit ? selectedReminder : {id: "",
      title: "",
      date: new Date(),
      time: "",
      location: "",}
    const [reminder, setReminder] = useState<TReminder>(data);
  
    const getTime= selectedReminder.time;
    const splitTime= isEdit ? getTime.split(" ") : ''
    const splitMin= isEdit ? splitTime[0].split(":") : ''
  
  
  
    const finalSplit={hour:splitMin[0],min:splitMin[1],am:splitTime[1]}
    
    
  const editDisplayTime= isEdit? finalSplit : {hour: "",
    min: "",
    am: "",}
    const [displayTime, setDisplayTime] = useState(editDisplayTime);
    
  
   
  
    const formatTime = () => {
      return `${displayTime.hour}:${displayTime.min} ${displayTime.am}`;
    };
  
    const onChangeDate = (_event: any, selectedDate: any) => {
      setReminder({ ...reminder, date: selectedDate || reminder.date });
    };
  
    const handleAdd = () => {
      console.log('handle Add >>>', isEdit)
      if(isEdit){
        console.log('remider >>>', reminder)
        editReminderList(reminder.id, reminder)
        handleEdit(false)
        router.push("reminder");
  
      }else{
      handleEdit(false)
      const id = uuid.v4() as string;
      addReminderList({ ...reminder, id, time: formatTime() });
      router.push("reminder");
      }
    };
  
    const handleCancel = () => {
      router.push("reminder");
      handleEdit(false)
    };
  return (
    <SafeAreaView style={{flex:1}}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{backgroundColor:"#120022", height:"100%"}}>
          <View style={{flexDirection:"row",justifyContent:"space-between", margin:2}}>
            <View style={{height:25}}>
              <Pressable onPress={handleCancel} style={{height:25}}>
                <Text style={{color:'#589FFF', fontSize:16, fontWeight:"bold"}}>
                  Cancel
                </Text>
              </Pressable>
            </View>

            <Text style={{color:"white",fontSize:16,fontWeight:"bold"}}>
              New Reminder
            </Text>

            <View style={{height:25,width:50,alignItems:"center"}} >
              <Pressable onPress={handleAdd} style={{height:25,width:25}}>
                <Text style={{color:"#589FFF", fontSize:16, fontWeight:"bold"}} >
                  Add
                </Text>
              </Pressable>
            </View>
          </View>
          <View  style={{display:"flex",alignItems:"center",marginTop:2}}>
            <TextInput
              style={styles.titleBox}
              placeholder="Title"
              placeholderTextColor="white"
              defaultValue={reminder.title}
              onChangeText={(text) => setReminder({ ...reminder, title: text })}
            />
          </View>
          <View style={{margin:4}}>
            <Text style={{fontSize:20,color:"white",fontWeight:"bold"}}>
              Date & Time
            </Text>
          </View>
          <DatePicker date={reminder.date} onChangeDate={onChangeDate}/>
        
          <TimeContainer displayTime={displayTime} setDisplayTime={setDisplayTime}/>
          <Text style={{color:"white",margin:10}}>Location</Text>
          <TextInput
        style={styles.input}
        defaultValue={reminder.location}
        onChangeText={(text) => setReminder({ ...reminder, location: text })}
      />
            
        
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}

export default MainReminderScreen
const styles=StyleSheet.create({
    titleBox:{
        width:355,
        height:58,
        backgroundColor:"#41334E",
        borderRadius:10,
        color:"white",
        padding:10,
        marginBottom:10
    },
    input: {
        width:355,
        height:58,
        backgroundColor:"#41334E",
        borderRadius:10,
        color:"white",
        padding:10,
        margin:10
      },
})