import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

//where local files imported
import {
  QRCodeSample,
  BackgroundQRCode,
  DefaultPict,
  LeftArrow,
  Share,
} from '../assets';
import {Gap} from '../components';
import {color, dimens, fonts} from '../utils';

const QRCode = ({navigation}) => {
  const [selected, setSelected] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_color} />
      <ImageBackground
        style={{flex: 1, padding: dimens.default}}
        source={BackgroundQRCode}>
        {/* Header Start */}
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={LeftArrow} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>QR Code</Text>
          <TouchableOpacity>
            <Image source={Share} style={{height: 24, width: 24}} />
          </TouchableOpacity>
        </View>
        {/* Header End */}

        <Gap t={100} />

        {/* Box Start */}
        <View style={styles.box}>
          <View style={styles.imageProfileWrapper}>
            <Image source={DefaultPict} style={styles.imageProfile} />
            <Text style={styles.profileName}>Artour Babaev</Text>
            <Text style={styles.profileLink}>@arteezyevilgeniuses</Text>
            <Gap t={dimens.default} />
            <Image
              source={QRCodeSample}
              style={{height: 225, width: 225, resizeMode: 'cover'}}
            />
          </View>
        </View>
        {/* Box End */}

        {/* Button Start */}
        <View style={styles.tabButton}>
          <TouchableOpacity
            onPress={() => setSelected(1)}
            style={[
              styles.btn,
              {
                backgroundColor: selected === 1 ? 'white' : 'transparent',
              },
            ]}>
            <Text
              style={[
                styles.btnTitle,
                {
                  color: selected === 1 ? color.btn_black : 'gray',
                },
              ]}>
              NodMe
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected(2)}
            style={[
              styles.btn,
              {
                backgroundColor: selected === 2 ? 'white' : 'transparent',
              },
            ]}>
            <Text
              style={[
                styles.btnTitle,
                {
                  color: selected === 2 ? color.btn_black : 'gray',
                },
              ]}>
              Scan
            </Text>
          </TouchableOpacity>
        </View>
        {/* Button End */}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    color: color.btn_white,
  },
  box: {
    height: 450,
    // flex: 0.7,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingVertical: dimens.default,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  imageProfile: {
    height: 116,
    width: 116,
    borderRadius: 116 / 2,
  },
  imageProfileWrapper: {
    position: 'absolute',
    top: -50,
    alignItems: 'center',
  },
  profileName: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_22,
    paddingVertical: dimens.default,
  },
  profileLink: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: color.grey_2,
  },
  tabButton: {
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    borderRadius: 11,
    height: 46,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 11,
  },
  btnTitle: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
});
