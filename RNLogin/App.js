import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import Header from './app/components/Header';
import Bar from './app/components/Bar';
import PhotoGrid from './app/components/PhotoGrid';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Bar/>
        <PhotoGrid/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
