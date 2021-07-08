import React from 'react';
import {StyleSheet, TextInput as InputText} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const TextInput = ({
  value,
  placeholder,
  placeholderTextColor,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  editable,
  style,
  additionalInputProps,
}) => {
  return (
    <InputText
      autoCapitalize={autoCapitalize}
      autoCompleteType="off"
      placeholderTextColor={placeholderTextColor || color.btn_black}
      placeholder={placeholder}
      style={[styles.inputText, style]}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      editable={editable}
      {...additionalInputProps}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    fontWeight: 'normal',
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
