import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {GoogleSignin} from '@react-native-community/google-signin';

import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '700079357357-sn9077d8sp9t9n5mfgm0t94t1p4hr542.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
