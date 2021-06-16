import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const ErrorMessage = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.error_background,
    paddingVertical: dimens.default_14,
    paddingHorizontal: dimens.default_18,
    borderRadius: dimens.default_16,
    marginTop: dimens.default,
  },
  message: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.error_text,
    textAlign: 'center',
  },
});
