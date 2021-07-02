import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {color, dimens, fonts} from '../../utils';
import {Internasional} from '../../assets';

const PeopleItem = ({
  photo,
  name,
  phone,
  onPress,
  isInternasional,
  isSmall,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.photoContainer}>
        <Image source={photo} style={[styles.photo, isSmall ? {width: dimens.large_40, height: dimens.large_40} : {}]} />
        {isInternasional && <Image source={Internasional} style={styles.icon} />}
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.name}>
          {name}
        </Text>
        {!isSmall && (
          <Text style={styles.phone}>
            {phone}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PeopleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: dimens.small,
  },
  photoContainer: {
    position: 'relative',
  },
  photo: {
    backgroundColor: color.grey,
    width: dimens.large_48,
    height: dimens.large_48,
    borderRadius: dimens.large_50,
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: dimens.medium,
    height: dimens.medium,
  },
  containerContent: {
    flex: 1,
    marginLeft: dimens.default_12,
  },
  name: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    lineHeight: dimens.default_20,
    color: color.btn_black,
  },
  phone: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_14,
    color: color.grey_3,
    marginTop: dimens.supersmall,
  },
});
