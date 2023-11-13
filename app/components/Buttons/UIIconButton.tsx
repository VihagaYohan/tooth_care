import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

// constants
import {DIMENSION, COLORS} from '../../constants';

interface propTypes {
  children: JSX.Element | JSX.Element[];
  onClick: () => void;
}

const UIIconButton = (props: propTypes) => {
  return (
    <TouchableOpacity onPress={() => props.onClick()}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default UIIconButton;
