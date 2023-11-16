import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
  TextStyle,
} from 'react-native';

// components
import {UITextView} from './index';

// constants
import {COLORS, DIMENSION} from '../constants';

interface propTypes {
  label: string;
  icon?: any;
  showLoading?: boolean;
  buttonContainerStyle?: ViewStyle | ViewStyle[];
  buttonTextStyle?: TextStyle | TextStyle[];
  onClick: () => void;
}

const UIButton = (props: propTypes) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...props.buttonContainerStyle}}
      onPress={() => props.onClick()}
      {...props}>
      <UITextView
        text={props.label}
        textStyle={{...styles.buttonTextStyle, ...props.buttonTextStyle}}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor,
    paddingVertical: 18 * DIMENSION.FONT_SCALE,
  },
  buttonTextStyle: {
    fontSize: 17,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default UIButton;
