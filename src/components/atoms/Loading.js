import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const Loading = ({size = 'small', color = 'black'}) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loading;
