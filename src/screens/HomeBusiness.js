import React, {useRef, useEffect} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//where local file imported
import {
  HeaderHome,
  BalanceInfo,
  FeedItem,
  Tabbed,
  RequestMoneyItem,
  Gap,
  TransactionItem,
  MainAction,
} from '../components/';
import {color, dimens, fonts, getData} from '../utils/';
import {CardInactive, Exchange, HomeActive, People1} from '../assets/';

const Tab = createMaterialTopTabNavigator();
const HomeBusiness = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <HeaderHome
        onPressSearch={() => navigation.navigate('Search')}
        onPressProfile={() => {
          navigation.openDrawer();
        }}
      />

      <View style={{padding: dimens.default, paddingBottom: 0, flex: 1}}>
        <BalanceInfo
          type="home"
          moneyAmount="400.000"
          onPressAdd={() => mainActionRef.current.open()}
        />

        <Tab.Navigator
          tabBar={props => (
            <Tabbed
              {...props}
              containerStyle={styles.listContainer}
              notification={{name: 'Request', count: 3}}
            />
          )}>
          <Tab.Screen name="Customer" component={Customer} />
          <Tab.Screen name="Transaction" component={Transaction} />
        </Tab.Navigator>
      </View>

      <Gap t={100} />
    </SafeAreaView>
  );
};

const Customer = ({navigation}) => {
  const data = [
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
    {
      subject: 'John',
      predicate: 'Paid',
      object: 'Talha',
      message: 'Coffee',
      amount: 100,
    },
  ];
  // <EmptyState
  //   icon={EmptyData}
  //   iconSize={72}
  //   content={`You currently have\nno customer activity on business profile`}
  // />;
  return (
    <FlatList
      data={data}
      renderItem={props => <FeedItem type="customer" {...props} />}
      style={{backgroundColor: color.btn_white_2}}
      keyExtractor={(item, key) => key.toString()}
      ListFooterComponent={<Gap t={dimens.default} />}
      // ItemSeparatorComponent={separatorItem}
      // ListFooterComponent={
      //   canLoadMore && (
      //     <ActivityIndicator animating color="green" size="large" />
      //   )
      // }
      // refreshing={isRefreshing}
      // onRefresh={refreshList}
      // onEndReached={loadMoreList}
      // onEndReachedThreshold={0.75}
    />
  );
};

const Transaction = props => {
  const data = [
    {
      title: 'June 12, 30',
      data: [
        {name: 'Starbuck', type: 'Groceries', pay: '75'},
        {name: 'Apple', type: 'Tech', pay: '69'},
        {name: '', type: '', pay: ''},
      ],
    },
  ];

  return (
    <FlatList
      data={data}
      style={{backgroundColor: color.btn_white_2}}
      renderItem={({item}) => <TransactionItem {...item} />}
      keyExtractor={(item, key) => key.toString()}
      ListFooterComponent={<Gap t={dimens.default} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  listContainer: {
    marginHorizontal: 0,
    marginTop: dimens.default,
  },
  requestItemContainer: {
    marginTop: dimens.default,
    marginBottom: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: 'flex-start',
    zIndex: -1,
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

export default HomeBusiness;
