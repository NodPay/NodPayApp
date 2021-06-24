import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, FlatList} from 'react-native';

// where local files imported
import {ContactItem} from '../atoms';
import {DefaultPict} from '../../assets';
import {dimens} from '../../utils';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

const ContactList = () => {
  return (
    <BottomSheetFlatList
      // data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ContactItem {...item} />}
    />
  );
};

export default ContactList;

const styles = StyleSheet.create({});
