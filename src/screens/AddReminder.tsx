import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { TList } from '@/type';

export interface TReminderProps {
 
  // date: string;
  // time: string;
  editData?:TList
  
}

const AddReminder: React.FC<TReminderProps> = ({editData}) => {
  

  const [newlist,setNewList]=useState(editData ? editData : {title:"",date:"",time:""} as TList)
  const router = useRouter();
console.log("EditDatainAddReminder=>",editData)
  const handleAdd = () => {
   
    // router.back({ newReminder });

    // Normally, you would call a function to add this reminder to the list in ReminderScreen
    // console.log(newReminder);
    router.push("/")
  };
const edit=true
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        defaultValue={newlist.title}
        
      />
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        value={newlist.date}
    
      />
      <Text style={styles.label}>Time</Text>
      <TextInput
        style={styles.input}
        value={newlist.time}
        
      />
      <Button title="Add" onPress={handleAdd} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    padding: 16,
    backgroundColor:"lightblue"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddReminder;