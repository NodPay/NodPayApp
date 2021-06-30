import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {HomeActive, HomeInactive, CardActive, CardInactive} from '../../assets';

const HomeTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const route = index => state.routes[index];
  const options = index => descriptors[route(index).key].options;
  const label = index =>
    options(index).tabBarLabel !== undefined
      ? options(index).tabBarLabel
      : options(index).title !== undefined
      ? options(index).title
      : route(index).name;
  const isFocused = index => state.index === index;
  const tabIcon = index => {
    let icon;
    if (route(index).name === 'Home') {
      icon = isFocused(index) ? HomeActive : HomeInactive;
    } else if (route(index).name === 'Card') {
      icon = isFocused(index) ? CardActive : CardInactive;
    }

    return icon;
  };

  const onPress = index => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route(index).key,
      canPreventDefault: true,
    });

    if (!isFocused(index) && !event.defaultPrevented) {
      navigation.navigate(route(index).name);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused(0) ? {selected: true} : {}}
        accessibilityLabel={options(0).tabBarAccessibilityLabel}
        testID={options(0).tabBarTestID}
        onPress={() => onPress(0)}
        activeOpacity={0.8}
        style={{flex: 1, paddingVertical: 6, alignItems: 'center'}}>
        <Image source={tabIcon(0)} style={{width: 30, height: 30}} />
        <Text
          style={{
            color: isFocused(0) ? color.bg_color : color.grey_3,
            fontSize: dimens.default_12,
            fontFamily: fonts.sofia_regular,
          }}>
          {label(0)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused(1) ? {selected: true} : {}}
        accessibilityLabel={options(1).tabBarAccessibilityLabel}
        testID={options(1).tabBarTestID}
        onPress={() => onPress(1)}
        activeOpacity={0.8}
        style={{flex: 1, paddingVertical: 6, alignItems: 'center'}}>
        <Image source={tabIcon(1)} style={{width: 30, height: 30}} />
        <Text
          style={{
            color: isFocused(1) ? color.bg_color : color.grey_3,
            fontSize: dimens.default_12,
            fontFamily: fonts.sofia_regular,
          }}>
          {label(1)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeTabBar;
