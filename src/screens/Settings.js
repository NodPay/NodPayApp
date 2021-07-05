import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

//where local files imported
import {color} from '../utils';
import {PageTitle, SettingsItem} from '../components';
import {
  AccountCircle,
  Bell,
  Detail,
  Lock,
  PencilEdit,
  PhoneGrey,
  Profile,
  Star,
} from '../assets';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Settings"
        titleStyle={{color: color.btn_black}}
        navigation={navigation}
      />
      <SettingsItem icon={AccountCircle} title="Edit Profile" />
      <SettingsItem icon={Lock} title="Password & Security" />
      <SettingsItem icon={Profile} title="Privacy & Socials" />
      <SettingsItem icon={Bell} title="Notification Settings" />
      <SettingsItem icon={PhoneGrey} title="Change Phone Number" />
      <SettingsItem icon={Detail} title="Language" />
      <SettingsItem icon={Star} title="Rate NodPay" />
      <SettingsItem
        icon={PencilEdit}
        title="Send Feedback"
        onPress={() => {
          navigation.navigate('Feedback');
        }}
      />
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
});
