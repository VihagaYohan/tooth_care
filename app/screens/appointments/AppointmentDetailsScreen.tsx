import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UIButton, UITextView, UITextField} from '../../components';

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
} from '../../services/AppointmentService';

const AppointmentDetails = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const {item} = route.params;
  console.log(item);

  const [isFocus, setIsFocus] = useState(false);
  const [doctor, setDoctor] = useState<IPhysician>();
  const [patient, setPatient] = useState<Patient>();
  const [appointmentDate, setAppointmentDate] = useState<AppointmentDates>();
  const [status, setStatus] = useState();
  const [treatment, setTreatment] = useState<Treatment[]>([]);
  const [registration, setRegistration] = useState<boolean>();
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
    setTreatment(item.treatmentType);
    setRegistration(item.appointmentFee.length > 0 ? true : false);
    let total: number = 0;
    item.treatmentType.map((item: any) => {
      total = total + item.price;
    });
    setServiceCharge(total + 1000);
  }, []);

  // handle update appointment
  const handleUpdateAppointment = () => {
    let appointment = new Appointment(
      item.appointmentId,
      patient,
      doctor,
      appointmentDate,
      registration === true ? 1000 : 0,
      treatment,
      status,
    );
    console.log(appointment);
    /* let validate = handleValidation();
    if (!validate) {
      let appointment = new Appointment(
        list.length + 1,
        patient,
        doctor,
        appointmentDate,
        1000,
        null,
        status,
      );
      let result = addAppointment(appointment);
      if (result) {
        showAlert('New appointment has been updated');
        navigation.navigate(Routes.appointmnets.appointmentsList);
      } else {
        showAlert('Please select a different time slot');
      }
    } */
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

  // render UI
  return (
    <UIContainer>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <UITextField
          label="Patient name"
          value={item.patient.getFullName()}
          type="field"
        />

        <UITextField
          label="Doctor name"
          value={item.doctor.getFullName()}
          type="field"
        />

        <UITextField
          label="Appointment date"
          value={item.appointmentDate.title}
          type="field"
        />

        <UITextField
          label="Appointment status"
          value={item.status}
          type="field"
        />

        <UITextField
          label="Treatment types"
          value={item.treatmentType}
          type="tag"
        />

        <UITextField
          label="Total service charge (+ Rs. 1000.00 registration fee)"
          value={`Rs.${serviceCharge.toFixed(2)}`}
          type="field"
        />

        <UIButton
          label="Update Appointment"
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
