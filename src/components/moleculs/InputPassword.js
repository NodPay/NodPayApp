import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const InputPassword = ({label, value, placeholder, onChange}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCompleteType="off"
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        secureTextEntry={true}
        style={styles.input}
      />
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.medium,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: dimens.large_50,
    paddingHorizontal: dimens.default_18,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
  label: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
    marginBottom: dimens.small,
  },
});
