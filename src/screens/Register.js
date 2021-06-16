import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, StepForm} from '../components';
import {Next} from '../assets';
import useStateContext from '../store/useStateContext';

const Register = ({navigation}) => {
  const {state, dispatch} = useStateContext();

  const onNext = () => {
    const {activeStep} = state;
    if (activeStep == 0) {
      //mobile number - verification section
      dispatch({type: 'SET_VERIFICATION', payload: true});
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
