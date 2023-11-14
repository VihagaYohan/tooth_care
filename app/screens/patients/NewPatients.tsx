import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

// components
import {UIContainer, UITextInput, UITextView, UIButton} from '../../components';

// constants
import {COLORS, STYLES} from '../../constants';

// pre-defined data
import Genders from '../../data/gender';

// save
import {addNewPatient, getAllPatients} from '../../services/PatientService';
import {Patient} from '../../domain/entities';
import {showAlert} from '../../utils/helpers';

const NewPatient = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [telephone, setTelephone] = useState<string>();
  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState();

  let list = getAllPatients();

  // handle add new patient
  const handleSave = () => {
    let validate = handleValidation();
    if (!validate) {
      let result = addNewPatient(
        new Patient(
          list.length + 1,
          'Mr',
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
    }
  };

  // handle validation
  const handleValidation = (): boolean => {
    if (
      firstName === undefined ||
      lastName ||
      address ||
      telephone ||
      age ||
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
        <View style={[styles.row, STYLES.flexRow]}>
          <UITextInput
            placeholder="First name"
            placeholderTextColor={COLORS.white}
            onChangeText={value => setFirstName(value)}
          />
          <UITextInput
            placeholder="Last name"
            placeholderTextColor={COLORS.white}
            onChangeText={value => setLastName(value)}
          />
        </View>

        <UITextInput
          placeholder="Address"
          placeholderTextColor={COLORS.white}
          onChangeText={value => setAddress(value)}
        />
        <UITextInput
          placeholder="Telephone"
          placeholderTextColor={COLORS.white}
          onChangeText={value => setTelephone(value)}
        />
        <UITextInput
          placeholder="Age"
          placeholderTextColor={COLORS.white}
          onChangeText={value => setAge(value)}
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
