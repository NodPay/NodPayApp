import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const LinkAction = ({text, actionText, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.action_text} onPress={onPress}>{actionText}</Text>
    </View>
  );
};

export default LinkAction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_14,
    color: color.btn_title_white,
    marginRight: dimens.supersmall,
  },
  action_text: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_14,
    color: color.bg_color,
  },
});
