import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Image,
  Modal as RNModal,
} from 'react-native';
// import RNModal from 'react-native-modal';

//where local file imported
import {Button} from '../atoms';
import {SectionTitle} from '../moleculs';
import {Close} from '../../assets';
import {color, dimens, fonts} from '../../utils';

const Modal = ({
  visible,
  onClose,
  imageSrc,
  title,
  subtitle,
  btn1Text,
  btn1Onpress,
  btn2Text,
  btn2Onpress,
}) => {
  return (
    <RNModal visible={visible} transparent>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <Image source={Close} />
        </TouchableOpacity>

        <Image source={imageSrc} style={{alignSelf: 'center'}} />

        <SectionTitle type="modal" title={title} subtitle={subtitle} />

        {btn1Text && (
          <Button
            onPress={btn1Onpress}
            btnStyle={styles.btn1}
            title={btn1Text}
            titleStyle={{color: 'white'}}
          />
        )}

        {btn2Text && (
          <Button
            onPress={btn2Onpress}
            btnStyle={styles.btn2}
            title={btn2Text}
            titleStyle={{color: color.btn_title_white}}
          />
        )}
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: color.btn_black,
    opacity: 0.64,
  },
  contentContainer: {
    position: 'absolute',
    alignSelf: 'center',
    left: dimens.default,
    right: dimens.default,
    top: dimens.percentage_medium,
    backgroundColor: 'white',
    paddingHorizontal: dimens.default_18,
    paddingTop: dimens.large_40,
    paddingBottom: dimens.medium,
    borderRadius: dimens.default,
  },
  closeIcon: {
    padding: dimens.default_22,
    position: 'absolute',
    right: 0,
  },
  btn1: {
    backgroundColor: color.btn_black,
    marginTop: dimens.default,
    marginHorizontal: dimens.x_large,
  },
  btn2: {
    marginTop: dimens.default_12,
    marginHorizontal: dimens.x_large,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: color.btn_white,
  },
});
