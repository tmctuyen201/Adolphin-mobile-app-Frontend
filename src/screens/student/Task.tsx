import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import StatusBarLight from "../../components/StatusBarLight";
import { AntDesign } from "@expo/vector-icons";

//TODO Lam` task thanh component ScrollViewItem
const Task = () => {
  

  return (
    <View style={{ flex: 1 }}>
      <StatusBarLight />
      <ClassInfoHeader className="1" courseName="IS" title="Tasks" />
      <Text style ={{textAlign: 'center', paddingTop: 20, fontSize: 18}}>Click on a task to see Info / Perform action </Text>

      <View style={styles.scrollContainer}>
        <ScrollView>
          
          <View style={styles.task}> 
            <View>
              <Text style={styles.taskTitle}>Offline Test L1</Text>
              <Text style={styles.taskInfo}>Start: 12:00AM | 15/2</Text>
            </View>
            <AntDesign name="check" size={50} color="#FFAFCC" style={{}} />
          </View>

          <View style={styles.task}>
            <View>
              <Text style={styles.taskTitle}>Homework L2</Text>
              <Text style={styles.taskInfo}>Due: 08:00AM | 18/2</Text>
            </View>
          </View>

          <View style={styles.task}>
            <View>
              <Text style={styles.taskTitle}>Homework L3</Text>
              <Text style={styles.taskInfo}>Due: 12:00AM | 14/2</Text>
            </View>
            <AntDesign name="check" size={50} color="#FFAFCC" style={{}} />
          </View>
          
        </ScrollView>
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 26,
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
    color: "#343a40",
  },
  taskInfo: {
    marginTop: 8,
    fontSize: 15,
    color: "#343a40",
  },
  scrollContainer: {
    padding: 40,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 800,
  },
  task: {
    padding: 20,
    paddingLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "rgba(189, 224, 254, 0.4)",
    borderRadius: 30,
    height: 112,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "lightpink",
    height: 80,
    shadowColor: "#6B4B3E",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.8rem",
  },
  headerText: {
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "sans-serif-thin",
    color: "black",
    textAlign: "justify",
    padding: 10,
    paddingTop: 11,
    fontSize: 22,
  },
});
