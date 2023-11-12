import React, {Component} from 'react';
import {StyleSheet, TextInput, View, TextStyle} from 'react-native';

// constants
import {COLORS, DIMENSION} from '../constants';

interface propTypes {
  placeholder?: string;
  textInputStyles?: TextStyle | TextStyle[];
}

const UITextInput = ({placeholder, textInputStyles, ...props}: propTypes) => {
  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder={
          placeholder != undefined && placeholder.length > 0
            ? placeholder
            : 'Type something here'
        }
        style={[styles.textInput, textInputStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    paddingHorizontal: DIMENSION.PADDING / 2,
    backgroundColor: COLORS.backgroundColor,
    color: COLORS.grey.grey200,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.grey.grey200,
    borderRadius: 5,
    marginBottom: DIMENSION.MARGIN_BOTTON,
  },
});

export default UITextInput;
