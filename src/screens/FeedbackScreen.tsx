import React, { useState } from "react";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const MyTabs=()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Personal" component={PersonFeedback} />
      <Tab.Screen name="Class" component={ClassFeedback} />
    </Tab.Navigator>
  );
}

const FeedbackScreen = () => {
  const [countAtten, setAtten] = useState(0);
  const [countLesson, setLesson] = useState(3);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 150, margin: 20};

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <NavigationContainer>
          <MyTabs/>
          </NavigationContainer>
        </Modal>
      </Portal>
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
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              margin: 5,
              marginVertical: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 20 }}>Lesson 1</Text>
              <Text>
                Start at: 14/2/2023{"\n"}
                Duration: 90 minutes{"\n"}
                Status: Started
              </Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                onPress={showModal}
                title="View Feedback"
                color="#F94B4B"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
};

export const PersonFeedback =() =>{
  return(
    <Text>No feedback for now</Text>
  )
}
export const ClassFeedback =() =>{
  return(
    <Text>No feedback for now</Text>
  )
}
export default FeedbackScreen;
