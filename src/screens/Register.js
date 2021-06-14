import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle} from '../components';

const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        titleStyle={{color: color.btn_black, fontSize: dimens.default_22}}
        isBlackArrow
        title="Create Account"
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
});
