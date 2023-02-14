import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import ChooseRoleScreens from "../screens/ChooseRoleScreens";
import LogInScreens from "../screens/LogInScreens";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogInScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseRole"
          component={ChooseRoleScreens}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;