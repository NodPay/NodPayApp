import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';

import {DrawerItem, BalanceInfo} from '../moleculs';
import {
  DrawerHomeActive,
  DrawerCard,
  DrawerBusiness,
  DrawerContact,
  DrawerBank,
  DrawerInvite,
  DrawerNotification,
  DrawerSetting,
  DrawerHelp,
  DrawerLogout,
  ProfileExample,
} from '../../assets';
import {dimens, color, fonts} from '../../utils';

const Drawer = ({navigation}) => {
  return (
    <SafeAreaView style={styles.drawerContainer}>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={ProfileExample}
            style={{height: 45, width: 45, resizeMode: 'contain'}}
          />
          <View style={{marginLeft: dimens.default}}>
            <Text style={styles.realname}>Ahmad Jalaluddin</Text>
            <Text style={styles.username}>@ahmadjalaluddin</Text>
          </View>
        </View>

        <View style={{padding: dimens.default}}>
          <BalanceInfo type="drawer" moneyAmount="400.000" />
        </View>

        <DrawerItem
          label="Home"
          isActive
          image={DrawerHomeActive}
          onPress={() => {}}
        />
        <DrawerItem label="My Card" image={DrawerCard} onPress={() => {}} />
        <DrawerItem
          label="Business Profile"
          image={DrawerBusiness}
          onPress={() => {}}
        />
        <DrawerItem
          label="Contacts"
          image={DrawerContact}
          onPress={() => {
            navigation.navigate('Contact');
          }}
        />
        <DrawerItem
          label="Bank Account"
          image={DrawerBank}
          onPress={() => {}}
        />
        <DrawerItem
          label="Invite Your Friends"
          image={DrawerInvite}
          onPress={() => {
            navigation.navigate('InviteFriend');
          }}
        />
        <DrawerItem
          label="Notifications"
          image={DrawerNotification}
          onPress={() => {
            navigation.navigate('Notification');
          }}
          unreadCount={4}
        />
        <DrawerItem
          label="Settings"
          image={DrawerSetting}
          onPress={() => navigation.navigate('Settings')}
        />
        <DrawerItem label="Help" image={DrawerHelp} onPress={() => {}} />
      </ScrollView>

      <DrawerItem label="Log out" image={DrawerLogout} onPress={() => {}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    borderTopLeftRadius: dimens.default,
    borderBottomLeftRadius: dimens.default,
    flex: 1,
    backgroundColor: 'white',
  },
  scrollviewContainer: {
    flexGrow: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    marginTop: dimens.medium,
  },
  realname: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    color: color.btn_black,
  },
  username: {
    fontFamily: fonts.sofia_regular,
    fontSize: 15,
    color: color.grey,
  },
});

export default Drawer;
