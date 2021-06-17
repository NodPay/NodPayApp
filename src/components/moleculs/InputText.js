import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//where local file imported
import {FormLabel, TextInput} from '../atoms';
import {color, dimens, fonts} from '../../utils';

const InputText = ({label, value, onChangeText, labelStyle, keyboardType}) => {
  return (
    <View style={styles.container}>
      <FormLabel label={label} labelStyle={labelStyle} />
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.medium,
  },
});
