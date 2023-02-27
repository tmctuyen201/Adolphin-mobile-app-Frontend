import React from "react";
import { View, Text } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import { List } from "react-native-paper";
import StatusBarLight from "../../components/StatusBarLight";

const TakeAttendanceScreens = () => {
  return (
    <View>
      <ClassInfoHeader
        className="A5"
        courseName="MAS"
        title="Material"
        navigation={undefined}
      />

      <Text
        style={{
          textAlign: "center",
          paddingTop: 20,
          fontSize: 18,
          fontFamily: "brandon-reg",
        }}
      >
        Press on your lesson to specify attendance taking
      </Text>

      <View>
        <List.AccordionGroup>
          <List.Accordion //controlled
            title="Today(2)"
            expanded={undefined}
            onPress={undefined}
          >
            <List.Item title="Lesson 4" />
            <List.Item title="Lesson 5" />
          </List.Accordion>

          <List.Accordion //controlled
            title="Finished(3)"
            expanded={undefined}
            onPress={undefined}
          >
            <List.Item title="Lesson 1" />
            <List.Item title="Lesson 2" />
            <List.Item title="Lesson 3" />
          </List.Accordion>

          <List.Accordion //controlled
            title="Future(4)"
            expanded={undefined}
            onPress={undefined}
          >
            <List.Item title="Lesson 6" />
            <List.Item title="Lesson 7" />
            <List.Item title="Lesson 8" />
            <List.Item title="Lesson 9" />
          </List.Accordion>
        </List.AccordionGroup>
      </View>
    </View>
  );
};

export default TakeAttendanceScreens;
