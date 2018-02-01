/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView
} from 'react-native';
import ImageElement from './app/components/ImageElement';

export default class App extends Component<{}> {
  
  state = {
    images: [
      {title : 'Shutter Island', img: require('./app/img/img1.jpg')},
      {title : 'Hello Island', img: require('./app/img/img2.jpg')},
      {title : 'Bye Island', img: require('./app/img/img3.jpg')},
      {title : 'Doing Well Island', img: require('./app/img/img4.jpg')},
      {title : 'Jacky Chan', img: require('./app/img/img1.jpg')},
      {title : 'Jack Richard', img: require('./app/img/img2.jpg')},
      {title : 'Shutter Island', img: require('./app/img/img3.jpg')},
      {title : 'Thunder Island', img: require('./app/img/img4.jpg')},
      {title : 'Shutter Island', img: require('./app/img/img1.jpg')},
      {title : 'Shutter Island', img: require('./app/img/img2.jpg')},
      {title : 'Shutter Island', img: require('./app/img/img3.jpg')},
      {title : 'Shutter Island', img: require('./app/img/img4.jpg')}
    ],
    imageReference: [],
    text: '',
  }

  componentDidMount(){
    this.setState({imageReference: this.state.images});
  }

  search(text){
    this.setState({text: text});
    let imgArr = this.state.images;
    for(var i = 0; i < imgArr.length;++i){
      if(text === imgArr[i].title){
        this.setState({images: [imgArr[i]] })
      }
    }

    if(!text){
      // Reset search
      this.setState({images: this.state.imagesReference})
    }
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return <View key={key} style={styles.imagewrap}>
                <ImageElement imgsource={val.img} title={val.title}/>
             </View>
    })
    return (
        <View style={styles.container}>
            <TextInput style={styles.textinput} 
            placeholder='search movie' 
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.search(text)} value={this.state.text}/>
            <ScrollView>
              <View style={styles.photogrid}>
                {images}
              </View>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525'
  },
  textinput: {
    textAlign: 'center',
    margin: 2,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  photogrid: {
    flex: 1,
    padding: 2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imagewrap: {
    padding: 2,
    height: 150,
    width: (Dimensions.get('window').width / 2) - 2,
  }
});
