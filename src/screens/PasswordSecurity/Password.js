import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {PasswordSection} from '../../components';

const PasswordSecurityPassword = () => {
  return (
    <ScrollView style={styles.container}>
      <PasswordSection withoutSectionTitle={true} />
    </ScrollView>
  );
};

export default PasswordSecurityPassword;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimens.default_16,
  },
});
