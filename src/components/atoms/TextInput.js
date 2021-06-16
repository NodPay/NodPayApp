import React from 'react';
import {StyleSheet, TextInput as InputText} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const TextInput = ({value, onChangeText}) => {
  return (
    <InputText
      placeholderTextColor={color.btn_black}
      style={styles.inputText}
      value={value}
      onChangeText={onChangeText}
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
    padding: dimens.default,
    borderRadius: 50,
  },
});
