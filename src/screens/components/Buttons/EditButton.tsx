import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TReminder } from '@/type';
import { router } from 'expo-router';

interface TEdit{
    item:TReminder
}
const EditButton:React.FC<TEdit> = ({item}) => {
    const clickEdit = (item: TReminder) => {
        router.push({
          pathname: "/",
          params: {
            selectedReminder: JSON.stringify(item),
            isEdit: JSON.stringify(true),
          },
        });
      };
    
  return (
    <View style={{ marginRight: 10 }}>
    <MaterialCommunityIcons
      name="pencil-outline"
      size={20}
      color="#1A75FF"
      onPress={() => clickEdit(item)}
    />
  </View>
  )
}

export default EditButton