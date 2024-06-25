import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "@/src/style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useStore from "@/src/store";
import { router } from "expo-router";

const List = () => {
  const { reminderList, deleteReminderList,editSelectedReminder,handleEdit } = useStore();

  const itemSeparator = () => (
    <View style={{ height: 1, width: "100%", backgroundColor: "#3F4040" }} />
  );

  const formatedDate = (date: any) => {
    let parsedDate = date instanceof Date ? date : new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      return `${parsedDate.getDate()}-${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}`;
    }
    return "Invalid Date";
  };

   const clickEdit=(item:{})=>{
      editSelectedReminder(item)
      console.log(item)
      router.push("/")
      handleEdit(true)
   }

  return (
    <FlatList
      data={reminderList}
      ItemSeparatorComponent={itemSeparator}
      style={{ margin: 6 }}
      renderItem={({ item }) => (
        <View style={styles.showListContainer}>
          <View>
            <Text style={styles.listTextStyle}>
              {formatedDate(item.date)} {item.time}
            </Text>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "600", margin: 3, marginLeft: 0 }}>
              {item.title}
            </Text>
            <Text style={{ color: "#BEBFBF", fontSize: 12 }}>{item.location}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <View style={{ marginRight: 1 }}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={20}
                color="#1A75FF"
                onPress={()=>clickEdit(item)}
              />
            </View>
            <View style={{ marginRight: 2 }}>
              <MaterialCommunityIcons
                name="delete-outline"
                size={20}
                color="#FF4646"
                onPress={() => deleteReminderList(item.id)}
              />
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default List;
