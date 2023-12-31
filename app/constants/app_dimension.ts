import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import {normalizeSize} from '../utils/helpers';

const {width, height, fontScale} = Dimensions.get('screen');

export default {
  PADDING: normalizeSize(20),
  PADDING_LEFT: normalizeSize(20),
  PADDING_RIGHT: normalizeSize(20),
  PADDING_BOTTON: normalizeSize(20),
  PADDING_TOP: normalizeSize(20),
  MARGIN: normalizeSize(20),
  MARGIN_LEFT: normalizeSize(20),
  MARGIN_RIGHT: normalizeSize(20),
  MARGIN_BOTTON: normalizeSize(20),
  MARGIN_TOP: normalizeSize(20),
  CARD_BORDER_RADIUS: normalizeSize(10),
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  FONT_SCALE: fontScale,
};
