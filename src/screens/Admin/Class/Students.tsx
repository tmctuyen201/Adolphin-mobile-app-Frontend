import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import ClassInfoHeader from "../../../components/ClassInfoHeader";
import { AntDesign } from "@expo/vector-icons";

const Students = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1 , backgroundColor: 'white'}}>
        
        <ClassInfoHeader
          className="1"
          courseName="IS"
          title="Students"
          navigation={navigation}
        />        
      </View>
    )
  }
  
  export default Students;