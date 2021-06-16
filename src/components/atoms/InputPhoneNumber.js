import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

// where local files imported
import {color, dimens, fonts, formatPhoneNumber} from '../../utils';
import {Down, FeatherPhone} from '../../assets';

const InputPhoneNumber = ({dispatch}) => {
  const [code, setCode] = useState('62');
  const [number, setNumber] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.country_code}>{`+${code}`}</Text>
        <Image source={Down} />
      </TouchableOpacity>
      <TextInput
        keyboardType="number-pad"
        value={number.toString()}
        onChangeText={value => {
          setNumber(value.toString());
          dispatch({type: 'SET_PHONE_NUMBER', payload: `${code}${value}`});
        }}
        style={styles.input}
        maxLength={11}
      />
      <Image source={FeatherPhone} style={styles.icon} />
    </View>
  );
};

export default InputPhoneNumber;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: dimens.large_48,
    borderRadius: dimens.large_48 / 2,
    alignItems: 'center',
    paddingHorizontal: dimens.default_16,
    borderWidth: 0.1,
    borderColor: color.grey,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    paddingLeft: dimens.default_16,
    letterSpacing: 1.2,
  },
  icon: {
    position: 'absolute',
    right: dimens.default_16,
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
