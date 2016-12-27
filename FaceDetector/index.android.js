
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Detector from './components/Detector';

const image_picker_options = {
  title: 'Select Photo',
  takePhotoButtonTitle: 'Take Photo',
  chooseFromLibraryButtonTitle: 'Choose from Library',
  cameraType: 'back',
  mediaType: 'photo',
  maxWidth: 480,
  quality: 1,
  noData: false,
  path: 'images'
};

const api_key = 'b182cd0327ae4af19d9f782b3e501dfd';

export default class FaceDetector extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Detector imagePickerOptions={image_picker_options} apiKey={api_key} />
        <Text>What the fuck?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('FaceDetector', () => FaceDetector);
