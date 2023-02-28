import React from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import ListItem from "../../components/ListItem";
import MenuButton from "../../components/MenuButton";
import SearchBar from "../../components/SearchBar";

const HomeScreens = ({ navigation }: any) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#343a40" }}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.ImageBackground}
      >
        <View style={styles.MenuTouchableContainer}>
          <MenuButton onPress={() => navigation.openDrawer()} />
          <SearchBar onTextChange={() => {}} />
        </View>
        <View style={styles.ListItemContainer}>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("StudentTab")}
          >
            <ListItem>AI 1705</ListItem>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("TeacherTab")}
          >
            <ListItem>SE 1740</ListItem>
          </TouchableOpacity>
          <ListItem>IT 1650</ListItem>
          <ListItem>IA 1578</ListItem>
          <ListItem>AI 1706</ListItem>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreens;
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
