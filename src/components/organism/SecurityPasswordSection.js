import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//where local files imported
import {ModalFailed, ModalSuccess, PasswordHide} from '../../assets';
import {color, dimens, fonts, wait} from '../../utils';
import {ErrorMessage, Gap} from '../atoms';
import {CardInfoButton, SectionTitle} from '../moleculs';
import useStateContext from '../../store/useStateContext';
import Modal from './Modal';

const SecurityPasswordSection = ({setUpBiometric, showModal, typeModal}) => {
  const {state, dispatch} = useStateContext();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  if (setUpBiometric) {
    return (
      <View>
        <Modal
          imageSrc={typeModal == 'success' ? ModalSuccess : ModalFailed}
          title={
            typeModal == 'success' ? 'Account Registered!' : 'Something’s Wrong'
          }
          subtitle={
            typeModal == 'success'
              ? 'You can now do transaction and interact with your friends!'
              : 'We’re unable to create account, please check your internet connection and try again.'
          }
          visible={showModal}
          btn1Text="Done" // done btn
          btn1Onpress={() => {
            if (typeModal == 'success') {
              dispatch({
                type: 'SET_MODAL',
                showModal: false,
                typeModal: null,
              });
              dispatch({type: 'SET_IS_COMPLETED', payload: true});
              wait(200).then(() => {
                dispatch({type: 'RESET_REGISTER'});

                navigation.replace('DrawerNavigator', {
                  screen: 'Home',
                });
              });
            } else {
              dispatch({
                type: 'SET_MODAL',
                showModal: true,
                typeModal: 'success',
              });
            }
          }}
          onClose={() =>
            dispatch({type: 'SET_MODAL', showModal: false, typeModal: null})
          }
          btn2Text={typeModal == 'failed' ? 'Try Again' : null} // try again btn
          btn2Onpress={() => {
            dispatch({
              type: 'SET_MODAL',
              showModal: false,
              typeModal: null,
            });
          }}
        />
        <SectionTitle
          containerStyle={{
            padding: 0,
          }}
          title="Set Up Touch and face ID "
          titleStyle={{color: 'black', fontSize: dimens.default_22}}
          subtitle="You can set face and touch ID later on your password and security settings"
          subTitleStyle={{
            color: color.grey,
            fontSize: dimens.default_16,
          }}
        />
        <Gap t={dimens.default_16} />
        <CardInfoButton
          onPress={() => navigation.navigate('Biometrics')}
          title="Touch ID"
          subtitle="Active touch ID so you don’t have to confirm evrytime you sendmoney"
          btnTitle="Set Up Touch ID"
        />
        <Gap t={dimens.default_16} />
        <CardInfoButton
          title="Face ID"
          subtitle="Active face ID so you don’t have to confirm evrytime you sendmoney"
          btnTitle="Set Up Face ID"
        />
      </View>
    );
  }

  return (
    <View>
      <SectionTitle
        containerStyle={{
          padding: 0,
        }}
        title="Security Password"
        titleStyle={{color: 'black', fontSize: dimens.default_22}}
        subtitle="Set your password and face / touch ID"
        subTitleStyle={{
          color: color.grey,
          fontSize: dimens.default_16,
        }}
      />
      <Gap t={dimens.default_16} />
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={val => setPassword(val)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={PasswordHide} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <Gap t={dimens.default_16} />
      {state.error && <ErrorMessage message={state.errorMessage} />}
      <Gap b={dimens.default_16} />
    </View>
  );
};

export default SecurityPasswordSection;

const styles = StyleSheet.create({
  containerInput: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.1,
    borderColor: color.grey,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
    marginTop: dimens.small,
    borderRadius: dimens.large_50,
    height: dimens.large_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  input: {
    marginLeft: dimens.default_16,
    flex: 1,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
  },
  icons: {
    height: 24,
    width: 24,
    resizeMode: 'cover',
    marginRight: dimens.default_16,
  },
});
