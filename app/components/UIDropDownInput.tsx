import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  ViewStyle,
  Modal,
  TextStyle,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

// components
import {UITextView} from '../components';

// constants
import {COLORS, STYLES, DIMENSION, ICONS} from '../constants';

interface propTypes<T> {
  data: T;
  onSelected: (item: T) => void;
  selectedItem?: T | any;
  placeholder?: string;
  textInputStyles?: ViewStyle | ViewStyle[];
  showTitle?: boolean;
  modalTitle?: string;
  modalTitleStyle?: TextStyle | TextStyle[];
}

const UIDropDownInput = () => {
  return null;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DIMENSION.PADDING / 2,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.grey.grey200,
    borderRadius: 5,
    marginBottom: DIMENSION.MARGIN_BOTTON,
    alignItems: 'center',
  },
  textStyles: {
    color: COLORS.grey.grey200,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    padding: DIMENSION.PADDING,
  },
  modalTitleStyle: {
    color: COLORS.grey.grey200,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: DIMENSION.MARGIN,
  },
  itemContainer: {
    padding: DIMENSION.PADDING / 2,
  },
  itemIndexStyle: {
    color: COLORS.grey.grey200,
    marginRight: 10,
  },
  item: {
    color: COLORS.grey.grey200,
    flex: 1,
  },
});

// setting default values
UIDropDownInput.defaultProps = {
  showTitle: true,
  modalTitle: 'Select an option',
};

export default UIDropDownInput;
