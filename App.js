import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeView from "./App/Views/Welcome/";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WelcomeView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
