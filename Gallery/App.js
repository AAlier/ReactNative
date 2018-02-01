import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  Modal,
  Image
} from 'react-native';
import ImageElement from './app/components/ImageElement';

export default class App extends Component<{}> {
  state = {
    modalVisible: false,
    modalImage: require('./app/img/img1.jpg'),
    images: [
      require('./app/img/img1.jpg'),
      require('./app/img/img2.jpg'),
      require('./app/img/img3.jpg'),
      require('./app/img/img4.jpg')
    ]
  }

  setModalVisible(visible, imageKey){
    this.setState({modalImage: this.state.images[imageKey]});
    this.setState({modalVisible: visible});
  }

  getImage(){
    return this.state.modalImage;
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return <TouchableWithoutFeedback 
      key={key}
      onPress={() => this.setModalVisible(true, key)}>
          <View style={styles.imagewrap}>
            <ImageElement imgsource={val}/>
          </View>
        </TouchableWithoutFeedback>
    })

    return (
      <View style={styles.container}>
        <Modal style={styles.modal} 
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}>

              <View style={styles.modal}>
                  <Text style={styles.text}
                  onPress={() => {this.setModalVisible(false)}}>X Close</Text>
                  <Image source={this.state.modalImage} style={styles.imageBig} />
              </View>
        </Modal>
        {images} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height / 3) - 12,
    width: (Dimensions.get('window').width / 2) - 4,
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .8)'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    left: 10,
    top: 10,
  },
  imageBig: {
    flex: 1, 
    width: null, 
    height: null, 
    resizeMode: 'contain'
  }
});
