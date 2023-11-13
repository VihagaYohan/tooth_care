import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

// components
import {UITextView} from '../';

// constants
import {COLORS, ICONS} from '../../constants';

const {AntDesignIcon} = ICONS;

interface propTypes {
  icon: JSX.Element | JSX.Element[];
  onClick: () => void;
}

const UIFloatingActionButton = (props: propTypes) => {
  return (
    <TouchableOpacity
      onPress={() => props.onClick()}
      style={styles.buttonConainer}>
      {props.icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonConainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primaryColor,
    elevation: 4,
    position: 'absolute',
    bottom: 60,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UIFloatingActionButton;
