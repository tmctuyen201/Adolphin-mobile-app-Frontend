import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    borderColor: "#ffcccc",
    textAlign: "center",
    textAlignVertical: "center",
  },
  head: { height: 40, backgroundColor: "#ffcccc" },
  text: { margin: 6 },
});

interface ExampleOneState {
  tableHead: string[];
  tableData: string[][];
}

export class ExampleOne extends React.Component<{}, ExampleOneState> {
  constructor(props: any) {
    super(props);
    this.state = {
      tableHead: ["TestName", "Date", "Value"],
      tableData: [
        ["Test1", "14/02/2023", "3"],
        ["Test2", "15/02/2023", "3"],
        ["Test3", "16/02/2023", "3"],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles1.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={state.tableHead}
            style={styles1.head}
            textStyle={styles1.text}
          />
          <Rows data={state.tableData} textStyle={styles1.text} />
        </Table>
      </View>
    );
  }
}

const GradeScreens = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderBottomWidth: 2,
          marginTop: 20,
        }}
      >
        <Image
          source={require("../../../assets/Artboard1copy.png")}
          style={{ width: 90, height: 90, alignItems: "flex-end" }}
        />
        <Text
          style={{
            textAlignVertical: "bottom",
            textAlign: "auto",
            fontSize: 25,
          }}
        >
          Test Class 1 {"\n"}Course: Test Course
        </Text>
      </View>
      <View>
        <ExampleOne />
      </View>
    </ScrollView>
  );
};

export default GradeScreens;
