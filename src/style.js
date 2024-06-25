import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 
  listContainer: {
    backgroundColor: "#0F001E",
    width: "100%",
    height: "100%",
  
  },
  reminderTextStyle: {
    color: "#89F8FF",
    fontSize: 16,
    fontWeight: "bold",
    margin: 4,
  },
  schedlueContainer: {
    flexDirection: "row",
    width: "35%",
   margin:7,
    justifyContent: "space-between",
  },
  lineContainer: {
    backgroundColor: "#B309AF",
    width: 12,
    height: 2,
    margin: 2,
    marginLeft: 15,
    borderTopLeftRadius: "none",
    borderTopRightRadius: "none",
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
  },
  addNewReminderContainer: {
    flexDirection: "row",
    margin:10
  },
  showListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    margin: 4,

    width:"100%",
    height:70,
  },
  listTextStyle: {
    color: "#BEBFBF",
    marginBottom: 2,
    fontSize: 12,
  },
});
export default styles;
