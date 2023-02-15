import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, Dimensions } from 'react-native';
import StatusBarLight from '../../components/StatusBarLight';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Task = () => {
    return (
        <View style={{ backgroundColor: "lightgray" }}>
            <StatusBarLight />

            <View style={styles.header}> //Header hien thi info lop hoc va course, co the lam thanh component
                <Text style={styles.headerText}>Class 1 \n Course: MAS </Text>
            </View>



        </View>
    )
}

export default Task;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        backgroundColor: "lightpink",
        height: 30,
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        paddingTop: 11,
        shadowColor: "#6B4B3E",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },

    },
    headerText: {
        fontFamily: Platform.OS === 'ios' ? "HelveticaNeue" : "sans-serif-thin",

    }
})
