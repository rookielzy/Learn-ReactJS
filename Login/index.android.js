/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import LoginPage from './login';

export default class Login extends Component {
  render() {
    return (
      <LoginPage />
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
