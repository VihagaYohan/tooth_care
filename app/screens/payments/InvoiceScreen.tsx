import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UITextView, UITextField} from '../../components';

// constants
import {COLORS, STYLES} from '../../constants';

// service
import {getAppointmentById} from '../../services/AppointmentService';

// models
import Appointment from '../../domain/entities/Appointments';
import {normalizeSize} from '../../utils/helpers';
import {TreatmentType} from '../../domain/entities';

const InvoiceScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const {appointmentId} = route.params;

  const [appointment, setAppoitment] = useState<Appointment>();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    fetchAppointment();
    console.log(appointment);
  }, []);

  // fetch appointment
  const fetchAppointment = () => {
    let result = getAppointmentById(appointmentId);
    if (result !== undefined) {
      setAppoitment(result[0]);
      calcualteTotal();
    }
    // setAppoitment(result[0]);
  };

  const calcualteTotal = () => {
    let serviceCharge: number = 0;
    appointment?.treatmentType.map((item: TreatmentType) => {
      serviceCharge = serviceCharge + item.price;
    });
    // add appointment register fee to total service charge and save state
    setTotal(serviceCharge + 1000);
  };

  return (
    <UIContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UITextView
          text="Tooth Care"
          textStyle={{
            fontSize: normalizeSize(40),
            fontWeight: 'bold',
            color: COLORS.primaryColor,
            alignSelf: 'center',
          }}
        />

        <View style={styles.rowStyle}>
          <UITextField
            label="Appointment Date"
            value={appointment?.appointmentDate.title}
            type="field"
          />

          <UITextField
            label="Appointment ID"
            value={appointment?.appointmentId}
            type="field"
          />
        </View>

        <UITextField
          label="Patient Name"
          value={appointment?.patient.fullName}
          type="field"
        />

        <UITextField
          label="Doctor Name"
          value={appointment?.doctor.fullName}
          type="field"
        />

        <View style={styles.subTitleContainer}>
          <UITextView text="Services" textStyle={styles.subTitle} />
          <View style={styles.subTitleBorder}></View>
        </View>

        {appointment?.treatmentType.map(
          (item: TreatmentType, index: number) => {
            return (
              <View style={styles.servicesRow}>
                <View style={styles.serviceItem}>
                  <UITextView text={item.type} />
                </View>

                <View style={styles.serviceItem}>
                  <UITextView
                    text={`Rs. ${item.price.toFixed(2)}`}
                    textStyle={styles.chargeStyle}
                  />
                </View>
              </View>
            );
          },
        )}

        <View style={styles.servicesRow}>
          <View style={styles.serviceItem}>
            <UITextView
              text="Total Service Charge"
              textStyle={styles.serviceChargeText}
            />
          </View>

          <View style={styles.serviceItem}>
            <UITextView
              text={`Rs. ${total.toFixed(2)}`}
              textStyle={styles.serviceCharge}
            />
          </View>
        </View>
      </ScrollView>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: normalizeSize(30),
    fontStyle: 'italic',
  },
  subTitleBorder: {
    height: 1,
    backgroundColor: COLORS.primaryColor,
    flex: 1,
    marginLeft: 10,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  serviceItem: {
    width: '45%',
    height: 20,
  },
  serviceChargeText: {
    fontSize: normalizeSize(30),
    fontWeight: 'bold',
  },
  serviceCharge: {
    fontSize: normalizeSize(30),
    textAlign: 'right',
    fontWeight: 'bold',
  },
  chargeStyle: {
    textAlign: 'right',
  },
});

export default InvoiceScreen;
