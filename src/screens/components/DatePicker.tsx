import { View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";

interface TDatePicker{
  date:Date
  onChangeDate:any
}
  const DatePicker:React.FC<TDatePicker> = ({ date,onChangeDate}) => {
  // Convert the date prop to a Date object if it's not already
  const selectedDate = typeof date === "string" ? new Date(date) : date;

  return (
    <View >
      <DateTimePicker
        mode="date"
        display="spinner"
        value={selectedDate}
        textColor="black"
       onChange={onChangeDate}
      />
    </View>
  );
};

export default DatePicker;
