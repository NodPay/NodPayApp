import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//where local file imported
import {
  PageTitle,
  Gap,
  ErrorMessage,
  InfoMessage,
  Button,
} from '../components/';
import {color, dimens, fonts} from '../utils/';
import {LockPurple} from '../assets/';

const BankAccountConnect = ({navigation}) => {
  const handleConnectAccount = () => {
    alert('ok');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <PageTitle
        isBlackArrow
        title="Connect Bank Account"
        titleStyle={styles.pageTitle}
        navigation={navigation}
      />

      <ScrollView contentContainerStyle={styles.listContainer}>
        <View style={{flex: 1}}>
          <InfoMessage
            icon={LockPurple}
            message="Your bank account information is safe and protected with NodPay"
          />
        </View>
        <ErrorMessage message="Invalid Bank account information, please check your information and try again" />
      </ScrollView>

      <View style={styles.addButtonContainer}>
        <Button
          disabled
          onPress={handleConnectAccount}
          title="Connect Bank Account"
          btnStyle={{backgroundColor: color.grey, flex: 1}}
          titleStyle={{color: 'white'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: color.btn_white_2,
  },
  pageTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    fontWeight: '700',
  },
  listContainer: {
    marginHorizontal: dimens.default,
    marginVertical: 0,
    flex: 1,
  },
  addButtonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
});

export default BankAccountConnect;
