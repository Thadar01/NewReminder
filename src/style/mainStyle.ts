import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  titleBox: {
    width: "89%",
    height: 58,
    backgroundColor: "#41334E",
    borderRadius: 10,
    color: "white",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    width: "89%",
    height: 58,
    backgroundColor: "#41334E",
    borderRadius: 10,
    color: "white",
    padding: 10,
    margin: 10,
  },
  mainContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#120022",
    
  },
  screenContainer: {
   width:"100%",
    flex:1,

    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: "89%",
    alignItems: "center",
  },
  headerText: {
    color: "#589FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 2,
    width: "100%",
  },
  bodyText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
export default styles;
