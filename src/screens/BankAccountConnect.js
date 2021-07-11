import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

//where local file imported
import {
  PageTitle,
  ErrorMessage,
  InfoMessage,
  Button,
  InputText,
  Modal,
} from '../components/';
import {color, dimens, fonts} from '../utils/';
import {LockPurple, ModalSuccess, ModalFailed} from '../assets/';

const BankAccountConnect = ({navigation}) => {
  const [bankName, setBankName] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleConnectAccount = () => {
    setModalSuccess(true);
  };
  const isButtonSubmitEnabled = bankName && bankCode && accountNumber;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      {/* Modal Failed */}
      {/* <Modal
        imageSrc={ModalFailed}
        title="Something’s Wrong"
        subtitle="We’re unable to connect to your bank account, please check your internet connection and tyr again."
        btn1Text="Try Again"
        btn2Text="Close"
        // btn1Onpress={() =>{}}
        visible={modalSuccess}
        onClose={() => {
          setModalSuccess(false);
        }}
      /> */}
      <Modal
        imageSrc={ModalSuccess}
        title="Bank Account Connected!"
        subtitle="Your bank account is succesfuly connected with NodPay"
        visible={modalSuccess}
        btn1Text="Close"
        btn1Onpress={() => {
          setModalSuccess(false);
          navigation.goBack();
        }}
        onClose={() => {
          setModalSuccess(false);
          navigation.goBack();
        }}
      />

      <PageTitle
        isCloseMode
        onPressClose={() => {
          navigation.goBack();
        }}
        title="Connect Bank Account"
        titleStyle={styles.pageTitle}
        navigation={navigation}
      />

      <ScrollView contentContainerStyle={styles.listContainer}>
        <View style={{flex: 1}}>
          <InputText
            label="Bank Name"
            value={bankName}
            onChangeText={setBankName}
          />
          <InputText
            label="Bank Code"
            value={bankCode}
            onChangeText={setBankCode}
          />
          <InputText
            label="Your Account"
            value={accountNumber}
            onChangeText={setAccountNumber}
          />

          <InfoMessage
            icon={LockPurple}
            message="Your bank account information is safe and protected with NodPay"
          />
        </View>
        <ErrorMessage message="Invalid Bank account information, please check your information and try again" />
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' && 'position'}
        style={styles.addButtonContainer}>
        <Button
          disabled={!isButtonSubmitEnabled}
          onPress={handleConnectAccount}
          title="Connect Bank Account"
          btnStyle={{
            backgroundColor: isButtonSubmitEnabled
              ? color.btn_black
              : color.grey,
            flex: 1,
          }}
          titleStyle={{color: 'white'}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  pageTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    fontWeight: '700',
  },
  listContainer: {
    marginHorizontal: dimens.default,
    marginVertical: 0,
    flexGrow: 1,
  },
  addButtonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
});

export default BankAccountConnect;
