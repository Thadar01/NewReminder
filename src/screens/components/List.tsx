import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "@/src/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TList } from "@/type";

interface Props {
    listData: TList[]
    handleEdit:(item: TList)=>void
}

const List  :React.FC<Props>= ({listData,handleEdit}) => {
 
  const itemSeparator=()=>(
           
    <View style={{height:1, width:"100%",backgroundColor:"#3F4040"}}/>
  )
  
  return (
    <FlatList
      data={listData}
      ItemSeparatorComponent={itemSeparator}
      
      style={{margin:6}}
      renderItem={({ item }) => (
        <View style={styles.showListContainer} >
          <View >
            <Text style={styles.listTextStyle}>
             {item.date},{" "}
             {item.time}
             
            </Text>
            <Text style={{color:"white",fontSize:12,fontWeight:600,margin:3, marginLeft:0}}>{item.title}</Text>
  
            <Text style={{color:"#BEBFBF",fontSize:12}}>{item.location}</Text>
          </View>
          <View style={{flexDirection:"row", margin:8}}>
            <View style={{marginRight:1}}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={20}
                color="#1A75FF"
                onPress={()=>handleEdit(item)}
              />
            </View>
            <View style={{marginRight:2}}>
              <MaterialCommunityIcons
                name="delete-outline"
                size={20}
                color="#FF4646"
              
              />
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default List;
