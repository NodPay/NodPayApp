import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {SectionTitle} from '../../components';

const StepForm = ({activeStep, isComplete}) => {
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
    labelFontFamily: fonts.sofia_medium,
    labelFontSize: dimens.default_14,
    topOffset: dimens.default_14,
    disabledStepNumColor: 'lightgray',
  };

  return (
    <View style={{flex: 1, paddingHorizontal: dimens.default_18}}>
      <ProgressSteps
        {...progressStepsStyle}
        activeStep={activeStep}
        isComplete={isComplete}>
        <ProgressStep
          label="Mobile Number"
          removeBtnRow={true}
          onNext={() => console.log('gg')}>
          <View>
            <SectionTitle
              title="Mobile Number"
              subtitle="Enter your active mobile number"
            />
          </View>
        </ProgressStep>
        <ProgressStep label="Personal Details" removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 2!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="Residential Address" removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="CNIC" removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
        <ProgressStep label="Security + Password" removeBtnRow={true}>
          <View style={{alignItems: 'center'}}>
            <Text>This is the content within step 3!</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default StepForm;

const styles = StyleSheet.create({});
