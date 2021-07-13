import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// where local files imported
import {color, dimens, fonts} from '../utils';
import {
  BalanceInfo,
  MainAction,
  PageTitle,
  Tabbed,
  FeedItem,
  Gap,
  RequestMoneyItem,
} from '../components/';
import {DefaultPict, People1} from '../assets';

const Details = ({count, description}) => {
  return (
    <View style={styles.detailItem}>
      <Text
        style={[styles.name, {fontFamily: fonts.sofia_bold, marginBottom: 2}]}>
        {count}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const Profile = ({navigation}) => {
  const mainActionRef = useRef(null);

  const Tab = createMaterialTopTabNavigator();

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

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.bg_blue}>
        <PageTitle
          title="Profile"
          isProfile
          onEdit={() => navigation.navigate('EditProfile')}
        />
      </View>
      {/* Header End */}

      {/* Profile Box */}
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.wrapProfile}>
            <Image source={DefaultPict} style={styles.image} />
            <Text style={styles.name}>Robert Langdon</Text>
            <Text style={styles.description}>Idk what is this.</Text>
          </View>
          <View style={styles.details}>
            <Details count={32} description="Transactions" />
            <Details count={24} description="Friends" />
            <Details count="Mei 05" description="Join Date" />
          </View>
          <View style={{padding: dimens.default, height: 65}}>
            <BalanceInfo
              type="drawer"
              onPressAdd={() => mainActionRef.current.open()}
            />
          </View>
        </View>
      </View>
      {/* Profile Box End */}

      <Gap b={124} />

      {/* Feed & Request */}
      <View style={{padding: dimens.default, paddingBottom: 0, flex: 1}}>
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
      {/* Feed & Request End */}

      {/* MainAction BottomSheet */}
      <MainAction mainActionRef={mainActionRef} />
      {/* MainAction BottomSheet End*/}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg_blue: {
    height: 250,
    backgroundColor: color.bg_color,
  },
  boxContainer: {
    // backgroundColor: 'rgba(0,0,0,0.1)',
    height: 350,
    position: 'absolute',
    width: '100%',
    top: '6%',
    left: 0,
    right: 0,
    padding: dimens.default,
  },
  box: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: dimens.default_22,
    // justifyContent: 'center',
  },
  wrapProfile: {
    alignItems: 'center',
    paddingTop: dimens.default,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: 'lightgray',
  },
  name: {
    fontFamily: fonts.sofia_medium,
    fontSize: dimens.default,
    marginTop: 8,
    marginBottom: 4,
    color: color.btn_black,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: 'gray',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: dimens.medium,
    marginHorizontal: dimens.default,
  },
  detailItem: {
    alignItems: 'center',
  },
  listContainer: {
    marginHorizontal: 0,
    marginTop: dimens.default,
  },
});
