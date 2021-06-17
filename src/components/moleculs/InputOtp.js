import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import useStateContext from '../../store/useStateContext';

const InputOtp = ({error}) => {
  const {state, dispatch} = useStateContext();

  return (
    <OTPInputView
      style={{flex: 1, padding: dimens.default_16}}
      pinCount={4}
      keyboardType="number-pad"
      placeholderTextColor="green"
      // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
      // onCodeChanged = {code => { this.setState({code})}}
      autoFocusOnLoad
      codeInputFieldStyle={[
        styles.underlineStyleBase,
        error && {borderColor: 'red'},
      ]}
      codeInputHighlightStyle={[
        styles.underlineStyleHighLighted,
        error && {borderColor: 'red'},
      ]}
      onCodeFilled={code => {
        console.log(`Code is ${code}, you are good to go!`);
        if (code != 1234) {
          dispatch({
            type: 'SET_ERROR_REGISTER',
            error: true,
            errorMessage: 'Invalid Code',
          });
        } else {
          dispatch({
            type: 'SET_ERROR_REGISTER',
            error: false,
            errorMessage: '',
          });
          dispatch({type: 'SET_VERIFICATION_CODE', payload: code});
        }
      }}
    />
  );
};

export default InputOtp;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 80,
    height: 50,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: color.bg_color,
    backgroundColor: 'white',
    color: 'black',
    fontSize: dimens.default_18,
    fontFamily: fonts.sofia_bold,
  },
  underlineStyleHighLighted: {
    borderColor: color.bg_color,
    backgroundColor: 'white',
  },
});
