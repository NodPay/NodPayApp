import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {color, dimens, fonts} from '../../utils';
import {Right} from '../../assets';

const MenuItem = ({
  icon,
  title,
  subtitle,
  info,
  withoutArrow,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.title}>
          {title}
        </Text>
        {subtitle && (
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>
      <View style={styles.containerRight}>
        {info && <Text style={styles.info}>{info}</Text>}
        {!withoutArrow && <Image source={Right} style={styles.iconRight} />}
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimens.default_16,
  },
  iconContainer: {
    backgroundColor: color.purple,
    justifyContent: 'center',
    alignItems: 'center',
    width: dimens.large_48,
    height: dimens.large_48,
    borderRadius: dimens.medium,
    marginRight: dimens.default_16,
  },
  icon: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'cover',
  },
  containerContent: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    marginBottom: dimens.supersmall,
  },
  subtitle: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    color: color.btn_title_white,
  },
  containerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.medium,
    lineHeight: dimens.default_18,
    color: color.drawerActive,
    marginBottom: -dimens.small,
    paddingVertical: dimens.supersmall,
  },
  iconRight: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'cover',
    marginLeft: dimens.small,
  },
});
