import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UITextInput, UITextView, UIButton} from '../../components';

// constants
import {COLORS, STYLES} from '../../constants';

// pre-defined data
import Genders from '../../data/gender';

// services
import {addNewPatient, getAllPatients} from '../../services/PatientService';

// models
import {Patient} from '../../domain/entities';

// utils
import {showAlert} from '../../utils/helpers';

// navigation
import {Routes} from '../../navigation';

const titles = [
  {label: 'Mr', value: 'Mr'},
  {
    label: 'Mrs',
    value: 'Mrs',
  },
  {label: 'Miss', value: 'Miss'},
];

const NewPatient = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [telephone, setTelephone] = useState<string>();
  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState();
  const [title, setTitle] = useState<String>();

  let list = getAllPatients();

  // handle add new patient
  const handleSave = () => {
    let validate = handleValidation();
    if (validate === true) {
      addNewPatient(
        new Patient(
          list.length + 1,
          title,
          firstName,
          lastName,
          age,
          gender,
          address,
          telephone,
          null,
          null,
          undefined,
        ),
      );
      showAlert('New patient has been added');
      navigation.navigate(Routes.appointmnets.newAppointment);
    }
  };

  // handle validation
  const handleValidation = (): boolean => {
    console.log(firstName, lastName, address, telephone, age, gender);
    if (
      firstName === undefined ||
      lastName === undefined ||
      address === undefined ||
      telephone === undefined ||
      age === undefined ||
      gender === undefined
    ) {
      showAlert('Please check fields');
      return false;
    } else {
      return true;
    }
  };

  return (
    <UIContainer>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Dropdown
          style={[
            styles.dropdown,
            isFocus && {borderColor: COLORS.blue.blue800},
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={titles}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select title' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            delete item._index;
            setTitle(item.value);
            setIsFocus(false);
          }}
        />
        <View style={[styles.row, STYLES.flexRow]}>
          <UITextInput
            placeholder="First name"
            placeholderTextColor={COLORS.grey.grey500}
            onChangeText={value => setFirstName(value)}
          />
          <UITextInput
            placeholder="Last name"
            placeholderTextColor={COLORS.grey.grey500}
            onChangeText={value => setLastName(value)}
          />
        </View>

        <UITextInput
          placeholder="Address"
          placeholderTextColor={COLORS.grey.grey500}
          onChangeText={value => setAddress(value)}
        />
        <UITextInput
          placeholder="Telephone"
          placeholderTextColor={COLORS.grey.grey500}
          onChangeText={value => setTelephone(value)}
          keyboardType="number-pad"
        />
        <UITextInput
          placeholder="Age"
          placeholderTextColor={COLORS.grey.grey500}
          onChangeText={value => setAge(value)}
          keyboardType="number-pad"
        />

        <Dropdown
          style={[
            styles.dropdown,
            isFocus && {borderColor: COLORS.blue.blue800},
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Genders}
          search
          maxHeight={300}
          labelField="gender"
          valueField="id"
          placeholder={!isFocus ? 'Select gender' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            delete item._index;
            setGender(item);
            setIsFocus(false);
          }}
        />

        <UIButton label="Add Patient" onClick={() => handleSave()} />
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default NewPatient;
