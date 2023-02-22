import React, {useState} from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,                                             
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ListItem from "../../components/ListItem";
import MenuButton from "../../components/MenuButton";
import SearchBar from "../../components/SearchBar";

const HomeScreens = ({ navigation }: any) => {
  const [listClass,setListClass] = useState(
    [
      "AI 1705", "SE 1746", "IT 1650", "IA 1578", "AI 1746", "SE 1740", "IS 1500", "SE 1733","IA 1544", "SE 1333", 
    ]
  );
   const [listClassSearch, setListClassSearch] = useState(listClass);
   const handleSearch = (text : string) => {
        console.log(text);
        
        setListClassSearch(listClass.filter((e) => {return e.includes(text.toUpperCase())})) 
   }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TouchableWithoutFeedback> */}
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.ImageBackground}
        >
        <View style={styles.MenuTouchableContainer}>
          <MenuButton onPress={() => navigation.openDrawer()} />
          <SearchBar onTextChange= {handleSearch} />
        </View>
        <ScrollView >
           {
             listClassSearch.map((e,index) => {
                return <TouchableOpacity  key = {index} style={styles.Touchable}
                onPress={() => navigation.navigate("Tabs")}>
                   <ListItem key = {index} children = {e}/>
                </TouchableOpacity>
             })
           }
        </ScrollView>
      </ImageBackground>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};

export default HomeScreens;
const styles = StyleSheet.create({
  ListItemContainer: { alignItems: "center" },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
  MenuTouchableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImageBackground: { flex: 1 },
  Touchable: { width: "100%", alignItems: "center" },
});
