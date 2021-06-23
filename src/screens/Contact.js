import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, PageTitle} from '../components';
import {ContactBackground, NoContact, CloseRed, Facebook} from '../assets';

const Contact = () => {
  const [friendData, setFriendData] = useState(null);
  const [getContact, setGetContact] = useState(false);

  const refRBSheet = useRef();

  const EmptyState = () => {
    return (
      <View style={styles.empty_state_container}>
        <Image source={NoContact} style={styles.icons} />
        <Text style={styles.desc}>
          You currently have no friend. Find who you know by connecting your
          NodPay to your phone contact or Facebook
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Contacts"
        titleStyle={{color: color.btn_black}}
      />
      {friendData == null && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <EmptyState />
        </View>
      )}
      <View style={styles.wrapBtn}>
        <Button
          onPress={() => refRBSheet.current.open()}
          title="+ Add Friend"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white_2}}
        />
      </View>
      <Image source={ContactBackground} style={styles.bg_contact} />
      <RBSheet
        ref={refRBSheet}
        openDuration={300}
        animationType="none"
        closeOnDragDown={true}
        customStyles={{
          container: {
            flex: 1000,
            backgroundColor: 'white',
            borderTopRightRadius: dimens.default_16,
            borderTopLeftRadius: dimens.default_16,
          },
        }}>
        <View>
          <Image source={CloseRed} style={styles.close_icon} />
          <Text style={styles.title}>Add Friends</Text>
        </View>
        {!getContact && (
          <View style={styles.add_friend_section}>
            <Text style={styles.add_friend_section_desc}>
              By allowing access to your contact or Facebook you can connect
              with your friend that use NodPay
            </Text>
          </View>
        )}
        <View
          style={{
            paddingHorizontal: dimens.default_16,
            marginBottom: dimens.default_16,
          }}>
          <Button
            iconLeft={Facebook}
            title="Sign in with Facebook"
            btnStyle={{
              backgroundColor: color.btn_black,
              borderColor: color.btn_white,
              borderWidth: 1,
              marginBottom: dimens.default_16,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
            onPress={() => {}}
          />
          <Button
            onPress={() => refRBSheet.current.open()}
            title="Allow Contact Access"
            btnStyle={{backgroundColor: color.btn_black}}
            titleStyle={{color: color.btn_white_2}}
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
    resizeMode: 'stretch',
  },
  icons: {
    height: 101,
    width: 101,
    resizeMode: 'cover',
  },
  empty_state_container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimens.large_48,
  },
  desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: '#818386',
    textAlign: 'center',
    marginTop: dimens.default_16,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    padding: dimens.default_16,
  },
  close_icon: {
    height: dimens.large_40,
    width: dimens.large_40,
    position: 'absolute',
    left: dimens.default_16,
    top: dimens.default_16,
  },
  add_friend_section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimens.large_40,
  },
  add_friend_section_desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    padding: dimens.default_16,
    color: color.grey,
    textAlign: 'center',
  },
});
