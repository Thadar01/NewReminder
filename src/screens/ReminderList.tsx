import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import styles from "../style";
import List from "./components/List";
import { TList } from "@/type";
import AddReminder, { TReminderProps } from "./AddReminder";
import { Stack, router } from "expo-router";


const displayDate=(date:Date)=>{
    return date.getFullYear()+'-'+date.getMonth()+1 + '-'+date.getDay();
}

const ReminderList = () => {
    const toDoList = [
      {id:1, date: "06/11/2024", time: "10:00 AM", title: "To clean my room",location:"Hlendan,Yangon" },
      {id:2, date: "07/11/2024", time: "10:00 AM", title: "To clean my room",location:"Hlendan,Yangon"  },
      { id:3,date: "08/11/2024", time: "10:00 AM", title: "To clean my room" ,location:"Hlendan,Yangon" },
  
      ];
      
    const [list,setList]=useState<TList[]>(toDoList)
    const [isEdit,setEdit]=useState(false)
    const [editData,setEditData]=useState<TList>();
   
    const newList={id:list.length+1,date: "12/11/2024", time: "10:00 AM", title: "To clean my roomnew" ,location:"Hlendan,Yangon",createdAt:new Date()}
    const handleNewReminder=()=>{
        // const newData=[...list,newList]
        // console.log(newData)
        // setList(newData)
        router.push("addReminder")
    }
     const handleEdit=(item:TList)=>{
      setEdit(true);
      console.log("edit")
      setEditData(item)
  
      console.log('item >>>', item)
     }
  
  return (
    <SafeAreaView>
      <View style={styles.reminderContainer}>
        <Text
          style={{
            color: "#D721D2",
            margin: 3,
          }}
        >
          AI Agent 1 (Reminder)
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.listContainer}>
            <Text style={styles.reminderTextStyle}>Reminder</Text>
            
              <View style={styles.schedlueContainer}>
                <View>
                  <Text style={{color:"#B309AF"}}>Schedule</Text>
                  <View style={styles.lineContainer}>
                    <Text>-</Text>
                  </View>
                </View>

                <View>
                  <Text style={{color:"white"}}>History</Text>
                  <View style={styles.lineContainer}>
                    <Text>-</Text>
                  </View>
                </View>
              </View>
            
            <List listData={list} handleEdit={handleEdit}/>

            {isEdit && editData && <AddReminder editData={editData}/>}
            <View style={styles.addNewReminderContainer}>
              <View style={{marginRight:2}}>
                <AntDesign
                  name="pluscircle"
                  size={16}
                  color="rgba(26, 117, 255, 1)"
                />
              </View>
              <Text style={{color:'#1A75FF', fontWeight:"bold"}} onPress={handleNewReminder}>New reminder</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReminderList;