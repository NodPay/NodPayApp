import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

//where local file imported
import {Tabbed, PageTitle, MenuItem} from '../components';
import {color, dimens, fonts} from '../utils';
import {
  CardActive,
  Exchange,
  HomeInactive,
  VirtualCard,
  Copy,
  LockOpenPurple,
  EditPurple,
  GlobePurple,
  PlanePurple,
  NameCardPurple,
} from '../assets';

// In MyCard screen, user can see their own card and related settings.
const MyCard = ({navigation}) => {
  const [toggleSwitch, setToggleSwitch] = useState({
    onlinePayments: false,
    paymentsAbroad: false,
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar backgroundColor={color.btn_white_2} />

        <PageTitle
          title="My Card"
          titleStyle={styles.pageTitle}
          isNoBackButton
        />
        <View style={styles.innerContainer}>
          <Image
            source={VirtualCard}
            style={{
              height: 250,
              width: 410,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />

          {/* Three Buttons */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 46,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={styles.button}>
                <Image
                  source={LockOpenPurple}
                  style={{height: dimens.medium, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Lock Card</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate('MyCardChangePin');
                }}>
                <Image
                  source={EditPurple}
                  style={{height: dimens.medium, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Change Pin</Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  Clipboard.setString('1238 2914 2910 0984');
                }}>
                <Image
                  source={Copy}
                  style={{height: dimens.medium, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
              <Text style={styles.buttonText}>Copy CCV</Text>
            </View>
          </View>

          {/* Menu Items */}

          <MenuItem
            icon={GlobePurple}
            title="Online Payments"
            subtitle="Get Control Over Transaction"
            withoutArrow
            toggleSwitch={{
              value: toggleSwitch.onlinePayments,
              onChange: () => {
                setToggleSwitch(prev => ({
                  ...prev,
                  onlinePayments: !prev.onlinePayments,
                }));
              },
            }}
          />
          <MenuItem
            icon={PlanePurple}
            title="Payments Abroad"
            subtitle="Send Money Overseas with Nod"
            withoutArrow
            toggleSwitch={{
              value: toggleSwitch.paymentsAbroad,
              onChange: () => {
                setToggleSwitch(prev => ({
                  ...prev,
                  paymentsAbroad: !prev.paymentsAbroad,
                }));
              },
            }}
          />
          <MenuItem
            icon={NameCardPurple}
            title="Request Physical Card"
            // onPress={() => navigation.navigate('InviteFriendPeople')}
          />
        </View>

        {/* Bottom Tab Navigator */}
        {/* <View style={styles.bottomTab}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Image source={HomeInactive} style={{width: 30, height: 30}} />
              <Text>Home</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  top: -35,
                  height: 80,
                  width: 80,
                  backgroundColor: color.bg_color,
                  borderRadius: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 10,
                  borderColor: color.btn_white_2,
                }}>
                <Image source={Exchange} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <Text>Exchange</Text>
            </View>
            <TouchableOpacity>
              <Image source={CardActive} style={{width: 30, height: 30}} />
              <Text>Card</Text>
            </TouchableOpacity>
          </View>
        </View> */}
        {/* Bottom Tab Navigator End*/}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  pageTitle: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    fontWeight: '700',
  },
  innerContainer: {
    paddingHorizontal: dimens.default,
    paddingBottom: dimens.default,
    flex: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.purple,
    borderRadius: dimens.default,
    width: 65,
    height: 65,
  },
  buttonText: {
    color: color.btn_black,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_12,
    fontWeight: '600',
    marginTop: dimens.small,
  },
  bottomTab: {
    height: 60,
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingHorizontal: dimens.default_16,
    zIndex: 1,
  },
});

export default MyCard;
