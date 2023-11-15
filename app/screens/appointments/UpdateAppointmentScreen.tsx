import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UIButton, UITextView} from '../../components';

// constants
import {STYLES, COLORS} from '../../constants';

// navigation
import {Routes} from '../../navigation';

// pre-defined data
import {Physicians} from '../../data/physicians';
import {Patients} from '../../data/patients';
import {AppointmentSlots} from '../../data/appointment_dates';
import AppointmentStatusList from '../../data/appointment_status';
import {Treatments} from '../../data/treatments';

// utils
import {normalizeSize, showAlert} from '../../utils/helpers';

// models
import Appointment from '../../domain/entities/Appointments';
import {Patient} from '../../domain/entities';
import IPhysician from '../../domain/models/IPhysician';
import AppointmentDates from '../../domain/entities/AppointmentDates';
import {Treatment} from '../../domain/enums/Enum';

// services
import {
  addAppointment,
  getAllAppointments,
  updateAppointment,
} from '../../services/AppointmentService';

const AppointmentDetails = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  åå;
  const {item} = route.params;

  const [isFocus, setIsFocus] = useState(false);
  const [doctor, setDoctor] = useState<IPhysician>();
  const [patient, setPatient] = useState<Patient>();
  const [appointmentDate, setAppointmentDate] = useState<AppointmentDates>();
  const [status, setStatus] = useState();
  const [treatment, setTreatment] = useState<Treatment[]>([]);
  const [registration, setRegistration] = useState<boolean>(true);
  const [serviceCharge, setServiceCharge] = useState<number>(0);

  // data source
  const physicians = Physicians;
  const patients = Patients;
  const slots = AppointmentSlots;
  const statusList = AppointmentStatusList;
  const treatmentList = Treatments;

  useEffect(() => {
    setDoctor(item.doctor);
    setPatient(item.patient);
    setAppointmentDate(item.appointmentDate);
    setRegistration(item.appointmentFee === 1000 ? true : false);
  }, []);

  useEffect(() => {
    calculateServiceCharge();
  }, [treatment]);

  // handle update appointment
  const handleUpdateAppointment = () => {
    let validate = handleValidation();
    if (validate === true) {
      let appointment = new Appointment(
        item.appointmentId,
        patient,
        doctor,
        appointmentDate,
        registration === true ? 1000 : 0,
        treatment,
        status,
      );

      updateAppointment(item.appointmentId, appointment);
      showAlert('Appointment has been updated');
      navigation.navigate(Routes.appointmnets.appointmentsList);
    }
  };

  // handle validation
  const handleValidation = (): boolean => {
    if (
      doctor === undefined ||
      patient === undefined ||
      appointmentDate === undefined ||
      status === undefined
    ) {
      showAlert('Please check fields');
      return false;
    } else {
      return true;
    }
  };

  // calculate total service change
  const calculateServiceCharge = () => {
    let total: number = 0;
    treatment.map((element: any, index) => {
      let treatmentItem = treatmentList[element - 1];
      let price = (treatmentItem as any).price;
      //console.log(treatmentItem, element);

      total = total + price;
    });

    if (registration === true) {
      total = total + 1000; // add registration fee to total
      console.log(registration);
    }

    setServiceCharge(total);
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
          value={doctor}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            delete item._index;
            setDoctor(item);
            console.log('selected doctor => ', item);
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
          value={patient}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            delete item._index;
            setPatient(item);
            setIsFocus(false);
          }}
        />

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
          labelField="title"
          valueField="id"
          placeholder={!isFocus ? 'Select a appointment time slot' : '...'}
          searchPlaceholder="Search..."
          value={appointmentDate}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            delete item._index;
            setAppointmentDate(item);
            // setValue(item.value);
            setIsFocus(false);
          }}
        />

        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          search
          data={treatmentList}
          labelField="type"
          valueField="id"
          placeholder={!isFocus ? 'Select treatment' : '...'}
          searchPlaceholder="Search..."
          value={treatment}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(selectedItem: any) => {
            setTreatment(selectedItem);
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
          value={status}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            delete item._index;
            setStatus(item);
            setIsFocus(false);
          }}
        />

        <View style={styles.rowStyle}>
          <CheckBox
            disabled={true}
            value={registration}
            onValueChange={newValue => setRegistration(newValue)}
          />
          <UITextView
            text={'Paid appointment fee Rs. 1000.00'}
            textStyle={styles.appointmentFeeText}
          />
        </View>

        <UITextView
          text={`Total service charge is : Rs. ${serviceCharge}`}
          textStyle={{
            textAlign: 'center',
            marginVertical: normalizeSize(30),
            fontSize: normalizeSize(30),
          }}
          numberOfLines={2}
        />

        <UIButton
          label="Save Appointment"
          onClick={() => handleUpdateAppointment()}
          buttonContainerStyle={styles.buttonContainer}
        />

        <UIButton
          label="Generate Invoice"
          onClick={() => handleUpdateAppointment()}
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
  selectedStyle: {
    borderRadius: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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

export default AppointmentDetails;
