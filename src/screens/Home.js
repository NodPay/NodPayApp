import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
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
} from '../components/';
import {color, dimens, fonts} from '../utils/';
import {People1} from '../assets/';

const Tab = createMaterialTopTabNavigator();
const Home = ({navigation}) => {
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
        <BalanceInfo type="home" moneyAmount="400.000" />

        <Tab.Navigator
          tabBar={props => (
            <Tabbed {...props} containerStyle={styles.listContainer} />
          )}>
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Request" component={Request} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const Feed = ({navigation}) => {
  const data = [
    {
      isLoved: false,
      isCommented: false,
      isEmojied: true,
      loveCount: null,
      commentCount: null,
      emojiCount: 1,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
    {
      isLoved: true,
      isCommented: false,
      isEmojied: false,
      loveCount: 2,
      commentCount: 13,
      emojiCount: 12,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
    {
      isLoved: true,
      isCommented: true,
      isEmojied: false,
      loveCount: 4,
      commentCount: 5,
      emojiCount: null,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
    {
      isLoved: true,
      isCommented: true,
      isEmojied: true,
      loveCount: 3,
      commentCount: 10,
      emojiCount: 11,
      message: 'Thank you Lorem Ipsum 🤗😎😍😍',
    },
  ];
  // <EmptyState
  //   icon={EmptyData}
  //   iconSize={72}
  //   content={`You currently have\nno notifications`}
  // />;
  return (
    <FlatList
      data={data}
      renderItem={props => (
        <FeedItem
          onPressComment={() => {
            navigation.navigate('Comment');
          }}
          {...props}
        />
      )}
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

const Request = props => {
  const data = [
    {
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: '2m',
      type: 'out',
      amount: 125,
      isRequested: false,
    },
    {
      photo: People1,
      name: 'You',
      action: 'requested Bruno',
      info: 'For groceries',
      date: '1m',
      type: 'in',
      amount: 75,
      isRequested: true,
    },
  ];

  return (
    <FlatList
      data={data}
      style={{backgroundColor: color.btn_white_2}}
      renderItem={({item}) => (
        <RequestMoneyItem
          photo={item.photo}
          name={item.name}
          action={item.action}
          info={item.info}
          date={item.date}
          type={item.type}
          amount={item.amount}
          isRequested={item.isRequested}
          containerStyle={styles.requestItemContainer}
        />
      )}
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
  },
});

export default Home;
