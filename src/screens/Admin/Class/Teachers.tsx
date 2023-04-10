import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import ClassInfoHeader from "../../../components/ClassInfoHeader";
import { AntDesign } from "@expo/vector-icons";

const Teachers = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1 , backgroundColor: 'white'}}>
        
        <ClassInfoHeader
          className="1"
          courseName="IS"
          title="Teacher"
          navigation={navigation}
        />        
      </View>
    )
  }
  
  export default Teachers;