import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ActivityIndicatorProps,
  Modal,
} from 'react-native';

// constants
import {COLORS} from '../constants';

interface propTypes extends ActivityIndicatorProps {
  isLoading?: boolean;
}

const UILoader = (props: propTypes) => {
  return (
    <Modal
      visible={props.isLoading}
      animationType="slide"
      presentationStyle="pageSheet">
      <View style={styles.modalContainer}>
        <ActivityIndicator size={'large'} color={COLORS.primaryColor} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UILoader;
