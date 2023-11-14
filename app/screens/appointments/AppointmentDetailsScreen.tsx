import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UIButton, UITextView} from '../../components';

// constants
import {STYLES, COLORS} from '../../constants';

// navigation
import {Routes} from '../../navigation';

const AppointmentDetails = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  return (
    <UIContainer>
      <UITextView text={'Update appointment'} />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default AppointmentDetails;
