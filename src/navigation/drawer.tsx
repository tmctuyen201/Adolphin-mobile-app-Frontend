import { createDrawerNavigator } from "@react-navigation/drawer";
import CalendarScreens from "../screens/CalendarScreens";
import TwoScreenStack from "./TwoScreenStack";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"Home"}
      screenOptions={{ drawerType: "slide", headerShown: false }}
    >
      <Drawer.Screen name="Home" component={TwoScreenStack} />
      <Drawer.Screen name="Calendar" component={CalendarScreens} />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
