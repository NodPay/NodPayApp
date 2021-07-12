import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {LogoCitibank} from '../../assets';

const BankAccountItem = ({
  logo,
  accountName,
  accountCode,
  accountAmount,
  rightButton,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={{width: 46, resizeMode: 'contain'}} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.accountName}>{accountName}</Text>
        <Text style={styles.accountCode}>{accountCode}</Text>
        <Text style={styles.accountAmount}>
          Rs <Text style={{color: color.green}}>{accountAmount}</Text>
        </Text>
      </View>
      {rightButton}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dimens.medium,
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: dimens.default,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    marginLeft: dimens.default,
  },
  accountName: {
    color: color.btn_black,
    fontSize: dimens.default,
    fontFamily: fonts.sofia_regular,
    fontWeight: '400',
  },
  accountCode: {
    color: color.grey_8,
    fontSize: dimens.default_12,
    fontFamily: fonts.sofia_regular,
  },
  accountAmount: {
    color: color.green2,
    fontSize: dimens.default_14,
    fontFamily: fonts.sofia_regular,
  },
});

export default BankAccountItem;
