import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import CustomButton from "../components/CustomButton";
import InputText from "../components/InputText";

const LogInScreens = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.ImageBackground}
      >
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>Adolphin Application</Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../../assets/Artboard1copy.png")}
            style={styles.Image}
          />
        </View>
        <InputText placeHolder="User Name" secureTextEntry={false} />
        <InputText placeHolder="Password" secureTextEntry={true} />
        <CustomButton
          backgroundColor="#3B71F3"
          color={"white"}
          width={"80%"}
          onPress={() => navigation.navigate("ChooseRole")}
        >
          Login
        </CustomButton>
        <CustomButton backgroundColor="white" color={"black"} width={"80%"}>
          Forgot your password?
        </CustomButton>
        <CustomButton backgroundColor="#FAE9EA" color={"#DD4D44"} width={"80%"}>
          Sign in with google
        </CustomButton>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LogInScreens;
const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  TextContainer: { marginBottom: 20 },
  Image: { width: 250, height: 250 },
  ImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  SafeArea: {
    flex: 1,
    backgroundColor: '#343a40',
  },
});
