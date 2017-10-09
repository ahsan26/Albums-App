import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./header";
import Content from "./content";
export default class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header />
        <Content />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 10
  }
});