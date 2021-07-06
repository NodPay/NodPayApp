import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList, Text} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {
  PageTitle,
  StepInfo,
  InputText,
  Button,
  InvitePeopleItem,
} from '../components';
import {Copy} from '../assets';

const InviteFriendPeople = ({navigation}) => {
  const stepInfo = ['Installed', 'Verified', 'Top up'];
  const [peopleList, setPeopleList] = useState([
    {
      id: 1,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 1,
      onPressRight: () => {},
    },
    {
      id: 2,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 2,
      onPressRight: () => {},
    },
    {
      id: 3,
      backgroundIcon: '#40C0E7',
      name: 'Ben Kasyafana',
      step: 3,
      onPressRight: () => {},
    },
    {
      id: 4,
      backgroundIcon: '#D21414',
      name: 'Bruno Fernandes',
      step: 3,
      onPressRight: () => {},
    },
    {
      id: 5,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 1,
      onPressRight: () => {},
    },
    {
      id: 6,
      backgroundIcon: '#6668E4',
      name: 'Ammirudin Syarif',
      step: 2,
      onPressRight: () => {},
    },
    {
      id: 7,
      backgroundIcon: '#40C0E7',
      name: 'Ben Kasyafana',
      step: 3,
      onPressRight: () => {},
    },
    {
      id: 8,
      backgroundIcon: '#D21414',
      name: 'Bruno Fernandes',
      step: 3,
      onPressRight: () => {},
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Your Sign Ups"
        titleStyle={{color: color.btn_black}}
        navigation={navigation}
      />
      <View style={styles.containerContent}>
        <View style={styles.containerStep}>
          <Text style={styles.title}>How its work?</Text>
          <StepInfo items={stepInfo} />
        </View>
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: dimens.small}}
        style={styles.list}
        data={peopleList}
        renderItem={({item}) => (
          <InvitePeopleItem
            backgroundIcon={item.backgroundIcon}
            name={item.name}
            step={item.step}
            onPressRight={item.onPressRight}
          />
        )}
        keyExtractor={item => item.id}
      />
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
          onPress={() => {}}
          title="Share With More People!"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white_2}}
        />
      </View>
    </SafeAreaView>
  );
};

export default InviteFriendPeople;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  containerContent: {
    padding: dimens.default_16,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    lineHeight: dimens.default_18,
    color: color.btn_black,
    textAlign: 'center',
    marginBottom: dimens.default_16,
  },
  containerStep: {
    backgroundColor: color.bg_success,
    borderRadius: dimens.default_16,
    paddingVertical: dimens.large_25,
  },
  list: {
    padding: dimens.default_16,
    paddingBottom: dimens.large_50,
    marginBottom: 170,
    flex: 1,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
