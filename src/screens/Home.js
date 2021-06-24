import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

//where local file imported
import {HeaderHome, BalanceInfo} from '../components/';
import {color, dimens, fonts} from '../utils/';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <HeaderHome
        onPressSearch={() => {}}
        onPressProfile={() => {
          navigation.openDrawer();
        }}
      />

      <View style={{padding: dimens.default}}>
        <BalanceInfo type="home" moneyAmount="400.000" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
});

export default Home;
