import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, Button } from "react-native";
export default class Btn extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.action} style={styles.btnContainer}>
                <Text style={styles.btnTxt}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    btnContainer: {
        borderColor: "#861386",
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 2,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    btnTxt: {
        color: "#861386",
        fontSize: 15,
        fontWeight: "600"
    }
});