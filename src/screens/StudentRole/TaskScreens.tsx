import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const TaskScreens = ({ navigation }: any) => {
  return (
    <View style={styles.MenuTouchableContainer}>
      <TouchableOpacity
        style={styles.MenuTouchable}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          source={require("../../../assets/menu.png")}
          style={styles.Image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TaskScreens;
const styles = StyleSheet.create({
  ListItemContainer: { alignItems: "center" },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
  MenuTouchableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImageBackground: { flex: 1 },
  Touchable: { width: "100%", alignItems: "center" },
});
