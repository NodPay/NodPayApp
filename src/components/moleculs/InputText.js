import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//where local file imported
import {FormLabel, TextInput} from '../atoms';
import {color, dimens, fonts} from '../../utils';

const InputText = ({label, value, placeholder, onChangeText, labelStyle}) => {
  return (
    <View style={styles.container}>
      <FormLabel label={label} labelStyle={labelStyle} />
      <TextInput value={value} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.medium,
  },
});
