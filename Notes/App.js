import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView, 
  TouchableOpacity,
} from 'react-native';

import Note from './app/components/Note';

export default class App extends Component<{}> {

  state = {
      noteArray: [{'date': 'testDate', 'note': 'testnote 1'},
                  {'date': 'testDate', 'note': 'testnote 1'},
                  {'date': 'testDate', 'note': 'testnote 1'},
                  {'date': 'testDate', 'note': 'testnote 1'},
                  {'date': 'testDate', 'note': 'testnote 1'},
                  {'date': 'testDate', 'note': 'testnote 1'},
                  {'date': 'testDate', 'note': 'testnote 1'},
                  {'date': 'testDate', 'note': 'testnote 1'}],
      noteText: '',
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)}/>
    });

    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>- NOTER -</Text>
          </View>

          <ScrollView style={styles.scrollContainer}>
            {notes}
          </ScrollView>

          <View style={styles.footer}>
              <TouchableOpacity onPress={this.addNote.bind(this)} 
              style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
 
              <TextInput style={styles.textInput}
                    multiline={true}
                    maxLength={200}
                    onChangeText={(noteText) => this.setState({noteText})} 
                    value={this.state.noteText}
                    placeholder='> note'
                    placeholderTextColor='white'
                    underlineColorAndroid='transparent'></TextInput>
          </View>
      </View>
    );
  }
 
  addNote() {
      if(this.state.noteText){
          var d = new Date();
          this.state.noteArray.push({'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.noteText});
          this.setState({noteArray: this.state.noteArray});
          this.setState({ noteText: ''});
      }
  }

  deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({noteArray: this.state.noteArray});

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#ddd'
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 60
  },
  footer: {
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  addButton: {
    backgroundColor: '#E91E63',
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginRight: 20,
    marginBottom: -30,
    zIndex: 10
  },
  addButtonText: {
    color: '#fff',
    fontSize: 40
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 12,
    fontSize: 16,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }
});


AppRegistry.registerComponent('todoapp', () => todoapp)