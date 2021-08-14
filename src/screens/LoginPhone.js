import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

// where local file imported
import {
  Button,
  PageTitle,
  SectionTitle,
  LinkAction,
  InputPhoneNumber,
  InputPassword,
  ErrorMessage,
} from '../components';
import {SplashWaveGradient} from '../assets';
import {clearAll, color, dimens, fonts, storeData, wait} from '../utils';
import {phoneLogin} from '../api/registration.api';
import useStateContext from '../store/useStateContext';
import {setFormLoginPhone} from '../store/action';

const LoginPhone = ({navigation}) => {
  const {state, dispatch} = useStateContext();
  const PHONE_NUMBER = '000000000000';
  const PASSWORD = 'admin';

  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('+1');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submited, setSubmited] = useState(false);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  let keyboardDidShowListener;
  let keyboardDidHideListener;

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    setIsKeyboardShow(true);
  };

  const _keyboardDidHide = () => {
    setIsKeyboardShow(false);
  };

  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const onLogin = async () => {
    try {
      setIsLoading(true);
      // check auth
      if (
        state.formLoginPhone.phone == '' ||
        state.formLoginPhone.password == ''
      ) {
        wait(100).then(() => {
          setIsLoading(false);
          setError({
            status: true,
            message: "Phone Number or Password Can't be empty.",
          });
        });
      } else {
        const data = await phoneLogin(
          state.formLoginCode + state.formLoginPhone,
          password,
        );
        if (data) {
          setIsLoading(false);
          storeData('token', data.token);
          storeData('session', {
            isLogin: true, // if auth success, then save token for current user then user doesn't need to relogin
            isBoarding: true,
          });
          setError({status: false, message: ''});
          navigation.reset({
            routes: [{name: 'AppDrawer'}],
          });
        }
      }
    } catch (err) {
      setIsLoading(false);
      setError({status: true, message: 'Unable to login with phone number'});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={color.bg_color} />
      <ScrollView style={styles.scroll}>
        <View style={styles.inner_container}>
          <PageTitle title="Login" />
        </View>
        <View style={styles.center_container}>
          <View style={styles.bg_top} />
          <Image source={SplashWaveGradient} style={styles.image_bg_wave} />
          <View style={styles.center_content}>
            <SectionTitle
              title="Welcome Back!"
              titleStyle={{fontSize: dimens.large_40}}
              subtitle={`Login to your account with your email or\nmobile number`}
              textColor="white"
            />
            <View style={styles.form_container}>
              <InputPhoneNumber
                labelStyle={{color: color.btn_black}}
                label="Mobile Number"
                placeholder="Mobile Number"
                phoneCode={state.formLoginPhone.code}
                value={state.formLoginPhone.phone}
                onChangeText={text =>
                  dispatch(setFormLoginPhone('phone', text))
                }
                onChangeCode={text => dispatch(setFormLoginPhone('code', text))}
              />
              <InputPassword
                labelStyle={{color: color.btn_black}}
                label="Password"
                placeholder="Password"
                value={state.formLoginPhone.password}
                onChangeText={text =>
                  dispatch(setFormLoginPhone('password', text))
                }
              />
            </View>
            <LinkAction
              text="Forgot your password?"
              actionText="Click here"
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}
            />
            {error.status == true && <ErrorMessage message={error.message} />}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <View style={styles.footer_container}>
          <Button
            isLoading={isLoading}
            title="Login"
            btnStyle={{
              backgroundColor: color.btn_black,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
            onPress={onLogin}
          />
          {!isKeyboardShow && (
            <Button
              title="Register"
              btnStyle={{
                backgroundColor: 'white',
                borderColor: color.btn_white,
                borderWidth: 1,
                marginTop: dimens.default_12,
              }}
              titleStyle={{fontFamily: fonts.sofia_bold}}
              onPress={() => navigation.navigate('Register')}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  scroll: {
    marginTop: -50,
    paddingTop: 50,
  },
  inner_container: {
    backgroundColor: color.bg_color,
    marginTop: -50,
    paddingTop: 50,
  },
  center_container: {
    flex: 1,
    paddingTop: dimens.very_large,
  },
  center_content: {
    paddingHorizontal: dimens.default_16,
    paddingBottom: dimens.very_large,
  },
  form_container: {
    marginTop: dimens.default_16,
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
