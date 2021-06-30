import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

//where local file imported
import {Tabbed, RequestMoneyItem} from '../components/';
import {color, dimens, fonts} from '../utils/';
import {People1} from '../assets/';

const Card = () => {
  return (
    <SafeAreaView>
      <Text>Card</Text>
    </SafeAreaView>
  );
};

export default Card;
