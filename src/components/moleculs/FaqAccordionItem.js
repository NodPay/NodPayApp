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
        <Text>{title}</Text>
      </View>
      {showDescription && <Text>{description}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexGrow: 1,
  },
});

export default FaqAccordionItem;
