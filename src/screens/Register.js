import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

//where local files imported
import {color, dimens, fonts, storeData} from '../utils';
import {PageTitle, Button, StepForm} from '../components';
import {Next} from '../assets';
import useStateContext from '../store/useStateContext';
import {
  checkValidPhoneNumber,
  getVerificationCode,
  validateVerificationCode,
  signup,
} from '../api/registration.api';
const Register = ({navigation}) => {
  const {state, dispatch} = useStateContext();
  const {
    isComplete,
    isVerification,
    activeStep,
    isFamilyRelation,
    isDisabled,
    cnicData,
    setUpBiometric,
    showModal,
    typeModal,
  } = state;

  const {phoneNumber, verificationCode} = state.formRegister;
  const onNextMobileNumber = async () => {
    try {
      // check if number is not null / empty
      if (phoneNumber == '') {
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: true,
          errorMessage: "Phone number can't be empty.",
        });
      }
      if (phoneNumber.length < 11) {
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: true,
          errorMessage: "Phone number can't be less than 11.",
        });
      }
      const isValid = await checkValidPhoneNumber(phoneNumber);
      if (!isValid) {
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: true,
          errorMessage: 'Phone number is invalid or has already registered',
        });
      } else {
        await getVerificationCode(phoneNumber);
        dispatch({type: 'SET_VERIFICATION', payload: true});
        dispatch({type: 'SET_IS_RUNNING', payload: true});
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: false,
          errorMessage: '',
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'SET_ERROR_REGISTER',
        error: true,
        errorMessage: error,
      });
    }
  };

  const onNextMobileNumberCheckOTP = async () => {
    try {
      if (verificationCode == '' || verificationCode == undefined) {
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: true,
          errorMessage: 'Please Input OTP Code',
        });
      }
      const codeIsValid = await validateVerificationCode(
        phoneNumber,
        verificationCode,
      );
      if (!codeIsValid) {
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: true,
          errorMessage: 'Invalid Code',
        });
      } else {
        dispatch({type: 'SET_ACTIVE_STEP'});
        dispatch({
          type: 'SET_ERROR_REGISTER',
          error: false,
          errorMessage: '',
        });
      }
    } catch (error) {
      dispatch({
        type: 'SET_ERROR_REGISTER',
        error: true,
        errorMessage: error,
      });
    }
  };

  const onNextPersonalDetails = () => {
    dispatch({type: 'SET_FAMILY_RELATION', payload: true});
  };

  const onNextResidentialAddress = () => {
    dispatch({type: 'SET_ACTIVE_STEP'});
    dispatch({type: 'SET_BUTTON', payload: true});
  };

  const onNextCnic = () => {
    dispatch({type: 'SET_ACTIVE_STEP'});
  };

  const onNextSecurityPassword = () => {
    // if (!setUpBiometric) {
    //   dispatch({type: 'SET_BIOMETRIC', payload: true});
    // } else {
    //   // dispatch({type: 'SET_IS_COMPLETED', payload: true});
    //   dispatch({type: 'SET_MODAL', showModal: true, typeModal: 'failed'});
    // }
    handleSignup();
  };

  const handleSignup = async () => {
    try {
      const response = await signup(state.formRegister);
      const savedToken = await storeData('token', response.token);
      const session = await storeData('session', {
        isBoarding: true,
        isLogin: true,
      });
      dispatch({type: 'SET_MODAL', showModal: true, typeModal: 'success'});
      dispatch({type: 'SET_IS_COMPLETED', payload: true});
    } catch (error) {
      dispatch({type: 'SET_MODAL', showModal: true, typeModal: 'failed'});
    }
  };

  const onNext = () => {
    //check store
    console.log('form register', state.formRegister);
    //mobile number - verification section
    if (activeStep == 0) {
      if (!isVerification) {
        onNextMobileNumber();
      } else {
        onNextMobileNumberCheckOTP();
      }
    }
    //personal details - family relation
    if (activeStep == 1) {
      if (isFamilyRelation) {
        dispatch({type: 'SET_ACTIVE_STEP'});
      } else {
        onNextPersonalDetails();
      }
    }

    //residential address
    if (activeStep == 2) {
      onNextResidentialAddress();
    }

    //cnic
    if (activeStep == 3) {
      onNextCnic();
    }

    // security password
    if (activeStep == 4) {
      onNextSecurityPassword();
    }
  };

  const onBack = () => {
    //check store
    console.log('form register', state.formRegister);
    console.warn('activeStep', activeStep);
    //mobile number - verification section
    if (activeStep <= 0) {
      navigation.goBack();
    } else {
      if (activeStep == 1) {
        // reset verification number
        dispatch({type: 'SET_VERIFICATION', payload: false});
      } else if (activeStep == 2) {
        dispatch({type: 'SET_FAMILY_RELATION', payload: false});
      } else if (activeStep == 3) {
        dispatch({type: 'SET_BUTTON', payload: false});
      }
      dispatch({type: 'SET_ACTIVE_STEP_PAYLOAD', payload: activeStep - 1});
    }
  };

  //start scan button

  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    })
      .then(res => {
        navigation.navigate('ScanResult', {data: res});
      })
      .catch(e => console.log('error while taking photo', e));
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        titleStyle={{color: color.btn_black, fontSize: dimens.default_22}}
        isBlackArrow
        onPressBack={() => onBack()}
        title="Create Account"
      />
      <StepForm
        activeStep={activeStep}
        isComplete={isComplete}
        isFamilyRelation={isFamilyRelation}
        cnicData={cnicData}
        setUpBiometric={setUpBiometric}
        showModal={showModal}
        typeModal={typeModal}
      />
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={0}
        enabled={Platform.OS === 'android' ? false : true}>
        <View style={styles.btn_footer}>
          {activeStep == 3 && (
            <Button
              onPress={takePhoto}
              title="Start Scan"
              btnStyle={{
                backgroundColor: 'white',
                marginBottom: 8,
                borderWidth: 1,
                borderColor: color.grey,
              }}
              titleStyle={{color: color.btn_title_white}}
              iconRight={Next}
            />
          )}
          <Button
            disabled={isDisabled}
            onPress={onNext}
            title={activeStep == 4 ? 'Create Account' : 'Next'}
            btnStyle={{
              backgroundColor: isDisabled ? color.grey : color.btn_black,
            }}
            titleStyle={{color: 'white'}}
            iconRight={Next}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  btn_footer: {
    backgroundColor: 'white',
    paddingVertical: dimens.default_16,
    paddingHorizontal: dimens.default_16,
  },
});
