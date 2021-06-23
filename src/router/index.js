import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// where screens should be imported
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
  Biometrics,
  Home,
} from '../screens';
import {Drawer as DrawerComponent} from '../components';

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
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
        <Stack.Screen name="Biometrics" component={Biometrics} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerType="front"
      drawerPosition="right"
      drawerStyle={{backgroundColor: 'transparent'}}
      screenOptions={{unmountOnBlur: true}}
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default Router;
