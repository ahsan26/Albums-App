import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
export default class Header extends Component {
    render() {
        return (
            <View style={styles.headerStyle}>
                <Text style={styles.heading}>Albums</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    headerStyle: {
        padding: 5,
        marginTop: 20,
        alignItems: "center",
    },
    heading: {
        fontSize: 20,
    }
});