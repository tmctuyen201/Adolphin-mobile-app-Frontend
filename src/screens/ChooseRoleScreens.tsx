import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  Animated,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

var width = Dimensions.get("window").width; //full window width

const ChooseRoleScreensOLD = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 0, backgroundColor: "#343a40" }} />
      <View style={styles1.scrollContainer}>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width}
          snapToAlignment={"center"}
        >
          <View style={styles1.itemContainer}>
            <TouchableOpacity
              style={styles1.Touchable}
              onPress={() => navigation.navigate("Drawer")}
            >
              <Image
                source={require("../../assets/rolesIcon/student.png")}
                style={{ width: 200, height: 200 }}
              />
              <Text style={styles1.itemTitle}>Student</Text>
            </TouchableOpacity>
          </View>

          <View style={styles1.itemContainer}>
            <Image
              source={require("../../assets/rolesIcon/teacher.png")}
              style={styles1.Image}
            />
            <Text style={styles1.itemTitle}>Teacher</Text>
          </View>

          <View style={styles1.itemContainer}>
            <Image
              source={require("../../assets/rolesIcon/parent.png")}
              style={styles1.Image}
            />
            <Text style={styles1.itemTitle}>Parents</Text>
          </View>

          <View style={styles1.itemContainer}>
            <Image
              source={require("../../assets/rolesIcon/admin.png")}
              style={styles1.Image}
            />
            <Text style={styles1.itemTitle}>Admin</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles1 = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 800,
  },
  ImageBackground: {},
  itemTitle: {
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue" : "sans-serif-thin",
    fontWeight: "bold",
    color: "#341c26",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 20,
  },
  Image: {
    width: 200,
    height: 200,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  Touchable: {
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    width: width,
    padding: 20,
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
});

const images = [
  {
    id: 1,
    img: require("../../assets/rolesIcon/student.png"),
    title: "Student",
    color: "#ffafcc",
  },
  {
    id: 2,
    img: require("../../assets/rolesIcon/teacher.png"),
    title: "Teacher",
    color: "#a2d2ff",
  },

  {
    id: 3,
    img: require("../../assets/rolesIcon/parent.png"),
    title: "Parent",
    color: "#bde0fe",
  },
  {
    id: 4,
    img: require("../../assets/rolesIcon/admin.png"),
    title: "Admin",
    color: "#cdb4db",
  },
];

const ChooseRoleScreens = ({navigation}: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowHeight - 400;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#343a40" }}>
      <View style={styles.container}>
        <View style={styles.textAreaContainer}>
          {images.map((image, imageIndex) => {
            const inputRange = [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ];
            return (
              <Animated.Text
                style={[
                  styles.textView,
                  {
                    transform: [
                      {
                        translateY: scrollX.interpolate({
                          inputRange,
                          outputRange: [-500, -50, 0],
                        }),
                      },
                    ],
                  },
                  {
                    opacity: scrollX.interpolate({
                      inputRange,
                      outputRange: [0, 1, 0],
                    }),
                  },
                  {
                    color: image.color,
                  },
                ]}
              >
                {image.title}
              </Animated.Text>
            );
          })}
        </View>
        <View style={[styles.scrollContainer, { height: windowHeight }]}>
          <ScrollView
            horizontal={true}
            style={styles.scrollContainer}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          >
            {images.map((image) => {
              return (
                  <TouchableOpacity 
                  onPress={() => navigation.navigate("Drawer")} 
                  style = {{width: windowWidth}}
                  activeOpacity = {0.8}>
                    <Image source={image.img} style={styles.card} />
                  </TouchableOpacity> 
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                style={[
                  styles.normalDots,
                  { width },
                  { backgroundColor: image.color },
                ]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseRoleScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    shadowColor: "#241c26",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 0.8,
  },
  card: {
    flex: 1,
    marginVertical: 60,
    width: 200,
    height: 200,
    overflow: "hidden",
    alignSelf: "center",
    resizeMode: "cover",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  textAreaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    fontSize: 22,
    fontFamily: "Avenir",
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },
});
