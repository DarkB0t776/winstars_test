import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import colors from '../../constants/colors';

import StatisticList from '../StatisticList';

const MainHeader = ({title, children, screenName}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.hiddenLogo}
        source={require('../../../assets/images/hiddenLogo.png')}
      />
      <View style={styles.nav}>
        <Icon name="navicon" size={35} style={{color: '#fff'}} />
        <Image
          style={styles.smallLogo}
          source={require('../../../assets/images/logo_small.png')}
        />
      </View>
      {screenName === 'Home' ? (
        <StatisticList />
      ) : (
        <Text style={styles.task}>{title}</Text>
      )}
      {children}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBlue,
  },
  hiddenLogo: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
  },
  smallLogo: {
    marginLeft: 14,
    marginBottom: 32,
  },
  nav: {
    flexDirection: 'row',
    marginTop: 19,
    marginLeft: 16,
  },
  task: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 29,
    marginBottom: 15,
  },
});
