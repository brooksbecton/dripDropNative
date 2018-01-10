import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import ZipInput from "./ZipInput";

export default class WelcomeView extends Component {
  render() {
    return (
      <View>
        <Text> Welcome </Text>
        <ZipInput/>
      </View>
    );
  }
}
