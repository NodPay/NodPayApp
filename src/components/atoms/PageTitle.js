import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {LeftArrow, BlackLeftArrow, CloseRed} from '../../assets';
import {dimens, fonts} from '../../utils';

const PageTitle = ({
  title,
  navigation,
  containerStyle,
  titleStyle,
  isBlackArrow,
  isCloseMode,
  onPressClose,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {isCloseMode ? (
        <TouchableOpacity
          onPress={onPressClose}
          style={{position: 'absolute', left: dimens.default_16}}>
          <Image source={CloseRed} style={styles.close_icon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left_arrow}>
          {isBlackArrow ? (
            <Image source={BlackLeftArrow} />
          ) : (
            <Image source={LeftArrow} />
          )}
        </TouchableOpacity>
      )}
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
    alignItems: 'center',
  },
  close_icon: {
    height: dimens.large_40,
    width: dimens.large_40,
    resizeMode: 'cover',
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
