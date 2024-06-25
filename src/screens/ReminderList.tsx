import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import styles from "../style";
import List from "./components/List";
import { TReminder } from "@/type";
import { router } from "expo-router";

 interface TReminderList{
  reminderList:TReminder[]
  setAdd:any
  setReminderList:any
  handleEdit:any
}

const ReminderList:React.FC<TReminderList>=() => {
  return (
    <SafeAreaView style={{   backgroundColor: "#0F001E",}}>
      
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
            
            <List/>

 
            <View style={styles.addNewReminderContainer}>
              <View style={{marginRight:2}}>
                <AntDesign
                  name="pluscircle"
                  size={16}
                  color="rgba(26, 117, 255, 1)"
                />
              </View>
              <Text style={{color:'#1A75FF', fontWeight:"bold"}} onPress={()=>router.push("/")}>New reminder</Text>
            </View>
          </View>
       
    </SafeAreaView>
  );
};

export default ReminderList;