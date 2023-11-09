import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ViewStyle,
  StatusBar,
} from 'react-native';

// constants
import {COLORS, DIMENSION} from '../constants';

interface propTypes {
  children: JSX.Element | JSX.Element[];
  containerStyle?: ViewStyle | ViewStyle[];
  innerContainerStyle?: ViewStyle | ViewStyle[];
  statusBarStyle?: string;
}

const UIContainer = (props: propTypes) => {
  return (
    <SafeAreaView style={[styles.container, props.containerStyle]}>
      <StatusBar
        backgroundColor={COLORS.backgroundColor}
        barStyle="light-content"
      />

      <View style={{...styles.innerContainer, ...props.innerContainerStyle}}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: DIMENSION.PADDING,
    paddingVertical: DIMENSION.MARGIN * 2,
  },
});

export default UIContainer;
