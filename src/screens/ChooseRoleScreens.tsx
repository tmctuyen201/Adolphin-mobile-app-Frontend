import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

var width = Dimensions.get("window").width; //full width

const ChooseRoleScreensOld = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      resizeMode="cover"
      style={styles.ImageBackground}
    >
      <Text style={styles.Text}>Choose Role Screens</Text>
      <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToAlignment={"center"}
        >
          <View style={styles.ImageContainer}>
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
          </View>

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
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const ChooseRoleScreens = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      resizeMode="cover"
      style={styles.ImageBackground}>
      <View>
        <ScrollView style={styles.scrollContainer}>

          <View style={styles.ImageContainer}>
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
          </View>

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

        </ScrollView>
      </View>
    </ImageBackground>
  )
}

export default ChooseRoleScreens;
const styles = StyleSheet.create({
  scrollContainer: {
    padding: 40,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 800,
  },
  ImageBackground: {

  },
  Text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    position: 'absolute',

  },
  Image: { width: 200, height: 200 },
  Touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    width: width * 0.8,
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: 20,
  },
});
