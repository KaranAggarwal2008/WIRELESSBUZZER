import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import SoundButton from '../components/SoundButton';
import { NativeModules } from 'react-native';
const { Yodo1MASAds } = NativeModules;

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
        Yodo1MASAds.initMasSdk()
        Yodo1MASAds.showBannerAds();
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
      </View>
    )
  }
}
