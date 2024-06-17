import { View, Text } from 'react-native'
import React from 'react'
import ReminderList from '@/src/screens/ReminderList'
import { StatusBar } from 'expo-status-bar'

const index = () => {
  return (
    <>
      <StatusBar style='dark'/>
        <ReminderList/>

    </>
  )
}

export default index