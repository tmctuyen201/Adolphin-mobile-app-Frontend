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
import { DataTable } from "react-native-paper";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import { Modal, Portal, Provider } from "react-native-paper";

const OfflineTestGradeScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Offline Grade"
        navigation={navigation}
      />
      <View>
        <GradeTable />
      </View>
    </ScrollView>
  );
};

const data = [
  {
    id: "01",
    img: { uri: "https://reactjs.org/logo-og.png" },
    name: "Hai Xuan",
    offline: "10",
    paper: "9",
  },
  {
    id: "02",
    img: { uri: "https://reactjs.org/logo-og.png" },
    name: "Nguyen Duc",
    offline: "9",
    paper: "",
  },
  {
    id: "03",
    img: { uri: "https://reactjs.org/logo-og.png" },
    name: "Trinh Tuyen",
    offline: "",
    paper: "10",
  },
];

const GradeTable = () => {
  return (
    <Provider>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Image</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Offline Grade</DataTable.Title>
            <DataTable.Title>Paper Grade</DataTable.Title>
          </DataTable.Header>

          {data.map((student) => {
            return (
              <DataTable.Row key={student.id}>
                <DataTable.Cell>
                  <Image source={student.img} style={styles.item} />
                </DataTable.Cell>
                <DataTable.Cell>{student.name}</DataTable.Cell>
                <DataTable.Cell>
                  {student.offline === "" ? NaN : student.offline}
                </DataTable.Cell>
                <DataTable.Cell>
                  {student.paper === "" ? NaN : student.paper}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 25,
    height: 25,
  },
});
export default OfflineTestGradeScreen;
