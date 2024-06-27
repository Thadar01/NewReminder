import { View, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useStore from '@/src/store';
import { TReminder } from '@/type';

interface TDelete{
    item:TReminder
}
const DeleteButton:React.FC<TDelete> = ({item}) => {
    const deleteReminderList = useStore((state) => state.deleteReminderList);
  return (
    <View style={{ marginRight: 10 }}>
    <MaterialCommunityIcons
      name="delete-outline"
      size={20}
      color="#FF4646"
      onPress={() => deleteReminderList(item.id)}
    />
  </View>
  )
}

export default DeleteButton