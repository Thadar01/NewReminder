import {
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform,
  View,
  Pressable,
  ScrollView,
} from "react-native";

import React, { useRef, useState } from "react";
import DatePicker from "./components/DatePicker";
import styles from "../style/mainStyle";
import useStore from "../store";
import { router, useLocalSearchParams } from "expo-router";
import uuid from "react-native-uuid";
import TimeContainer from "./components/TimeContainer";
import TitleBox from "./components/TitleBox";
import LocationBox from "./components/LocationBox";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const EditReminderScreen = () => {
  const addReminderList = useStore((state) => state.addReminderList);
  const editReminderList = useStore((state) => state.editReminderList);

  const { selectedReminder, isEdit } = useLocalSearchParams();

  const parsedSelectedReminder = selectedReminder
    ? JSON.parse(selectedReminder as string)
    : "";
  const parsedIsEdit = isEdit ? JSON.parse(isEdit as string) : false;
  

  const data = parsedIsEdit
    ? parsedSelectedReminder
    : { id: "", title: "", date: new Date(), time: "", location: "" };

  const reminderRef = useRef(data);

  
  const getAddTime = () => {
    const tdyDate = new Date();
    const isoString = tdyDate.toISOString();
    return isoString;
  };
  

  const handleAdd = () => {
    
    if (parsedIsEdit) {
      editReminderList(reminderRef.current.id, reminderRef.current);

      router.push("reminder");
    } else {
      const id = uuid.v4() as string;
      const createdAt=getAddTime()
     
      addReminderList({ ...reminderRef.current, id,createdAt});
      router.push("reminder");
    }
  };

  const handleCancel = () => {
    router.push("reminder");
  };
 
  console.log("edit render");
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ maxHeight: 900 }}>
          <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
              <Pressable
                onPress={handleCancel}
                style={{ height: 25, marginLeft: 2 }}
              >
                <Text style={styles.headerText}>Cancel</Text>
              </Pressable>

              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                New Reminder
              </Text>

              <Pressable
                onPress={handleAdd}
                style={{ height: 25, width: 50, alignItems: "center" }}
              >
                <Text style={styles.headerText}>{isEdit ? "Save" : "Add"}</Text>
              </Pressable>
            </View>
            <TitleBox reminderRef={reminderRef} />
            <View style={{ margin: 4, marginRight: 240 }}>
              <Text style={styles.bodyText}>Date & Time</Text>
            </View>

            <DatePicker
              date={reminderRef.current.date}
              reminderRef={reminderRef}
            />

            <TimeContainer reference={reminderRef} />
            <LocationBox reminderRef={reminderRef} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EditReminderScreen;
