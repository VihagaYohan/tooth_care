import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';

const AppointmnetsScreen = () => {
  return (
    <SafeAreaView>
      <Text>Appointments</Text>
      <FontawesomeIcon name="rocket" size={30} color="red" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AppointmnetsScreen;
