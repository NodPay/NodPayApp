import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../../utils';

const ErrorMessage = ({msg = 'Error Message'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}>{msg}</Text>
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_red_error_msg,
    padding: dimens.default_16,
    borderRadius: dimens.default_16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.red,
  },
});
