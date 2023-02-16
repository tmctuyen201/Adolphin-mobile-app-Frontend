import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import StatusBarLight from "../../components/StatusBarLight";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ScrollViewItem from "../../components/ScrollViewItem";

var width = Dimensions.get("window").width; //full width

const Material = () => {
  return (
    <View>
      <StatusBarLight />
      <ClassInfoHeader className="A5" courseName="MAS" title="Material" />
      <Text style ={{textAlign: 'center', paddingTop: 20, fontSize: 18}}>Click on a task to preview </Text>

      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width * 0.8 + 10}
          snapToAlignment={"center"}
        >
          <View style={styles.horizontalItemContainer}>
            <View style={styles.horizontalTitleContainer}><Text style={styles.horizontalTitle}>Lesson Material</Text></View>

            <ScrollView>
              <ScrollViewItem itemTitle="A Guide to Tuyen" itemInfo="uploaded: 10/2">
                <MaterialCommunityIcons name="magnify-expand" size={38} color="#343a40" />
              </ScrollViewItem>

              <ScrollViewItem itemTitle="How: Money works " itemInfo="uploaded: 12/2">
                <MaterialCommunityIcons name="magnify-expand" size={38} color="#343a40" />
              </ScrollViewItem>

            </ScrollView>
          </View>

          <View style={styles.horizontalItemContainer}>
            <View style={styles.horizontalTitleContainer}><Text style={styles.horizontalTitle}>Lesson Material</Text></View>

            <ScrollView>
              <ScrollViewItem itemTitle="A Guide to Tuyen" itemInfo="uploaded: 10/2">
                <MaterialCommunityIcons name="magnify-expand" size={38} color="#343a40" />
              </ScrollViewItem>

              

            </ScrollView>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};

export default Material;

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 26,
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
    color: "#343a40",
  },
  item: {
    padding: 20,
    paddingLeft: 32,
    paddingRight: 32,
    margin: 10,
    backgroundColor: "rgba(189, 224, 254, 0.4)",
    borderRadius: 30,
    height: 112,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalItemContainer: {
    width: width * 0.8,
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: 20,
  },
  horizontalTitle: {
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? "HelveticaNeue-Light" : "sans-serif-thin",
  },
  horizontalTitleContainer: {
    padding: 10,
    alignItems: 'center'

  },
  scrollContainer: {
    padding: 40,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 800,
  },
});

