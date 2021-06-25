import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Animated, {interpolateNode} from 'react-native-reanimated';
import {color, dimens, fonts} from '../../utils';

const Tabbed = ({state, descriptors, navigation, position, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

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

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = interpolateNode(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 1)),
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabItem,
              {backgroundColor: isFocused ? 'white' : color.bg_tab},
            ]}>
            <Animated.Text
              style={[
                styles.tabText,
                {color: isFocused ? color.btn_black : color.grey},
                {opacity},
              ]}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabbed;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.bg_tab,
    padding: dimens.verysmall,
    marginHorizontal: dimens.default_16,
    borderRadius: dimens.default_12,
  },
  tabItem: {
    height: dimens.large_42,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: color.bg_tab,
    borderRadius: dimens.default_12,
  },
  tabText: {
    fontFamily: fonts.noto_bold,
    fontSize: dimens.default_16,
    color: color.btn_black,
  },
});
