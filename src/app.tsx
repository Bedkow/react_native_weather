import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen.tsx'
import Places from './components/Places.tsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator screenOptions={{headerShown: false}}>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Places" component={Places} />

</Stack.Navigator>
</NavigationContainer>
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
