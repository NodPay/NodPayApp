import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//where local file imported
import {color, dimens, fonts} from '../../utils';
import {Time} from '../../assets';

const NotifActivityItem = ({photo, name, action, info, date, type, amount, isUnread}) => {
  return (
    <View style={[styles.container, {backgroundColor: isUnread ? color.purple : 'transparent'}]}>
      {photo && <Image source={photo} style={styles.photo} />}
      <View>
        <Text style={styles.description}>
          <Text style={styles.name}>{name}</Text> {action}
        </Text>
        {info !== '' && 
          <Text style={styles.info}>
            {info}
          </Text>
        }
        <View style={styles.containerDate}>
          <Image source={Time} style={styles.iconDate} />
          <Text style={styles.date}>
            {date.fromNow()}
          </Text>
        </View>
      </View>
      {type !== '' &&
        <View style={[styles.containerLabel, {backgroundColor: type === 'in' ? color.bg_success : color.bg_red_error_msg}]}>
          <Text style={[styles.label, {color: type === 'in' ? color.green : color.red}]}>{type === 'in' ? '+' : '-'} Rs {amount}</Text>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: dimens.default_16,
      paddingVertical: dimens.small,
      marginBottom: dimens.small,
      position: 'relative',
    },
    photo: {
      height: 46,
      width: 46,
      resizeMode: 'cover',
      marginRight: dimens.default_16,
    },
    name: {
      fontFamily: fonts.sofia_bold,
      fontSize: dimens.default_14,
      lineHeight: dimens.default_14,
      color: color.btn_title_white,
    },
    description: {
      fontFamily: fonts.sofia_regular,
      fontSize: dimens.default_14,
      lineHeight: dimens.default_14,
      color: color.btn_title_white,
      marginBottom: dimens.small,
    },
    info: {
      fontFamily: fonts.sofia_regular,
      fontSize: dimens.default_16,
      lineHeight: dimens.default_16,
      color: color.btn_black,
      marginBottom: dimens.small,
    },
    containerDate: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconDate: {
      height: 14,
      width: 14,
      resizeMode: 'cover',
      marginRight: dimens.supersmall,
    },
    date: {
      fontFamily: fonts.sofia_regular,
      fontSize: dimens.default_12,
      lineHeight: dimens.default_12,
      color: color.grey_4,
    },
    containerLabel: {
      position: 'absolute',
      top: 8,
      right: 16,
      paddingHorizontal: dimens.small,
      paddingTop: dimens.verysmall,
      backgroundColor: color.grey,
      borderRadius: dimens.large_50,
      minWidth: dimens.large_56,
      height: dimens.large_25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontFamily: fonts.sofia_regular,
      fontSize: dimens.default_12,
      color: color.btn_white,
    },
});

export default NotifActivityItem;
