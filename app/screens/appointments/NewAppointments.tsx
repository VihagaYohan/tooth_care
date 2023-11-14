import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

// components
import {
  UIContainer,
  UITextView,
  UITextButton,
  UIButton,
} from '../../components';

// constants
import {COLORS, STYLES} from '../../constants';

// pre-defined data
import {Physicians} from '../../data/physicians';
import {Patients} from '../../data/patients';
import {AppointmentSlots} from '../../data/appointment_dates';
import AppointmentStatusList from '../../data/appointment_status';

// navigation
import {Routes} from '../../navigation';

// utils
import {normalizeSize, showAlert} from '../../utils/helpers';

// models
import Appointment from '../../domain/entities/Appointments';

const NewAppointmentScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  // states
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [pay, isPay] = useState<boolean>(true); // appointment fee

  let appointmentData: Appointment;

  // data source
  const physicians = Physicians;
  const patients = Patients;
  const slots = AppointmentSlots;
  const statusList = AppointmentStatusList;

  // handle save appointment
  const handleSaveAppointment = () => {
    let validation = handleValidation();
  };

  // handle validation
  const handleValidation = (): boolean => {
    if (
      appointmentData === undefined ||
      appointmentData.doctor === undefined ||
      appointmentData.patient === undefined ||
      appointmentData.appointmentDate === undefined ||
      appointmentData.status === undefined
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
          data={physicians}
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
          style={[
            styles.dropdown,
            isFocus && {borderColor: COLORS.blue.blue800},
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={patients}
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

        <View style={styles.textButtonContainer}>
          <UITextView text="or" textStyle={{fontSize: 16}} />
          <UITextButton
            label="Create a new patient"
            onClick={() => navigation.navigate(Routes.patients.newPatient)}
            textStyle={{
              color: COLORS.blue.blue800,
              fontSize: 16,
            }}
          />
        </View>

        <Dropdown
          style={[
            styles.dropdown,
            isFocus && {borderColor: COLORS.blue.blue100},
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={slots}
          search
          maxHeight={300}
          labelField="startTime"
          valueField="id"
          placeholder={!isFocus ? 'Select a appointment time slot' : '...'}
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
          style={[
            styles.dropdown,
            isFocus && {borderColor: COLORS.blue.blue800},
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={statusList}
          search
          maxHeight={300}
          labelField="status"
          valueField="id"
          placeholder={!isFocus ? 'Select a appointment status' : '...'}
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

        <View style={styles.rowStyle}>
          <CheckBox
            disabled={false}
            value={pay}
            onValueChange={newValue => isPay(newValue)}
          />
          <UITextView
            text={'Paid appointment fee Rs. 1000.00'}
            textStyle={styles.appointmentFeeText}
          />
        </View>

        <UIButton
          label="Save Appointment"
          onClick={() => handleSaveAppointment()}
          buttonContainerStyle={styles.buttonContainer}
        />
      </ScrollView>
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
  textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalizeSize(10),
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalizeSize(10),
  },
  appointmentFeeText: {
    fontSize: normalizeSize(28),
    marginLeft: normalizeSize(10),
  },
  buttonContainer: {
    marginTop: normalizeSize(30),
  },
});

export default NewAppointmentScreen;
