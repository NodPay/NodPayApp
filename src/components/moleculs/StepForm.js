import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {
  CNIC,
  MobileNumberSection,
  PersonalDetailsSection,
  ResidentialAddress,
  SecurityPasswordSection,
} from '../organism';

const StepForm = ({
  activeStep,
  isComplete,
  isVerification,
  isFamilyRelation,
  cnicData,
  setUpBiometric,
  showModal,
  typeModal,
}) => {
  const progressStepsStyle = {
    activeStepIconBorderColor: color.green,
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

  const scrollViewProps = {
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
  };

  return (
    <View style={styles.container}>
      <ProgressSteps
        {...progressStepsStyle}
        activeStep={activeStep}
        isComplete={isComplete}>
        <ProgressStep
          label={`Mobile\nNumber`}
          removeBtnRow={true}
          scrollViewProps={scrollViewProps}>
          <MobileNumberSection isVerification={isVerification} />
        </ProgressStep>
        <ProgressStep
          label={`Personal\nDetails`}
          removeBtnRow={true}
          scrollViewProps={scrollViewProps}>
          <PersonalDetailsSection isFamilyRelation={isFamilyRelation} />
        </ProgressStep>
        <ProgressStep
          label={`Residential\nAddress`}
          removeBtnRow={true}
          scrollViewProps={scrollViewProps}>
          <ResidentialAddress />
        </ProgressStep>
        <ProgressStep
          label="CNIC"
          scrollViewProps={scrollViewProps}
          removeBtnRow={true}
          btnDisable>
          <CNIC cnicData={cnicData} />
        </ProgressStep>
        <ProgressStep
          label={`Security\nPassword`}
          scrollViewProps={scrollViewProps}
          removeBtnRow={true}>
          <SecurityPasswordSection
            setUpBiometric={setUpBiometric}
            showModal={showModal}
            typeModal={typeModal}
          />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default StepForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: dimens.default_16,
  },
});
