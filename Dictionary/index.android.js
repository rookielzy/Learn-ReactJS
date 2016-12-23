/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
var english_german = require('./english_german.json');

export default class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    }
    this.showMeaning = this.showMeaning.bind(this);
  }
  showMeaning() {
      // Use the ternary operator to check if the word
      // exists n the dictionary
      var meaning = this.state.input in english_german ? english_german[this.state.input]: "Not Found";

      // Update the state
      this.setState({
        output: meaning
      })
  }
  render() {
    return (
      <View style={styles.parent}>
        <Text>Type something in English: </Text>
        <TextInput
          onChangeText={(e) => this.setState({input: e})}
          text = { this.state.input}
          onSubmitEditing = { this.showMeaning }
        >
            {this.state.input}
        </TextInput>
        <Text style={styles.germanLabel}>Its German equivalent is:</Text>
        <Text style={styles.germanWord}>{this.state.output}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // For the container View
  parent: {
    padding: 16
  },

  // For the Text label
  germanLabel: {
    marginTop: 20,
    fontWeight: 'bold'
  },

  // For the Text meaning
  germanWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  }
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
