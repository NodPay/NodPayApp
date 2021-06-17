import React from 'react';
import {StyleSheet, TextInput as InputText} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const TextInput = ({value, onChangeText, keyboardType}) => {
  return (
    <InputText
      placeholderTextColor={color.btn_black}
      style={styles.inputText}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
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
    borderRadius: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});
