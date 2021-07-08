import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

//where local files imported
import {dimens} from '../../utils';
import {PersonalDetailsSection, SettingsSaveButton} from '../../components';

const EditProfileTabProfile = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <PersonalDetailsSection withoutSectionTitle={true} />
      </ScrollView>
      <SettingsSaveButton />
    </View>
  );
};

export default EditProfileTabProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: dimens.default_16,
  },
});
