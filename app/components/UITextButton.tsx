import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

// components
import {UITextView} from './';

// constants
import {COLORS, DIMENSION} from '../constants';
import {normalizeSize} from '../utils/helpers';

interface propTypes {
  label: string;
  onClick: () => void;
}

const UITextButton = (props: propTypes) => {
  return (
    <TouchableOpacity
      onPress={() => props.onClick()}
      style={styles.buttonContainer}>
      <UITextView text={props.label} textStyle={styles.labelStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: normalizeSize(10),
    paddingHorizontal: normalizeSize(20),
  },
  labelStyle: {
    color: COLORS.primaryColor,
  },
});

export default UITextButton;
