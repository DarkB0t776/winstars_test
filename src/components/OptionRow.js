import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  CURRENT_DAY_NAME,
  CURRENT_DAY_NUM,
  CURRENT_MONTH,
  CURRENT_YEAR,
  CURRENT_DATE,
} from '../constants/date';

const date = {
  date: CURRENT_DATE,
  dayName: CURRENT_DAY_NAME,
  dayNum: CURRENT_DAY_NUM,
  month: CURRENT_MONTH,
  year: CURRENT_YEAR,
};

const OptionRow = ({imgPath, title, iconName, screenName}) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    return screenName ? navigation.navigate(screenName, {date}) : null;
  };

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <Image source={imgPath} style={styles.iconImg} />
      <View style={styles.option}>
        <Text style={styles.title}>{title}</Text>
        <Icon name={iconName} size={25} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default OptionRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  iconImg: {
    marginRight: 20,
  },
  option: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#B3B3B3',
    paddingBottom: 15,
  },
  title: {
    color: '#535353',
  },
  icon: {
    color: '#1E43A5',
    opacity: 0.54,
  },
});
