import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Carousel from './components/carousel/Carousel';
import {HOST} from './configs';
import Navigator from './components/navigations/navigations/signupNavs'

export default function App() {
  return (    
     <Navigator/>
  );
}
const styles = StyleSheet.create({
  container:{
    
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
