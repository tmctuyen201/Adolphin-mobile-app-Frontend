import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const PracticeScreens = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Practice"
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default PracticeScreens;
