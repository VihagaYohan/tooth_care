import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import {
  PhysiciansDetailsScreen,
  TreatmentTypesListScreen,
  NewTreatmentScreen,
  NewAppointmentScreen,
  AppointmentDetailsScreen,
  NewPatient,
} from '../screens';

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
      {/* patients */}
      <STACK.Screen
        name={Routes.patients.newPatient}
        component={NewPatient}
        options={{
          headerTitle: props => <UIHeader title="New Patient" {...props} />,
        }}
      />
      {/* physicians */}
      <STACK.Screen
        name={Routes.physicians.physicianProfile}
        component={PhysiciansDetailsScreen}
        options={{
          headerTitle: props => <UIHeader title="Physicians" {...props} />,
        }}
      />
      {/* treatment types */}
      <STACK.Screen
        name={Routes.treatments.treatmentList}
        component={TreatmentTypesListScreen}
        options={{
          headerTitle: props => <UIHeader title="Treatment Types" {...props} />,
        }}
      />
      <STACK.Screen
        name={Routes.treatments.newTreatment}
        component={NewTreatmentScreen}
        options={{
          headerTitle: props => (
            <UIHeader title="New Treatment Type" {...props} />
          ),
        }}
      />
      {/* appointments */}
      <STACK.Screen
        name={Routes.appointmnets.newAppointment}
        component={NewAppointmentScreen}
        options={{
          headerTitle: props => <UIHeader title="New Appointment" {...props} />,
        }}
      />
      <STACK.Screen
        name={Routes.appointmnets.appointmentDetails}
        component={AppointmentDetailsScreen}
        options={{
          headerTitle: props => (
            <UIHeader title="Update Appointment" {...props} />
          ),
        }}
      />
    </STACK.Navigator>
  );
};

export default AppNavigator;
