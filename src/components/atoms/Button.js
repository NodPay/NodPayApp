import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const Button = ({onPress, btnStyle, titleStyle, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.btn, btnStyle]}>
      <Text style={[styles.btn_title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: dimens.default_16,
    height: dimens.large_40,
    backgroundColor: color.btn_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_title_white,
  },
});
