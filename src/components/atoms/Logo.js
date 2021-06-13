import React from 'react';
import {StyleSheet, Text} from 'react-native';

// where local file imported
import {dimens, fonts} from '../../utils';

const Logo = ({titleStyle}) => {
  return (
    <Text style={[styles.title, titleStyle]}>
      Nod
      <Text
        style={[
          styles.title,
          {fontFamily: fonts.noto_regular, fontWeight: '300'},titleStyle,
        ]}>
        Pay
      </Text>
    </Text>
  );
};

export default Logo;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.noto_bold,
    color: 'white',
    fontSize: dimens.large,
  },
});
