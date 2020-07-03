import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

const LIST_ITEMS = [
  {
    title: 'Earned this month',
    value: 0,
    icon: '$',
  },
  {
    title: 'Job Hours this month',
    value: 0,
    icon: 'h',
  },
  {
    title: 'Rate per hour',
    value: 0,
    icon: '$',
  },
  {
    title: 'Remains Day-off',
    value: 0,
    icon: 'd',
  },
  {
    title: 'Your rating',
    value: 0,
    icon: <Icon name={'star'} />,
  },
];

const StatisticList = () => {
  const [pressed, setPressed] = useState(false);
  const user = useSelector(state => state.user.data);

  const renderStatisticList = () => {
    return (
      <View style={styles.list}>
        {LIST_ITEMS.map(item => (
          <View key={item.title} style={styles.listItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemValue}>
              {item.value} {item.icon}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  const onPressHandler = () => setPressed(!pressed);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{user.name}</Text>
        <TouchableOpacity onPress={onPressHandler}>
          <Icon
            name={pressed ? 'chevron-up' : 'chevron-down'}
            size={25}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      {pressed && renderStatisticList()}
    </>
  );
};

export default StatisticList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 29,
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    color: '#fff',
  },
  icon: {
    color: '#fff',
    opacity: 0.54,
  },
  list: {
    position: 'relative',
    zIndex: -1,
    top: 5,
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 31,
    marginTop: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 15,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  itemValue: {
    color: '#fff',
  },
});
