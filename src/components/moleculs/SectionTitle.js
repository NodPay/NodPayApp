import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const SectionTitle = ({
  title,
  subtitle,
  textColor = color.btn_black,
  titleStyle,
  subTitleStyle,
  containerStyle,
  num = '',
  type,
}) => {
  if (type == 'modal') {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalSubtitle}>{subtitle}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, {color: textColor}, titleStyle]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, {color: textColor}, subTitleStyle]}>
        {subtitle}
        <Text style={[styles.subtitle, {fontFamily: fonts.sofia_bold}]}>
          {` ${num}`}
        </Text>
      </Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_22,
    color: color.btn_black,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: dimens.medium,
    color: color.btn_black,
  },

  // Modal
  modalContainer: {
    backgroundColor: 'white',
    marginTop: dimens.default,
  },
  modalTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.medium,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.modal_subtitle,
    textAlign: 'center',
    marginTop: dimens.supersmall,
  },
});
