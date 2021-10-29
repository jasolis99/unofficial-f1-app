import React from 'react'
import {StatusBar} from 'expo-status-bar'
import AppBar from './AppBar'
import IconsBar from './IconsBar'
import { NavigationContainer } from '@react-navigation/native'

export default function Main() {

  return (
      <NavigationContainer>
        <StatusBar style="light" />
        <AppBar />
        <IconsBar />
      </NavigationContainer>
  );

}
