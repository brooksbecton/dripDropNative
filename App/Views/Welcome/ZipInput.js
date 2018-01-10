import React, { Component } from "react";
import { Button, View, TextInput } from "react-native";

export default class ZipInput extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      newZip: "",
      submittingNewZip: false
    };
  }

  handleChange = newText => {
    this.setState({ newZip: newText });
  };

  submitZip = () => {
    this.setState({ submittingNewZip: true });
    fetch("https://protected-badlands-58660.herokuapp.com/save", {
      method: "post",
      headers: {
        Authorization: "Bearer " + "idToken",
        "Content-Type": "application/json"
      },
      body: {
        zip: this.state.newZip
      }
    })
      .then(() => this.setState({ submittingNewZip: true }))
      .catch(error => this.setState({ errors: [this.state.errors, ...error] }));
  };

  render() {
    return (
      <View>
        <TextInput
          keyboardType="numeric"
          onChangeText={newText => this.handleChange(newText)}
          placeholder="New Zip"
        />
        <Button onPress={() => this.submitZip()} title="Submit" />
      </View>
    );
  }
}
