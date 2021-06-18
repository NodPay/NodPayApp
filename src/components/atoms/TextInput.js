import React from 'react';
import {StyleSheet, TextInput as InputText} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const TextInput = ({
  value,
  placeholder,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
}) => {
  return (
    <InputText
      autoCapitalize={autoCapitalize}
      autoCompleteType="off"
      placeholderTextColor={color.btn_black}
      placeholder={placeholder}
      style={styles.inputText}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputText: {
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
  },
});
