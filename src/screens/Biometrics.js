import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

//where local files imported
import {PageTitle} from '../components';
import {color} from '../utils';

const Biometrics = () => {
  const [biometryType, setBiometryType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(res => {
        console.log('sensor available', res);
        setBiometryType(res);
      })
      .catch(e => {
        setErrorMessage(e.message);
      });

    if (Platform.OS == 'android') {
      if (biometryType != '') {
        FingerprintScanner.authenticate({
          title: 'NodPay',
          description:
            'Scan your fingerprint on the devices scanner to continue',
        })
          .then(() => setIsAuthenticate(true))
          .catch(e =>
            console.log('error while authenticate fingerprint', e.message),
          );
      }
    }

    return () => FingerprintScanner.release();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Touch ID"
        titleStyle={{color: color.btn_black}}
      />
      <Text>{errorMessage}</Text>
    </SafeAreaView>
  );
};

export default Biometrics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
