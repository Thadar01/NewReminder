import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    mainContainer:{
        display:"flex",justifyContent:"space-between",alignItems:"center",width:"89%"
    },
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
      amPmBox: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
      },
      amPmPressable:{
        display:"flex",alignItems:"center",justifyContent:"center",width:"100%"


      },
      amPMText:{
        color:"white", fontWeight:"bold"
      },
      columnStyle:{
        width:24,height:40,display:"flex",alignItems:"center",justifyContent:"center",marginTop:-6
      }
})

export default styles