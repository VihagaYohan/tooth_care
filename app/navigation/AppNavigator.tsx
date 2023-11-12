import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {PhysiciansDetailsScreen} from '../screens';

// components
import {UIHeader, UIHeaderBack} from '../components';

// navigators
import {BottomNavigator, Routes} from './index';

// constants
import {COLORS} from '../constants';

const STACK = createStackNavigator();

const AppNavigator = () => {
  return (
    <STACK.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.backgroundColor,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'normal',
        },
        headerTitleAlign: 'center',
        headerShown: true,
        headerBackTitleVisible: false,
        headerLeft: props => <UIHeaderBack />,
      }}>
      <STACK.Screen
        name={Routes.home}
        component={BottomNavigator}
        options={{
          headerShown: false,
        }}
      />

      <STACK.Screen
        name={Routes.physicians.physicianProfile}
        component={PhysiciansDetailsScreen}
        options={{
          headerTitle: props => <UIHeader title="Physicians" {...props} />,
        }}
      />
    </STACK.Navigator>
  );
};

export default AppNavigator;
