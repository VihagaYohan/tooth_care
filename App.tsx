/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// navigation
import {NavigationContainer} from '@react-navigation/native';

// screens
import {AppointmnetsScreen} from './app/screens';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppointmnetsScreen />
    </NavigationContainer>
  );
}

export default App;
