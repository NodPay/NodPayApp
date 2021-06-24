import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

//where local files imported
import {DefaultPict} from '../../assets';
import {color, dimens, fonts} from '../../utils';

const ContactItem = ({
  name = 'Name',
  phoneNumber = 'Phone Number',
  picture = DefaultPict,
  added,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapProfile}>
        <Image source={picture} style={styles.pict} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.number}>{phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={added}
        style={[
          styles.btn,
          {backgroundColor: added ? 'lightgray' : color.btn_black},
        ]}
        activeOpacity={0.8}
        onPress={onPress}>
        <Text style={[styles.number, {color: 'white'}]}>
          {added ? 'Added' : '+Add'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  wrapProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pict: {
    height: dimens.large_48,
    width: dimens.large_48,
    borderRadius: dimens.large_48 / 2,
    borderWidth: 1,
    borderColor: color.bg_grey,
    marginRight: dimens.default_12,
  },
  name: {
    fontFamily: fonts.sofia_regular,
    fontSize: 19,
    color: color.btn_black,
  },
  number: {
    fontFamily: fonts.sofia_regular,
    fontSize: 14,
    color: color.grey,
  },
  btn: {
    textAlignVertical: 'center',
    height: 40,
    width: 80,
    borderRadius: 8,
    backgroundColor: color.btn_black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
