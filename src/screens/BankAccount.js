import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

//where local file imported
import {PageTitle, Gap, EmptyState} from '../components/';
import {color, dimens, fonts} from '../utils/';
import {EmptyData} from '../assets/';

const BankAccount = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <PageTitle
        isBlackArrow
        title="Bank Account"
        titleStyle={styles.pageTitle}
        navigation={navigation}
      />

      {isEmpty ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <EmptyState
            icon={EmptyData}
            iconSize={72}
            content={`You currently have no Bank account.\nyou can connect to an existing bank account\n or open a new one`}
          />
        </View>
      ) : (
        <ScrollView style={styles.listContainer}>
          <Gap t={dimens.default} />
        </ScrollView>
      )}

      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
          <Text style={styles.addButtonText}>Add Bank / Card</Text>
        </TouchableOpacity>
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
  listContainer: {
    marginHorizontal: dimens.default,
    marginVertical: 0,
    flex: 1,
  },
  addButtonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
  addButton: {
    borderRadius: dimens.default,
    paddingVertical: dimens.default,
    backgroundColor: color.loading,
    flex: 1,
  },
  addButtonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
  },
});

export default BankAccount;
