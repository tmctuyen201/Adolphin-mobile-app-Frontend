import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  TextInput,
  Image,
  StyleSheet,
} from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import { DataTable } from "react-native-paper";

import ClassInfoHeader from "../../components/ClassInfoHeader";

const TakeFeedbackScreen = ({ navigation }: any) => {
  const [visible1, setVisible1] = React.useState(false);
  const showModal1 = () => setVisible1(true);
  const hideModal1 = () => setVisible1(false);

  const [visible2, setVisible2] = React.useState(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  const containerStyle = { backgroundColor: "white", margin: 20 };
  const [text, onChangeText] = React.useState("...");
  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible1}
          onDismiss={hideModal1}
          contentContainerStyle={containerStyle}
        >
          <View>
            <Text
              style={{ fontSize: 25, backgroundColor: "#ffcccc", padding: 10 }}
            >
              Students Feedbacks
            </Text>
            <ScrollView style={{ maxHeight: 148 }}>
              <FeedbackTable />
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
                padding: 10,
              }}
            >
              <Button title="Person" disabled color="#ffcccc" />
              <Button title="Class" onPress={showModal2} color="#ffcccc" />
            </View>
          </View>
        </Modal>
        <Modal
          visible={visible2}
          onDismiss={hideModal2}
          contentContainerStyle={containerStyle}
        >
          <View>
            <Text
              style={{ fontSize: 25, backgroundColor: "#ffcccc", padding: 10 }}
            >
              Class Feedback
            </Text>
            <Text style={{ padding: 10, fontSize: 20 }}>
              Enter class feedbacks:
            </Text>
            <TextInput
              style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
              onChangeText={onChangeText}
              value={text}
            />
            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                paddingRight: 10,
              }}
            >
              <Button title="Save" color="#ffcccc" />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 25,
                padding: 10,
              }}
            >
              <Button title="Person" onPress={hideModal2} color="#ffcccc" />
              <Button title="Class" disabled color="#ffcccc" />
            </View>
          </View>
        </Modal>
      </Portal>
      <ScrollView>
        <ClassInfoHeader
          className="1"
          courseName="IS"
          title="Take Feedback"
          navigation={navigation}
        />
        <View>
          <Text style={{ fontSize: 25 }}>Student Feedbacks</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              margin: 8,
              marginVertical: 20,
            }}
          >
            <View style={{ padding: 5 }}>
              <Text style={{ fontSize: 20 }}>Lesson 1</Text>
              <Text>
                On 14/2/2023{"\n"}
                Duration: 90 minutes
              </Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                onPress={showModal1}
                title="Add Feedback"
                color="#F94B4B"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
};
const data = [
  {
    id: "01",
    name: "Hai Xuan",
    img: { uri: "https://reactjs.org/logo-og.png" },
    attend: "Absent",
    feedback: "",
  },
  {
    id: "02",
    name: "Nguyen Duc",
    img: { uri: "https://reactjs.org/logo-og.png" },
    attend: "Absent",
    feedback: "",
  },
  {
    id: "03",
    name: "Trinh Tuyen",
    img: { uri: "https://reactjs.org/logo-og.png" },
    attend: "Absent",
    feedback: "Good",
  },
];

const FeedbackTable = () => {
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Image</DataTable.Title>
          <DataTable.Title> </DataTable.Title>
          <DataTable.Title>Feedback</DataTable.Title>
        </DataTable.Header>

        {data.map((student) => {
          return (
            <DataTable.Row key={student.id}>
              <DataTable.Cell>{student.name}</DataTable.Cell>
              <DataTable.Cell>
                <Image source={student.img} style={styles.item} />
              </DataTable.Cell>
              <DataTable.Cell>
                {
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {student.attend}
                  </Text>
                }
              </DataTable.Cell>
              <DataTable.Cell>
                {student.feedback == "" ? "..." : student.feedback}
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 25,
    height: 25,
  },
});
export default TakeFeedbackScreen;
