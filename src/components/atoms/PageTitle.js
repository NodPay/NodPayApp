import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {
  LeftArrow,
  BlackLeftArrow,
  CloseRed,
  QRScan,
  PencilEditWhite,
  ThreeDotsVertical,
} from '../../assets';
import {color, dimens, fonts} from '../../utils';
import {useNavigation} from '@react-navigation/native';

// * Page title with optional buttons on the left and right
const PageTitle = ({
  title,
  containerStyle,
  titleStyle,
  isBlackArrow,
  isCloseMode,
  onPressClose,
  isRightQR,
  onPressRight,
  cancel,
  isCancel,
  isProfile,
  onEdit,
  isOtherProfile,
  isNoBackButton,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containerStyle]}>
      {!isNoBackButton && isCloseMode ? (
        <TouchableOpacity
          onPress={onPressClose}
          style={{position: 'absolute', left: dimens.default_16}}>
          <Image source={CloseRed} style={[styles.close_icon, cancel]} />
          {isCancel && (
            <Text
              style={{
                fontFamily: fonts.noto_bold,
                fontSize: dimens.default_12,
                textAlign: 'center',
              }}>
              Cancel
            </Text>
          )}
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
      {isRightQR && (
        <TouchableOpacity onPress={onPressRight} style={styles.containerQR}>
          <Image source={QRScan} style={styles.iconQR} />
          <Text style={styles.textQR}>QR Code</Text>
        </TouchableOpacity>
      )}
      {/* Edit Profile */}
      {isProfile && (
        <TouchableOpacity onPress={onEdit} style={styles.containerQR}>
          <Image
            source={PencilEditWhite}
            style={{height: 40, width: 40, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      )}
      {/* Other User Profile */}
      {isOtherProfile && (
        <TouchableOpacity onPress={onEdit} style={styles.containerQR}>
          <Image
            source={ThreeDotsVertical}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      )}
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
  containerQR: {
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    paddingTop: dimens.supersmall,
    paddingRight: dimens.default_14,
  },
  iconQR: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'cover',
  },
  textQR: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_12,
    lineHeight: dimens.default_12,
    color: color.btn_black,
    marginTop: dimens.supersmall,
  },
});
