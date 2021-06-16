import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {dimens, fonts} from '../../utils';

const SectionTitle = ({
  title,
  subtitle,
  textColor,
  titleStyle,
  subTitleStyle,
  containerStyle,
  num,
}) => {
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
