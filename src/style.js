import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 
  listContainer: {
    
    width: "95%",
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
    marginLeft: 20,
  
  },
  addNewReminderContainer: {
    flexDirection: "row",
    margin:10,
    marginBottom:20
  },
  showListContainer: {
   
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    margin:4,

    width:"100%",
    height:70,
  },
  listTextStyle: {
    color: "#BEBFBF",
    marginBottom: 2,
    fontSize: 12,
  },
  textContainer:{
    margin:10
  }
});
export default styles;
