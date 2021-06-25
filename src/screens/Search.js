import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView, Image} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {PageTitle, Button, InputSearch, SectionTitle} from '../components';
import {PeopleInviteFriend} from '../assets';

const Search = ({navigation}) => {
  const stepInfo = ['You invite a friend', 'They Register & Topup', 'You both get XX'];
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Search"
        titleStyle={{color: color.btn_black}}
        navigation={navigation}
        isRightQR
      />
      <ScrollView style={styles.containerContent}>
        <InputSearch
          backgroundColor={color.bg_grey}
          placeholder="Friend Name, Business"
          search={search}
          setSearch={setSearch}
        />
        <SectionTitle
          title="Top People"
          titleStyle={{
            fontSize: dimens.default_16,
          }}
          containerStyle={{
            paddingVertical: 0,
            marginTop: dimens.medium,
            marginBottom: -20
          }}
        />
        <Button
          onPress={() => {}}
          title="Invite Friends"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white_2, fontFamily: fonts.sofia_bold}}
        />
        <SectionTitle
          title="Recent Transactions"
          titleStyle={{
            fontSize: dimens.default_16,
          }}
          containerStyle={{
            paddingVertical: 0,
            marginTop: dimens.medium,
            marginBottom: -20
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  containerContent: {
    padding: dimens.default_16,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});
