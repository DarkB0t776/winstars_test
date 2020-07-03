import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import colors from '../../constants/colors';

const BigHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/logo.png')}
      />
      <Image
        style={styles.hiddenImage}
        source={require('../../../assets/images/hiddenLogo.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sing in</Text>
        <Text style={styles.subText}>
          You can only sign in with a Gmail account
        </Text>
      </View>
    </View>
  );
};

export default BigHeader;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 160,
    backgroundColor: colors.mainBlue,
  },
  image: {
    alignSelf: 'flex-end',
    marginTop: 25,
    marginRight: 16,
  },
  hiddenImage: {
    position: 'absolute',
    zIndex: -1,
    height: '100%',
  },
  textContainer: {
    marginTop: 36,
    marginLeft: 21,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
  subText: {
    fontSize: 14,
    color: '#fff',
  },
});
