import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, Row, Rows, TableWrapper} from 'react-native-table-component';
import moment from 'moment';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {
  UIContainer,
  UITextView,
  UITextInput,
  UIButton,
  UITextButton,
  UIIconButton,
  UIFloatingActionButton,
} from '../../components';

// constants
import {ICONS, COLORS} from '../../constants';

// services
import {
  getAllAppointments,
  getAppointmentById,
} from '../../services/AppointmentService';
import Appointment from '../../domain/entities/Appointments';

// navigation
import {Routes} from '../../navigation';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {AntDesignIcon} = ICONS;

const AppointmnetsScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const [tableHead, setTableHead] = useState<string[]>([
    'ID',
    'Date',
    'Patient Name',
    'Physician Name',
    'Status',
    'Actions',
  ]);
  const [tableData, setTableData] = useState([]);
  const [appointmentId, setAppointmentId] = useState<string>();

  // column widths
  const widthArr = [40, 100, 120, 100, 120, 100];

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetchAllAppointments();
    });
  }, [navigation]);

  useEffect(() => {
    fetchAllAppointments();
  }, []);

  // fetch all appointments
  const fetchAllAppointments = () => {
    let result = getAllAppointments();
    if (result != undefined) {
      createTableData(result);
      /* let parent: any = [];

      result.forEach((element: Appointment) => {
        let item = [];
        let appointmentStatus: any = element.status;
        item.push(element.appointmentId);
        // item.push(moment(element.appointmentDate).format('DD MMM YYYY'));
        item.push('2023 March 23');
        item.push(element.patient.getFullName());
        item.push(element.doctor.getFullName());
        // item.push(appointmentStatus.status.toUpperCase());
        item.push('Confirmed');
        item.push(
          <TouchableOpacity
            style={styles.viewButtonStyle}
            onPress={() =>
              navigation.navigate(Routes.appointmnets.appointmentDetails, {
                item: element,
              })
            }>
            <UITextView text="View" textStyle={{color: COLORS.blue.blue800}} />
          </TouchableOpacity>,
        );
        parent.push(item);
      });

      setTableData(parent); */
    }
  };

  // find appintment
  const findAppointmnet = () => {
    if (appointmentId !== undefined && appointmentId?.length > 0) {
      let list = getAppointmentById(parseInt(appointmentId));
      createTableData(list);
    } else {
      fetchAllAppointments();
    }
  };

  // create table data
  const createTableData = (tableData: Appointment[]) => {
    if (tableData != undefined) {
      let parent: any = [];

      tableData.forEach((element: Appointment) => {
        let item = [];
        let appointmentStatus: any = element.status;
        item.push(element.appointmentId);
        // item.push(moment(element.appointmentDate).format('DD MMM YYYY'));
        item.push('2023 March 23');
        item.push(element.patient.getFullName());
        item.push(element.doctor.getFullName());
        // item.push(appointmentStatus.status.toUpperCase());
        item.push('Confirmed');
        item.push(
          <TouchableOpacity
            style={styles.viewButtonStyle}
            onPress={() =>
              navigation.navigate(Routes.appointmnets.appointmentDetails, {
                item: element,
              })
            }>
            <UITextView text="View" textStyle={{color: COLORS.blue.blue800}} />
          </TouchableOpacity>,
        );
        parent.push(item);
      });

      setTableData(parent);
    }
  };

  return (
    <UIContainer>
      <View style={{flex: 1}}>
        <View style={styles.searchContainer}>
          <UITextInput
            placeholder="Enter appointment ID"
            placeholderTextColor={COLORS.white}
            onChangeText={value => setAppointmentId(value)}
          />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UITextButton label="Search" onClick={() => findAppointmnet()} />

            <UIIconButton onClick={() => console.log('filter clicked')}>
              <AntDesignIcon
                name="filter"
                size={25}
                color={COLORS.primaryColor}
              />
            </UIIconButton>
          </View>
        </View>

        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row
            data={tableHead}
            widthArr={widthArr}
            style={styles.head}
            textStyle={styles.text}
          />
        </Table>

        <ScrollView style={styles.dataWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={[styles.row]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </ScrollView>

        <UIFloatingActionButton
          icon={<AntDesignIcon name="plus" size={25} color={COLORS.white} />}
          onClick={() =>
            navigation.navigate(Routes.appointmnets.newAppointment)
          }
        />
      </View>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  head: {height: 60, backgroundColor: '#f1f8ff'},
  text: {margin: 6},
  dataWrapper: {},
  row: {height: 60, backgroundColor: '#E7E6E1'},
  viewButtonStyle: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppointmnetsScreen;
