import React from 'react';
import {StyleSheet, View, SafeAreaView, Image, StatusBar} from 'react-native';

// where local file imported
import {Button, PageTitle, SectionTitle, LinkAction} from '../components';
import {Facebook, Email, Phone, SplashWaveGradient} from '../assets';
import {clearAll, color, dimens, fonts} from '../utils';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
      <View style={styles.inner_container}>
        <PageTitle title="Login" navigation={navigation} />
      </View>
      <View style={styles.center_container}>
        <View style={styles.bg_top} />
        <Image source={SplashWaveGradient} style={styles.image_bg_wave} />
        <View style={styles.center_content}>
          <SectionTitle
            title="Welcome Back!"
            subtitle={`Login to your account with your email or\nmobile number`}
            textColor="white"
          />
          <Button
            iconLeft={Facebook}
            title="Sign in with Facebook"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'black'}}
            onPress={() => {}}
          />
          <Button
            iconLeft={Phone}
            title="Continue with Phone Number"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'black'}}
            onPress={() => {}}
          />
          <Button
            iconLeft={Email}
            title="Continue with Email"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'black'}}
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.footer_container}>
        <LinkAction
          text="Don’t have an account?"
          actionText="Sign Up"
          onPress={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  inner_container: {
    backgroundColor: color.bg_color,
  },
  center_container: {
    flex: 1,
    paddingTop: dimens.very_large,
  },
  center_content: {
    paddingHorizontal: dimens.default_16,
  },
  bg_top: {
    backgroundColor: color.bg_color,
    position: 'absolute',
    width: '100%',
    height: 400,
    top: 0,
  },
  image_bg_wave: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: 500,
    top: 20,
  },
  footer_container: {
    padding: dimens.large,
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
