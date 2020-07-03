import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import colors from '../constants/colors';

const Questions = ({containerStyles}) => {
  return (
    <View style={{...styles.containerQ, ...containerStyles}}>
      <Text style={styles.text}>
        If you have any questions, please contact to the{' '}
        <Text style={{color: colors.mainBlue}}>Head Office</Text>
      </Text>
      <Button
        title="Write"
        buttonStyle={styles.btn}
        titleStyle={styles.btnTitle}
      />
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({
  containerQ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    flexWrap: 'wrap',
    maxWidth: 208,
    color: '#828385',
  },

  btn: {
    backgroundColor: colors.mainBlue,
    paddingVertical: 10,
    paddingHorizontal: 29,
  },
  btnTitle: {
    color: '#fff',
  },
});
