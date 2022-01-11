import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import { NativeModules } from 'react-native';
const { Yodo1MASAds } = NativeModules;

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });

  };
  render() {
    return (
      <View>
        <AppHeader />
        Yodo1MASAds.initMasSdk()
        Yodo1MASAds.showBannerAds()
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.goToBuzzerScreen('red');
            Yodo1MASAds.showInterstitialAds();
          }}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            this.goToBuzzerScreen('green');
            Yodo1MASAds.showInterstitialAds();
          }}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.goToBuzzerScreen('blue');
            Yodo1MASAds.showInterstitialAds();
          }}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
            Yodo1MASAds.showInterstitialAds();
          }}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
