import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

interface TTime{
    displayTime:{
        hour:string,
        min:string,
        am:string
    },
    setDisplayTime:any
}
const TimeContainer:React.FC<TTime> = ({displayTime,setDisplayTime}) => {
  const [selectHour, setSelectHour] = useState("#36343B");
  const [selectMinute, setSelectMinute] = useState("#36343B");
  const [borderHour, setBorderHour] = useState("none");
  const [borderMinute, setBorderMinute] = useState("none");

  return (
    <SafeAreaView style={{marginTop:-20}}>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <View style={{flexDirection:"row"}}>
          <View style={{width:96,height:59}}>
            <TextInput
              style={[
                styles.input,
                { backgroundColor: selectHour },
                { borderColor: borderHour },
              ]}
              placeholder="00"
              placeholderTextColor={"white"}
              defaultValue={displayTime.hour} onChangeText={(hour)=>setDisplayTime({...displayTime,hour:hour})}
              keyboardType="numeric"
              maxLength={2}
              onFocus={() => {
                setSelectHour("#8D59D3");
                setBorderHour("#D0BCFF");
              }}
              onBlur={() => {
                setSelectHour("#36343B");
                setBorderHour("transparent");
                
              }}
            />
            <View style={{marginTop:2}}>
              <Text style={{color:"#CAC4D0"}}>Hour</Text>
            </View>
          </View>
          <View style={{width:24,height:28,display:"flex",alignItems:"center"}}>
            <Text style={{color:"white",fontSize:30}}>:</Text>
          </View>
          <View style={{width:96,height:59}} >
            <TextInput
              style={[
                styles.input,
                { backgroundColor: selectMinute },
                { borderColor: borderMinute },
              ]}
              placeholder="00"
              placeholderTextColor={"white"}
              value={displayTime.min} onChangeText={(min)=>setDisplayTime({...displayTime,min:min})}
              keyboardType="numeric"
              maxLength={2}
              onFocus={() => {
                setSelectMinute("#8D59D3");
                setBorderMinute("#D0BCFF");
              }}
              onBlur={() => {
                setSelectMinute("#36343B");
                setBorderMinute("transparent");
                
              }}
            />
            <View style={{marginTop:2}}>
              <Text style={{color:"#CAC4D0"}}>Minute</Text>
            </View>
          </View>
          <View style={{width:104,height:24,flexDirection:"row",marginLeft:3}}>
            <View
                style={{backgroundColor: displayTime.am=== "AM" ? "#230143" : "transparent",
                    borderBottomWidth:1 ,
                    borderBottomColor: displayTime.am === "AM" ? "#938F99" : "none",
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",}}
            >
              <Pressable
               style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}
               onPress={()=>setDisplayTime({...displayTime,am:"AM"})}
              >
                <Text style={{color:"white", fontWeight:"bold"}}>AM</Text>
              </Pressable>
            </View>
            <View
             style={{ backgroundColor: displayTime.am === "PM" ? "#230143" : "transparent",
                borderBottomWidth:1 ,
                borderBottomColor: displayTime.am === "PM" ? "1px solid #938F99" : "none",
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",}}
            >
              <Pressable
              style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}
                
              onPress={()=>setDisplayTime({...displayTime,am:"PM"})}
              >
                <Text style={{color:"white",fontWeight:"bold"}}>PM</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  input: {
    width: 96,
    height: 36,
    textAlign: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "",
    color: "white",
    fontSize: 24,
  },
  amBox:{
    
  
  },
  pmBox:{
   
  }
});
export default TimeContainer;
