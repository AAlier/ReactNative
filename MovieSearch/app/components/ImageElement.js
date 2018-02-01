/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default class ImageElement extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.imgsource} style={styles.image}/>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignSelf: 'stretch'
  },
  text: {
    alignItems: 'center',
    fontSize: 16,
    color: '#fff',
    paddingLeft: 5
  }
});
