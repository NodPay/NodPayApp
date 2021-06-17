import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {DefaultPict} from '../../assets';

const InputPhoto = () => {
  const [picture, setPicture] = useState('');

  const uploadPhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(res => {
      console.log('result', res);
      setPicture(res.path);
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={picture == '' ? DefaultPict : {uri: picture}}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={uploadPhoto}>
        <Text style={styles.btnTitle}>Upload Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPhoto;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: dimens.default_16,
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    resizeMode: 'cover',
  },
  btn: {
    marginLeft: dimens.default_16,
    borderRadius: dimens.default_16,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: color.grey,
    elevation: 1,
  },
  btnTitle: {
    padding: dimens.default_14,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
  },
});
