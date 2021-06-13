import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';

// where local file imported
import {PageTitle} from '../components';
import {SplashWave, LoginBackground} from '../assets';
import {clearAll, color, dimens, fonts} from '../utils';

const Login = ({navigation}) => {
  useEffect(() => {
    clearAll().then(res => console.log('clear all', res));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <PageTitle title="Login" navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_container: {
    backgroundColor: color.bg_color,
  },
  wave: {
    zIndex: -1,
  },
  greet: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.large_40,
    color: 'white',
  },
});
