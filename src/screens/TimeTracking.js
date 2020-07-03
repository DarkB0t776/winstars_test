import React, {useState, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Icon} from 'react-native-elements';
import moment from 'moment';

import colors from '../constants/colors';
import * as taskActions from '../redux/task/actions';

import MainHeader from '../components/headers/MainHeader';
import CalendarModal from '../components/CalendarModal';
import DateComponent from '../components/Date';
import Task from '../components/Task';

const TimeTracking = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state => {
    return state.tasks.items.filter(task => task.date === date.date);
  });
  const allTaskDates = useSelector(state => {
    return state.tasks.items.map(task => task.date);
  });

  useEffect(() => {
    setDate(route.params.date);
  }, [route.params.date]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const createMarkedDays = useCallback(() => {
    let markedDays = {};

    allTaskDates.forEach(date => {
      markedDays[date] = {selected: true, selectedColor: 'blue'};
    });

    return markedDays;
  }, [allTaskDates]);

  const toggleModal = () => setModalVisible(!modalVisible);

  const showAddIconHandler = isFocused => isFocused && setShowAddIcon(false);

  const createDateObject = date => {
    const month = moment(date).format('MMMM');
    const year = moment(date).format('gggg');
    const dayName = moment(date).format('dddd');
    const dayNum = moment(date).format('D');
    return {
      date,
      month,
      year,
      dayName,
      dayNum,
    };
  };

  const onDayPress = day => {
    const date = createDateObject(day.dateString);
    navigation.navigate('Time', {date});
    toggleModal();
  };

  const createTaskHandler = date => {
    dispatch(taskActions.createTask(date));
  };

  const renderTasks = tasks => {
    return tasks.map(task => (
      <Task
        key={task.id}
        taskData={task}
        showAddIconHandler={showAddIconHandler}
      />
    ));
  };

  return (
    <MainHeader title="Time Tracking">
      <View style={styles.container}>
        <CalendarModal
          modalVisible={modalVisible}
          toggleModal={toggleModal}
          markedDays={createMarkedDays()}
          onDayPress={onDayPress}
          month={date.month}
          dayNum={date.dayNum}
          dayName={date.dayName}
          year={date.year}
        />
        <TouchableOpacity onPress={toggleModal}>
          <DateComponent
            iconStyle={{color: colors.mainBlue}}
            dayStyle={{color: '#535353'}}
            monthStyle={{color: '#77787C'}}
            month={date.month}
            dayNum={date.dayNum}
            dayName={date.dayName}
            year={date.year}
          />
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          {renderTasks(tasks)}
        </ScrollView>

        {!keyboardVisible && (
          <Icon
            name="add"
            size={30}
            raised
            color={colors.mainBlue}
            iconStyle={{fontSize: 40}}
            containerStyle={styles.icon}
            onPress={() => createTaskHandler(date.date)}
          />
        )}
      </View>
    </MainHeader>
  );
};

export default TimeTracking;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 35,
    paddingLeft: 16,
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
