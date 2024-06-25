import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'


interface TTime{
    displayTime:{
        hour:string,
        min:string,
        am:string
    },
    setDisplayTime:any
}
const Time:React.FC<TTime> = ({displayTime,setDisplayTime}) => {

  return (
    <SafeAreaView style={{flexDirection:"row"}}>
       
      <TextInput style={styles.timeContainer} placeholder='00' defaultValue={displayTime.hour} onChangeText={(hour)=>setDisplayTime({...displayTime,hour:hour})}/>
      <TextInput style={styles.timeContainer} placeholder='00' value={displayTime.min} onChangeText={(min)=>setDisplayTime({...displayTime,min:min})}/>
      <Pressable style={styles.amPMContainer} onPress={()=>setDisplayTime({...displayTime,am:"AM"})}>
        <Text>Am</Text>
      </Pressable>
      <Pressable style={styles.amPMContainer}  onPress={()=>setDisplayTime({...displayTime,am:"PM"})}>
        <Text>PM</Text>
      </Pressable>
     
    </SafeAreaView>
  )
}

export default Time

const styles=StyleSheet.create(
    {
        timeContainer:{
            backgroundColor:"lightblue",
            width:96,
            height:36,
            margin:10,
        
            borderRadius:10,
          paddingLeft:40
        },
        amPMContainer:{
            backgroundColor:"lightblue",
            width:35,
            height:20,
            margin:2,
             alignItems:"center",
            marginTop:20,
            borderRadius:10,
            justifyContent:"center"

        }
       
    }
)