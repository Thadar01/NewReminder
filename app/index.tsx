import { View, Text } from 'react-native'
import React from 'react'
import ReminderList from '@/src/screens/ReminderList'
import { StatusBar } from 'expo-status-bar'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { TReminder } from '@/type'
import EditReminderScreen from '@/src/screens/EditReminderScreen'

const index = () => {
  return (
    <>
    <GestureHandlerRootView>
      <StatusBar style='dark'/>
     <EditReminderScreen/>
     {/* <Time/> */}
     </GestureHandlerRootView>
    </>
  )
}

export default index