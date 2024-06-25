import { View, Text } from 'react-native'
import React from 'react'
import ReminderList from '@/src/screens/ReminderList'
import { StatusBar } from 'expo-status-bar'
import AddReminder from '@/src/screens/AddReminder'

import Time from '@/src/screens/components/Time'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MainReminderScreen from '@/src/screens/MainReminderScreen'

const index = () => {
  return (
    <>
    <GestureHandlerRootView>
      <StatusBar style='dark'/>
     <MainReminderScreen/>
     {/* <Time/> */}
     </GestureHandlerRootView>
    </>
  )
}

export default index