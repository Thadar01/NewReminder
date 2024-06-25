import { View, Text } from 'react-native'
import React from 'react'
import ReminderList from '@/src/screens/ReminderList'
import { StatusBar } from 'expo-status-bar'
import AddReminder from '@/src/screens/AddReminder'
import ReminderContainer from '@/src/screens/ReminderContainer'
import Time from '@/src/screens/components/Time'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const index = () => {
  return (
    <>
    <GestureHandlerRootView>
      <StatusBar style='dark'/>
     <AddReminder/>
     {/* <Time/> */}
     </GestureHandlerRootView>
    </>
  )
}

export default index