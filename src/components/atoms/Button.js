import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const Button = ({onPress, btnStyle, titleStyle, title, iconLeft}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.btn, btnStyle]}>
      {iconLeft && <Image style={styles.btn_icon} source={iconLeft} />}
      <Text style={[styles.btn_title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    borderRadius: dimens.default_16,
    height: dimens.large_48,
    backgroundColor: color.btn_white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_icon: {
    width: dimens.medium,
    height: dimens.medium,
    marginRight: dimens.small,
  },
  btn_title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_title_white,
  },
});
