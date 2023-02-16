import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FeedBackScreens from "../screens/StudentRole/FeedBackScreens";
import GradeScreens from "../screens/StudentRole/GradeScreens";
import MaterialsScreens from "../screens/StudentRole/MaterialsScreens";
import PracticeScreens from "../screens/StudentRole/PracticeScreens";
import TaskScreens from "../screens/StudentRole/TaskScreens";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Tasks">
      <Tab.Screen
        name="Tasks"
        component={TaskScreens}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="tasks" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Materials"
        component={MaterialsScreens}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="material-design"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={FeedBackScreens}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="feedback" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Grade"
        component={GradeScreens}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="grade" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Practice"
        component={PracticeScreens}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="clipboard-list"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
