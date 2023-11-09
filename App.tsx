/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {BottomNavigator} from './app/navigation';

// screens
import {AppointmnetsScreen} from './app/screens';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
}

export default App;
