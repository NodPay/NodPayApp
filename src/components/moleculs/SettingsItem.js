import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

//where local files imported
import {dimens, fonts} from '../../utils';
import {NextBlack} from '../../assets';

const SettingsItem = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.wrapper, {justifyContent: 'space-between'}]}>
        <View style={styles.wrapper}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={NextBlack} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    padding: dimens.default_16,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  title: {
    marginLeft: dimens.default_16,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_20,
  },
});