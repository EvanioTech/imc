import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Home } from './src/screens/Home';
import { Routes } from './src/Routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return(
    <NavigationContainer>
    
      <Routes/>
    
    </NavigationContainer>
  )
}
  

  


