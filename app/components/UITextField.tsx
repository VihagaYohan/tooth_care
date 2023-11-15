import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// components
import {UITextView} from '../components';

// constants
import {COLORS, STYLES} from '../constants';
import {ScrollView} from 'react-native-gesture-handler';

interface propTypes {
  label: string;
  value: string | any;
  type: 'field' | 'tag';
}

const UITextField = (props: propTypes) => {
  return (
    <View style={{marginBottom: 10}}>
      <UITextView text={props.label} textStyle={styles.textStyle} />
      {props.type === 'field' ? (
        <View style={styles.fieldStyle}>
          <UITextView text={props.value} />
        </View>
      ) : (
        <ScrollView horizontal>
          {props.value.map((item: any) => {
            return (
              <View style={styles.tagContainer}>
                <UITextView text={item.type} textStyle={{color: 'black'}} />
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.grey,
    fontSize: 13,
    marginBottom: 10,
  },
  fieldStyle: {
    fontSize: 16,
  },
  tagContainer: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: COLORS.grey.grey400,
    borderRadius: 100,
    marginRight: 10,
  },
});

export default UITextField;
