import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// where local files imported
import {color, dimens, fonts, formatDate, wait} from '../../utils';
import {Button, ErrorMessage, Gap, InputPhoneNumber} from '../atoms';
import {InputOtp, SectionTitle} from '../moleculs';
import useStateContext from '../../store/useStateContext';

const MobileNumberSection = ({isVerification}) => {
  const {state, dispatch} = useStateContext();

  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(59);
  const [isRunning, setIsRunning] = useState(true);
  const [delay, setDelay] = useState(1000);
  const [show, setShow] = useState(false);

  useInterval(
    () => {
      setSecond(second - 1);
      if (second == 0) {
        setMinute(minute - 1);
        setSecond(59);
      }
      if (second === 0 && minute === 0) {
        setIsRunning(false);
        setShow(true);
        setMinute(0);
        setSecond(0);
      }
    },
    isRunning ? delay : null,
  );

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  if (isVerification) {
    return (
      <View style={styles.container}>
        <SectionTitle
          containerStyle={{
            padding: 0,
            paddingHorizontal: dimens.default_16,
          }}
          title="Verifications"
          titleStyle={{color: 'black', fontSize: dimens.default_22}}
          subtitle={`Enter 4 digits we sent to`}
          num={`+${state?.phoneNumber}`}
          subTitleStyle={{
            color: color.grey,
            fontSize: dimens.default_16,
          }}
        />
        <Gap t={dimens.default_16} />
        <InputOtp error={state?.error} />
        <Gap t={dimens.default_16} />
        <View style={{paddingHorizontal: dimens.default_16}}>
          {state?.error && <ErrorMessage message={state?.errorMessage} />}
        </View>
        <Text style={styles.timer}>
          Resent code in:{' '}
          <Text style={[styles.timer, {color: color.bg_color}]}>
            {show ? `resent` : `${formatDate(minute)}:${formatDate(second)}`}
          </Text>
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SectionTitle
        containerStyle={{
          padding: 0,
          paddingHorizontal: dimens.default_16,
        }}
        title="Mobile Number"
        titleStyle={{color: 'black', fontSize: dimens.default_22}}
        subtitle="Enter your active mobile number"
        subTitleStyle={{
          color: color.grey,
          fontSize: dimens.default_16,
        }}
      />
      <Gap t={dimens.default_16} />
      <View style={{paddingHorizontal: dimens.default_16, flex: 1}}>
        <InputPhoneNumber dispatch={dispatch} />
      </View>
      <Gap t={dimens.default_16} />
      <View style={{paddingHorizontal: dimens.default_16}}>
        {state?.error && <ErrorMessage message={state?.errorMessage} />}
      </View>
    </View>
  );
};

export default MobileNumberSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timer: {
    textAlign: 'center',
    color: color.grey,
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
  },
});
