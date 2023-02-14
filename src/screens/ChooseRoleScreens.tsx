import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const ChooseRoleScreens = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#F9ABA4",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 22 }}>
          Choose Role Screens
        </Text>
        <View style={{ paddingTop: 40, alignItems: "center" }}>
          <Image
            source={require("D:/project/adolphin-app/adolphin-app/assets/Artboard1copy.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            Student
          </Text>
        </View>
        <View style={{ paddingTop: 40, alignItems: "center" }}>
          <Image
            source={require("D:/project/adolphin-app/adolphin-app/assets/Artboard1copy.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            Teacher
          </Text>
        </View>
        <View style={{ paddingTop: 40, alignItems: "center" }}>
          <Image
            source={require("D:/project/adolphin-app/adolphin-app/assets/Artboard1copy.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            Parents
          </Text>
        </View>
        <View style={{ paddingTop: 40, alignItems: "center" }}>
          <Image
            source={require("D:/project/adolphin-app/adolphin-app/assets/Artboard1copy.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            Admin
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ChooseRoleScreens;
