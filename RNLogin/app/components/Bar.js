import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Bar extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          <View style={[styles.barItem, styles.barseparator]}>
            <Text style={styles.barTop}>12K</Text>
            <Text style={styles.barBottom}>Followers</Text>
          </View>

          <View style={styles.barItem}>
            <Text style={styles.barTop}>322</Text>
            <Text style={styles.barBottom}>Following</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#FFF',
    borderTopWidth: 4,
    backgroundColor: '#ec2e4a',
    flexDirection: 'row'
  },
  barseparator: {
    borderRightWidth: 4
  },
  barItem: {
    flex: 1,
    padding: 18, 
    alignItems: 'center'
  },
  barTop: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  barBottom: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold'
  },
});
