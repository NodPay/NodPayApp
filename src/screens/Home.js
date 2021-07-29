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
  MainAction,
} from '../components/';
import {color, dimens, fonts, getData} from '../utils/';
import {CardInactive, Exchange, HomeActive, People1} from '../assets/';

const Tab = createMaterialTopTabNavigator();
const Home = ({navigation}) => {
  const mainActionRef = useRef(null);

  useEffect(() => {
    getData('session')
      .then(res => {
        console.log('home get session', res);
      })
      .catch(e => console.log('error while getData', e));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <HeaderHome
        onPressSearch={() => navigation.navigate('Search')}
        onPressProfile={() => {
          navigation.navigate('Profile');
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
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Request" component={Request} />
        </Tab.Navigator>
      </View>

      {/* <Gap t={100} /> */}

      {/* Bottom Tab Navigator */}
      <View style={styles.bottomTab}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image source={HomeActive} style={{width: 30, height: 30}} />
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
              }}
              onPress={() => navigation.navigate('Transaction')}>
              <Image source={Exchange} style={{width: 30, height: 30}} />
            </TouchableOpacity>
            <Text>Exchange</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyCard');
            }}>
            <Image source={CardInactive} style={{width: 30, height: 30}} />
            <Text>Card</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom Tab Navigator End*/}

      {/* MainAction BottomSheet */}
      <MainAction mainActionRef={mainActionRef} />
      {/* MainAction BottomSheet End*/}
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

export default Home;
