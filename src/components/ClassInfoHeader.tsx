//Display class and course info as a header on top of screen
//CHUA XONG

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

type headerTextProps = {
  className: string;
  courseName: string;
  title: string;
  navigation: any;
};

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const ClassInfoHeader = ({
  className,
  courseName,
  title,
  navigation,
}: headerTextProps) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.MenuTouchable}
        onPress={() => navigation.openDrawer()}
      >
        <Image source={require("../../assets/menu.png")} style={styles.Image} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.headerText}>
        <Text style={styles.classText}>Class {className}</Text>
        <Text style={styles.courseText}>Course: {courseName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Thin" : "Roboto",
    fontSize: 34,
  },
  headerText: {
    alignItems: "flex-end",
  },
  classText: {
    fontFamily:
      Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
    fontSize: 26,
    color: "#343a40",
  },
  courseText: {
    fontFamily:
      Platform.OS === "ios" ? "HelveticaNeue-Thin" : "sans-serif-thin",
    color: "#343a40",

    fontSize: 18,
  },
  header: {
    padding: 14,
    backgroundColor: "lightpink",
    height: 80,
    shadowColor: "#6B4B3E",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: width,
  },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
});

export default ClassInfoHeader;
