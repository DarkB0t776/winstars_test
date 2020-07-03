import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import {useDispatch, useSelector} from 'react-redux';

import * as userActions from '../redux/user/actions';

import BigHeader from '../components/headers/BigHeader';
import Questions from '../components/Questions';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.user.isLogged);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => <BigHeader />,
    });
  }, []);

  const loggedIn = () => {
    dispatch(userActions.signIn());
  };

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        style={{marginTop: 27, paddingVertical: 30}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={loggedIn}
      />
      <Questions containerStyles={{position: 'absolute', bottom: 22}} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 17,
  },
});
