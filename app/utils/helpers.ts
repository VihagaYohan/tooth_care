import React, {Component} from 'react';
import {Dimensions, Platform, PixelRatio} from 'react-native';

// print console logs, only in dev envionrment
export const showConsole = (content: any) => {
  if (__DEV__) {
    console.log(JSON.stringify(content));
  }
};

// normalizing size based on screen size
export const normalizeSize = (fontSize: number) => {
  const scale = Dimensions.get('window').width / 320; // iphone 5 font size
  const newSize = fontSize * (scale / 2);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export default {
  showConsole,
  normalizeSize,
};
