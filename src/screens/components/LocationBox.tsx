import { View, Text, TextInput } from "react-native";
import React from "react";
import styles from "@/src/style/locationStyle";

import { TReminder } from "@/type";

interface TLocation {
  reminderRef: React.MutableRefObject<TReminder>;
}
const LocationBox: React.FC<TLocation> = ({ reminderRef }) => {
  return (
    <View style={{width:'100%',marginLeft:40}}>
      <View style={{ margin: 4, marginRight: 270 }}>
        <Text style={styles.locationText}>Location</Text>
      </View>
    
      <TextInput
        style={styles.locationBox}
        defaultValue={reminderRef.current.location}
        placeholder="Location"
        placeholderTextColor={"white"}
        onChangeText={(text) => (reminderRef.current.location = text)}
      />
     
    </View>
  );
};

export default LocationBox;
