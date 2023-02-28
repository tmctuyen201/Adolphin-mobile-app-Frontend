import React, {useState} from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const ExampleOne =()=> {
  const [visibility, setVisibility] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  const showInfo = (student: any) => {
    setStudentInfo(student);
    setVisibility(true);
    const studentList = new Promise(()=>{
    });

    return undefined;
  };
  return(
    <DataTable>
        <DataTable.Header>
          <DataTable.Title>Test Name</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title numeric>Grade</DataTable.Title>
        </DataTable.Header>

        {data.map((student) => {
          return (
            <DataTable.Row key={student.id} onPress={showInfo}>
              <DataTable.Cell>{student.test} </DataTable.Cell>
              <DataTable.Cell>{student.date}</DataTable.Cell>
              <DataTable.Cell>{student.grade}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
  )
}

const data =[
  {
    id: 1,
    test: "Test 1",
    date: "14/02/2023",
    grade: 8,
  },
  {
    id: 2,
    test: "Test 2",
    date: "14/02/2023",
    grade: 8,
  },
  {
    id: 3,
    test: "Test 3",
    date: "14/02/2023",
    grade: 9,
  },
]

const GradeScreens = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Grade"
        navigation={navigation}
      />
      <View>
        <ExampleOne />
      </View>
    </ScrollView>
  );
};

export default GradeScreens;
