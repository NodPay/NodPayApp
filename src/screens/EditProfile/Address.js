import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {PersonalAddressSection} from '../../components';

const EditProfileTabAddress = () => {
  return (
    <ScrollView style={styles.container}>
      <PersonalAddressSection withoutSectionTitle={true} />
    </ScrollView>
  );
};

export default EditProfileTabAddress;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimens.default_16,
  },
});
