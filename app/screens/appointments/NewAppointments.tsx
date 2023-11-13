import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UITextView, UITextButton} from '../../components';

// constants
import {STYLES} from '../../constants';

// pre-defined data
import {Physicians} from '../../data/physicians';

// navigation
import {Routes} from '../../navigation';

const NewAppointmentScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = Physicians;

  return (
    <UIContainer>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="fullName"
        valueField="id"
        placeholder={!isFocus ? 'Select a doctor' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          console.log(item);
          setValue(item.value);
          setIsFocus(false);
        }}
      />

      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="fullName"
        valueField="id"
        placeholder={!isFocus ? 'Select a patient' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          console.log(item);
          setValue(item.value);
          setIsFocus(false);
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <UITextView text="or" textStyle={{fontSize: 16}} />
        <UITextButton
          label="Create a new patient"
          onClick={() => navigation.navigate(Routes.patients.newPatient)}
          textStyle={{
            color: 'red',
            fontSize: 16,
          }}
        />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default NewAppointmentScreen;
