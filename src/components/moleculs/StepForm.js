import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import MobileNumberSection from '../organism/MobileNumberSection';

const StepForm = ({activeStep, isComplete, isVerification}) => {
  const progressStepsStyle = {
    activeStepIconBorderColor: 'white',
    disabledStepIconColor: 'white',
    borderWidth: 1,
    activeLabelColor: color.btn_black,
    activeLabelFontSize: dimens.default_14,
    activeStepNumColor: color.btn_black,
    activeStepIconColor: 'white',
    completedStepIconColor: color.green,
    completedCheckColor: 'white',
    labelFontFamily: fonts.sofia_bold,
    labelFontSize: dimens.default_14,
    topOffset: dimens.default_14,
    disabledStepNumColor: 'lightgray',
  };

  return (
    <View style={styles.container}>
      <ProgressSteps
        {...progressStepsStyle}
        activeStep={activeStep}
        isComplete={isComplete}>
        <ProgressStep label={`Mobile\nNumber`} removeBtnRow={true}>
          <MobileNumberSection isVerification={isVerification} />
        </ProgressStep>
        <ProgressStep label={`Personal\nDetails`} removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label={`Residential\nAddress`} removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="CNIC" removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label={`Security\nPassword`} removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default StepForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
