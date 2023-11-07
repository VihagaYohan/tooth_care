import React, {Component} from 'react';
import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';

// constants
import {COLORS} from '../constants';

interface propTypes {
  text: String;
  textStyle?: TextStyle | TextStyle[];
  style?: ViewStyle;
}

const AppText = (props: propTypes) => {
  return (
    <Text
      {...props}
      style={{
        ...styles.textStyle,
        ...props.textStyle,
      }}
      {...props}>
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.black,
  },
});

export default AppText;
