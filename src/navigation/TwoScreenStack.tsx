import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import HomeScreens from "../screens/StudentRole/HomeScreens";
import MyTabs from "./bottomTabs";

const Stack = createNativeStackNavigator();

const TwoScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TwoScreenStack;
