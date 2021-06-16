import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, StepForm} from '../components';
import {Next} from '../assets';
import useStateContext from '../store/useStateContext';

const Register = ({navigation}) => {
  const {state, dispatch} = useStateContext();

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
      <View>
        <View style={styles.wrap_btn}>
          <Button
            onPress={() => {
              // next step
              // setActiveStep(activeStep + 1)
              // next to verif phone number
              dispatch({type: 'SET_ACTIVE_STEP'});
            }}
            title="Next"
            btnStyle={{
              backgroundColor: color.btn_black,
            }}
            titleStyle={{color: 'white'}}
            iconRight={Next}
          />
        </View>
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
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: dimens.default_16,
    marginVertical: dimens.default_16,
  },
});
