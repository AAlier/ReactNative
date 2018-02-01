import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Cinemas from './app/pages/Cinemas';
import Movies from './app/pages/Movies';
import MovieDetails from './app/pages/MovieDetails';

export default Project = StackNavigator(
{
 First: { 
 		screen: Cinemas,
 		navigationOptions: {
   		title: 'Cinemas',
		},
},
 Second: { 
 		screen: Movies, 
		navigationOptions: ({navigation}) => ({
  		title: `${navigation.state.params.title}`,
      gesturesEnabled: true,
      gestureResponseDistance:{horizontal: Dimensions.get('window').width / 2},
  	}),
},
 Third: { 
 		screen: MovieDetails, 
		navigationOptions: ({navigation}) => ({
  		title: `${navigation.state.params.title}`,
      gesturesEnabled: true,
      gestureResponseDistance:{horizontal: Dimensions.get('window').width / 2},
  	})
},
});