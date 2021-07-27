import React from 'react';

import {View, StyleSheet} from 'react-native';

const Divider = ({t, b}) => {
  return <View style={[styles.divider, {marginTop: t, marginBottom: b}]} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 0.5,
    backgroundColor: 'lightgray',
    width: '100%',
  },
});
