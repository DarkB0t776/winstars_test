import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import {TASK_TYPES} from '../data';
import * as taskActions from '../redux/task/actions';

import colors from '../constants/colors';

const Task = ({taskData, showAddIconHandler}) => {
  const dispatch = useDispatch();
  const hoursInputRef = useRef();
  const [selectedType, setSelectedType] = useState(taskData.type);
  const [showHoursInput, setShowHoursInput] = useState(false);
  const [taskValue, setTaskValue] = useState(taskData.value);
  const [taskHours, setTaskHours] = useState(taskData.hours);

  useEffect(() => {
    const updatedValues = {
      id: taskData.id,
      value: taskValue,
      hours: taskHours,
      type: selectedType,
    };
    dispatch(taskActions.updateTask(updatedValues));
  }, [taskValue, taskHours, selectedType]);

  useEffect(() => {
    !taskHours && hoursInputRef.current?.focus();
  }, [showHoursInput]);

  const icon = (
    <TouchableOpacity onPress={() => setShowHoursInput(true)}>
      <Icon
        name="clock"
        size={25}
        color={colors.mainBlue}
        style={{marginRight: 10, marginTop: 5}}
      />
    </TouchableOpacity>
  );

  const renderHoursInput = () => {
    if (!showHoursInput && !taskData.hours) {
      return icon;
    } else {
      return (
        <View
          style={{
            flexDirection: 'row',
            width: 30,
            alignItems: 'center',
          }}>
          <TextInput
            style={styles.taskHours}
            value={taskHours}
            onChangeText={setTaskHours}
            keyboardType="numeric"
            maxLength={1}
            ref={hoursInputRef}
            selectTextOnFocus
          />
          <Text
            style={{color: colors.mainBlue, fontSize: 15, fontWeight: 'bold'}}>
            h
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedType}
        style={styles.picker}
        mode="dropdown"
        onValueChange={(item, idx) => setSelectedType(item)}>
        {TASK_TYPES.map(type => (
          <Picker.Item key={type} label={type} value={type} />
        ))}
      </Picker>
      <View style={styles.taskData}>
        <TextInput
          style={styles.taskValue}
          multiline
          value={taskValue}
          onChangeText={setTaskValue}
        />
        {renderHoursInput()}
      </View>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: 145,
  },
  taskData: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#B3B3B3',
    opacity: 0.5,
  },
  taskValue: {
    flex: 2,
    padding: 0,
  },
  taskHours: {
    flex: 0.5,
    color: colors.mainBlue,
    fontWeight: 'bold',
    padding: 0,
  },
});
