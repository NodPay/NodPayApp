import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

//where local file imported
import {HeaderHome, BalanceInfo, FeedItem} from '../components/';
import {color, dimens, fonts} from '../utils/';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <HeaderHome
        onPressSearch={() => {}}
        onPressProfile={() => {
          navigation.openDrawer();
        }}
      />

      <View style={{padding: dimens.default, flex: 1}}>
        <BalanceInfo type="home" moneyAmount="400.000" />

        <FlatList
          data={[{ok: 'ok'}, {ok: 'ok'}, {ok: 'ok'}, {ok: 'ok'}, {ok: 'ok'}]}
          renderItem={FeedItem}
          keyExtractor={(item, key) => key.toString()}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
});

export default Home;
