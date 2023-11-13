import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// components
import {UIContainer, UITextView} from '../../components';

const NewPatient = () => {
  return (
    <UIContainer>
      <UITextView text="New patient screen" />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default NewPatient;
