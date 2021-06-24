import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local files imported
import {color, dimens} from '../utils';
import {PageTitle, Button, StepInfo} from '../components';
import {ContactBackground,PeopleInviteFriend} from '../assets';

const InviteFriend = ({navigation}) => {
  const stepInfo = ['You invite a friend', 'They Register & Topup', 'You both get XX'];

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Your Sign Ups"
        titleStyle={{color: color.btn_black}}
        navigation={navigation}
      />
      <View style={styles.containerCenter}>
        <Image source={PeopleInviteFriend} style={styles.photo} />
        <StepInfo
          items={stepInfo}
        />
      </View>
      <View style={styles.wrapBtn}>
        <Button
          onPress={() => {}}
          title="Share Invitation Link"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white_2}}
        />
      </View>
      <Image source={ContactBackground} style={styles.bg_contact} />
    </SafeAreaView>
  );
};

export default InviteFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  containerCenter: {
    alignItems: 'center',
    marginVertical: dimens.medium,
  },
  photo: {
    width: 136,
    height: 136,
    resizeMode: 'cover',
    marginBottom: dimens.medium,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
    resizeMode: 'stretch',
  },
});
