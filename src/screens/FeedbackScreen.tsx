import React, { useState } from "react";
import {
  Pressable,
  Modal,
  Alert,
  View,
  Text,
  Image,
  ScrollView,
  Button,
} from "react-native";
//import { IconButton, MD3Colors } from 'react-native-paper';

const FeedbackScreen = () => {
  const [countAtten, setAtten] = useState(0);
  const [countLesson, setLesson] = useState(3);
  const [modalVisible, setModalVisible] = useState(false);

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
          source={require("../../assets/Artboard1copy.png")}
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
      <View>
        <Text style={{ fontSize: 25 }}>
          Class Attendance {countAtten}/{countLesson}
        </Text>
        <View 
        style={{
            flexDirection: 'row',  
            justifyContent: 'space-between',
            borderWidth: 1,
            margin: 5,
            marginVertical:20}} >

            <View>
            <Text style={{fontSize:20}}>
                Lesson 1
            </Text>
            <Text>
                Start at: 14/2/2023{"\n"}
                Duration: 90 minutes{"\n"}
                Status: Started 
            </Text>
            </View>
            <View style={{alignSelf:"center"}}>
            <Button
                onPress={()=> {
                    Alert.alert('Pressed!!')
                } }
                title="View Feedback"
                color='#F94B4B'                
                />
            </View>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default FeedbackScreen;
