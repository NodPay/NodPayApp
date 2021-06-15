import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar, Text} from 'react-native';

//where local file imported
import {Button, PageTitle, InputText} from '../components/';
import {color, dimens, fonts} from '../utils';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <View style={styles.inner_container}>
        <PageTitle
          title="Forgot Password"
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

        <Button
          title="Send Instruction"
          titleStyle={{color: 'white'}}
          btnStyle={{backgroundColor: color.btn_black, marginTop: 20}}
          // onPress={}
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
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: fonts.noto_bold,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    fontFamily: fonts.sofia_medium,
    color: '#9A9B9E',
  },
  btnSubmit: {},
  btnSubmitText: {
    color,
  },
});
