import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import SignInScreen from '../screens/SignIn';
import HomeScreen from '../screens/Home';
import TimeTrackingScreen from '../screens/TimeTracking';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const AuthStack = createStackNavigator();

  const isSignedIn = useSelector(state => state.user.isLogged);

  const renderScreens = useCallback(() => {
    if (!isSignedIn) {
      return (
        <NavigationContainer>
          <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
          </AuthStack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: () => null,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Time" component={TimeTrackingScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }, [isSignedIn]);

  return renderScreens();
};

export default AppNavigator;
