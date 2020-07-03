import React from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';

import colors from '../constants/colors';
import Date from './Date';

const CalendarModal = ({
  modalVisible,
  toggleModal,
  markedDays,
  onDayPress,
  month,
  dayNum,
  dayName,
  year,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Date month={month} dayNum={dayNum} dayName={dayName} year={year} />
          </View>
          <Calendar
            markedDates={markedDays}
            onDayPress={onDayPress}
            theme={{
              textDayFontSize: 14,
              textMonthFontSize: 14,
              textDayHeaderFontSize: 14,
            }}
          />
          <View style={styles.buttons}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.btn}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.btn}>ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    minHeight: '60%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    overflow: 'hidden',
  },
  header: {
    height: 70,
    backgroundColor: colors.mainBlue,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginVertical: 15,
    paddingHorizontal: 38,
  },
  btn: {
    marginLeft: 38,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.mainBlue,
  },
});
