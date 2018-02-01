
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import CinemaElement from '../components/CinemaElement';

export default class Cinemas extends Component<{}> {

  state = {
    cinemas: []
  }

  openCinemaMovies(key, title){
    this.props.navigation.navigate('Second', {id: key, title: title});
  }

  componentDidMount(){
    fetch("http://188.166.60.39:8000/cinemas")
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({cinemas: responseJson})
          }).catch((error) => {
            console.error(error);
          });
  }

  render() {
    let cinemas = this.state.cinemas.map((val, key) => {
        return <TouchableHighlight 
                underlayColor="rgba(253,138,94,0.2)"
                style={styles.touchHighlight}
                key={key}
                onPress={() => this.openCinemaMovies(val.id, val.name)}>
            <CinemaElement key={key} keyval={key} val={val}/>
        </TouchableHighlight>
    });
    return (
        <ScrollView style={styles.container}>
          {cinemas}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  touchHighlight: {
    zIndex: 8,
  },
});
/*
[
  {
    "id": 0,
    "name": "Ала-Тоо"
  }
]
*/