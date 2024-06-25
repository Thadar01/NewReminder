import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import DatePicker from "./components/DatePicker";
import uuid from "react-native-uuid";
import Time from "./components/Time";
import useStore from "../store";
import { TReminder } from "@/type";
import ReminderList from "./ReminderList";

const AddReminder: React.FC<TReminder> = () => {
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
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        defaultValue={reminder.title}
        onChangeText={(text) => setReminder({ ...reminder, title: text })}
      />
      <Text style={styles.label}>Date</Text>
      <DatePicker date={reminder.date} onChangeDate={onChangeDate} />
      <Text style={styles.label}>Time</Text>
      <Time displayTime={displayTime} setDisplayTime={setDisplayTime} />
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        defaultValue={reminder.location}
        onChangeText={(text) => setReminder({ ...reminder, location: text })}
      />
      <Button title="Add" onPress={handleAdd} />
      <Button title="Cancel" onPress={handleCancel} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddReminder;
