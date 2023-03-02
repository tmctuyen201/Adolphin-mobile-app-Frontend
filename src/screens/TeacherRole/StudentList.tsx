import React, { useState } from "react";
import { View, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import { DataTable, Provider } from "react-native-paper";
import { Text } from "react-native-paper";

const students = [
  {
    id: 1,
    img: require("../../../assets/rolesIcon/student.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
  {
    id: 2,
    img: require("../../../assets/rolesIcon/admin.png"),
    name: "Hoang Tuyen",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84946251525,
  },
  {
    id: 3,
    img: require("../../../assets/rolesIcon/teacher.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
  {
    id: 4,
    img: require("../../../assets/rolesIcon/teacher.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
  {
    id: 5,
    img: require("../../../assets/rolesIcon/teacher.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
];

const StudentList = () => {
  const [visibility, setVisibility] = useState(false);
  const [id, setId] = useState<number>();
  const showInfo = (id: number) => {
    setId(id);
    setVisibility(true);
  };
  return (
    <View>
      <ClassInfoHeader
        className="A5"
        courseName="MAS"
        navigation={undefined}
        title="Student List"
      />
      <Text
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 18,
          fontFamily: "brandon",
        }}
      >
        Press a student to view more details
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Image</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Parent Name</DataTable.Title>
          <DataTable.Title numeric>Parent PhoneNum</DataTable.Title>
        </DataTable.Header>

        {students.map((student, index) => {
          return (
            <DataTable.Row key={student.id} onPress={() => showInfo(index)}>
              <DataTable.Cell>
                <Image source={student.img} style={styles.item} />
              </DataTable.Cell>
              <DataTable.Cell>{student.name}</DataTable.Cell>
              <DataTable.Cell>{student.parentName}</DataTable.Cell>
              <DataTable.Cell>{student.parentPhone}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>

      <View>
        {students.map((student, index) => {
          return (
            <View style={styles.centeredView}>
              {id == index && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={visibility}
                  onRequestClose={() => setVisibility(false)}
                >
                  <View style={styles.modalView}>
                    <Image source={student.img} style={styles.icon} />
                    <Text>{student.name}</Text>
                    <Text>{student.email}</Text>
                    <Text>{student.parentPhone}</Text>
                    <Text>{student.parentName}</Text>
                  </View>
                  
                  <TouchableOpacity onPress={() => setVisibility(!visibility)}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                </Modal>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 34,
    height: 34,
  },
  modalContent: {
    zIndex: 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  icon: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 150,
  },
  modalContainer: {
    backgroundColor: "white",
    width: 350,
    height: 300,
    marginTop: 80,
    marginLeft: 33,
  },
});
export default StudentList;
