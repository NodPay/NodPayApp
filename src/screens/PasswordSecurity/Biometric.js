import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {SecurityPasswordSection} from '../../components';
import useStateContext from '../../store/useStateContext';

const PasswordSecurityBiometric = () => {
  const {state} = useStateContext();
  const {showModal, typeModal} = state;

  return (
    <ScrollView style={styles.container}>
      <SecurityPasswordSection
        setUpBiometric={true}
        showModal={showModal}
        typeModal={typeModal}
        withoutSectionTitle={true}
      />
    </ScrollView>
  );
};

export default PasswordSecurityBiometric;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimens.default_16,
  },
});
