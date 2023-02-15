import React, { Component } from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

//status bar khi dien thoai o che do light mode (chu khong phai text tren status bar la` mau` trang)
class Statusbar extends Component {
    render() {
        return (
            <View style={styles.StatusBar}>
                <StatusBar translucent barStyle="light-content" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    StatusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: 'rgba(22,7,92,1)'
    }
});

export default Statusbar;