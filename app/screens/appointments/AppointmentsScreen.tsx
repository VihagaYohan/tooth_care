import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome';

// global store
import Store from '../../globalStore/Store';
import TreatmentType from '../../domain/entities/Treatment';
import {Treatment} from '../../domain/enums/Enum';

const AppointmnetsScreen = () => {
  let store = new Store();
  store.addItemToCollection(new TreatmentType(Treatment.Cleaning, 2000));
  return (
    <SafeAreaView>
      <Text>Appointments</Text>
      <FontawesomeIcon name="rocket" size={30} color="red" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AppointmnetsScreen;
