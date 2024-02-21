import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function HomeScreen({navigation}) {

return (
<View style={styles.container}>
      <StatusBar style="light" />
      <Image source={require('../assets/umbrella.png')} />
      <Text style={styles.mainTextContainer}>
       Breeze
      </Text>
      <Text style={styles.secondaryTextContainer}>
             Weather App
      </Text>
      <TouchableOpacity  style={styles.titleButton} onPress={()=>{navigation.navigate('Places')}} >
        <Image style={{width: 50, height: 50}} source={require('../assets/right-arrow.png')} />
      </TouchableOpacity>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b131e',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: { fontWeight: 'bold' },
  mainTextContainer: { textAlign: 'center', margin: 10, color: 'white', fontSize: 50},
  secondaryTextContainer: {color: '#68717a', fontSize: 30},
  titleButton: {width: 50, height: 50, borderRadius: 25, marginTop: 100}
})