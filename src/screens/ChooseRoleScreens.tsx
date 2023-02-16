import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ChooseRoleScreens = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.ImageBackground}
      >
        <Text style={styles.Text}>Choose Role Screens</Text>
        <TouchableOpacity
          style={styles.Touchable}
          onPress={() => navigation.navigate("Drawer")}
        >
          <Image
            source={require("../../assets/Artboard1copy.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={styles.Text}>Student</Text>
        </TouchableOpacity>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../../assets/Artboard1copy.png")}

            style={styles.Image}
          />
          <Text style={styles.Text}>Teacher</Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../../assets/Artboard1copy.png")}

            style={styles.Image}
          />
          <Text style={styles.Text}>Parents</Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../../assets/Artboard1copy.png")}

            style={styles.Image}
          />
          <Text style={styles.Text}>Admin</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ChooseRoleScreens;
const styles = StyleSheet.create({
  ImageBackground: { flex: 1, justifyContent: "center", alignItems: "center" },
  Text: { fontWeight: "bold", color: "white", fontSize: 18 },
  Image: { width: 200, height: 200 },
  Touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    paddingTop: 40,
    alignItems: "center",
  },
});
