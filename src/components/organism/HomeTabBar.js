import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {
  HomeActive,
  HomeInactive,
  CardActive,
  CardInactive,
  Exchange,
} from '../../assets';

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
          style={[
            styles.label,
            {color: isFocused(0) ? color.bg_color : color.grey_3},
          ]}>
          {label(0)}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <TouchableOpacity
          style={styles.exchangeButton}
          onPress={() => {
            alert('oks');
          }}>
          <Image source={Exchange} style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <Text style={[styles.label, {color: color.btn_black}]}>
          Send & Request
        </Text>
      </View>

      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused(1) ? {selected: true} : {}}
        accessibilityLabel={options(1).tabBarAccessibilityLabel}
        testID={options(1).tabBarTestID}
        onPress={() => onPress(1)}
        activeOpacity={0.8}
        style={{
          flex: 1,
          paddingVertical: 6,
          alignItems: 'center',
        }}>
        <Image source={tabIcon(1)} style={{width: 30, height: 30}} />
        <Text
          style={[
            styles.label,
            {color: isFocused(1) ? color.bg_color : color.grey_3},
          ]}>
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
    borderTopWidth: 3.5,
    borderTopColor: color.grey_7,
    shadowColor: color.grey_7,
    // Android only
    elevation: 2,
    // IOS only
    shadowRadius: 5,
    shadowOffset: {height: -2},
    shadowOpacity: 0.3,
  },
  label: {
    fontSize: dimens.default_12,
    fontFamily: fonts.sofia_regular,
  },
  exchangeButton: {
    height: 64,
    width: 64,
    borderRadius: 64 / 2,
    backgroundColor: color.bg_color,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    shadowOffset: {height: 5},
    shadowOpacity: 0.3,
    borderWidth: 20,
    borderColor: 'black',
    shadowColor: 'black',
    // position: 'absolute',
    // bottom: 15,
    alignSelf: 'center',
  },
});

export default HomeTabBar;
