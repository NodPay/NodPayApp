import React, {useState, useRef, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {Transition, Transitioning} from 'react-native-reanimated';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, FaqAccordionItem, Gap, PageTitle} from '../components';
import {
  ContactBackground,
  NoContact,
  CloseRed,
  Facebook,
  FacebookWhite,
} from '../assets';

const accordionData = [
  {
    title: 'How’s NodPay work?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'Can I cash my balance?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'How do I add balance?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'Why do you need my locations?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
  {
    title: 'Do I need to pay for transactions?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. Proin ac tellus ultrices, lobortis sapien viverra, tristique eros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at. \n\neros. Nunc vel sapien egestas, vestibulum ante non, aliquam mi. Nam vestibulum tortor a sem interdum dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus tellus lacus, id pretium eros commodo at.',
  },
];

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change type="fade" durationMs={200} />
    <Transition.Out />
  </Transition.Together>
);

const Feedback = ({navigation}) => {
  const [accordionIndex, setAccordionIndex] = useState(0);
  const accordionRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.btn_white_2} />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <PageTitle
          isBlackArrow
          title="Help"
          titleStyle={{color: color.btn_black}}
          navigation={navigation}
        />

        <View style={{paddingHorizontal: dimens.default}}>
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackText}>Feedback</Text>
            <Text style={styles.feedbackDescription}>
              We love to hear your feedback about our app or NodPay in general
            </Text>
            <Button
              title="Submit Feedback"
              titleStyle={{color: 'white'}}
              btnStyle={{
                backgroundColor: color.btn_black,
                paddingHorizontal: dimens.large,
                marginTop: dimens.default_12,
              }}
              onPress={() => {
                // setModalSuccess(true);
              }}
            />
          </View>

          <Text style={styles.faqText}>Frequently Asked Queastion</Text>
          <Transitioning.View ref={accordionRef} transition={transition}>
            {accordionData.map(({title, description}, index) => {
              return (
                <FaqAccordionItem
                  key={index}
                  title={title}
                  description={description}
                  showDescription={index === accordionIndex}
                  onPress={() => {
                    accordionRef.current.animateNextTransition();
                    setAccordionIndex(index === accordionIndex ? null : index);
                  }}
                />
              );
            })}
          </Transitioning.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.btn_white_2,
  },
  feedbackBox: {
    padding: dimens.default,
    borderRadius: dimens.default,
    backgroundColor: color.purple,
    alignItems: 'center',
  },
  feedbackText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_20,
    color: color.btn_black,
  },
  feedbackDescription: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_14,
    color: color.btn_title_white,
    lineHeight: dimens.default_18,
    marginTop: dimens.small,
    textAlign: 'center',
    marginHorizontal: dimens.small,
  },
  faqText: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_20,
    color: color.btn_black,
    marginTop: dimens.medium,
  },
});

export default Feedback;
