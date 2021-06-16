import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';

// where local file imported
import {
  Button,
  PageTitle,
  SectionTitle,
  LinkAction,
  InputPassword,
} from '../components';
import {SplashWaveGradient} from '../assets';
import {clearAll, color, dimens, fonts} from '../utils';

const LoginEmail = ({navigation}) => {
  useEffect(() => {
    clearAll().then(res => console.log('clear all', res));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
      <ScrollView>
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
            <View style={styles.form_container}>
              <InputPassword
                label="Password"
                placeholder="Password"
                onChange={() => {}}
              />
            </View>
            <LinkAction
              text="Forgot your password?"
              actionText="Click here"
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}
            />
          </View>
        </View>
        <View style={styles.footer_container}>
          <Button
            title="Login"
            btnStyle={{
              backgroundColor: 'black',
              marginBottom: dimens.default_12,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
            onPress={() => {}}
          />
          <Button
            title="Register"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold}}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginEmail;

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
  form_container: {
    marginBottom: dimens.default_16,
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
    padding: dimens.default_16,
    marginTop: dimens.very_large,
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
