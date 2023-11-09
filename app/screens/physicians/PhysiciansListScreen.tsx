import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// components
import {UIContainer, UITextView} from '../../components';

const PhysiciansListScreen = () => {
  return (
    <UIContainer>
      <UITextView text="Physicians List" />
    </UIContainer>
  );
};

const styles = StyleSheet.create({});

export default PhysiciansListScreen;
