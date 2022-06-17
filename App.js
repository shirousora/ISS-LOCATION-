import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from "./screens/HomeScreen";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors"
import UpdateScreen from "./screens/Updates";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
        headerShown: false}}>
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="UbicaciónEEI" component={IssLocationScreen} />
        <Stack.Screen name="Meteoros" component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
