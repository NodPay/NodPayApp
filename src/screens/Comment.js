import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

//where local file imported
import {
  FeedItem,
  PageTitle,
  CommentReplyItem,
  CommentSend,
} from '../components/';
import {color, dimens, fonts} from '../utils/';

const Comment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <PageTitle
        isBlackArrow
        title="Comments"
        titleStyle={styles.pageTitle}
        navigation={navigation}
      />

      <ScrollView style={styles.listContainer}>
        <FeedItem isHideComment />
        {Array(4)
          .fill(1)
          .map((item, key) => {
            return <CommentReplyItem key={key} />;
          })}
      </ScrollView>

      <CommentSend />
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
    fontSize: dimens.medium,
  },
  listContainer: {
    marginHorizontal: dimens.default,
    marginVertical: 0,
    flex: 1,
  },
});

// #E5E5E5
export default Comment;
