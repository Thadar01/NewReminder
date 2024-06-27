import { View, Text, TextInput, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import styles from "@/src/style/timeStyle";
import { TReminder } from "@/type";

interface TTime {
  reference: React.MutableRefObject<TReminder>;
}
const TimeContainer: React.FC<TTime> = ({ reference }) => {
  const [hourStyles, setHourStyles] = useState({
    backgroundColor: "#36343B",
    borderColor: "none",
  });

  const [minuteStyles, setMinuteStyles] = useState({
    backgroundColor: "#36343B",
    borderColor: "none",
  });

  const getTime = reference.current.time ? reference.current.time : null;

  const splitTime = getTime ? getTime.split(" ") : null;
  const splitMin = splitTime ? splitTime[0].split(":") : null;

  const stringTimeRef = useRef({
    hour: splitMin ? splitMin[0] : "",
    min: splitMin ? splitMin[1] : "",
    am: getTime ? getTime[1] : "",
  });

  const [am, setAm] = useState(stringTimeRef.current.am);

  const formatTime = (hour: string, min: string, am: string) => {
    stringTimeRef.current.hour = hour;
    stringTimeRef.current.min = min;
    stringTimeRef.current.am = am;
    reference.current.time = `${hour}:${min} ${am}`;
  };

  console.log("Time render");
  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View style={{ width: 96, height: 59 }}>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: hourStyles.backgroundColor },
              { borderColor: hourStyles.borderColor },
            ]}
            placeholder="00"
            defaultValue={stringTimeRef.current.hour}
            onChangeText={(hour) =>
              formatTime(
                hour,
                stringTimeRef.current.min,
                stringTimeRef.current.am
              )
            }
            keyboardType="numeric"
            maxLength={2}
            onFocus={() => {
              setHourStyles({
                backgroundColor: "#8D59D3",
                borderColor: "#D0BCFF",
              });
            }}
            onBlur={() => {
              setHourStyles({
                backgroundColor: "#36343B",
                borderColor: "transparent",
              });
            }}
          />
          <View style={{ marginTop: 2 }}>
            <Text style={{ color: "#CAC4D0" }}>Hour</Text>
          </View>
        </View>
        <View style={styles.columnStyle}>
          <Text style={{ color: "white", fontSize: 30 }}>:</Text>
        </View>
        <View style={{ width: 96, height: 59 }}>
          <TextInput
            style={[
              styles.input,
              { backgroundColor: minuteStyles.backgroundColor },
              { borderColor: minuteStyles.borderColor },
            ]}
            placeholder="00"
            defaultValue={stringTimeRef.current.min}
            onChangeText={(min) =>
              formatTime(
                stringTimeRef.current.hour,
                min,
                stringTimeRef.current.am
              )
            }
            keyboardType="numeric"
            maxLength={2}
            inputMode="numeric"
            onFocus={() => {
              setMinuteStyles({
                backgroundColor: "#8D59D3",
                borderColor: "#D0BCFF",
              });
            }}
            onBlur={() => {
              setMinuteStyles({
                backgroundColor: "#36343B",
                borderColor: "transparent",
              });
            }}
          />
          <View style={{ marginTop: 2 }}>
            <Text style={{ color: "#CAC4D0" }}>Minute</Text>
          </View>
        </View>
        <View
          style={{
            width: 104,
            height: 24,
            flexDirection: "row",
            marginLeft: 20,
            marginTop: 5,
          }}
        >
          <View
            style={[
              styles.amPmBox,
              {
                backgroundColor: am === "AM" ? "#230143" : "#41047a",
                borderBottomColor: am === "AM" ? "#938F99" : "black",
              },
            ]}
          >
            <Pressable
              style={styles.amPmPressable}
              onPress={() => {
                formatTime(
                  stringTimeRef.current.hour,
                  stringTimeRef.current.min,
                  "AM"
                );
                setAm("AM");
              }}
            >
              <Text style={styles.amPMText}>AM</Text>
            </Pressable>
          </View>
          <View
            style={[
              styles.amPmBox,
              {
                backgroundColor: am === "PM" ? "#230143" : "#41047a",
                borderBottomColor: am === "PM" ? "#938F99" : "black",
              },
            ]}
          >
            <Pressable
              style={styles.amPmPressable}
              onPress={() => {
                formatTime(
                  stringTimeRef.current.hour,
                  stringTimeRef.current.min,
                  "PM"
                );
                setAm("PM");
              }}
            >
              <Text style={styles.amPMText}>PM</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimeContainer;
