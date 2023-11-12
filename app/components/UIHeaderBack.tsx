import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// constants
import {COLORS, ICONS} from '../constants';

const {IoniconIcon} = ICONS;

interface propTypes {
  style?: ViewStyle;
  onClickBack?: () => void;
}

const UIHeaderBack = (props: propTypes) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{width: Platform.OS == 'ios' ? 100 : 50}}>
      <IoniconIcon
        name={Platform.OS == 'ios' ? 'arrow-back-ios' : 'arrow-back'}
        color={COLORS.white}
        size={24}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default UIHeaderBack;
