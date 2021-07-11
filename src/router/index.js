import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View,Text} from 'react-native'

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
  Contact,
  Home,
  Notification,
  InviteFriend,
  InviteFriendPeople,
  Search,
  Settings,
  Comment,
  Card,
  Feedback,
  Language,
  ChangePhoneNumber,
  EditProfile,
  PasswordSecurity,
  PrivacySocial,
  NotificationSetting,
  BankAccount,
  BankAccountConnect,
} from '../screens';
import {Drawer as DrawerComponent, HomeTabBar} from '../components';

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
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
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="InviteFriend" component={InviteFriend} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Comment" component={Comment} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="PasswordSecurity" component={PasswordSecurity} />
        <Stack.Screen name="PrivacySocial" component={PrivacySocial} />
        <Stack.Screen
          name="NotificationSetting"
          component={NotificationSetting}
        />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen
          name="InviteFriendPeople"
          component={InviteFriendPeople}
        />
        <Stack.Screen name="BankAccount" component={BankAccount} />
        <Stack.Screen
          name="BankAccountConnect"
          component={BankAccountConnect}
        />
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppDrawer = () => {
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

// const HomeTabs = () => {
//   const Tab = createBottomTabNavigator();

//   const Exchange = () => {
//     return null
//   }


//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Card" component={Card} />
//     </Tab.Navigator>
//   );
// };

export default Router;
