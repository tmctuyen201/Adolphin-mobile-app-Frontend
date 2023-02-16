import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const PracticeScreens = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderBottomWidth: 2,
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../../assets/Artboard1copy.png")}
          style={{ width: 90, height: 90, alignItems: "flex-end" }}
        />
        <Text
          style={{
            textAlignVertical: "bottom",
            textAlign: "auto",
            fontSize: 25,
          }}
        >
          Test Class 1 {"\n"}Course: Test Course
        </Text>
      </View>
    </ScrollView>
  );
};

export default PracticeScreens;
