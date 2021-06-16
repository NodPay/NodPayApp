import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar, Text} from 'react-native';

//where local file imported
import {Button, PageTitle, InputText, ErrorMessage} from '../components';
import {color, dimens, fonts} from '../utils';
import {LeftArrowBlack} from '../assets';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <View style={styles.inner_container}>
        <PageTitle
          title="Forgot Password"
          leftImage={LeftArrowBlack}
          containerStyle={{backgroundColor: color.btn_white_2}}
          titleStyle={{color: 'black'}}
          navigation={navigation}
        />

        <Text style={styles.subtitle}>Reset Your Password</Text>
        <Text style={styles.description}>
          Enter email that linked to your account and we will send reset
          password instruction to your email
        </Text>

        <InputText label="Your Email" value={email} onChangeText={setEmail} />
        <ErrorMessage message="The email isn’t associated with a NodPay Account" />
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="Send Instruction"
          titleStyle={{color: 'white'}}
          btnStyle={{backgroundColor: color.btn_black}}
          onPress={() => navigation.navigate('NewPassword')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  inner_container: {
    backgroundColor: color.btn_white_2,
    paddingHorizontal: dimens.default,
    paddingBottom: dimens.default,
    flex: 1,
  },
  subtitle: {
    fontSize: dimens.default_18,
    fontFamily: fonts.noto_bold,
    marginTop: dimens.small,
  },
  description: {
    fontSize: dimens.default,
    fontFamily: fonts.sofia_medium,
    color: '#9A9B9E',
  },
  btnContainer: {
    backgroundColor: 'white',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
});
