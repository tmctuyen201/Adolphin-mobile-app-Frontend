import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import InputText from "../components/InputText";

const LogInScreens = ({ navigation }: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F9ABA4",
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
          Adolphin Application
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Image
          source={require("D:/project/adolphin-app/adolphin-app/assets/Artboard1copy.png")}
          style={{ width: 250, height: 250 }}
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
    </SafeAreaView>
  );
};

export default LogInScreens;
