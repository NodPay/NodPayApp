import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {dimens, fonts} from '../../utils';

const SectionTitle = ({title, subtitle, textColor, type}) => {
  // if (type == 'modal') {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={[styles.title, {color: textColor}]}>{title}</Text>
  //       <Text style={[styles.subtitle, {color: textColor}]}>{subtitle}</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
      <Text style={[styles.subtitle, {color: textColor}]}>{subtitle}</Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: dimens.default_16,
  },
  left_arrow: {
    padding: dimens.default_16,
    position: 'absolute',
    left: 0,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.large_40,
    color: 'black',
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: 24,
    color: 'black',
  },
});
