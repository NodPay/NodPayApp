import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

//where local files imported
import {dimens, fonts, color} from '../../utils';
import {NextBlack} from '../../assets';

const FaqAccordionItem = ({title, description, showDescription, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {showDescription && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.small,
    flexGrow: 1,
  },
  title: {
    color: color.grey_2,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default,
  },
  description: {
    color: color.btn_title_white,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    lineHeight: dimens.default_18,
    marginTop: dimens.small,
  },
});

export default FaqAccordionItem;
