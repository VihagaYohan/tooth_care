import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// navigation
import {Routes} from './index';

// constants
import {COLORS, ICONS} from '../constants';

// screens
import {
  AppointmnetsScreen,
  PhysiciansScreen,
  TreatmentTypesListScreen,
} from '../screens';

const {EntypoIcons, FontistoIcon, MaterialCommunityIcon} = ICONS;

const TAB = createBottomTabNavigator();

const Navigator = () => {
  return (
    <TAB.Navigator
      id="bottom_navigator"
      initialRouteName={Routes.appointmnets.appointmentsList}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primaryColor,
      }}>
      <TAB.Screen
        name={Routes.appointmnets.appointmentsList}
        component={AppointmnetsScreen}
        options={{
          title: 'Appointments',
          tabBarIcon: ({color, size}) => {
            return <EntypoIcons name="list" color={color} size={size} />;
          },
        }}
      />

      <TAB.Screen
        name="doctors"
        component={PhysiciansScreen}
        options={{
          title: 'Physicians',
          tabBarIcon: ({color, size}) => {
            return <FontistoIcon name="doctor" color={color} size={size} />;
          },
        }}
      />

      <TAB.Screen
        name="treatments"
        component={TreatmentTypesListScreen}
        options={{
          title: 'Treatments',
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcon
                name="clipboard-text"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </TAB.Navigator>
  );
};

export default Navigator;
