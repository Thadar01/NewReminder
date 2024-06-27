import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "../../style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useStore from "@/src/store";
import { router } from "expo-router";
import { isToday } from "date-fns";
import { TReminder } from "@/type";
import EditButton from "./Buttons/EditButton";
import DeleteButton from "./Buttons/DeleteButton";

const List = () => {
  const reminderList = useStore((state) => state.reminderList);
 

  console.log("list rendered");

  const itemSeparator = () => (
    <View style={{ height: 1, width: "100%", backgroundColor: "#3F4040" }} />
  );

  const formatedDate = (date: any) => {
    let parsedDate = date instanceof Date ? date : new Date(date);
    if (!isNaN(parsedDate.getTime())) {
      return `${parsedDate.getDate()} / ${
        parsedDate.getMonth() + 1
      } / ${parsedDate.getFullYear()}`;
    }
    return "Invalid Date";
  };
  const sortedData = [...reminderList].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
const sorted=reminderList
  return (
    <FlatList
      data={sortedData}
      ItemSeparatorComponent={itemSeparator}
      style={{ margin: 6 }}
      renderItem={({ item }) => (
        <View style={styles.showListContainer}>
          <View style={styles.textContainer}>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "600",
                marginBottom: 4,
              }}
            >
              {item.title}
            </Text>
            {formatedDate(item.date) === formatedDate(new Date()) ? (
              item.time !== null ? (
                <Text style={styles.listTextStyle}>
                  {item.time} {item.location}
                </Text>
              ) : (
                <Text style={styles.listTextStyle}>{item.location}</Text>
              )
            ) : (
              <Text style={styles.listTextStyle}>
                {formatedDate(item.date)}, {item.time} {item.location} 
              </Text>
            )}
            <Text style={{color:"white"}}>Created At:  {item.createdAt}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <EditButton item={item}/>
            <DeleteButton item={item}/>
          </View>
        </View>
      )}
    />
  );
};

export default List;
