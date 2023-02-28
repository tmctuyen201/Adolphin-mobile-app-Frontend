import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import { DataTable, List } from "react-native-paper";
import StatusBarLight from "../../components/StatusBarLight";


const students = [
    {id: 1, img: require("../../../assets/rolesIcon/student.png"), name: "Hoang Duc", email: "mmotkim@gmail.com", parentName: "Hoa", parentPhone: 84941391259},
    {id: 2, img: require("../../../assets/rolesIcon/admin.png"), name: "Hoang Tuyen", email: "mmotkim@gmail.com", parentName: "Hoa", parentPhone: 84946251525},
    {id: 3, img: require("../../../assets/rolesIcon/teacher.png"), name: "Hoang Duc", email: "mmotkim@gmail.com", parentName: "Hoa", parentPhone: 84941391259},   
];

const StudentList = () => {
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
        Press on a student to view more details
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
              <DataTable.Row>
                <DataTable.Cell><Image source={student.img} style={styles.item}/></DataTable.Cell>
                <DataTable.Cell>{student.name}</DataTable.Cell>
                <DataTable.Cell>{student.parentName}</DataTable.Cell>
                <DataTable.Cell>{student.parentPhone}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 34,
    height: 34
  }
})
export default StudentList;
