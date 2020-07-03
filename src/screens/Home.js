import React from 'react';
import {StyleSheet, View} from 'react-native';

import MainHeader from '../components/headers/MainHeader';
import OptionRow from '../components/OptionRow';

import {OPTIONS} from '../data';
import Questions from '../components/Questions';

const Home = ({route}) => {
  const renderOptions = () => {
    return OPTIONS.map(opt => (
      <OptionRow
        key={opt.title}
        title={opt.title}
        imgPath={opt.imgPath}
        iconName={opt.iconName}
        screenName={opt.screenName}
      />
    ));
  };

  return (
    <>
      <MainHeader screenName={route.name} screenName="Home">
        <View style={styles.container}>
          <View style={{width: '100%'}}>{renderOptions()}</View>
          <Questions containerStyles={{marginBottom: 15}} />
        </View>
      </MainHeader>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
});
