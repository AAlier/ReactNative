import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class CinemaElement extends Component<{}> {
  render() {
    return (
      <View key={this.props.keyval} style={styles.container}>
          <Text style={styles.noteText}>{this.props.val.name}</Text>
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
    flexDirection: 'row'
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
    fontSize: 25
  }
});