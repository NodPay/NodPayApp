import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const FormLabel = ({labelStyle, label}) => {
  return <Text style={[styles.defaultLabelStyle, labelStyle]}>{label}</Text>;
};

export default FormLabel;

const styles = StyleSheet.create({
  defaultLabelStyle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.form_label,
  },
});
