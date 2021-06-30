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

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let icon;
        if (route.name === 'Home') {
          icon = isFocused ? HomeActive : HomeInactive;
        } else if (route.name === 'Card') {
          icon = isFocused ? CardActive : CardInactive;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            activeOpacity={0.8}
            style={{flex: 1, paddingVertical: 6, alignItems: 'center'}}>
            <Image source={icon} style={{width: 30, height: 30}} />
            <Text
              style={{
                color: isFocused ? color.bg_color : color.grey_3,
                fontSize: dimens.default_12,
                fontFamily: fonts.sofia_regular,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
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
