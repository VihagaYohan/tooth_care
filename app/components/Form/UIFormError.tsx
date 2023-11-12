import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// components
import {UITextView} from '../';

// constants
import {COLORS, DIMENSION, STYLES} from '../../constants';

interface propTypes {
  errorMessage: string | any;
  visible: boolean | any;
}

const UIFormError = (props: propTypes) => {
  if (!props.visible || !props.errorMessage) return null;

  return (
    <View>
      <UITextView text={props.errorMessage} textStyle={styles.errorMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 14,
    color: COLORS.red.red600,
    marginBottom: DIMENSION.MARGIN_BOTTON,
  },
});

export default UIFormError;
