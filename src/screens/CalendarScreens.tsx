import React,{useState} from "react";
import { View, Text, Modal, ImageBackground } from "react-native";
import { Calendar } from "react-native-calendars";
import MenuButton from "../components/MenuButton";
const CalendarScreens = ({ navigation }: any) => {
  const [currentDate,setCurrntDate] = useState();
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={{}}>
        <MenuButton onPress={() => navigation.openDrawer()} />
      </View>
      <Calendar
        style={{ margin: 30, borderRadius: 10, elevation: 100 }}
        onDayPress={(day : any) => {
          setCurrntDate(day.dateString);
          console.log(currentDate);
          
        }}
        markedDates = {
          {
            currentDate : { selected : true}
          }
        }
      />
    </ImageBackground>
  );
};

export default CalendarScreens;
