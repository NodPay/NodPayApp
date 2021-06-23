import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {color, dimens, fonts} from '../../utils';

const DrawerItem = ({label, image, unreadCount, onPress, isActive}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftWrapper}>
        <Image source={image} style={styles.icon} />

        <Text
          style={[
            styles.text,
            {color: isActive ? color.drawerActive : color.btn_black},
          ]}>
          {label}
        </Text>
      </View>

      {unreadCount && <Text style={styles.unreadCount}>{unreadCount}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimens.default_16,
    paddingVertical: dimens.default_12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    height: dimens.medium,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    marginLeft: dimens.default_14,
  },
  unreadCount: {
    backgroundColor: color.error_text,
    fontSize: dimens.default_12,
    color: 'white',
    borderRadius: 300,
    paddingHorizontal: dimens.default_12,
    paddingVertical: dimens.small,
  },
});

export default DrawerItem;
