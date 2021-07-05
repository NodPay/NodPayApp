import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FormLabel} from '../atoms';

// where local files imported
import {color, dimens, fonts, formatPhoneNumber} from '../../utils';
import {
  Down,
  FeatherPhone,
  FlagAr,
  FlagBr,
  FlagHu,
  FlagMx,
  FlagUs,
  Triangle,
} from '../../assets';

const ModalCountry = ({items, onChangeCode, setShowModal}) => {
  return (
    <View style={styles.modal}>
      <Image style={styles.modalTriangle} source={Triangle} />
      <ScrollView style={styles.modalContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onChangeCode(item.code);
              setShowModal(false);
            }}
            style={styles.flagItem}>
            <Image style={styles.flag} source={item.flag} />
            <Text>{`+${item.code}`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const InputPhoneNumber = ({
  label,
  phoneCode = '',
  value = '',
  onChangeText,
  onChangeCode,
  labelStyle,
  inputMobileNumber,
  dispatch,
}) => {
  const codeList = [
    {
      flag: FlagUs,
      code: '1',
    },
    {
      flag: FlagAr,
      code: '54',
    },
    {
      flag: FlagBr,
      code: '55',
    },
    {
      flag: FlagMx,
      code: '56',
    },
    {
      flag: FlagHu,
      code: '57',
    },
  ];
  const [code, setCode] = useState('1');
  const [number, setNumber] = useState('');
  const [showModal, setShowModal] = useState(false);

  if (inputMobileNumber) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowModal(!showModal)}>
          <Text style={styles.country_code}>{`+${code}`}</Text>
          <Image source={Down} style={styles.leftIcon} />
        </TouchableOpacity>
        <TextInput
          allowFontScaling={true}
          keyboardType="number-pad"
          value={number.toString()}
          onChangeText={value => {
            setNumber(value.toString());
            dispatch({
              type: 'SET_PHONE_NUMBER',
              phoneNumber: `${code}${value}`,
            });
          }}
          style={styles.input}
          maxLength={11}
        />
        <Image source={FeatherPhone} style={styles.icon} />
        {showModal && (
          <ModalCountry
            items={codeList}
            onChangeCode={setCode}
            setShowModal={setShowModal}
          />
        )}
      </View>
    );
  }

  return (
    <>
      {label && (
        <FormLabel labelStyle={[styles.label, labelStyle]} label={label} />
      )}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowModal(!showModal)}>
          <Text style={styles.country_code}>{`+${phoneCode}`}</Text>
          <Image source={Down} style={styles.leftIcon} />
        </TouchableOpacity>
        <TextInput
          keyboardType="number-pad"
          value={value.toString()}
          onChangeText={onChangeText}
          style={styles.input}
          maxLength={11}
        />
        <Image source={FeatherPhone} style={styles.icon} />
        {showModal && (
          <ModalCountry
            items={codeList}
            onChangeCode={onChangeCode}
            setShowModal={setShowModal}
          />
        )}
      </View>
    </>
  );
};

export default InputPhoneNumber;

const styles = StyleSheet.create({
  label: {
    marginBottom: dimens.small,
  },
  container: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.btn_black,
    backgroundColor: 'white',
    marginTop: dimens.small,
    paddingHorizontal: dimens.default,
    borderRadius: dimens.large_50,
    height: dimens.large_50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    zIndex: 200,
  },
  input: {
    flex: 1,
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    paddingLeft: dimens.default_16,
    letterSpacing: 1.2,
    fontWeight: 'normal',
  },
  leftIcon: {
    width: 12,
    height: 7,
  },
  icon: {
    position: 'absolute',
    right: dimens.default_16,
    width: 18,
    height: 18,
  },
  country_code: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    marginRight: dimens.default_14,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal: {
    position: 'absolute',
    top: dimens.large_50,
    left: 0,
    zIndex: 200,
  },
  modalTriangle: {
    position: 'absolute',
    top: 0,
    left: dimens.default_14,
    width: dimens.medium,
    height: dimens.default_22,
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingVertical: dimens.default_12,
    paddingHorizontal: dimens.default_16,
    borderRadius: dimens.small,
    height: 100,
    marginTop: dimens.default_12,
  },
  flagItem: {
    flexDirection: 'row',
    paddingVertical: dimens.small,
    paddingBottom: dimens.default_22,
  },
  flag: {
    height: dimens.default_20,
    width: dimens.large_28,
    marginRight: dimens.default_18,
  },
});
