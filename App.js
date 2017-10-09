import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./app/components/main";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Main />
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