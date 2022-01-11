/*

Class 58 React Native Databases

Goals:
● Connect the React Native Application to the Realtime
database.
● Create timestamp for the button presses

*/


import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import BuzzerScreen from './screens/BuzzerScreen';
import { NativeModules } from 'react-native';
const { Yodo1MASAds } = NativeModules;
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  BuzzerScreen: BuzzerScreen,
});

const AppContainer = createAppContainer(AppNavigator);
