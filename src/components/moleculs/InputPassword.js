import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {FormLabel, TextInput} from '../atoms';
import {PasswordHide} from '../../assets';
import {dimens} from '../../utils';

const InputPassword = ({label, value, placeholder, onChangeText, labelStyle}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.container}>
      <FormLabel label={label} labelStyle={labelStyle} />
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity style={styles.rightIcon} onPress={() => setShowPassword(!showPassword)}>
        <Image source={PasswordHide} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  container: {
    marginTop: dimens.medium,
    position: 'relative',
  },
  rightIcon: {
    position: 'absolute',
    right: dimens.default_16,
    top: dimens.large_40,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
  }
});