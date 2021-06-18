import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FormLabel} from '../atoms';

// where local files imported
import {color, dimens, fonts, formatPhoneNumber} from '../../utils';
import {Down, FeatherPhone} from '../../assets';

const InputPhoneNumber = ({
  label,
  phoneCode = '',
  value = '',
  onChangeText,
  labelStyle,
  inputMobileNumber,
  dispatch,
}) => {
  const [code, setCode] = useState('62');
  const [number, setNumber] = useState('');

  if (inputMobileNumber) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.country_code}>{`+${code}`}</Text>
          <Image source={Down} style={styles.leftIcon} />
        </TouchableOpacity>
        <TextInput
          keyboardType="number-pad"
          value={number.toString()}
          onChangeText={value => {
            setNumber(value.toString());
            dispatch({
              type: 'SET_PHONE_NUMBER',
              phoneNumber: `${code}${value}`,
            });
          }}
          style={styles.input}
          maxLength={11}
        />
        <Image source={FeatherPhone} style={styles.icon} />
      </View>
    );
  }

  return (
    <>
      {label && (
        <FormLabel labelStyle={[styles.label, labelStyle]} label={label} />
      )}
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.country_code}>{`+${phoneCode}`}</Text>
          <Image source={Down} style={styles.leftIcon} />
        </TouchableOpacity>
        <TextInput
          keyboardType="number-pad"
          value={value.toString()}
          onChangeText={onChangeText}
          style={styles.input}
          maxLength={11}
        />
        <Image source={FeatherPhone} style={styles.icon} />
      </View>
    </>
  );
};

export default InputPhoneNumber;

const styles = StyleSheet.create({
  label: {
    marginBottom: dimens.small,
  },
  container: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
    backgroundColor: 'white',
    marginTop: dimens.small,
    paddingHorizontal: dimens.default,
    borderRadius: dimens.large_50,
    height: dimens.large_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    paddingLeft: dimens.default_16,
    letterSpacing: 1.2,
  },
  leftIcon: {
    width: 12,
    height: 7,
  },
  icon: {
    position: 'absolute',
    right: dimens.default_16,
    width: 18,
    height: 18,
  },
  country_code: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    marginRight: dimens.default_14,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
