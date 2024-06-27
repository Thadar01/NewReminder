import { View, Text, Platform, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "@/src/style/dateStyle";
import { TReminder } from "@/type";

interface TDatePicker {
  date: Date;

  reminderRef: React.MutableRefObject<TReminder>;
}

const DatePicker: React.FC<TDatePicker> = ({ date, reminderRef }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [localDate, setLocalDate] = useState(new Date(date));

  const handleChange = (event: any, date?: Date) => {
    setShowDatePicker(Platform.OS === "ios");
    onChangeDate(event, date);
  };
  const onChangeDate = (_event: any, selectedDate: Date | undefined) => {
    if (selectedDate) {
      reminderRef.current.date = selectedDate;
      setLocalDate(selectedDate);
      setShowDatePicker(false);
    }
  };
  const formattedDate =
    localDate instanceof Date && !isNaN(localDate.getTime())
      ? localDate.toLocaleDateString()
      : "";
  console.log("DateRender");
  return (
    <>
      {Platform.OS === "ios" ? (
        <View>
          <DateTimePicker
            mode="date"
            value={localDate}
            display="spinner"
            textColor="white"
            onChange={handleChange}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Pressable
            style={{
              width: "89%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setShowDatePicker(true)}
          >
            <TextInput
              style={styles.timeInput}
              placeholder="Select Date"
              placeholderTextColor="white"
              value={formattedDate}
              editable={false}
            />
          </Pressable>

          {showDatePicker && (
            <DateTimePicker
              value={localDate}
              mode="date"
              display="default"
              onChange={handleChange}
              onTouchCancel={() => setShowDatePicker(false)}
            />
          )}
        </View>
      )}
    </>
  );
};

export default DatePicker;
