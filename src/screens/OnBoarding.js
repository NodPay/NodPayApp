import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {TouchableOpacity} from 'react-native-gesture-handler';

// where local files imported
import {color, dimens, fonts, storeData} from '../utils';
import {SplashWave, AtmCard, Wallet, Transfer} from '../assets';
import {Button, Logo} from '../components';

const OnBoarding = ({navigation}) => {
  const slides = [
    {
      key: 0,
      title: 'Connect',
      text: ' Social Payments to connect with your friends and family! See what your community is up to.',
      image: Wallet,
      backgroundColor: '#59b2ab',
    },
    {
      key: 1,
      title: 'No Bank. No Problem',
      text: ' Go to businesses near you to convert cash into digital money simply by using your QR code',
      image: Transfer,
      backgroundColor: '#59b2ab',
    },
    {
      key: 3,
      title: 'Shop everywhere',
      text: 'Your virtual and debit cards are ready now to buy food, clothes and more online and in person!',
      image: AtmCard,
      backgroundColor: '#59b2ab',
    },
  ];

  const RenderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Image source={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const DoneButton = () => {
    return (
      <View>
        <Button
          title="Log In"
          titleStyle={{color: color.btn_title_white}}
          onPress={() => {
            storeData('session', {
              isLogin: true,
              isIntro: false,
            });
          }}
          btnStyle={{marginBottom: dimens.default_14}}
        />
        <Button
          title="Get Started"
          titleStyle={{color: 'white'}}
          btnStyle={{backgroundColor: color.btn_black}}
          onPress={() => {
            navigation.replace('GetStarted');
            storeData('session', {
              isIntro: false,
              isLogin: false,
            });
          }}
        />
      </View>
    );
  };

  const NextButton = () => {
    return (
      <TouchableOpacity style={styles.btn} activeOpacity={0.9}>
        <Text style={styles.btn_title}>Next</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapLogo}>
        <Logo />
      </View>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        dotStyle={{backgroundColor: 'white'}}
        activeDotStyle={{backgroundColor: color.btn_black}}
        bottomButton={true}
        showSkipButton={true}
        renderNextButton={NextButton}
        renderDoneButton={DoneButton}
        renderSkipButton={() => (
          <Button
            onPress={() => {
              storeData('session', {
                isLogin: true,
                isIntro: false,
              });
            }}
            title="Skip"
            titleStyle={{color: color.btn_black}}
            btnStyle={{backgroundColor: null}}
          />
        )}
      />
      <Image source={SplashWave} style={styles.img} />
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_color,
  },
  img: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  renderItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapLogo: {
    padding: dimens.default_16,
  },
  btn: {
    borderRadius: dimens.default_16,
    height: dimens.large_40,
    backgroundColor: color.btn_black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_title: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: 'white',
  },
  title: {
    fontFamily: fonts.sofia_bold,
    color: 'white',
    fontSize: dimens.large,
  },
  text: {
    fontFamily: fonts.sofia_regular,
    color: 'white',
    fontSize: dimens.default_16,
    textAlign: 'center',
    paddingHorizontal: dimens.default_16,
  },
  image: {
    height: '50%',
    width: '50%',
  },
});
