import React from 'react';
import {StyleSheet, SafeAreaView, View, Image, Text} from 'react-native';

//where local file imported
import {Button, Logo} from '../components/';
import {color, dimens, fonts} from '../utils';
import {SplashWave, GetStarted as GetStartedImage} from '../assets';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Image
        source={GetStartedImage}
        style={{
          width: '100%',
          height: '42%',
        }}
      />
      <Text style={styles.text}>
        Safe{' '}
        <Text style={[styles.text, {color: 'white'}]}>
          {`way\n to transfer\n money`}
        </Text>
      </Text>
      <View style={styles.wrap_btn}>
        <Button
          title="Log In"
          btnStyle={{marginBottom: dimens.default_16}}
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Get Started"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: 'white'}}
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <Image source={SplashWave} style={styles.img} />
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_color,
  },
  wrap_btn: {
    flex: 1,
    marginHorizontal: dimens.default_16,
    justifyContent: 'flex-end',
    marginVertical: dimens.default_16,
  },
  img: {
    position: 'absolute',
    bottom: 0,
    zIndex: -1,
    left: 0,
    right: 0,
    width: '100%',
  },
  logo: {
    padding: dimens.default_16,
  },
  text: {
    fontFamily: fonts.sofia_regular,
    fontSize: 56,
    fontWeight: 'bold',
    color: color.btn_black,
    padding: dimens.default_16,
    position: 'absolute',
    bottom: '15%',
  },
});