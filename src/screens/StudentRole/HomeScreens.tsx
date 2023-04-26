// Add change role button
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { Badge } from 'react-native-paper';
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function HomeScreens2() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false} contentInset={{top: 0,bottom: 35}}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>Morning, Duc.</Text>
            <View style={styles.topRightContainer}>
              <Text style={[styles.weatherText, {fontSize: 18}]}>Student</Text>
              <FontAwesome name="user-circle-o" size={36} color="#3f3f3f" />
            </View>
          </View>

          <View style={[ styles.container, styles.classBarContainer]}>
            <View style={styles.classBarItem}>
              <Text style={[styles.classBarText]}>Class: </Text>
            </View>
            <View style={styles.classBarItem}>
              <Text style={[styles.classBarText, {fontWeight: "600", color:'#5a5a5a'}]}>MAS-2</Text>
            </View>
            <View style={styles.classBarItem}>
              <MaterialIcons name="arrow-left" size={32} color="black" />
            </View>
          </View>

          <ImageBackground
            source={require("../../../assets/rowColored2.png")}
            resizeMethod="scale"
            resizeMode="stretch"
            imageStyle={{ borderRadius: 12 }}
            style={[styles.container, styles.weatherContainer]}
          >
            <View style={styles.halfContainer}>
              <Text style={styles.weatherTitle}>Tue, April 26</Text>
              <View style={styles.weatherContent}>
                <Image
                  style={styles.weatherIcon}
                  source={require("../../../assets/raining.png")}
                />
                <View>
                  <Text style={styles.weatherText}>26°C</Text>
                  <Text style={styles.weatherText}>Cloudy</Text>
                </View>
              </View>
            </View>

            <View style={[styles.halfContainer]}>
              <View style={[styles.weatherContent]}>
                <Ionicons name="ios-warning-outline" size={26} color="orange" />
                <Text style={[styles.weatherText, { marginVertical: 0 }]}>
                  Task 012 expiring in 2 days
                </Text>
              </View>
            </View>
          </ImageBackground>
          {/* ButtonLayout */}
          <View style={[styles.container]}>
            <View style={styles.buttonLayout}>
              <View style={styles.button}>
                <View style={styles.buttonIcon}>
                  <Octicons name="checklist" size={24} color="#5A5A5A" />
                </View>
                <Text style={styles.buttonTitle}>Task</Text>
                <MaterialIcons name="arrow-right" size={32} color="black" style={{marginLeft: "auto"}}/>

                <Badge size={8} style={{position: "absolute", right: 0, top: -3}}/>

              </View>
              <View style={styles.separator} />
              <View style={styles.button}>
                <View style={styles.buttonIcon}>
                  <FontAwesome name="pencil-square-o" size={28} color="#5A5A5A" />
                </View>
                <Text style={styles.buttonTitle}>Practice</Text>
                <MaterialIcons name="arrow-right" size={32} color="black" style={{marginLeft: "auto"}}/>
              </View>
              
              
            </View>
          </View>
          <View style={[styles.container]}>
            <View style={styles.buttonLayout}>
              <View style={styles.button}>
                <View style={styles.buttonIcon}>
                  <Octicons name="book" size={24} color="#5A5A5A"  />
                </View>
                <Text style={styles.buttonTitle}>Material</Text>
                <MaterialIcons name="arrow-right" size={32} color="black" style={{marginLeft: "auto"}}/>

              </View>
              <View style={styles.separator} />
              <View style={styles.button}>
                <View style={styles.buttonIcon}>
                  <MaterialCommunityIcons name="chart-box-outline" size={28} color="#5a5a5a" />
                </View>
                <Text style={styles.buttonTitle}>Grade</Text>
                <MaterialIcons name="arrow-right" size={32} color="black" style={{marginLeft: "auto"}}/>
              </View>
              <View style={styles.separator} />
              <View style={styles.button}>
                <View style={styles.buttonIcon}>
                  <MaterialCommunityIcons name="message-text-outline" size={28} color="#5A5A5A" />
                </View>
                <Text style={styles.buttonTitle}>Feedback</Text>
                <MaterialIcons name="arrow-right" size={32} color="black" style={{marginLeft: "auto"}}/>
              </View>

            </View>
          </View>
        </ScrollView>
        <ImageBackground
          style={styles.background}
          source={require("../../../assets/wallpaper2.jpg")}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  separator: {
    borderBottomWidth: 0.3,
    borderColor: "#5A5A5A",
    marginHorizontal: 20
    
  },
  buttonIcon:{
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  
  },
  buttonTitle: {
    fontWeight: "400",
    fontSize: 17,
    paddingLeft: 30,
  },
  buttonLayout: {
    flex: 1,  
  },
  button: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 24,
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    paddingVertical: 4
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
  weatherText: {
    fontFamily: "brandon-med",
    color: "#5A5A5A",
    fontSize: 16,
    marginTop: 4,
    marginBottom: 6,
    marginHorizontal: 12,
  },
  weatherContent: {
    marginTop: 4,
    marginBottom: 6,
    flexDirection: "row",

    marginHorizontal: 12,
  },
  weatherContainer: {
    flex: 1,
  },
  weatherTitle: {
    fontFamily: "brandon-bold",
    color: "#5A5A5A",
    fontSize: 24,
    marginHorizontal: 12,
  },
  container: {
    marginVertical: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { width: -2, height: 1 },
    backgroundColor: "white",
  },
  
  classBarItem: {
    
  },
  classBarText: {
    fontWeight: '400',
    fontSize: 17,
  },
  classBarContainer: {
    justifyContent: "space-between",
    paddingHorizontal: 35,
  },
  topRightContainer:{
    flexDirection: "row",
    alignItems: "center",
  },
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 6,
    marginBottom: 80,
  },
  mainContainer: {
    paddingHorizontal: 18,
    paddingTop: 8,
    flex: 1,
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "brandon-light",
    fontSize: 26,
  },
});
