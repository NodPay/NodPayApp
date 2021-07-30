import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

/**
 * Loading component for circle loading
 * @param   {string}  size    Size of loading
 * @param   {string}  color   Color of loading
 */
const Loading = ({size = 'small', color = 'black'}) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loading;
