import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Date = ({
  iconStyle,
  dayStyle,
  monthStyle,
  containerStyle,
  month,
  dayNum,
  dayName,
  year,
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <Icon
        name="calendar-check"
        size={30}
        color="#fff"
        style={{...iconStyle}}
      />
      <View style={styles.dateContainer}>
        <Text
          style={{...styles.day, ...dayStyle}}>{`${dayName} ${dayNum}`}</Text>
        <Text
          style={{...styles.month, ...monthStyle}}>{`${year} ${month}`}</Text>
      </View>
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dateContainer: {
    marginLeft: 15,
  },
  day: {
    color: '#fff',
    fontSize: 20,
  },
  month: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.55)',
  },
});
