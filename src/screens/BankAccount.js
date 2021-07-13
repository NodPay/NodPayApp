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
import {
  PageTitle,
  Gap,
  EmptyState,
  Button,
  BankAccountItem,
} from '../components/';
import {color, dimens, fonts} from '../utils/';
import {EmptyData, CitiBank, FaysalBank, HabibBank} from '../assets/';

const BankAccountList = [
  {
    logo: CitiBank,
    routingNumber: 'Citi Bank',
    accountNumber: 2356,
    accountAmount: 123.456,
  },
  {
    logo: FaysalBank,
    routingNumber: 'Faysal Bank',
    accountNumber: 2356,
    accountAmount: 123.456,
  },
  {
    logo: HabibBank,
    routingNumber: 'Habib Bank',
    accountNumber: 2356,
    accountAmount: 123.456,
  },
];

const BankAccount = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState(false);

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
        <ScrollView contentContainerStyle={styles.listContainer}>
          {BankAccountList.map((item, index) => {
            return (
              <BankAccountItem
                key={index}
                {...item}
                rightButton={
                  <Button
                    onPress={() => {
                      // navigation.navigate('BankAccountConnect');
                    }}
                    title="Edit"
                    btnStyle={styles.editButton}
                    titleStyle={{
                      color: color.btn_title_white,
                      fontSize: dimens.default_14,
                    }}
                  />
                }
              />
            );
          })}
          <Gap t={dimens.default} />
        </ScrollView>
      )}

      <View style={styles.addButtonContainer}>
        <Button
          onPress={() => {
            navigation.navigate('BankAccountConnect');
          }}
          title="Add Bank / Card"
          btnStyle={{backgroundColor: color.loading, flex: 1}}
          titleStyle={{color: 'white'}}
        />
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
    flexGrow: 1,
  },
  addButtonContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dimens.default,
    paddingVertical: dimens.default_12,
  },
  editButton: {
    backgroundColor: 'white',
    width: 76,
    height: 40,
    borderWidth: 0.1,
    borderColor: dimens.btn_white,
  },
});

export default BankAccount;
