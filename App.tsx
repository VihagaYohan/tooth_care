/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

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
