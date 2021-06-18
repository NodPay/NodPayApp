import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// where screen should imported
import {
  GetStarted,
  Login,
  LoginEmail,
  LoginPhone,
  ForgotPassword,
  NewPassword,
  Splash,
  OnBoarding,
  Loader,
  Register,
  ScanResult,
} from '../screens';

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginEmail" component={LoginEmail} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ScanResult" component={ScanResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
