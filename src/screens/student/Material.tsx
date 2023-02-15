import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import StatusBarLight from "../../components/StatusBarLight";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

const Material = () => {
  return (
    <View>
      <StatusBarLight />
      <ClassInfoHeader className="A5" courseName="MAS" title="Material" />

      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width * 0.8 + 10}
          snapToAlignment={"center"}
        >
          <View style={styles.horizontalItemContainer}>
            <View style={styles.horizontalTitleContainer}><Text style = {styles.horizontalTitle}>Lesson Material</Text></View>
            
            <ScrollView>
              <View style={styles.item}>
                <Text>lmao ez</Text>
              </View>
            </ScrollView>
          </View>

          <View style={styles.horizontalItemContainer}>
            <View style={styles.horizontalTitleContainer}><Text style = {styles.horizontalTitle}>Course Material</Text></View>
            
            <ScrollView>
              <View style={styles.item}>
                <Text>.-.</Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    paddingLeft: 30,
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
  horizontalTitle:{
    fontSize: 20,
    fontFamily: Platform.OS === 'ios' ? "HelveticaNeue-Light" : "sans-serif-thin",
  },
  horizontalTitleContainer:{
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
export default Material;
