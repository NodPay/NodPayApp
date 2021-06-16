import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// where local files imported
import {color, dimens} from '../../utils';
import {Button, ErrorMessage, Gap, InputPhoneNumber} from '../atoms';
import {SectionTitle} from '../moleculs';
import useStateContext from '../../store/useStateContext';

const MobileNumberSection = ({isVerification}) => {
  const {state, dispatch} = useStateContext();

  console.log('create account reducer', state);

  if (isVerification) {
    return (
      <View style={styles.container}>
        <SectionTitle
          containerStyle={{
            padding: 0,
            paddingHorizontal: dimens.default_16,
          }}
          title="Verifications"
          titleStyle={{color: 'black', fontSize: dimens.default_22}}
          subtitle={`Enter 4 digits we sent to +${1}`}
          subTitleStyle={{
            color: color.grey,
            fontSize: dimens.default_16,
          }}
        />
        <Gap t={dimens.default_16} />
        <View style={{paddingHorizontal: dimens.default_16}}>
          {/* <InputPhoneNumber /> */}
        </View>
        <Gap t={dimens.default_16} />
        <View style={{paddingHorizontal: dimens.default_16}}>
          {state.error && <ErrorMessage msg={state.errorMessage} />}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SectionTitle
        containerStyle={{
          padding: 0,
          paddingHorizontal: dimens.default_16,
        }}
        title="Mobile Number"
        titleStyle={{color: 'black', fontSize: dimens.default_22}}
        subtitle="Enter your active mobile number"
        subTitleStyle={{
          color: color.grey,
          fontSize: dimens.default_16,
        }}
      />
      <Gap t={dimens.default_16} />
      <View style={{paddingHorizontal: dimens.default_16}}>
        <InputPhoneNumber />
      </View>
      <Gap t={dimens.default_16} />
      <View style={{paddingHorizontal: dimens.default_16}}>
        {state.error && <ErrorMessage msg={state.errorMessage} />}
      </View>
    </View>
  );
};

export default MobileNumberSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
