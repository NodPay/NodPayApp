import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

//where local file imported
import {dimens, fonts, color} from '../../utils';
import {
  ProfileExample,
  LoveActive,
  LoveInactive,
  EmojiActive,
  EmojiInactive,
  CommentActive,
  CommentInactive,
} from '../../assets';

const FeedItem = ({loveCount, commentCount, emojiCount}) => {
  return (
    <View style={{marginTop: dimens.default, flexDirection: 'row'}}>
      {/* Left part (profile photo and time) */}
      <View style={{marginRight: dimens.default_12}}>
        <Image
          source={ProfileExample}
          style={{height: 50, width: 50, resizeMode: 'contain'}}
        />
        <View style={styles.timeContainer}>
          <Image source={ProfileExample} style={styles.clockIcon} />
          <Text style={{fontSize: dimens.default_12, color: color.grey_3}}>
            1m
          </Text>
        </View>
      </View>

      {/* Right (Informations inside white box) */}
      <View style={styles.rightContainer}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.title}>
              Maimunah
              <Text style={styles.middleTitle}> paid</Text> Abdullah
            </Text>
          </View>

          <Text style={styles.message}>
            Thank you very much Mr. Lorem Ipsum 🤗😎😍😍
          </Text>

          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={loveCount ? LoveActive : LoveInactive}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionCount,
                  {
                    color: loveCount
                      ? color.love_active
                      : color.btn_title_white,
                  },
                ]}>
                18
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={commentCount ? CommentActive : CommentInactive}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionCount,
                  {
                    color: commentCount
                      ? color.comment_active
                      : color.btn_title_white,
                  },
                ]}>
                18
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Image
                source={emojiCount ? EmojiActive : EmojiInactive}
                style={styles.actionIcon}
              />
              <Text
                style={[
                  styles.actionCount,
                  {
                    color: emojiCount
                      ? color.emoji_active
                      : color.btn_title_white,
                  },
                ]}>
                18
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={ProfileExample} style={styles.publicityIcon} />
          <Text style={styles.publicityText}>Public</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clockIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.supersmall,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimens.small_10,
  },
  rightContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: dimens.default,
    padding: dimens.default_14,
  },
  title: {
    color: color.btn_title_white,
    fontSize: dimens.default_14,
    fontFamily: fonts.sofia_bold,
    fontWeight: '700',
    flex: 1,
  },
  middleTitle: {
    fontFamily: fonts.sofia_regular,
    color: color.btn_title_white,
    fontWeight: '400',
  },
  publicityIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.supersmall,
  },
  publicityText: {
    color: color.grey_3,
    fontSize: dimens.default_12,
    fontFamily: fonts.sofia_regular,
  },
  message: {
    color: color.btn_black,
    fontSize: dimens.default,
    fontFamily: fonts.sofia_regular,
    marginTop: dimens.small,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: dimens.default,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    height: 18,
    width: 18,
    marginRight: dimens.small,
  },
});

export default FeedItem;
