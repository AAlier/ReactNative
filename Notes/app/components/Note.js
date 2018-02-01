import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight 
} from 'react-native';

export default class Note extends Component<{}> {
  render() {
    return (
      <View key={this.props.keyval} style={styles.container}>
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>

          <TouchableHighlight onPress={this.props.deleteMethod} style={styles.noteDelete}>
              <Text style={styles.noteDeleteText}>D</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63'
  },
  noteDelete: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    padding: 20,
    top: 10,
    bottom: 10,
    right: 10
  },
  noteDeleteText: {
    color: 'white',
  }
});