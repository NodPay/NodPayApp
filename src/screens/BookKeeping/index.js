import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

//where local file imported
import {
  HeaderHome,
  BalanceInfo,
  FeedItem,
  Tabbed,
  PageTitle,
  Gap,
  TransactionItem,
} from '../../components/';

import {color, dimens, fonts} from '../../utils/';
import {BookActive, Exchange, HomeInactive, People1} from '../../assets/';
import Report from './Report';
import Transaction from './Transaction';

const BookKeeping = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle title="Book Keeping" titleStyle={{color: color.btn_black}} />
      <View style={styles.wrapper}>
        <Tab.Navigator tabBar={props => <Tabbed {...props} />}>
          <Tab.Screen name="Report" component={Report} />
          <Tab.Screen name="Transaction" component={Transaction} />
        </Tab.Navigator>
        {/* Bottom Tab Navigator */}
        <View style={styles.bottomTab}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeBusiness');
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={HomeInactive} style={{width: 30, height: 30}} />
              <Text>Home</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  top: -35,
                  height: 80,
                  width: 80,
                  backgroundColor: color.bg_color,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 10,
                  borderColor: color.btn_white_2,
                }}
                onPress={() => navigation.navigate('BusinessTransaction')}>
                <Image source={Exchange} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <Text
                style={{
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? 10 : 15,
                  bottom: 15,
                }}>
                Exchange
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
              <Image
                source={BookActive}
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: 'center',
                  marginBottom: 18,
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  left: Platform.OS === 'ios' ? -25 : -18,
                  bottom: 0,
                  width: 85,
                  color: color.bg_color,
                }}>
                Bookkeeping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Bottom Tab Navigator End*/}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  wrapper: {
    flex: 1,
  },
  bottomTab: {
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: dimens.default_16,
    zIndex: 1,
  },
});

export default BookKeeping;
