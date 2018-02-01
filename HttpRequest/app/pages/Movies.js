import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import MovieElement from '../components/MovieElement';

export default class Movies extends Component<{}> {
  state = {
    movies: []
  }

  openMovieDetails(key, title){
    this.props.navigation.navigate('Third', {id: key, title: title});
  }

  componentDidMount(){
    const id = this.props.navigation.state.params.id
    fetch(`http://188.166.60.39:8000/films/${id}`)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({movies: responseJson})
          }).catch((error) => {
            console.error(error);
          });
  }

  render() {
    let movies = this.state.movies.map((val, key) => {
        return <TouchableHighlight 
                underlayColor="rgba(253,138,94,0.2)"
                style={styles.touchHighlight}
                key={key}
                onPress={() => this.openMovieDetails(val.id, val.title)}>
            <MovieElement key={key} keyval={key} val={val}/>
        </TouchableHighlight>
    });
    return (
      <View style = { styles.MainContainer }>
          <ScrollView style={styles.container}>
            {movies}
          </ScrollView>
        </View>
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
  MainContainer:{
     justifyContent: 'center',
     flex:1,
     margin: 4,
  },
  TextStyle:{
     fontSize: 20,
     textAlign: 'center',
     color: '#000',
  },
});
/*
[
  {
    "id": 8,
    "title": "ZOR",
    "imgUrl": "http://www.kino.kg/archive/ZOR/MovieBigPoster.jpg"
  }
]
*/