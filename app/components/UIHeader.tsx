import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

// components
import {UITextView} from '.';

// constants
import {COLORS} from '../constants';

interface propTypes {
  title: String;
}

const UIHeader = (props: propTypes) => {
  return (
    <View style={[styles.container]}>
      <UITextView
        text={props.title.toUpperCase()}
        textStyle={styles.titleStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleStyle: {
    color: COLORS.white,
  },
});

export default UIHeader;
