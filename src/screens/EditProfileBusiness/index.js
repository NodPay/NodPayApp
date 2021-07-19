import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local files imported
import {Gap, PageTitle, SettingsSaveButton, Tabbed} from '../../components';
import {color, dimens} from '../../utils';
import Profile from './Profile';
import Address from './Address';

const EditProfileBusiness = ({navigation}) => {
  const onSave = () => {
    // TODO
    // post to api
    // replace navigation
  };
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isCloseMode
        onPressClose={() => navigation.goBack()}
        title="Edit Profile Business"
        titleStyle={{color: color.btn_black}}
        containerStyle={{marginTop: dimens.default}}
      />
      <Gap t={dimens.default} />
      {/* Tab Bar */}
      <Tab.Navigator
        tabBar={props => <Tabbed {...props} />}
        initialRouteName="Address">
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Address" component={Address} />
      </Tab.Navigator>
      <SettingsSaveButton
        onCancel={() => navigation.goBack()}
        onSave={onSave}
      />
    </SafeAreaView>
  );
};

export default EditProfileBusiness;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
});
