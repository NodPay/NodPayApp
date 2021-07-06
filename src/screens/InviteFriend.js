import React, {useRef, useMemo, useCallback} from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView, Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, StepInfo, MenuItem, InputText} from '../components';
import {
  PeopleInviteFriend,
  InviteAdd,
  Copy,
  Facebook,
  PhonePurple,
} from '../assets';

const InviteFriend = ({navigation}) => {
  const stepInfo = [
    'You invite a friend',
    'They Register & Topup',
    'You both get XX',
  ];
  const refRBSheet = useRef(null);
  const snapPoints = useMemo(() => ['0%', '30%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Invite Your Friends"
        titleStyle={{color: color.btn_black}}
        navigation={navigation}
      />
      <ScrollView>
        <View style={styles.containerCenter}>
          <Image source={PeopleInviteFriend} style={styles.photo} />
          <StepInfo items={stepInfo} />
        </View>
        <View style={styles.containerContent}>
          <MenuItem
            icon={InviteAdd}
            title="People Signed Up"
            subtitle="This put you in the top X%"
            info="2"
            onPress={() => navigation.navigate('InviteFriendPeople')}
          />
          <MenuItem
            icon={InviteAdd}
            title="Money Earned"
            info="Rs2000"
            withoutArrow={true}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
      <View style={styles.wrapBtn}>
        <InputText
          labelStyle={{color: color.btn_black}}
          label=""
          placeholder=""
          value="nodpay.co/BB3435"
          editable={false}
          iconRight={Copy}
          onPressRight={() => {}}
          containerStyle={{marginBottom: dimens.default_14, marginTop: 0}}
          inputStyle={{
            backgroundColor: color.grey_7,
            elevation: 0,
            shadowOpacity: 0,
            marginTop: 0,
          }}
        />
        <Button
          onPress={() => refRBSheet.current?.snapTo(1)}
          title="Share Invitation Link"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white_2}}
        />
      </View>
      <BottomSheet
        ref={refRBSheet}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <PageTitle
          isCloseMode
          title="Share Invitation Link"
          titleStyle={{color: color.btn_black}}
          navigation={navigation}
          onPressClose={() => refRBSheet.current?.close()}
        />
        <View style={styles.containerModal}>
          <Button
            iconLeft={Facebook}
            title="Sign in with Facebook"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{
              fontFamily: fonts.sofia_bold,
              color: 'black',
              color: color.btn_title_white,
            }}
            onPress={() => {}}
          />
          <Button
            iconLeft={PhonePurple}
            title="Share via Mobile Number"
            btnStyle={{
              backgroundColor: 'white',
              marginBottom: dimens.default_16,
              borderColor: color.btn_white,
              borderWidth: 1,
            }}
            titleStyle={{
              fontFamily: fonts.sofia_bold,
              color: 'black',
              color: color.btn_title_white,
            }}
            onPress={() => {}}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default InviteFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  containerCenter: {
    alignItems: 'center',
    marginVertical: dimens.medium,
  },
  containerContent: {
    padding: dimens.default_16,
  },
  photo: {
    width: 136,
    height: 136,
    resizeMode: 'cover',
    marginBottom: dimens.medium,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  containerModal: {
    padding: dimens.default_16,
  },
});
