import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//where local file imported
import {FormLabel, TextInput} from '../atoms';
import {color, dimens, fonts} from '../../utils';

const TextForm = ({label, value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <FormLabel label={label} />

      <TextInput value={value} onChangeText={onChangeText} />
    </View>
  );
};

export default TextForm;

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.medium,
  },
});
