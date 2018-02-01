import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text,
  Image
} from 'react-native';

export default class MovieDetails extends Component<{}> {

  state = {
    movie: {}
  }

  componentDidMount(){
    const id = this.props.navigation.state.params.id
    fetch(`http://188.166.60.39:8000/film/${id}`)
          .then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson)
              this.setState({movie: responseJson})
          }).catch((error) => {
            console.error(error);
          });
  }

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <Image source={{uri: this.state.movie.imgUrl}} style={styles.imageWrap}/>
            <Text style={styles.title}>{this.state.movie.title}</Text>
            <Text style={styles.description}>{this.state.movie.description}</Text>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex:1,
    margin: 4,
    backgroundColor: 'white',
  },
  imageWrap: {
    flex: 1,
    height: (Dimensions.get('window').height * 2 / 3) - 10, 
    resizeMode: 'contain',
  },
  title:{
     fontSize: 35,
     textAlign: 'center',
     color: '#000',
  },
  description: {
    fontSize: 22,
    padding: 10,
    color: '#000',
  }
});
/*
{
  "id": 0,
  "title": "Джуманджи: Зов джунглей",
  "imgUrl": "http://www.kino.kg/archive/Jumanji_Welcome_to_the_Jungle/MovieBigPoster.jpg",
  "genre": "фэнтези, боевик, комедия, приключения, семейный",
  "description": "Четверо подростков оказываются внутри игры «Джуманджи». Их ждет схватка с носорогами, черными мамбами, а на каждом шагу будет подстерегать бесконечная череда ловушек и головоломок. Чтобы пройти игру и остаться в живых, им придется перевоплотиться в персонажей игры: робкий и застенчивый Спенсер превращается в отважного и сильного исследователя, здоровяк Фридж — в коротышку, модница и красавица Беттани — в профессора, а неуклюжая и нескладная Марта становится бесстрашной и ловкой амазонкой. Друзьям придется привыкнуть к совершенно новым и таким непривычным для себя ролям и найти дорогу домой."
}
*/