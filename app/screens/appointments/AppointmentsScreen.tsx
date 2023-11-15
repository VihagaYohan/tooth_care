import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
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
import {ICONS, COLORS, DIMENSION} from '../../constants';

// services
import {
  getAllAppointments,
  getAppointmentById,
  filterAppointmentByDate,
  getAppointmentDates,
} from '../../services/AppointmentService';

// models
import Appointment from '../../domain/entities/Appointments';

// navigation
import {Routes} from '../../navigation';

// utils
import {normalizeSize} from '../../utils/helpers';

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
  const [searchText, setSearchText] = useState<string>();
  const [visible, setVisible] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<string[] | any[]>([]);

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
    setAppointments(getAppointmentDates());
    if (result != undefined) {
      createTableData(result);
    }
  };

  // find appintment by id
  const findAppointmnet = () => {
    if (searchText !== undefined && searchText?.length > 0) {
      let list = getAppointmentById(parseInt(searchText));
      createTableData(list);
    } else {
      fetchAllAppointments();
    }
  };

  // filter by appointment date
  const filterAppointment = (appointmentDate: string) => {
    if (appointmentDate !== undefined && appointmentDate.length > 0) {
      const list: Appointment[] = filterAppointmentByDate(
        appointmentDate.toString(),
      );
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

        item.push(element.appointmentId);
        item.push(element.appointmentDate.title);
        item.push(element.patient.getFullName());
        item.push(element.doctor.getFullName());
        item.push(element.status.status);
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
            onChangeText={value => setSearchText(value)}
          />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <UITextButton label="Search" onClick={() => findAppointmnet()} />

            <UIIconButton onClick={() => setVisible(!visible)}>
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

      <Modal visible={visible} transparent={false} animationType="slide">
        <View style={{flex: 1, padding: DIMENSION.MARGIN}}>
          <View style={styles.modalTitleContainer}>
            <UITextView
              text="Filter by: "
              textStyle={{fontSize: normalizeSize(30)}}
            />

            <UITextButton
              label="Clear Filters"
              onClick={() => {
                setVisible(false);
                fetchAllAppointments();
              }}
            />
          </View>

          {appointments.length > 1 ? (
            appointments.map((item: string, index: number) => {
              return (
                <TouchableOpacity
                  key={`appointment-dates-index-${index}`}
                  style={styles.itemStyle}
                  onPress={() => {
                    filterAppointment(item);
                    setVisible(false);
                  }}>
                  <UITextView text={item} />
                </TouchableOpacity>
              );
            })
          ) : (
            <UITextView
              text={`${appointments.length}`}
              textStyle={{alignSelf: 'center'}}
            />
          )}
        </View>
      </Modal>
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
  row: {height: 100, backgroundColor: '#E7E6E1'},
  viewButtonStyle: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalizeSize(20),
  },
  itemStyle: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.black,
  },
});

export default AppointmnetsScreen;
