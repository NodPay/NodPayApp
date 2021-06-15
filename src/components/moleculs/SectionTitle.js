import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {color, dimens, fonts} from '../../utils';

// where local files imported
import Gap from '../atoms/Gap';

const SectionTitle = ({
  sectionTitleContainerStyle,
  title = 'title',
  subtitle = 'subtitle',
}) => {
  return (
    <View style={[styles.container, sectionTitleContainerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <Gap t={dimens.supersmall} />
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_22,
    color: color.btn_black,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    color: 'grey',
  },
});
