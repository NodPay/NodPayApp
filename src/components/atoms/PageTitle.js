import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {LeftArrow} from '../../assets';
import {dimens, fonts} from '../../utils';

const PageTitle = ({title, navigation, containerStyle, titleStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.left_arrow}>
        <Image source={LeftArrow} />
      </TouchableOpacity>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default PageTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: dimens.default_16,
  },
  left_arrow: {
    padding: dimens.default_16,
    position: 'absolute',
    left: 0,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: 'white',
  },
});
