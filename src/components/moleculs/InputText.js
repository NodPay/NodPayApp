import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';

//where local file imported
import {FormLabel, TextInput} from '../atoms';
import {color, dimens, fonts} from '../../utils';

const InputText = ({
  containerStyle,
  label,
  value,
  onChangeText,
  placeholder,
  labelStyle,
  keyboardType,
  editable,
  inputStyle,
  iconRight,
  onPressRight,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label !== '' && <FormLabel label={label} labelStyle={labelStyle} />}
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        style={inputStyle}
      />
      <TouchableOpacity onPress={onPressRight} style={styles.containerRight}>
        <Image source={iconRight} style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.medium,
  },
  containerRight: {
    position: 'absolute',
    right: dimens.default_18,
    top: dimens.default_14,
  },
  iconRight: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'cover',
  },
});
