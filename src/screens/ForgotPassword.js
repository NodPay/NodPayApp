import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, StatusBar, Text} from 'react-native';

//where local file imported
import {Button, PageTitle, InputText, ErrorMessage, Modal} from '../components';
import {color, dimens, fonts} from '../utils';
import {LeftArrowBlack, ModalSent, ModalFailed} from '../assets';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      {/* Modal Failed */}
      {/* <Modal
        imageSrc={ModalFailed}
        title="Something’s Wrong"
        subtitle="We’re unable to sent the instructions, please check your internet connection and tyr again."
        btn1Text="Try Again"
        btn2Text="Close"
        // btn1Onpress={() =>{}}
        visible={modalSuccess}
        onClose={() => {
          setModalSuccess(false);
        }}
      /> */}
      <Modal
        imageSrc={ModalSent}
        title="Recovery link sent!"
        subtitle="An instrcution to reset your password has been sent, please check your email"
        visible={modalSuccess}
        onClose={() => {
          setModalSuccess(false);
          navigation.navigate('NewPassword');
        }}
      />

      <View style={styles.inner_container}>
        <PageTitle
          title="Forgot Password"
          isBlackArrow
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
          onPress={() => setModalSuccess(true)}
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
    // backgroundColor: 'yellow',
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
