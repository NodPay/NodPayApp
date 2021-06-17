import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, StepForm} from '../components';
import {Next} from '../assets';
import useStateContext from '../store/useStateContext';

const Register = ({navigation}) => {
  const {state, dispatch} = useStateContext();
  const {activeStep, phoneNumber, verificationCode, isFamilyRelation} = state;

  const onNextMobileNumber = () => {
    // check if number is not null / empty
    if (phoneNumber == '') {
      dispatch({
        type: 'SET_ERROR_REGISTER',
        error: true,
        errorMessage: "Phone number can't be empty.",
      });
    } else if (phoneNumber.length < 11) {
      dispatch({
        type: 'SET_ERROR_REGISTER',
        error: true,
        errorMessage: "Phone number can't be less than 11.",
      });
    } else if (phoneNumber == '6200000000000') {
      dispatch({
        type: 'SET_ERROR_REGISTER',
        error: true,
        errorMessage: 'Phone number already registered',
      });
    } else {
      dispatch({type: 'SET_VERIFICATION', payload: true});
      dispatch({type: 'SET_IS_RUNNING', payload: true});
      dispatch({
        type: 'SET_ERROR_REGISTER',
        error: false,
        errorMessage: '',
      });
    }
  };

  const onNextPersonalDetails = () => {
    dispatch({type: 'SET_FAMILY_RELATION', payload: true});
  };

  const onNext = () => {
    //mobile number - verification section
    console.log(verificationCode);
    if (activeStep == 0) {
      // if had a valid verification code, go to the next step.
      if (verificationCode == '') {
        onNextMobileNumber();
      } else {
        dispatch({type: 'SET_ACTIVE_STEP'});
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        titleStyle={{color: color.btn_black, fontSize: dimens.default_22}}
        isBlackArrow
        title="Create Account"
        navigation={navigation}
      />
      <StepForm
        activeStep={state.activeStep}
        isComplete={state.isComplete}
        isVerification={state.isVerification}
      />
      <View style={styles.wrap_btn}>
        <Button
          onPress={onNext}
          title="Next"
          btnStyle={{
            backgroundColor: color.btn_black,
          }}
          titleStyle={{color: 'white'}}
          iconRight={Next}
        />
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  wrap_btn: {
    paddingHorizontal: dimens.default_16,
    paddingVertical: dimens.default_16,
  },
});
