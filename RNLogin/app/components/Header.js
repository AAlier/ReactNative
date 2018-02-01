import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class Header extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1}}>
      <Image style={styles.headerBackground} 
        source={require('../img/headerbg.png')}/>
          <View style={styles.header}>
            <View style={styles.profilepicWrap}>
              <Image style={styles.profilepic}
                source={require('../img/asset.jpg')}/>
            </View>

            <Text style={styles.name}>Jack</Text>
            <Text style={styles.pos}>- APP DEVELOPER -</Text>
            
          </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  header: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  }, 
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 16
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  pos: {
    marginTop: 8,
    fontSize: 16,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  }
});
