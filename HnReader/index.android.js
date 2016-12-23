/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';
import NewsItems from './components/news-items';
import WebPage from './components/webpage';
var ROUTES = {
  news_items: NewsItems,
  webpage: WebPage
}

export default class HnReader extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'news_items', url:''}}
        renderScene={(route, navigator) => {
          var Component = ROUTES[route.name];
          return (
            <Component route={route} navigator={navigator} url={route.url} />
          );
        }}
        configureScene={ () => {return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('HnReader', () => HnReader);
