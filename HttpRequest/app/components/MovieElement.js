import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';

export default class MovieElement extends Component<{}> {
  render() {
    return (
      <View key={this.props.keyval} style={styles.container}>
          <Image style={styles.imagewrap} source={{uri: this.props.val.imgUrl}}/>
          <Text style={styles.noteText}>{this.props.val.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    borderBottomWidth: 2,
    height: (Dimensions.get('window').height / 4) - 20,
    borderBottomColor: '#ededed',
    flexDirection: 'row'
  },
  noteText: {
    flex: 1,
    padding: 6,
    fontSize: 22,
  },
  imagewrap: {
    flex: .4,
    height: null, 
    resizeMode: 'contain',
  }
});