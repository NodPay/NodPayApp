import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {PersonalDetailsSection} from '../../components';

const EditProfileTabProfile = () => {
  return (
    <ScrollView style={styles.container}>
      <PersonalDetailsSection withoutSectionTitle={true} />
    </ScrollView>
  );
};

export default EditProfileTabProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimens.default_16,
  },
});
