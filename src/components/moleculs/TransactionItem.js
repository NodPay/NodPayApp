import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {DefaultPict} from '../../assets';

const TransactionItem = ({name, type, pay, isMinus}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftWrap}>
        <Image
          source={DefaultPict}
          style={{height: 50, width: 50, borderRadius: 50}}
        />
        <View style={styles.detailWrap}>
          <Text style={styles.name}>{name || 'name'}</Text>
          <Text style={styles.type}>{type || 'type'}</Text>
        </View>
      </View>
      <Text
        style={{
          color: isMinus ? color.red : color.green,
          fontFamily: fonts.sofia_bold,
          backgroundColor: isMinus ? color.error_background : color.bg_success,
          height: 30,
          width: 60,
          borderRadius: 30,
          textAlign: 'center',
          textAlignVertical: 'center',
        }}>
        {isMinus ? `- Rs ${pay}` : `+ ${pay || 0} Rs`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.default,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: dimens.default,
    borderRadius: dimens.default,
  },
  leftWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailWrap: {
    marginLeft: dimens.small,
  },
  name: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default,
    color: color.btn_black,
  },
  type: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.grey,
  },
});

export default TransactionItem;
