import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

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
} from '../../assets';
import {dimens} from '../../utils';

const Drawer = ({navigation}) => {
  return (
    <View style={styles.drawerContainer}>
      <ScrollView contentContainerStyle={styles.scrollviewContainer}>
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
        <DrawerItem label="Contacts" image={DrawerContact} onPress={() => {}} />
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
        <DrawerItem label="Settings" image={DrawerSetting} onPress={() => {}} />
        <DrawerItem label="Help" image={DrawerHelp} onPress={() => {}} />
      </ScrollView>

      <DrawerItem label="Log out" image={DrawerLogout} onPress={() => {}} />
    </View>
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
});

export default Drawer;
