import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import TaskList from "../../../components/TaskList";

const Task = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 18 }}>
        Click on a task to see Info / Perform action{" "}
      </Text>
      <View style={styles.scrollContainer}>
        <ScrollView>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Something will be showed here", "Do you want to start, stop or preview task?", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ])
            }
          >
            <TaskList time={"12:00 AM"} date={"15/2"} isDone={false}>
              Offline Test 1
            </TaskList>
          </TouchableOpacity>
          <TaskList time={"08:00 PM"} date={"18/2"} isDone={false}>
            Online Test 2
          </TaskList>
          <TaskList time={"12:00 AM"} date={"14/2"} isDone={false}>
            Quiz 1
          </TaskList>
        </ScrollView>
      </View>
    </View>
  );
};

export default Task;
const styles = StyleSheet.create({
  ListItemContainer: { alignItems: "center" },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
  MenuTouchableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContainer: {
    padding: 40,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",

    height: 800,
  },
  ImageBackground: { flex: 1 },
  Touchable: { width: "100%", alignItems: "center" },
});
