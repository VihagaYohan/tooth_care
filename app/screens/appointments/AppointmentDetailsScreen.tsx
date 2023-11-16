import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UIButton, UITextField} from '../../components';

// utils
import {normalizeSize, showAlert} from '../../utils/helpers';

// models
import Appointment from '../../domain/entities/Appointments';
import {Routes} from '../../navigation';
import {Treatment} from '../../domain/enums/Enum';

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
  const [serviceCharge, setServiceCharge] = useState<number>(0);

  useEffect(() => {
    if (item.treatmentType !== null) {
      let total: number = 0;
      item.treatmentType.map(
        (item: {id: number; type: Treatment; price: number}) => {
          total = total + item.price;
        },
      );
      setServiceCharge(total + 1000);
    }
  }, []);

  // handle update appointment
  const handleUpdateAppointment = () => {
    navigation.navigate(Routes.appointmnets.updateAppointment, {
      item,
    });
  };

  // render UI
  return (
    <UIContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          value={item.status.status}
          type="field"
        />

        {item.treatmentType !== null && (
          <React.Fragment>
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
          </React.Fragment>
        )}

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
