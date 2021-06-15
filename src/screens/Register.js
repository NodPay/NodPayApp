import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, StepForm} from '../components';
import {Next} from '../assets';

const Register = ({navigation}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        titleStyle={{color: color.btn_black, fontSize: dimens.default_22}}
        isBlackArrow
        title="Create Account"
        navigation={navigation}
      />
      <StepForm activeStep={activeStep} isComplete={isComplete} />
      <View style={styles.wrap_btn}>
        <Button
          onPress={() => setActiveStep(activeStep + 1)}
          title="Next"
          btnStyle={{
            backgroundColor: color.btn_black,
          }}
          titleStyle={{color: 'white'}}
          isRightIcon
          rightIcon={Next}
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
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: dimens.default_16,
    marginVertical: dimens.default_16,
  },
});
