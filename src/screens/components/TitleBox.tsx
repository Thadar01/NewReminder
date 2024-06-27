import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '@/src/style/mainStyle'
import { TReminder } from '@/type'

interface TTitle{
    reminderRef:React.MutableRefObject<TReminder>
}

const TitleBox:React.FC<TTitle>= ({reminderRef}: TTitle) => {
   console.log("Title render")
  return (
    <View style={styles.titleContainer}>
    <TextInput
      style={styles.titleBox}
      placeholder="Title"
      placeholderTextColor="white"
      defaultValue={reminderRef.current.title}
      onChangeText={(text) =>
       reminderRef.current.title=text
      }
    />
  </View>
  )
  
}


export default TitleBox