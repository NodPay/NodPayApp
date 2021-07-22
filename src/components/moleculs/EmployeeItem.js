import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//where local files imported
import {DefaultPict, ThreeDots} from '../../assets';
import {color, dimens, fonts} from '../../utils';
import {Gap} from '../atoms';

const EmployeeItem = ({isOnline}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={DefaultPict} style={styles.img} />
          {isOnline && <View style={styles.onlineBadge} />}
          <View style={{marginLeft: dimens.default}}>
            <Text style={styles.name}>Darlene Robertson</Text>
            <Text style={styles.job}>Casheer</Text>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={ThreeDots}
            style={{
              height: 24,
              width: 24,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>
      <Gap t={dimens.default} />
      <View
        style={{
          height: 0.2,
          borderRadius: 0.1,
          backgroundColor: color.grey,
        }}
      />
    </View>
  );
};

export default EmployeeItem;

const styles = StyleSheet.create({
  container: {
    height: 118,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: dimens.default,
    padding: dimens.default,
  },
  img: {
    height: 48,
    width: 48,
    borderRadius: 24,
    resizeMode: 'contain',
    borderWidth: 0.1,
  },
  name: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    color: color.btn_black,
  },
  job: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.bg_color,
    backgroundColor: color.purple,
    height: 24,
    width: 64,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
  },
  onlineBadge: {
    height: 16,
    width: 16,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: color.green,
    position: 'absolute',
    bottom: 0,
    left: 32,
  },
});
